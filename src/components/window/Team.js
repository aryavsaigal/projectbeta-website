import React from "react";

import teamData from "../data/teamData";

export default function Team() {
  const [rawTeamData, unused] = React.useState(teamData);
  const [tempNum, setTempNum] = React.useState(0);
  function generateBoardCards() {
    return rawTeamData.board.map((e, i) => (
      <div
        key={i}
        style={{
          background: `url(${e.img_src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="team--text">
          <h1>{e.name}</h1>
        </div>
      </div>
    ));
  }

  React.useEffect(() => console.log(rawTeamData), []);

  return (
    <div className="team">
      <div className="team--board"> {generateBoardCards()}</div>
    </div>
  );
}
