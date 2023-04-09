import React from "react";
import logo_src from "../../images/logo-white.png";
import downarrow_src from "../../images/navigation/nav-down.png";

// TitleScreen shows the portion of the home page that the user first sees when opening the site

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
      <p className="titlescreen--date">07|08|2022 - 13|08|2022</p>
      <div className="titlescreen--register">
        {/* Buttons for link to registration form and discord server */}
        <p onClick={() => window.open("https://forms.gle/hX8SZ9T5UXQeaJ72A")}>
          REGISTER
        </p>
        <hr />
        <p onClick={() => window.open("https://discord.gg/h9FJkvcJWt")}>
          DISCORD
        </p>
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
