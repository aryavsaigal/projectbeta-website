import React from "react";

export default function DesktopButtons(props) {
  return (
    <div className="desktopbtn" onDoubleClick={props.onClick}>
      <img className="desktopbtn--icon" src={props.src} alt="folder icon" />
      <p className="desktopbtn--name">{props.name}</p>
    </div>
  );
}
