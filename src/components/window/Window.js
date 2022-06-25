import React from "react";
import logo_src from "../../images/logo-white.png";
import close_src from "../../images/close.png";
import move_src from "../../images/nav-move.png";

export default function Window(props) {
  const [location, setLocation] = React.useState({
    abs_x: props.x,
    abs_y: props.y,
    dyn_x: 0,
    dyn_y: 0,
    cursor_x: 0,
    cursor_y: 0,
  });
  const obj = React.useRef();
  const bounds = {
    top: 0,
    left: 0,
    bottom: document.documentElement.clientHeight - 40,
    right: document.documentElement.clientWidth,
  };

  React.useEffect(() => {
    obj.current.style.left = `${props.x}px`;
    obj.current.style.top = `${props.y}px`;
  }, []);

  function handleDragStart(event) {
    setLocation((e) => {
      return {
        ...e,
        cursor_x: event.clientX,
        cursor_y: event.clientY,
      };
    });
  }
  function handleDrag(event) {
    setLocation((e) => {
      return {
        ...e,
        dyn_x: e.abs_x + (event.clientX - e.cursor_x),
        dyn_y: e.abs_y + (event.clientY - e.cursor_y),
      };
    });

    obj.current.style.left = `${
      location.abs_x + (event.clientX - location.cursor_x)
    }px`;
    obj.current.style.top = `${
      location.abs_y + (event.clientY - location.cursor_y)
    }px`;
  }

  function handleDragEnd(event) {
    setLocation((e) => {
      return {
        ...e,
        abs_x: e.abs_x + (event.clientX - e.cursor_x),
        abs_y: e.abs_y + (event.clientY - e.cursor_y),
        dyn_x: 0,
        dyn_y: 0,
      };
    });

    obj.current.style.left = `${
      location.abs_x + (event.clientX - location.cursor_x)
    }px`;
    obj.current.style.top = `${
      location.abs_y + (event.clientY - location.cursor_y)
    }px`;
  }

  return (
    <div className="window" id={`window--${props.id}`} ref={obj}>
      <div className="window--header">
        <img src={logo_src} alt="PB Logo" />
        <h3>C:/ProjectBeta/</h3>
        <img
          src={move_src}
          className="window--move"
          alt="Move button"
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          draggable={true}
        />
        <img src={close_src} className="window--close" alt="Close button" />
      </div>
      <div className="window--content">
        <h1>{JSON.stringify(bounds)}</h1>
      </div>
    </div>
  );
}
