import React from "react";

export default function DesktopButtons(props) {
  return (
    <div
      className="desktopbtn"
      onClick={(event) => {
        if (event.detail === 2) props.addWindow(props.name);
      }}
    >
      <img className="desktopbtn--icon" src={props.src} alt="folder icon" />
      <p className="desktopbtn--name">{props.name}</p>
    </div>
  );
}
