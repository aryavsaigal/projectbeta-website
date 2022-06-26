import React from "react";

import star_src from "../../images/explorer-star.png";
import thispc_src from "../../images/explorer-thispc.png";
import network_src from "../../images/explorer-network.png";

import eventsData from "../data/Events";
import SponsorsFolder from "../data/SponsorsFolder";

export default function Explorer(props) {
  function setEventsGrid() {
    const generator = eventsData();
    return generator.map((e) => (
      <div key={e.name.replace(/ /g, "_") + ".pdf"}>
        <img src={e.img_src} alt={`${e.name} Logo`} />
        <p>{e.name.replace(/ /g, "_") + ".pdf"}</p>
      </div>
    ));
  }
  const [eventsGrid, unused] = React.useState(setEventsGrid());

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
      <div className="explorer--foldergrid">
        {props.dir === "Events" && eventsGrid}
        {props.dir === "Sponsors" && <SponsorsFolder {...props} />}
      </div>
    </div>
  );
}
