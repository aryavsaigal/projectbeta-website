// Homepage contains the majority of the site's content and functionality
// including the desktop/home webpage, desktop icons and the windows

// Visit Window.js to add new placeholder windows
// Visit windowsData.js to define new instances of windows
// Visit Desktop.js to modify the listing of the defined windows in the desktop

// !!! WARNING !!!
// CODE OF THIS FILE IS DANGEROUSLY FRAGILE AND MAY BREAK THE ENTIRE SITE IF
// MODIFIED CARELESSLY. PLEASE AVOID EDITING THIS FILE UNLESS YOU KNOW
// WHAT YOU ARE DOING.

import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import Window from "../window/Window";
import MobileMenu from "../main/MobileMenu";
import Background from "./Background";
import Desktop from "./../main/Desktop";
import Advancement from "../home/Advancement";

import windowsData from "../data/windowsData";

export default function Homepage() {
  // zMax is the default z-index of all windows in the page.
  // Selecting a window will set its z-index to zMax
  // while the z-index of all windows will decrement
  const zMax = 750;

  // Identifies if site should be readjusted to accomodate for smaller screens
  const isMobile = React.useState(
    window.innerWidth <= 900 || window.innerHeight >= window.innerWidth
  )[0];

  // Manages the relative order and visibility of windows
  // Default data of all windows are imported from windowsData.js
  // You may view the defined properties and methods to understand the context of these functions
  const [windowHandler, setWindowHandler] = React.useState(
    windowsData().map((e, i) => ({
      ...e,
      visible: false,
      z: zMax,
    }))
  );

  // Makes a window visible and position on the top when triggered from the desktop icons
  function addWindow(app) {
    // Exception: On clicking the 'Desktop' icon, all opened windows will be closed
    if (app === "Desktop") {
      let newWindowArray = windowHandler.map((e) => ({ ...e, visible: false }));
      setWindowHandler(newWindowArray);
      return;
    } else {
      setWindowHandler((windowHandler) =>
        windowHandler.map((e) => {
          if (e.dir === app) {
            return {
              ...e,
              visible: true,
              z: zMax,
            };
          } else return { ...e, z: e.z - 1 };
        })
      );
    }
  }

  // Makes the window invisible when clicking on the close button
  function removeWindow(app) {
    let nextZMax = 0;
    windowHandler.forEach((e) => {
      if (e.z > nextZMax && e.z !== zMax) nextZMax = e.z;
    });
    const newWindowHandler = windowHandler.map((e) =>
      e.dir === app
        ? { ...e, visible: false }
        : e.z === nextZMax
        ? { ...e, z: zMax }
        : e
    );
    setWindowHandler(newWindowHandler);
  }

  // Brings the window to the top when user clicks on its header
  function focusWindow(app) {
    const newWindowHandler = windowHandler.map((e) => {
      return e.dir === app && e.z <= zMax
        ? { ...e, z: zMax }
        : { ...e, z: e.z - 1 };
    });
    setWindowHandler(newWindowHandler);
  }

  // Initializes all windows when website launches
  function createWindows() {
    return windowHandler.map((item, i) => (
      <Window
        {...item}
        key={item.id}
        x={100 + i * 15} // All windows are placed to be offest by 15 pixels
        y={50 + i * 15} // when first loaded to avoid clutter
        zMax={zMax}
        isMobile={isMobile}
        removeWindow={removeWindow}
        addWindow={addWindow}
        focusWindow={focusWindow}
      />
    ));
  }

  // Does various functions to windows and the websites
  // when certain keystrokes are detected
  function secretCombos(e) {
    if (e.ctrlKey && e.altKey) {
      switch (e.key) {
        // Used to open the secret BetaTest hint/login page
        case "z": {
          addWindow("Unknown.exe");
          break;
        }
        // Used to add 'matrix' styling in website
        case "p": {
          document.querySelectorAll("*:not(img)").forEach((e) => {
            e.style.color = "lime";
            e.style.fontFamily = "Ubuntu Mono";
            e.style.letterSpacing = "-1px";
            e.style.backgroundColor = "black";
          });
          break;
        }
        default:
          break;
      }
    }
  }

  // Listens for keystrokes and triggers the above function
  React.useEffect(() => {
    document.addEventListener("keydown", secretCombos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Desktop addWindow={addWindow} isMobile={isMobile} mobile={false} />
      <div className="homepage">
        <div className="window--collection">{createWindows()}</div>
        <TitleScreen />
        <HomeInfoCards />
        <Advancement windowData={windowHandler} />
        <MobileMenu addWindow={addWindow} isMobile={isMobile} />
        <Background isMobile={isMobile} />
      </div>
    </>
  );
}
