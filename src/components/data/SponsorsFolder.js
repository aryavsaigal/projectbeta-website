import React from "react";

// import sample_src from "../../images/folders/file-sample.png";
// ^^^ Use this sample image for development purposes

// Sponsor images
import geeksforgeeksSrc from "../../images/sponsors/geeksforgeeks.png";
import xyzSrc from "../../images/sponsors/xyz.png";

// SponsorsFolder stores the list of images attached with a link to redirect to
// the corresponding sponsor website.
// This component is exclusively for display in the Explorer window.

export default function SponsorFolders(props) {
  const currentSponsorsMetadata = React.useState([
    // Format : ["Name of sponsor", SponsorLogo, "sponsor_url"]
    ["GeeksforGeeks", geeksforgeeksSrc, "https://geeksforgeeks.org"],
    ["xyzdomains", xyzSrc, "https://gen.xyz/"],
  ])[0];

  // Creates the child components i.e. the images with embedded links
  const sponsorsButtons = currentSponsorsMetadata.map((e, i) => (
    <div key={i} className="sponsorbtns" onClick={() => window.open(e[2])}>
      <img src={e[1]} alt={`${e[0]} Logo`} />
      <p>{e[0]}.png</p>
    </div>
  ));

  return <>{sponsorsButtons}</>;
}
