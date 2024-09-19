/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2019, Juerg Lehni & Jonathan Puckey
 * http://scratchdisk.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

// An Algorithm for Automatically Fitting Digitized Curves
// by Philip J. Schneider
// from "Graphics Gems", Academic Press, 1990
// Modifications and optimizations of original algorithm by Juerg Lehni.

import Segment from "./Segment";

const EPSILON = 1; // 1e-12;
const MACHINE_EPSILON = 1.12e-16;

function isMachineZero(val) {
  return val >= -MACHINE_EPSILON && val <= MACHINE_EPSILON;
}

/**
 * @name PathFitter
 * @class
 * @private
 */
export default class PathFitter {
  constructor(path) {
    const points = [];
    this.points = points;
    const closed = false;

    // Copy over points from path and filter out adjacent duplicates.
    for (let i = 0, prev, l = path.length; i < l; i++) {
      const point = path[i];
      if (!prev || !prev.equals(point)) {
        points.push(prev = point.clone());
      }
    }
    // We need to duplicate the first and last segment when simplifying a
    // closed path.
    if (closed) {
      points.unshift(points[points.length - 1]);
      points.push(points[1]); // The point previously at index 0 is now 1.
    }
    this.closed = closed;
  }

  fit(error) {
    const { points } = this;
    const { length } = points;
    let segments = null;

    if (length > 0) {
      // To support reducing paths with multiple points in the same place
      // to one segment:
      segments = [new Segment(points[0])];
      if (length > 1) {
        this.fitCubic(segments, error, 0, length - 1,
          points[1].subtract(points[0]),
          points[length - 2].subtract(points[length - 1]));
        if (this.closed) {
          segments.shift();
          segments.pop();
        }
      }
    }
    return segments;
  }

  // Fit a Bezier curve to a (sub)set of digitized points
  fitCubic(segments, error, first, last, tan1, tan2) {
    const { points } = this;
    //  Use heuristic if region only has two points in it
    if (last - first === 1) {
      const pt1 = points[first];
      const pt2 = points[last];
      const dist = pt1.getDistance(pt2) / 3;
      PathFitter.addCurve(segments, [pt1, pt1.add(tan1.normalize(dist)),
        pt2.add(tan2.normalize(dist)), pt2]);
      return;
    }
    // Parameterize points, and attempt to fit curve
    const uPrime = this.chordLengthParameterize(first, last);
    let maxError = Math.max(error, error * error);
    let split;
    let parametersInOrder = true;
    // Try 4 iterations
    for (let i = 0; i <= 4; i++) {
      const curve = this.generateBezier(first, last, uPrime, tan1, tan2);
      // if (curve.some(({ x, y }) => Math.max(Math.abs(x), Math.abs(y)) > 4000 )) {
      //   debugger;
      // }
      //  Find max deviation of points to fitted curve
      const max = this.findMaxError(first, last, curve, uPrime);
      if (max.error < error && parametersInOrder) {
        PathFitter.addCurve(segments, curve);
        return;
      }
      split = max.index;
      // If error not too large, try reparameterization and iteration
      if (max.error >= maxError)
        break;
      parametersInOrder = this.reparameterize(first, last, uPrime, curve);
      maxError = max.error;
    }
    // Fitting failed -- split at max error point and fit recursively
    const tanCenter = points[split - 1].subtract(points[split + 1]);
    this.fitCubic(segments, error, first, split, tan1, tanCenter);
    this.fitCubic(segments, error, split, last, tanCenter.negate(), tan2);
  }

  static addCurve(segments, curve) {
    const prev = segments[segments.length - 1];
    prev.setHandleOut(curve[1].subtract(curve[0]));
    segments.push(new Segment(curve[3], curve[2].subtract(curve[3])));
  }

  // Use least-squares method to find Bezier control points for region.
  generateBezier(first, last, uPrime, tan1, tan2) {
    const epsilon = /* #= */EPSILON;
    const { abs } = Math;
    const { points } = this;
    const pt1 = points[first];
    const pt2 = points[last];
    // Create the C and X matrices
    const C = [[0, 0], [0, 0]];
    const X = [0, 0];

    for (let i = 0, l = last - first + 1; i < l; i++) {
      const u = uPrime[i];
      const t = 1 - u;
      const b = 3 * u * t;
      const b0 = t * t * t;
      const b1 = b * t;
      const b2 = b * u;
      const b3 = u * u * u;
      const a1 = tan1.normalize(b1);
      const a2 = tan2.normalize(b2);
      const tmp = points[first + i]
        .subtract(pt1.multiply(b0 + b1))
        .subtract(pt2.multiply(b2 + b3));
      C[0][0] += a1.dot(a1);
      C[0][1] += a1.dot(a2);
      // C[1][0] += a1.dot(a2);
      C[1][0] = C[0][1]; // eslint-disable-line
      C[1][1] += a2.dot(a2);
      X[0] += a1.dot(tmp);
      X[1] += a2.dot(tmp);
    }

    // Compute the determinants of C and X
    const detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1];
    let alpha1;
    let alpha2;
    if (abs(detC0C1) > epsilon) {
      // Kramer's rule
      const detC0X = C[0][0] * X[1] - C[1][0] * X[0];
      const detXC1 = X[0] * C[1][1] - X[1] * C[0][1];
      // Derive alpha values
      alpha1 = detXC1 / detC0C1;
      alpha2 = detC0X / detC0C1;
    } else {
      // Matrix is under-determined, try assuming alpha1 == alpha2
      const c0 = C[0][0] + C[0][1];
      const c1 = C[1][0] + C[1][1];

      // eslint-disable-next-line
      alpha1 = abs(c0) > epsilon ? X[0] / c0
        : abs(c1) > epsilon ? X[1] / c1
          : 0;
      alpha2 = alpha1;
    }

