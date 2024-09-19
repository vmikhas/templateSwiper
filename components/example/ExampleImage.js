import React from "react";
import * as PropTypes from "prop-types";


export default function ExampleImage({img, url, alt, subtitle}) {
  return (
    <div className={"example__item"}>
      <figure className={"example__image"}>
        <figcaption className={"example__subtitle"}>{subtitle}</figcaption>
        <img src={img ?? url} alt={alt}/>
      </figure>
    </div>
  );
}

ExampleImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
