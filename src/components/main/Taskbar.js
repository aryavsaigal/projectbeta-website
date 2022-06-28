import React from "react";

import logo_src from "../../images/logo-white.png";
import search_src from "../../images/navigation/search.png";

import SocialMedia from "./SocialMedia";
import notif_off_src from "../../images/navigation/notif-off.png";
import notif_on_src from "../../images/navigation/notif-on.png";
import notif_unread_src from "../../images/navigation/notif-unread.png";

import Timer from "./Timer";
import Notifications from "./Notifications";

import { notifData } from "../data/notifData";

export default function Taskbar() {
  const [anyNotif, unused] = React.useState(notifData.length);
  const [notifToggled, setNotifToggled] = React.useState([
    false,
    "-75vh",
    anyNotif > 0 ? notif_unread_src : notif_off_src,
  ]);

  function toggleNotif() {
    setNotifToggled((e) => [
      !e[0],
      e[0] ? "-75vh" : "50px",
      e[2] === notif_on_src ? notif_off_src : notif_on_src,
    ]);
  }

  return (
    <>
      <div className="taskbar">
        <img className="taskbar--logo" src={logo_src} alt="PB Logo" />
        <div className="taskbar--searchbar">
          <img src={search_src} alt="Search Icon" />
          <p>Change the status quo.</p>
        </div>
        <SocialMedia />
        <Timer />
        <img src={notifToggled[2]} alt="Notification" onClick={toggleNotif} />
      </div>
      <div className="notif--container" style={{ bottom: notifToggled[1] }}>
        <Notifications />
      </div>
    </>
  );
}
