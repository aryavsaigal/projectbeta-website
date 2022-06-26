import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import Window from "../window/Window";

export default function Homepage() {
  // {app:"explorer","id":"1"}
  // const [windowHandler, setWindowHandler] = React.useState([
  //   { app: "explorer", id: "1" },
  // ]);

  function addWindow(app) {}
  function removeWindow(app) {
    // let sample = windowHandler;
    // sample.splice(
    //   sample.findIndex((e) => e.app === app),
    //   1
    // );
    // console.log(sample);
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

  return (
    <div className="homepage">
      <TitleScreen />
      <HomeInfoCards />
      <div>
        <Window
          id={1}
          x={100}
          y={50}
          z={400}
          visible={true}
          removeWindow={removeWindow}
          addWindow={addWindow}
          dir={["Alumni.zip"]}
        />
        <Window
          id={2}
          x={150}
          y={100}
          z={300}
          visible={true}
          removeWindow={removeWindow}
          addWindow={addWindow}
          dir={["Events"]}
        />
        <Window
          id={3}
          x={200}
          y={150}
          z={200}
          visible={true}
          removeWindow={removeWindow}
          addWindow={addWindow}
          dir={["Sponsors"]}
        />
      </div>
    </div>
  );
}
