import React from "react";

import pbbootup_vid from "../../images/PBbootup.mp4";
import pbbootup_img from "../../images/logo-white.png";

export default function LoadingScreen() {
  const obj_parent = React.useRef();
  const vid_elem = React.useRef();
  const img_elem = React.useRef();
  const skip_button = React.useRef();

  const browserException = /^((?!chrome|android).)*safari/i.test(
    navigator.userAgent
  );
  // const browserException = /chrome/i.test(navigator.userAgent);

  React.useLayoutEffect(() => {
    if (browserException) img_elem.current.style.display = "block";
    else vid_elem.current.style.display = "block";

    if (browserException) setTimeout(() => handleEnd(), 1000);
    setTimeout(() => {
      skip_button.current.style.opacity = 1;
    }, 10000);
    let checkkey = document.addEventListener("keydown", () => handleEnd());
    return () => document.removeEventListener(checkkey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEnd() {
    obj_parent.current.style.opacity = "0";
    if (browserException) img_elem.current.style.display = "block";
    else vid_elem.current.style.display = "block";
    let wait = setTimeout(() => {
      obj_parent.current.style.display = "none";
    }, 1000);
    return () => {
      clearTimeout(wait);
    };
  }

  if (browserException)
    return (
      <div className="loadingscreen" ref={obj_parent}>
        <div className="loadingscreen--safaricontainer" ref={img_elem}>
          <img src={pbbootup_img} alt="PB Logo" />
          <h1>Loading</h1>
        </div>
        <p ref={skip_button} className="skip" onClick={handleEnd}>
          SKIP
        </p>
      </div>
    );
  else
    return (
      <div className="loadingscreen" ref={obj_parent}>
        <video
          ref={vid_elem}
          src={pbbootup_vid}
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
