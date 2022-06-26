import React from "react";

import schedule_src from "../../images/schedule.png";

export default function ImageViewer(props) {
  let img_src;
  if (props.dir.endsWith("Schedule.png")) img_src = schedule_src;

  return (
    <div className="imageviewer">
      <img src={img_src} alt={props.dir} />
    </div>
  );
}
