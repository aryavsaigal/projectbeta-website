import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import Window from "../window/Window";

import Desktop from "./../main/Desktop";

export default function Homepage() {
  // {app:"explorer","id":"1"}
  const [windowHandler, setWindowHandler] = React.useState([
    { id: "1", x: 100, y: 100, z: 200, visible: true, dir: "Alumni.zip" },
    { id: "2", x: 150, y: 150, z: 300, visible: true, dir: "Events" },
    { id: "3", x: 200, y: 200, z: 400, visible: true, dir: "Sponsors" },
  ]);

  function addWindow(app) {
    const newWindowArray = windowHandler.map((e) =>
      e.dir === app ? { ...e, visible: true } : e
    );
    setWindowHandler(newWindowArray);

    console.log(windowHandler);
  }
  function removeWindow(app) {
    const newWindowArray = windowHandler.map((e) =>
      e.dir === app ? { ...e, visible: false } : e
    );
    setWindowHandler(newWindowArray);

    console.log(windowHandler);
  }

  // const [windowAssigner, setWindowAssigner] = React.useState({
  //   start_x: 50,
  //   start_y: 50,
  //   id: 0,
  // });

  // const windowArrary = windowHandler.map((item) => {
  //   setWindowAssigner((prevState) => ({
  //     start_x: prevState.start_x + 50,
  //     start_y: prevState.start_y + 50,
  //     id: prevState.id + 1,
  //   }));
  //   return (
  //     <Window
  //       id={windowAssigner.id}
  //       x={windowAssigner.x}
  //       y={windowAssigner.y}
  //       removeWindow={removeWindow}
  //       addWindow={addWindow}
  //     />
  //   );
  // });

  function createWindows() {
    return windowHandler.map((item) => (
      <Window
        {...item}
        key={item.id}
        removeWindow={removeWindow}
        addWindow={addWindow}
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
