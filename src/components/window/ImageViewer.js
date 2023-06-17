// ImageViewer acts as a placeholder for displaying image files along with a download button

import React from "react";

// Navigation Icons
import downloadSrc from "../../images/navigation/nav-download.png";

// Source of photos used in ImageViewer
import scheduleSrc from "../../images/schedule.png";
import shortcutsSrc from "../../images/shortcutkeys.png";

export default function ImageViewer(props) {
  const [imgSrc, setImgSrc] = React.useState("");

  // Manual switch-case to determine which image to display based on the webpage it is opened in
  React.useEffect(() => {
    switch (true) {
      case props.dir.endsWith("Schedule.png"):
        setImgSrc(scheduleSrc);
        break;
      case props.dir.endsWith("Shortcuts.png"):
        setImgSrc(shortcutsSrc);
        break;
      default:
        break;
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="imageviewer">
      <img src={imgSrc} alt={props.dir} />
      <a href={imgSrc} download>
        <img src={downloadSrc} alt="Download Icon" className="downloadicon" />
      </a>
    </div>
  );
}
