import React, {useRef} from "react";
import Scrollbar from "react-scrollbars-custom";
import classNames from "classnames";

const Scroll = React.forwardRef(
  function Scroll({mod, update, children, onScroll, resetRef}) {

    const wrapperRef = useRef();
    const shadowTop = useRef(null);
    const shadowBottom = useRef(null);

    function handleUpdate(values) {
      const {scrollTop, scrollHeight, clientHeight} = values;
      const shadowTopOpacity = (1 / 20) * Math.min(scrollTop, 20);
      const bottomScrollTop = scrollHeight - clientHeight;
      const shadowBottomOpacity =
        (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));

      shadowTop.current.style.opacity = shadowTopOpacity;
      shadowBottom.current.style.opacity = shadowBottomOpacity;
    }


    return (
      <div className={classNames("scroll-wrapper", {
        [`scroll-wrapper_${mod}`]: mod
      })} ref={wrapperRef}>
        <Scrollbar
          className={'scroll'}
          removeTracksWhenNotUsed={true}
          onUpdate={handleUpdate}
          onScroll={onScroll}
        >
          {children}
        </Scrollbar>
        <div ref={shadowTop} className={"scroll__shadow scroll__shadow_top"}/>
        <div ref={shadowBottom} className={"scroll__shadow scroll__shadow_bottom"}/>
      </div>
    );
  });
export default Scroll;
Scroll.propTypes = {};

