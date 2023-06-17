// Settings displays the settings panel in the taskbar that allows to configure
// different parts of the front-end side of the site.

// Note: Currently only one setting exists: Low Performance Mode.
// There is modular support for addition of more settings

import React from "react";

export default function Settings() {
  const numberOfSettings = 1; // Set the number of settings currently defined

  const [settingBtns, setSettingBtns] = React.useState(
    new Array(numberOfSettings).fill(false)
  );

  function settingHandler(num) {
    setSettingBtns((e) => {
      e[num] = true;
      return e;
    });
    // console.log(settingBtns);
    document.getElementById(`settingbtn${num + 1}`).disabled = true;
    document.getElementById(`settingbtn${num + 1}`).innerText = "Enabled";

    switch (num) {
      case 0: {
        lowPerf();
        break;
      }
      default:
        break;
    }
  }

  function lowPerf() {
    document.querySelectorAll("*").forEach((e) => {
      // console.log(e);
      e.style.backdropFilter = "none";
      e.style.transitionDuration = "0s";
      e.style.animation = "unset";
    });
  }

  return (
    <div className="setting--main">
      <h2>Settings</h2>

      {/* Settings list */}

      <div className="setting--option">
        <h4>Low Performance Mode</h4>
        <p>Disables blur effects and animations</p>
        <button
          id="settingbtn1"
          disabled={settingBtns[0]}
          onClick={() => settingHandler(0)}
        >
          Enable
        </button>
      </div>

      <div className="setting--alert">
        <small>To revert the enabled settings, reload this website</small>
      </div>
    </div>
  );
}
