import React from "react";

import teamData from "../data/teamData";

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
        <hr />
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
        <hr />
        {e.quote !== "This is a sample quote." && (
          <>
            <p>"{e.quote}"</p>
          </>
        )}
      </div>
    </div>
  ));
  const memberCards = rawTeamData.members.map((e, i) => <p key={i}>{e}</p>);

  return (
    <div className="team">
      <h2>Team</h2>
      <div className="team--category">
        <img src={right_arrow} alt="Right Arrow Icon" />
        <p>Board {`(${rawTeamData.board.length})`}</p> <hr />
      </div>
      {boardCards}
      <div className="team--category">
        <img src={right_arrow} alt="Right Arrow Icon" />
        <p>Core {`(${rawTeamData.core.length})`}</p> <hr />
      </div>
      {coreCards}
      <div className="team--category">
        <img src={right_arrow} alt="Right Arrow Icon" />
        <p>Members {`(${rawTeamData.members.length})`}</p> <hr />
      </div>
      <div className="team--membergrid">{memberCards}</div>
    </div>
  );
}
