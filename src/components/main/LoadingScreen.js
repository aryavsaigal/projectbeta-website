import React from "react";

import pbbootup_src from "../../images/PBbootup.mp4";

export default function LoadingScreen() {
  const obj_parent = React.useRef();
  const video_elem = React.useRef();
  const skip_button = React.useRef();
  React.useLayoutEffect(() => {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
      obj_parent.current.style.display = "none";
    else video_elem.current.style.display = "block";
    setTimeout(() => {
      skip_button.current.style.opacity = 1;
    }, 10000);
  }, []);

  function handleEnd() {
    obj_parent.current.style.opacity = "0";
    video_elem.current.style.display = "none";
    let wait = setTimeout(() => {
      obj_parent.current.style.display = "none";
    }, 1000);
    return () => {
      clearTimeout(wait);
    };
  }

  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    return (
      <div className="loadingscreen" ref={obj_parent}>
        <p ref={skip_button} className="skip">
          SKIP
        </p>
      </div>
    );
  else
    return (
      <div className="loadingscreen" ref={obj_parent}>
        <video
          ref={video_elem}
          src={pbbootup_src}
          type="video/mp4"
          onEnded={handleEnd}
          autoPlay
          muted
        ></video>
        <p ref={skip_button} className="skip" onClick={handleEnd}>
          SKIP
        </p>
      </div>
    );
}