    // If alpha negative, use the Wu/Barsky heuristic (see text)
    // (if alpha is 0, you get coincident control points that lead to
    // divide by zero in any subsequent NewtonRaphsonRootFind() call.
    const segLength = pt2.getDistance(pt1);
    const eps = epsilon * segLength;
    let handle1;
    let handle2;
    if (alpha1 < eps || alpha2 < eps) {
      // fall back on standard (probably inaccurate) formula,
      // and subdivide further if needed.
      alpha1 = segLength / 3;
      alpha2 = alpha1;
    } else {
      // Check if the found control points are in the right order when
      // projected onto the line through pt1 and pt2.
      const line = pt2.subtract(pt1);
      // Control points 1 and 2 are positioned an alpha distance out
      // on the tangent vectors, left and right, respectively
      handle1 = tan1.normalize(alpha1);
      handle2 = tan2.normalize(alpha2);
      if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
        // Fall back to the Wu/Barsky heuristic above.
        handle1 = null;
        handle2 = null; // Force recalculation
      }
    }

    // First and last control points of the Bezier curve are
    // positioned exactly at the first and last data points
    return [pt1,
      pt1.add(handle1 || tan1.normalize(alpha1)),
      pt2.add(handle2 || tan2.normalize(alpha2)),
      pt2];
  }

  // Given set of points and their parameterization, try to find
  // a better parameterization.
  reparameterize(first, last, u, curve) {
    for (let i = first; i <= last; i++) {
      u[i - first] = PathFitter.findRoot(curve, this.points[i], u[i - first]);
    }
    // Detect if the new parameterization has reordered the points.
    // In that case, we would fit the points of the path in the wrong order.
    for (let i = 1, l = u.length; i < l; i++) {
      if (u[i] <= u[i - 1])
        return false;
    }
    return true;
  }

  // Use Newton-Raphson iteration to find better root.
  static findRoot(curve, point, u) {
    const curve1 = [];
    const curve2 = [];
    // Generate control vertices for Q'
    for (let i = 0; i <= 2; i++) {
      curve1[i] = curve[i + 1].subtract(curve[i]).multiply(3);
    }
    // Generate control vertices for Q''
    for (let i = 0; i <= 1; i++) {
      curve2[i] = curve1[i + 1].subtract(curve1[i]).multiply(2);
    }
    // Compute Q(u), Q'(u) and Q''(u)
    const pt = PathFitter.evaluate(3, curve, u);
    const pt1 = PathFitter.evaluate(2, curve1, u);
    const pt2 = PathFitter.evaluate(1, curve2, u);
    const diff = pt.subtract(point);
    const df = pt1.dot(pt1) + diff.dot(pt2);
    // u = u - f(u) / f'(u)
    return isMachineZero(df) ? u : u - diff.dot(pt1) / df;
  }

  // Evaluate a bezier curve at a particular parameter value
  static evaluate(degree, curve, t) {
    // Copy array
    const tmp = curve.slice();
    // Triangle computation
    for (let i = 1; i <= degree; i++) {
      for (let j = 0; j <= degree - i; j++) {
        tmp[j] = tmp[j].multiply(1 - t).add(tmp[j + 1].multiply(t));
      }
    }
    return tmp[0];
  }

  // Assign parameter values to digitized points
  // using relative distances between points.
  chordLengthParameterize(first, last) {
    const u = [0];
    for (let i = first + 1; i <= last; i++) {
      u[i - first] = u[i - first - 1]
        + this.points[i].getDistance(this.points[i - 1]);
    }
    for (let i = 1, m = last - first; i <= m; i++) {
      u[i] /= u[m];
    }
    return u;
  }

  // Find the maximum squared distance of digitized points to fitted curve.
  findMaxError(first, last, curve, u) {
    let index = Math.floor((last - first + 1) / 2);
    let maxDist = 0;

    for (let i = first + 1; i < last; i++) {
      const P = PathFitter.evaluate(3, curve, u[i - first]);
      const v = P.subtract(this.points[i]);
      const dist = v.x * v.x + v.y * v.y; // squared
      if (dist >= maxDist) {
        maxDist = dist;
        index = i;
      }
    }
    return {
      error: maxDist,
      index
    };
  }
}
