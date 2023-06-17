// Team displays the webpage with the list of names all club members, with
// HoDs and Board additionally showing their photos, designations and quotes

// Visit teamData.js to update the club members' list

import React from "react";

// Team members' details
import teamData from "../data/teamData";

// Navigation Icons
import rightArrow from "../../images/navigation/nav-right.png";

export default function Team() {
  const rawTeamData = React.useState(teamData)[0];

  // Creates the child components for showing the name, photo, designation
  // and quotes of Board members
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
  // Creates the child components for showing the name, photo, designation
  // and quotes of HoDs
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
  // Creates the child components for showing the name of regular members
  const memberCards = rawTeamData.members.map((e, i) => <p key={i}>{e}</p>);

  return (
    <div className="team">
      <h2>Team</h2>
      {/* Board Members */}
      <div className="team--category">
        {/* Sticky headers as seen in Windows Start Menu app list*/}
        <img src={rightArrow} alt="Right Arrow Icon" />
        <p>Board {`(${rawTeamData.board.length})`}</p> <hr />
      </div>
      <div className="team--boardcore--container">{boardCards}</div>

      {/* HoDs */}
      <div className="team--category">
        <img src={rightArrow} alt="Right Arrow Icon" />
        <p>Core {`(${rawTeamData.core.length})`}</p> <hr />
      </div>
      <div className="team--boardcore--container">{coreCards}</div>

      {/* Regular Members */}
      <div className="team--category">
        <img src={rightArrow} alt="Right Arrow Icon" />
        <p>Members {`(${rawTeamData.members.length})`}</p> <hr />
      </div>
      <div className="team--membergrid">{memberCards}</div>
    </div>
  );
}
