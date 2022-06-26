import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import Window from "../window/Window";

import Desktop from "./../main/Desktop";

export default function Homepage() {
  // {app:"explorer","id":"1"}
  const [windowHandler, setWindowHandler] = React.useState([
    { id: "1", x: 100, y: 100, z: 100, visible: false, dir: "Alumni.zip" },
    { id: "2", x: 150, y: 150, z: 103, visible: false, dir: "Events" },
    { id: "3", x: 200, y: 200, z: 102, visible: false, dir: "Sponsors" },
  ]);

  function addWindow(app) {
    let maxZ = 0;
    windowHandler.forEach((e) => {
      if (e.z > maxZ) maxZ = e.z;
    });
    let newWindowArray = windowHandler.map((e) => {
      console.log(e.dir, e.dir === app && e.z !== maxZ);
      return e.dir === app && e.z !== maxZ ? { ...e, z: maxZ + 1 } : e;
    });
    newWindowArray = newWindowArray.map((e) =>
      e.dir === app ? { ...e, visible: true } : e
    );
    setWindowHandler(newWindowArray);
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
    console.log(maxZ);
    const newWindowArray = windowHandler.map((e) => {
      console.log(e.dir, e.dir === app && e.z !== maxZ);
      return e.dir === app && e.z !== maxZ ? { ...e, z: maxZ + 1 } : e;
    });
    console.log("new", newWindowArray);

    console.log("before", windowHandler);
    setWindowHandler(newWindowArray);
    console.log("after", windowHandler);
  }

  function createWindows() {
    return windowHandler.map((item) => (
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
      <Desktop addWindow={addWindow} />
      <div className="homepage">
        <TitleScreen />
        <HomeInfoCards />
        <div>{createWindows()}</div>
      </div>
    </>
  );
}
