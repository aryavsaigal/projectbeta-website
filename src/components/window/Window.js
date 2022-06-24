import React from "react";
import logo_src from "../../images/logo-white.png";
import close_src from "../../images/close.png";

export default function Window(props) {
  return (
    <div className="window">
      <div className="window--header">
        <img src={logo_src} alt="PB Logo" />
        <h3>C:/ProjectBeta/</h3>
        <img src={close_src} className="window--close" alt="Close button" />
      </div>
    </div>
  );
}
