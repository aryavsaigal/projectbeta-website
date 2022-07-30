import React from "react";

import logo_src from "../../images/logo-white.png";

export default function Advancement(props) {
  const [isAchieved, setIsAchieved] = React.useState(false);
  const [isDisplaying, setIsDisplaying] = React.useState(false);
  const obj = React.useRef();

  React.useEffect(() => {
    let visiblecount = 0;
    let totalcount = 0;
    props.windowData.forEach((e) => {
      if (Number(e.id) >= 1) {
        if (e.visible) visiblecount++;
        totalcount++;
      }
    });
    if (visiblecount === totalcount) displayAdvancement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.windowData]);

  function displayAdvancement() {
    if (isAchieved || isDisplaying) return;
    setIsDisplaying(true);
    obj.current.style.top = "10px";
    obj.current.style.opacity = "1";
    var retract = setTimeout(() => {
      obj.current.style.top = "-100px";
      obj.current.style.opacity = "0";
      setIsDisplaying(false);
    }, 5000);
    setIsAchieved(true);
    return () => {
      clearTimeout(retract);
    };
  }

  return (
    <div className="advancement" ref={obj}>
      <img src={logo_src} alt="PB Logo" />
      <div>
        <h1>Advancement Made!</h1>
        <p>{`How Did We Get Here?`}</p>
      </div>
    </div>
  );
}
