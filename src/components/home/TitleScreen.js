// TitleScreen shows the frontmost portion of the home page that the user first
// sees when opening the site

// Visit maindata.js to update the registration link, discord server link and
// the event date range

import React from "react";

// Icons
import logo_src from "../../images/logo-white.png";
import downarrow_src from "../../images/navigation/nav-down.png";

import { maindata } from "../data/maindata";

export default function TitleScreen() {
  return (
    <div className="titlescreen">
      <div className="titlescreen--title_container">
        {/* PB Logo */}
        <img src={logo_src} alt="PB Logo" />
        <h1>
          {/* ProjectBeta title */}
          <span id="h1_light">PROJECT</span>
          <span id="h1_bold">BETA</span>
        </h1>
      </div>
      {/* Duration of event */}
      <p className="titlescreen--date">{maindata.event_date_range}</p>
      <div className="titlescreen--register">
        {/* Buttons for link to registration form and discord server */}
        <p onClick={() => window.open(maindata.registration_link)}>REGISTER</p>
        <hr />
        <p onClick={() => window.open(maindata.discord_link)}>DISCORD</p>
      </div>
      {/* Oscillating down arrow */}
      <a href="#lookdown">
        <img
          className="titlescreen--downarrow"
          src={downarrow_src}
          alt="Down arrow"
        />
      </a>
    </div>
  );
}
