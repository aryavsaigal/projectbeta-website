import React from "react";
import logo_src from "../../images/logo-white.png";
import close_src from "../../images/navigation/close.png";
// import move_src from "../../images/navigation/nav-move.png";

import Explorer from "./Explorer";
import Textfile from "./Textfile";
import ImageViewer from "./ImageViewer";
import Team from "./Team";
import Events from "./Events";
import Contact from "./Contact";
import Pdf from "./Pdf";
import Unknown from "./Unknown";

import Draggable from "react-draggable";

// Window acts as a placeholder for all the different pages of the site

export default function Window(props) {
  const windowRef = React.useRef();
  React.useEffect(() => {
    windowRef.current.style.zIndex = `${props.z}`;
    windowRef.current.style.display = props.visible ? "initial" : "none";
  }, [props]);

  // Returns the content the window instance will hold depending on
  // the type of file it receives
  function setWindowContent(dir) {
    // Very poor if/else block, but switch will not work here as effectively.
    // The function receives the actual name and extension of the file selected
    // by the user and determines what type of window should be used for showing that file

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
  }
  const windowContent = setWindowContent(props.dir);

  return (
    <Draggable
      // Prevent mobile users from moving the windows
      handle={props.isMobile ? "<non-existing element>" : ".window--header"}
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
          <img src={logo_src} alt="PB Logo" draggable="false" />
          <h3>C:/ProjectBeta/{props.dir}</h3>
          {/* <h1>{props.z}</h1> */}
          {/* ^^^ above line used to debug the position of windows */}
        </div>
        <img
          src={close_src}
          className="window--close"
          alt="Close button"
          onClick={() => {
            props.removeWindow(props.dir);
          }}
        />
        <div className="window--content">{windowContent}</div>
      </div>
    </Draggable>
  );
}
