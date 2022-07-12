import React from "react";

import ig_src from "../../images/link-ig.png";
import gh_src from "../../images/link-gh.png";
import fb_src from "../../images/link-fb.png";

export default function SocialMedia() {
  return (
    <>
      <a
        href="https://www.instagram.com/projectbeta.club/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ig_src} alt="Instagram Logo" />
      </a>
      <a
        href="https://github.com/Project-Beta"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gh_src} alt="GitHub Logo" />
      </a>
      <a
        href="https://www.facebook.com/ProjectBetaOfficial"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fb_src} alt="Facebook Logo" />
      </a>
    </>
  );
}
