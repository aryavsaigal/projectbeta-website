import React from "react";
import TitleScreen from "./TitleScreen";
import HomeInfoCards from "./HomeInfoCards";

export default function Homepage() {
  return (
    <div className="homepage">
      <TitleScreen />
      <HomeInfoCards />
    </div>
  );
}
