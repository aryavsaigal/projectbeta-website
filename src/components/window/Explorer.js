import React from "react";

import star_src from "../../images/explorer-star.png";
import thispc_src from "../../images/explorer-thispc.png";
import network_src from "../../images/explorer-network.png";

import { eventsData } from "../data/eventsData";
import SponsorsFolder from "../data/SponsorsFolder";

export default function Explorer(props) {
  const [eventsGrid, unused] = React.useState(
    eventsData.map((e) => (
      <div
        key={e.name + ".pdf"}
        onDoubleClick={() => {
          props.addWindow(`Events/${e.name}.pdf`);
        }}
        onClick={() => {
          if (window.innerWidth < 900) props.addWindow(`Events/${e.name}.pdf`);
        }}
      >
        <img src={e.img_src} alt={`${e.name} Logo`} />
        <p>{e.name + ".pdf"}</p>
      </div>
    ))
  );

  return (
    <div className="explorer">
      <div className="explorer--sidebar">
        <div>
          <img src={star_src} alt="Quick Access icon" />
          <p>Quick Access</p>
        </div>
        <div>
          <img src={thispc_src} alt="This PC icon" />
          <p>This PC</p>
        </div>
        <div
          onClick={(event) => {
            if (event.detail === 5) props.addWindow("Shortcuts.png");
          }}
        >
          <img src={network_src} alt="Network icon" />
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
