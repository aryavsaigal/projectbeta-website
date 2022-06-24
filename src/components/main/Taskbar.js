import React from "react";

import logo_src from "../../images/logo-white.png";
import search_src from "../../images/search.png";

import ig_src from "../../images/link-ig.png";
import gh_src from "../../images/link-gh.png";
import fb_src from "../../images/link-fb.png";
import notif_src from "../../images/notif.png";

import Timer from "./Timer";

export default function Taskbar() {
  return (
    <div className="taskbar">
      <img className="taskbar--logo" src={logo_src} alt="PB Logo" />
      <div className="taskbar--searchbar">
        <img src={search_src} alt="Search Icon" />
        <p>Change the status quo.</p>
      </div>
      <a href="https://www.instagram.com/projectbeta.club/">
        <img src={ig_src} alt="Instagram Logo" />
      </a>
      <a href="https://github.com/Project-Beta">
        <img src={gh_src} alt="GitHub Logo" />
      </a>
      <a href="https://www.facebook.com/ProjectBetaOfficial">
        <img src={fb_src} alt="Facebook Logo" />
      </a>
      <Timer />
      <img src={notif_src} alt="Notification" />
    </div>
  );
}
