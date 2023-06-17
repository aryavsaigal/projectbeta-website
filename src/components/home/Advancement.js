// Advancement shows a pop up box in a theme similar to that of Minecraft advancements.
// It is used as an easter egg

// Note: This function is currently not modular. It detects only one type of action
// and displays only one advancement. You are welcome to add more advancements by
// manually adding conditional statements or recreating the code to be modular

import React from "react";

// PB Logo
import logo_src from "../../images/logo-white.png";

export default function Advancement(props) {
  // isAchieved prevents the advancement from triggering more than once
  const [isAchieved, setIsAchieved] = React.useState(false);
  // isDisplaying prevents the advancement from displaying if the banner is
  // already being displayed for another advancement
  const [isDisplaying, setIsDisplaying] = React.useState(false);
  const advancementRef = React.useRef();

  // Function to detect for the specific user action and trigger the advancement.
  // In this case, the user has to open all existing windows
  React.useEffect(() => {
    // the windowsData object is iterated. Both total number of windows and number of opened
    // windows are counted then compared to check for equality
    let openedWindowsCount = 0;
    let totalWindowsCount = 0;
    props.windowData.forEach((e) => {
      if (Number(e.id) >= 1) {
        if (e.visible) openedWindowsCount++;
        totalWindowsCount++;
      }
    });
    if (openedWindowsCount === totalWindowsCount) displayAdvancement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.windowData]);

  //Displays the advancement element and hide it after 5 seconds
  function displayAdvancement() {
    // Function will not display the advancement more than once
    if (isAchieved || isDisplaying) return;
    setIsDisplaying(true);
    advancementRef.current.style.top = "10px";
    advancementRef.current.style.opacity = "1";
    var retract = setTimeout(() => {
      advancementRef.current.style.top = "-100px";
      advancementRef.current.style.opacity = "0";
      setIsDisplaying(false);
    }, 5000);
    setIsAchieved(true);
    return () => {
      clearTimeout(retract);
    };
  }

  return (
    <div className="advancement" ref={advancementRef}>
      <img src={logo_src} alt="PB Logo" />
      <div>
        <h1>Advancement Made!</h1>
        <p>{`How Did We Get Here?`}</p>
      </div>
    </div>
  );
}
