import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";
import WindowCollection from "../window/WindowCollection";

export default function Homepage() {
  return (
    <div className="homepage">
      <TitleScreen />
      <HomeInfoCards />
      <WindowCollection />
    </div>
  );
}
