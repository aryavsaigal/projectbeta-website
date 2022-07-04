import React from "react";

import pbbootup_src from "../../images/PBbootup.mp4";

export default function LoadingScreen() {
  const obj_parent = React.useRef();
  const obj_child = React.useRef();
  React.useLayoutEffect(() => {
    if (
      window.innerWidth < 900 &&
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    )
      obj_parent.current.style.display = "none";
    else obj_child.current.style.display = "block";
  }, []);

  function handleEnd() {
    obj_parent.current.style.opacity = "0";
    obj_child.current.style.display = "none";
    let wait = setTimeout(() => {
      obj_parent.current.style.display = "none";
    }, 1000);
    return () => {
      clearTimeout(wait);
    };
  }

  if (
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    window.innerWidth < 900
  )
    return <div className="loadingscreen" ref={obj_parent}></div>;
  else
    return (
      <div className="loadingscreen" ref={obj_parent}>
        <video
          ref={obj_child}
          src={pbbootup_src}
          type="video/mp4"
          onEnded={handleEnd}
          autoPlay
          muted
        ></video>
      </div>
    );
}
