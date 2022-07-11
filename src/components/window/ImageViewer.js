import React from "react";

import download_src from "../../images/navigation/nav-download.png";

import schedule_src from "../../images/schedule.png";
import shortcuts_src from "../../images/shortcutkeys.png";

export default function ImageViewer(props) {
  let img_src;
  if (props.dir.endsWith("Schedule.png")) img_src = schedule_src;
  if (props.dir.endsWith("Shortcuts.png")) img_src = shortcuts_src;

  return (
    <div className="imageviewer">
      <img src={img_src} alt={props.dir} />
      <a href={img_src} download>
        <img src={download_src} alt="Download Icon" className="downloadicon" />
      </a>
    </div>
  );
}
