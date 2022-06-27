import React from "react";

import teamData from "../data/teamData";

import star_src from "../../images/explorer-star.png";
import thispc_src from "../../images/explorer-thispc.png";
import network_src from "../../images/explorer-network.png";
import right_arrow from "../../images/navigation/nav-right.png";

export default function Team() {
  const [rawTeamData, unused] = React.useState(teamData);

  const boardCards = rawTeamData.board.map((e, i) => (
    <div className="team--boardcore" key={i}>
      <img src={e.img_src} alt={i} />
      <div>
        <h1>{e.name}</h1>
        <h3>
          {e.title} {"&"} HoD {e.hod}
        </h3>
        <p>"{e.quote}"</p>
      </div>
    </div>
  ));
  const coreCards = rawTeamData.core.map((e, i) => (
    <div className="team--boardcore" key={i}>
      <img src={e.img_src} alt={i} />
      <div>
        <h1>{e.name}</h1>
        <h3>HoD {e.hod}</h3>
        <p>"{e.quote}"</p>
      </div>
    </div>
  ));
  const memberCards = rawTeamData.members.map((e, i) => <p key={i}>{e}</p>);

  return (
    <div className="team">
      <div className="team--category">
        <img src={right_arrow} alt="Right Arrow Icon" />
        <p>Board</p> <hr />
      </div>
      {boardCards}
      <div className="team--category">
        <img src={right_arrow} alt="Right Arrow Icon" />
        <p>Core</p> <hr />
      </div>
      {coreCards}
      <div className="team--category">
        <img src={right_arrow} alt="Right Arrow Icon" />
        <p>Members</p> <hr />
      </div>
      <div className="team--membergrid">{memberCards}</div>
    </div>
  );
}
