import React from "react";
import DesktopButtons from "./DesktopButtons.js";
import foldersrc from "../../images/folders/folder.png";

export default function Desktop(props) {
  const desktopbtndata = [
    { src: foldersrc, btn_name: "Desktop" },
    { src: foldersrc, btn_name: "Sponsors" },
    { src: foldersrc, btn_name: "Schedule.jpg" },
    { src: foldersrc, btn_name: "Events" },
    { src: foldersrc, btn_name: "Team.pdf" },
    { src: foldersrc, btn_name: "Alumni.zip" },
    { src: foldersrc, btn_name: "Contact.pdf" },
  ];

  function CreateDesktopButtons() {
    return desktopbtndata.map((e) => (
      <DesktopButtons
        key={e.btn_name}
        src={e.src}
        name={e.btn_name}
        id={e.src}
        {...props}
      />
    ));
  }

  return <div className="desktopbtn--container">{CreateDesktopButtons()}</div>;
}
