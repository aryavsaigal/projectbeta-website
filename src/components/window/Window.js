import React from "react";
import logo_src from "../../images/logo-white.png";
import close_src from "../../images/navigation/close.png";
import move_src from "../../images/navigation/nav-move.png";

import Explorer from "./Explorer";
import Textfile from "./Textfile";
import ImageViewer from "./ImageViewer";
import Team from "./Team";
import Events from "./Events";
import Contact from "./Contact";
import Unknown from "./Unknown";

import Draggable from "react-draggable"; // Both at the same time

export default function Window(props) {
  const obj = React.useRef();
  React.useEffect(() => {
    obj.current.style.zIndex = `${props.z}`;
    obj.current.style.display = props.visible ? "initial" : "none";
  }, [props]);

  function setWindowContent(dir) {
    if (dir.indexOf(".") === -1) return <Explorer {...props} />;
    else if (dir === "Alumni.zip") return <Textfile {...props} />;
    else if (dir.endsWith(".png")) return <ImageViewer {...props} />;
    else if (dir === "Team.pdf") return <Team {...props} />;
    else if (dir === "Contact.pdf") return <Contact {...props} />;
    else if (dir === "Unknown.exe") return <Unknown {...props} />;
    else if (dir.search("/Events/")) return <Events {...props} />;
  }
  const windowContent = setWindowContent(props.dir);

  return (
    <Draggable
      handle=".window--move"
      defaultPosition={{
        x: window.innerWidth <= 900 ? 0 : props.x,
        y: window.innerWidth <= 900 ? 10 : props.y,
      }}
      onStart={() => props.focusWindow(props.dir)}
    >
      <div
        className="window"
        id={`window--${props.id}`}
        ref={obj}
        onClick={(event) => {
          if (props.z !== props.zMax) {
            props.focusWindow(props.dir);
          }
        }}
      >
        <div className="window--header">
          <img src={logo_src} alt="PB Logo" />
          <h3>C:/ProjectBeta/{props.dir}</h3>{" "}
          <img
            src={move_src}
            className="window--move"
            alt="Move button"
            draggable={false}
          />
          <img
            src={close_src}
            className="window--close"
            alt="Close button"
            onClick={(event) => {
              props.removeWindow(props.dir);
            }}
          />
        </div>
        <div className="window--content">{windowContent}</div>
      </div>
    </Draggable>
  );
}
