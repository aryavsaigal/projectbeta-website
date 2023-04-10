import React from "react";
import DesktopButtons from "./DesktopButtons.js";

import desktopSrc from "../../images/folders/desktop.png";
import folder1Src from "../../images/folders/folder-1.png";
import folder2Src from "../../images/folders/folder-2.png";
import fileImgSrc from "../../images/folders/file-img.png";
import fileRulesSrc from "../../images/folders/file-rules.png";
import fileZipSrc from "../../images/folders/file-zip.png";
import fileTeamSrc from "../../images/folders/file-team.png";
import fileContactSrc from "../../images/folders/file-contact.png";

// Desktop shows all windows-themed links to the webpages in form of desktop icons.

export default function Desktop(props) {
  const desktopButtonData = [
    { src: desktopSrc, buttonName: "Desktop" },
    { src: folder1Src, buttonName: "Events" },
    { src: fileRulesSrc, buttonName: "Guidelines.txt" },
    { src: fileImgSrc, buttonName: "Schedule.png" },
    { src: folder2Src, buttonName: "Sponsors" },
    { src: fileTeamSrc, buttonName: "Team.pdf" },
    { src: fileZipSrc, buttonName: "Alumni.zip" },
    { src: fileContactSrc, buttonName: "Contact.pdf" },
  ];

  function CreateDesktopButtons() {
    return desktopButtonData.map((e) => (
      <DesktopButtons
        key={e.buttonName}
        src={e.src}
        name={e.buttonName}
        id={e.src}
        isMobile={props.isMobile}
        {...props}
      />
    ));
  }

  return (
    // The desktop buttons collection is provided to the desktop or mobile container
    // depending on what the user is detected to use
    <div className={!props.mobile ? "desktopbtn--container" : "mobile--shelf"}>
      {CreateDesktopButtons()}
    </div>
  );
}
