import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import Window from "../window/Window";
import MobileMenu from "../main/MobileMenu";

import Desktop from "./../main/Desktop";

import windowsData from "../data/windowsData";

export default function Homepage() {
  // {app:"explorer","id":"1"}
  const [windowHandler, setWindowHandler] = React.useState(windowsData());

  function addWindow(app) {
    if (app === "Desktop") {
      let newWindowArray = windowHandler.map((e) => ({ ...e, visible: false }));
      setWindowHandler(newWindowArray);
      return;
    } else {
      let maxZ = 0;
      windowHandler.forEach((e) => {
        if (e.z > maxZ) maxZ = e.z;
      });
      let newWindowArray = windowHandler.map((e) => {
        return e.dir === app && e.z !== maxZ ? { ...e, z: maxZ + 1 } : e;
      });
      newWindowArray = newWindowArray.map((e) =>
        e.dir === app ? { ...e, visible: true } : e
      );
      setWindowHandler(newWindowArray);
    }
  }
  function removeWindow(app) {
    const newWindowArray = windowHandler.map((e) =>
      e.dir === app ? { ...e, visible: false } : e
    );
    setWindowHandler(newWindowArray);
  }
  function focusWindow(app) {
    let maxZ = 0;
    windowHandler.forEach((e) => {
      if (e.z > maxZ) maxZ = e.z;
    });
    const newWindowArray = windowHandler.map((e) => {
      return e.dir === app && e.z !== maxZ ? { ...e, z: maxZ + 1 } : e;
    });
    setWindowHandler(newWindowArray);
  }
  function createWindows() {
    return windowHandler.map((item, i) => (
      <Window
        {...item}
        key={item.id}
        x={100}
        y={50}
        removeWindow={removeWindow}
        addWindow={addWindow}
        focusWindow={focusWindow}
      />
    ));
  }

  return (
    <>
      <Desktop addWindow={addWindow} mobile={false} />
      <div className="homepage">
        <TitleScreen />
        <HomeInfoCards />
        <MobileMenu addWindow={addWindow} />
        <div className="window--collection">{createWindows()}</div>
      </div>
    </>
  );
}
