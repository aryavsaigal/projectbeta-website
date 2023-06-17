// DesktopButtons displays the individually selectable desktop button,
// with the icon and the name

import React from "react";

export default function DesktopButtons(props) {
  return (
    <div
      className="desktopbtn"
      // Triggers the window on different inputs based on the device used
      onDoubleClick={(event) => {
        if (event.detail === 2) props.addWindow(props.name);
      }}
      onClick={() => {
        if (props.isMobile) props.addWindow(props.name);
      }}
    >
      <img className="desktopbtn--icon" src={props.src} alt="folder icon" />
      <p className="desktopbtn--name">{props.name}</p>
    </div>
  );
}
