import React, {useCallback, useEffect, useState} from 'react';
import PreloaderItems from "./PreloaderItems";
import style from "!!css-loader!sass-loader!./Preloader.scss";
import {CSSTransition} from "react-transition-group";

export default function Preloader() {
  const [isActive, setIsActive] = useState(true);
  const nodeRef = React.useRef(null)

  useEffect(() => setIsActive(false), []);

  const onExited = useCallback(() => {
    document.body.classList.remove("_preloader")
  }, []);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} appear={true} timeout={{exit: 600}} unmountOnExit={true}
                   onExited={onExited}>
      <div className={"preloader"} ref={nodeRef}>
        <div className={"preloader__block"}>
          <PreloaderItems total={4}/>
        </div>
        <style dangerouslySetInnerHTML={{__html: style[0][1]}}/>
      </div>
    </CSSTransition>
  )
}
