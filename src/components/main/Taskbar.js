import React from "react";

import logo_src from "../../images/logo-white.png";
import search_src from "../../images/navigation/search.png";

import SocialMedia from "./SocialMedia";
import notif_off_src from "../../images/navigation/notif-off.png";
import notif_on_src from "../../images/navigation/notif-on.png";
import notif_unread_src from "../../images/navigation/notif-unread.png";
import setting_src from "../../images/navigation/nav-setting.png";

import Timer from "./Timer";
import Notifications from "./Notifications";
import Setting from "../main/Settings";

import { notifData } from "../data/notifData";

export default function Taskbar() {
  const newNotifs = React.useState(countNewNotifs())[0];

  function countNewNotifs() {
    let count = 0;
    const expiryDuration = 60 * 1000 * 60 * 24 * 3;
    notifData.forEach((e) => {
      const elapsed = Date.now() - new Date(e.time);
      if (elapsed < expiryDuration) count++;
    });
    return count;
  }

  const [notifToggled, setNotifToggled] = React.useState([
    false,
    "-85vh",
    newNotifs > 0 ? notif_unread_src : notif_off_src,
  ]);
  const [settingToggled, setSettingToggled] = React.useState("-85vh");

  function toggleNotif() {
    setNotifToggled((e) => [
      !e[0],
      e[0] ? "-85vh" : "50px",
      e[2] === notif_on_src ? notif_off_src : notif_on_src,
    ]);
  }
  function toggleSetting() {
    setSettingToggled((e) => (e === "-85vh" ? "50px" : "-85vh"));
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
        <img src={setting_src} alt="Setting" onClick={toggleSetting} />
        <img src={notifToggled[2]} alt="Notification" onClick={toggleNotif} />
      </div>
      <div className="notif--container" style={{ bottom: notifToggled[1] }}>
        <Notifications />
      </div>
      <div className="setting--container" style={{ bottom: settingToggled }}>
        <Setting />
      </div>
    </>
  );
}
