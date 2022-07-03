import React from "react";

import pbbootup_src from "../../images/PBbootup.mp4";

export default function LoadingScreen() {
  const obj_parent = React.useRef();
  const obj_child = React.useRef();
  React.useLayoutEffect(() => {
    obj_child.current.style.display = "block";
    let wait = setTimeout(() => {
      obj_parent.current.style.opacity = "0";
      obj_child.current.style.display = "none";
    }, 2500);
    let wait2 = setTimeout(() => {
      obj_parent.current.style.display = "none";
    }, 3500);

    return () => {
      clearTimeout(wait);
      clearTimeout(wait2);
    };
  }, []);

  return (
    <div className="loadingscreen" ref={obj_parent}>
      <video ref={obj_child} autoPlay muted>
        <source src={pbbootup_src} type="video/mp4" />
      </video>
    </div>
  );
}
