import React from "react";
import logo_src from "../images/logo-white.png";

export default function Taskbar() {
  return (
    <div className="taskbar">
      <img className="taskbar--logo" src={logo_src} alt="PB Logo" />
      <div className="taskbar--searchbar">
        <p>Change the status quo</p>
      </div>
    </div>
  );
}
