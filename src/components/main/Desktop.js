import React from "react";
import DesktopButtons from "./DesktopButtons.js";
import foldersrc from "../../images/folders/folder.png";

export default function Desktop() {
  return (
    <div className="desktopbtn--container">
      <DesktopButtons src={foldersrc} name="Desktop" />
      <DesktopButtons src={foldersrc} name="Sponsors" />
      <DesktopButtons src={foldersrc} name="Schedule.jpg" />
      <DesktopButtons src={foldersrc} name="Events" />
      <DesktopButtons src={foldersrc} name="Team.pdf" />
      <DesktopButtons src={foldersrc} name="Alumni.zip" />
      <DesktopButtons src={foldersrc} name="Contact.pdf" />
    </div>
  );
}
