// Explorer displays the Windows Explorer window with customizable interactive child elements

import React from "react";

// UI Icons
import starSrc from "../../images/misc/explorer-star.png";
import thispcSrc from "../../images/misc/explorer-thispc.png";
import networkSrc from "../../images/misc/explorer-network.png";

// Explorer content data source
import { eventsData } from "../data/eventsData";
import SponsorsFolder from "../data/SponsorsFolder";

export default function Explorer(props) {
  // This eventsGrid variable specifically stores the list of file icons for the events
  // folder when clicked on open their corresponding sub-webpage
  const eventsGrid = React.useState(
    eventsData.map((e) => (
      <div
        key={e.name + ".pdf"}
        onDoubleClick={() => {
          props.addWindow(`Events/${e.name}.pdf`);
        }}
        onClick={() => {
          if (props.isMobile) props.addWindow(`Events/${e.name}.pdf`);
        }}
        className="eventbtns"
      >
        <img src={e.img_src} alt={`${e.name} Logo`} />
        <p>{e.name + ".pdf"}</p>
      </div>
    ))
  )[0];

  const [explorerContent, setExplorerContent] = React.useState();

  // Manual switch-case to determine which content to display in the explorer
  // based on the webpage it is opened in
  React.useEffect(() => {
    switch (props.dir) {
      case "Events":
        setExplorerContent(eventsGrid);
        break;
      case "Sponsors":
        setExplorerContent(<SponsorsFolder {...props} />);
        break;
      default:
        break;
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="explorer">
      {/* Sidebar (Shown exclusively for desktop users) */}
      <div className="explorer--sidebar">
        <div>
          <img src={starSrc} alt="Quick Access icon" />
          <p>Quick Access</p>
        </div>
        <div>
          <img src={thispcSrc} alt="This PC icon" />
          <p>This PC</p>
        </div>
        <div
          // If rapidly clicked on 5 times, opens a secret shortcuts window for
          // BetaTest 2022
          onClick={(event) => {
            if (event.detail === 5) props.addWindow("Shortcuts.png");
          }}
        >
          <img src={networkSrc} alt="Network icon" />
          <p>Network</p>
        </div>
      </div>
      <div className="explorer--foldergrid">{explorerContent}</div>
    </div>
  );
}
