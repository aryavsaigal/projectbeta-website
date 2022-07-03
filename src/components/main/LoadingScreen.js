import React from "react";

import pbbootup_src from "../../images/PBbootup.mp4";

export default function LoadingScreen() {
  const obj_parent = React.useRef();
  const obj_child = React.useRef();
  React.useLayoutEffect(() => {
    obj_child.current.style.display = "block";
  }, []);

  function handleEnd() {
    obj_parent.current.style.opacity = "0";
    obj_child.current.style.display = "none";
    let wait = setTimeout(() => {
      obj_parent.current.style.display = "none";
    }, 500);
    return () => {
      clearTimeout(wait);
    };
  }

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
