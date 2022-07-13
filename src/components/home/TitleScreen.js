import React from "react";
import logo_src from "../../images/logo-white.png";
import downarrow_src from "../../images/navigation/nav-down.png";

export default function TitleScreen() {
  return (
    <div className="titlescreen">
      <div className="titlescreen--title_container">
        <img src={logo_src} alt="PB Logo" />
        <h1>
          <span id="h1_light">PROJECT</span>
          <span id="h1_bold">BETA</span>
        </h1>
      </div>
      <p className="titlescreen--date">07|08|2022 - 13|08|2022</p>
      <p
        className="titlescreen--register"
        onClick={() => window.open("https://forms.gle/hX8SZ9T5UXQeaJ72A")}
      >
        CLICK HERE TO REGISTER
      </p>
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
