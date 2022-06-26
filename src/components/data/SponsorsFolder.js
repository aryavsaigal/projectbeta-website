import React from "react";

import sample_src from "../../images/events/sample.png";

export default function SponsorFolders(props) {
  return (
    <>
      <div>
        <img src={sample_src} alt="Sample Icon" />
        <p>replit.png</p>
      </div>
      <div>
        <img src={sample_src} alt="Sample Icon" />
        <p>slingshot.png</p>
      </div>
      <div>
        <img src={sample_src} alt="Sample Icon" />
        <p>taskade.png</p>
      </div>
      <div>
        <img src={sample_src} alt="Sample Icon" />
        <p>echoAR.png</p>
      </div>
    </>
  );
}
