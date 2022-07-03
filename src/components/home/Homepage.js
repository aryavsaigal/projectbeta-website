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
  const [windowHandler, setWindowHandler] = React.useState(
    windowsData().map((e, i) => ({
      ...e,
      visible: false,
      z: 100 + i,
    }))
  );

  function addWindow(app) {
    // console.log(windowHandler);
    if (app === "Desktop") {
      let newWindowArray = windowHandler.map((e) => ({ ...e, visible: false }));
      setWindowHandler(newWindowArray);
      return;
    } else {
      let maxZ = 0;
      windowHandler.forEach((e) => {
        if (e.z > maxZ) maxZ = e.z;
      });
      const isFolder = app.startsWith("Events/");

      setWindowHandler((prev) =>
        prev.map((e) => {
          if (e.dir === app) {
            if (e.z < maxZ) {
              return {
                ...e,
                visible: true,
                z: isFolder ? maxZ + 5 : maxZ + 1,
              };
            } else return { ...e, visible: true };
          } else return { ...e };
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
    let maxZ = 0;
    windowHandler.forEach((e) => {
      if (e.z > maxZ) maxZ = e.z;
    });
    const newWindowArray = windowHandler.map((e) => {
      return e.dir === app && e.z < maxZ ? { ...e, z: maxZ + 1 } : e;
    });
    setWindowHandler(newWindowArray);
  }

  function createWindows() {
    return windowHandler.map((item, i) => (
      <Window
        {...item}
        key={item.id}
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
        <div className="window--collection">{createWindows()}</div>
        <TitleScreen />
        <HomeInfoCards />
        <MobileMenu addWindow={addWindow} />
        <Background />
      </div>
    </>
  );
}
