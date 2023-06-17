// SocialMedia returns the three social links of ProjectBeta in form icon buttons

import React from "react";

// Social Media icons
import igSrc from "../../images/misc/link-ig.png";
import ghSrc from "../../images/misc/link-gh.png";
import fbSrc from "../../images/misc/link-fb.png";

export default function SocialMedia() {
  return (
    <>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/projectbeta.club/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={igSrc} alt="Instagram Logo" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Project-Beta"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ghSrc} alt="GitHub Logo" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/ProjectBetaOfficial"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fbSrc} alt="Facebook Logo" />
      </a>
    </>
  );
}
