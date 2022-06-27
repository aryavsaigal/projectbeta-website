import React from "react";

import teamData from "../data/teamData";

import star_src from "../../images/explorer-star.png";
import thispc_src from "../../images/explorer-thispc.png";
import network_src from "../../images/explorer-network.png";

export default function Team() {
  const [rawTeamData, unused] = React.useState(teamData);

  React.useEffect(() => console.log(rawTeamData), []);

  return (
    <div className="explorer">
      <div className="explorer--sidebar">
        <div>
          <img src={star_src} alt="Quick Access icon" />
          <p>Quick Access</p>
        </div>
        <div>
          <img src={thispc_src} alt="Quick Access icon" />
          <p>This PC</p>
        </div>
        <div>
          <img src={network_src} alt="Quick Access icon" />
          <p>Network</p>
        </div>
      </div>
      <div className="explorer--foldergrid"></div>
    </div>
  );
}
