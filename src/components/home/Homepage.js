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
  const [windowHandler, setWindowHandler] = React.useState(
    windowsData().map((e, i) => ({
      ...e,
      visible: false,
      z: 500,
      zMax: zMax,
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
    const newWindowArray = windowHandler.map((e) =>
      e.dir === app ? { ...e, visible: false } : e
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
      <Desktop addWindow={addWindow} mobile={false} />
      <div className="homepage">
        <div className="window--collection">{createWindows()}</div>
        <TitleScreen />
        <HomeInfoCards />
        <MobileMenu addWindow={addWindow} />
        <Background />
      </div>
    </>
  );
}
