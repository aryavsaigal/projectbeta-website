import React from "react";

// import sample_src from "../../images/folders/file-sample.png";

import geeksforgeeks_src from "../../images/sponsors/geeksforgeeks.png";
import xyz_src from "../../images/sponsors/xyz.png";

export default function SponsorFolders(props) {
  const sponsormeta = React.useState([
    ["GeeksforGeeks", geeksforgeeks_src, "https://geeksforgeeks.org"],
    ["xyzdomains", xyz_src, "https://gen.xyz/"],
  ])[0];

  const sponsorsbtns = sponsormeta.map((e, i) => (
    <div key={i} className="sponsorbtns" onClick={() => window.open(e[2])}>
      <img src={e[1]} alt={`${e[0]} Logo`} />
      <p>{e[0]}.png</p>
    </div>
  ));

  return <>{sponsorsbtns}</>;
}
