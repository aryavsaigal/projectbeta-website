import React from "react";
import DesktopButtons from "./DesktopButtons.js";

import desktop_src from "../../images/folders/desktop.png";
import folder_1_src from "../../images/folders/folder-1.png";
import folder_2_src from "../../images/folders/folder-2.png";
import file_img_src from "../../images/folders/file-img.png";
import file_zip_src from "../../images/folders/file-zip.png";
import file_team_src from "../../images/folders/file-team.png";
import file_contact_src from "../../images/folders/file-contact.png";

export default function Desktop(props) {
  const desktopbtndata = [
    { src: desktop_src, btn_name: "Desktop" },
    { src: folder_1_src, btn_name: "Events" },
    { src: file_img_src, btn_name: "Schedule.png" },
    { src: folder_2_src, btn_name: "Sponsors" },
    { src: file_team_src, btn_name: "Team.pdf" },
    { src: file_zip_src, btn_name: "Alumni.zip" },
    { src: file_contact_src, btn_name: "Contact.pdf" },
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

  return (
    <div className={!props.mobile ? "desktopbtn--container" : "mobile--shelf"}>
      {CreateDesktopButtons()}
    </div>
  );
}
