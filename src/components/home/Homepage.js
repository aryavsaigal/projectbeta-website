import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import Window from "../window/Window";
import MobileMenu from "../main/MobileMenu";
import Background from "./Background";
import Desktop from "./../main/Desktop";

import windowsData from "../data/windowsData";

export default function Homepage() {
  // {app:"explorer","id":"1"}
  const zMax = 500;
  const isMobile = React.useState(
    window.innerWidth <= 900 || window.innerHeight >= window.innerWidth
  )[0];
  const [windowHandler, setWindowHandler] = React.useState(
    windowsData().map((e, i) => ({
      ...e,
      visible: false,
      z: 500,
    }))
  );

  function addWindow(app) {
    if (app === "Desktop") {
      let newWindowArray = windowHandler.map((e) => ({ ...e, visible: false }));
      setWindowHandler(newWindowArray);
      return;
    } else {
      setWindowHandler((prev) =>
        prev.map((e) => {
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

  function removeWindow(app) {
    let nextZmax = 0;
    windowHandler.forEach((e) => {
      if (e.z > nextZmax && e.z !== zMax) nextZmax = e.z;
    });
    const newWindowArray = windowHandler.map((e) =>
      e.dir === app
        ? { ...e, visible: false }
        : { ...e, z: e.z + (zMax - nextZmax) }
    );
    setWindowHandler(newWindowArray);
  }

  function focusWindow(app) {
    const newWindowArray = windowHandler.map((e) => {
      return e.dir === app && e.z <= zMax
        ? { ...e, z: zMax }
        : { ...e, z: e.z - 1 };
    });
    setWindowHandler(newWindowArray);
  }

  function createWindows() {
    return windowHandler.map((item, i) => (
      <Window
        {...item}
        key={item.id}
        x={100 + i * 15}
        y={50 + i * 15}
        zMax={zMax}
        isMobile={isMobile}
        removeWindow={removeWindow}
        addWindow={addWindow}
        focusWindow={focusWindow}
      />
    ));
  }

  function secretCombos(e) {
    if (e.ctrlKey && e.altKey) {
      switch (e.key) {
        case "z": {
          addWindow("Unknown.exe");
          break;
        }
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

  React.useEffect(() => {
    document.addEventListener("keydown", secretCombos);
  }, []);

  return (
    <>
      <Desktop addWindow={addWindow} isMobile={isMobile} mobile={false} />
      <div className="homepage">
        <div className="window--collection">{createWindows()}</div>
        <TitleScreen />
        <HomeInfoCards />
        <MobileMenu addWindow={addWindow} isMobile={isMobile} />
        <Background isMobile={isMobile} />
      </div>
    </>
  );
}
