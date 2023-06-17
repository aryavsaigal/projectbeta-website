// Window acts as the master placeholder for all the different pages of the
// site, with the ability to be dragged around, and be opened/closed.

// Visit windowsData.js to define new instances of windows

import React from "react";

// UI icons
import logoSrc from "../../images/logo-white.png";
import closeSrc from "../../images/navigation/close.png";
// import move_src from "../../images/navigation/nav-move.png";

// Types of webpages
import Explorer from "./Explorer";
import Textfile from "./Textfile";
import ImageViewer from "./ImageViewer";
import Team from "./Team";
import Events from "./Events";
import Contact from "./Contact";
import Pdf from "./Pdf";
import Unknown from "./Unknown";

// Library allowing draggable movement of the windows
import Draggable from "react-draggable";

export default function Window(props) {
  const windowRef = React.useRef();

  // Defines two additional fields for each window that will be frequently changed
  React.useEffect(() => {
    windowRef.current.style.zIndex = `${props.z}`;
    windowRef.current.style.display = props.visible ? "initial" : "none";
  }, [props]);

  // Returns the content the window instance will hold depending on
  // the type of file it receives
  function setWindowContent(dir) {
    // The function receives the actual name and extension of the file
    // selected by the user and determines what type of window should be used
    // for showing that file

    // If file doesn't have extension/ it is a folder,
    // this will return a Windows Explorer window
    if (dir.indexOf(".") === -1) return <Explorer {...props} />;
    // This will return a text file window
    else if (dir.endsWith(".txt") || dir.endsWith(".zip"))
      return <Textfile {...props} />;
    // This will return an image file window
    else if (dir.endsWith(".png")) return <ImageViewer {...props} />;
    // This will return a PDF file window
    else if (dir === "Guidelines.pdf") return <Pdf {...props} />;
    // This will return custom windows specific to that file's use
    else if (dir === "Team.pdf") return <Team {...props} />;
    else if (dir === "Contact.pdf") return <Contact {...props} />;
    else if (dir === "Unknown.exe") return <Unknown {...props} />;
    else if (dir.search("/Events/")) return <Events {...props} />;
    // Very poor if/else block, but switch-case will not work here as
    // effectively.
  }
  const windowContent = setWindowContent(props.dir);

  return (
    // External component used for the window dragging functionality
    <Draggable
      // Prevent mobile users from moving the windows
      handle={props.isMobile ? "#a-non-existing-element" : ".window--header"}
      // If mobile, all windows will be placed on top of one another
      // If not, the windows will take the position given by Homepage.js
      defaultPosition={{
        x: props.isMobile ? 0 : props.x,
        y: props.isMobile ? 10 : props.y,
      }}
      // If user clicks or drags the window, bring the window on top
      onStart={() => props.focusWindow(props.dir)}
    >
      <div
        className="window"
        id={`window--${props.id}`}
        ref={windowRef}
        onClick={() => {
          if (props.z !== props.zMax) {
            props.focusWindow(props.dir);
          }
        }}
      >
        <div className="window--header">
          <img src={logoSrc} alt="PB Logo" draggable="false" />
          <h3>C:/ProjectBeta/{props.dir}</h3>
          {/* <h1>{props.z}</h1> */}
          {/* ^^^ above line used to debug the position of windows */}
        </div>
        {/* Close Button */}
        <img
          src={closeSrc}
          className="window--close"
          alt="Close button"
          onClick={() => {
            props.removeWindow(props.dir);
          }}
        />
        {/* Content that the window will hold */}
        <div className="window--content">{windowContent}</div>
      </div>
    </Draggable>
  );
}
