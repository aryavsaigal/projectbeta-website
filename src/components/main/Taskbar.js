// Taskbar displays the taskbar on the screen, with usual taskbar elements, ProjectBeta social links,
// the countdown timer, the notification panel and the settings panel

import React from "react";

// Navigation icons and logo
import logoSrc from "../../images/logo-white.png";
import searchSrc from "../../images/navigation/search.png";
import notifOffSrc from "../../images/navigation/notif-off.png";
import notifOnSrc from "../../images/navigation/notif-on.png";
import notifUnreadSrc from "../../images/navigation/notif-unread.png";
import settingSrc from "../../images/navigation/nav-setting.png";

// Child taskbar components
import SocialMedia from "./SocialMedia";
import Timer from "./Timer";
import Notifications from "./Notifications";
import Setting from "../main/Settings";

import { notifData } from "../data/notifData";
import { maindata } from "../data/maindata";

export default function Taskbar() {
  // Returns number of recent notifications
  function countNewNotifs() {
    // Function fetches the date object of each notification
    // If data of object is newer than expiryDuration, it will count as
    // a recent notification.
    let count = 0;
    const expiryDay = maindata.notif_recent_expiry_duration;
    const expiryDuration = 60 * 1000 * 60 * 24 * expiryDay;

    notifData.forEach((e) => {
      const elapsed = Date.now() - new Date(e.time);
      if (elapsed < expiryDuration) count++;
    });

    return count;
  }
  const newNotifs = React.useState(countNewNotifs())[0];

  // Stores data of the notification button
  const [notifButtonData, setNotifButtonData] = React.useState({
    isToggled: false, // Is the notification panel being displayed
    closedNotifPanelOffest: "-85vh", // How far the notification panel is positioned from bottom os screen
    notifIcon: newNotifs > 0 ? notifUnreadSrc : notifOffSrc, // Shows a red dot in the icon
    // if any recent unread notifs
  });

  // Stores offset of the settings panel from the screen
  const [settingToggled, setSettingToggled] = React.useState("-85vh");

  // Changes the notification button data when user clicks on the button
  // thus, brings the notification panel up and down and changes the button icon
  function toggleNotif() {
    setNotifButtonData((e) => {
      return {
        isToggled: !e.isToggled,
        closedNotifPanelOffest: e.isToggled ? "-85vh" : "50px",
        notifIcon: e.isToggled === notifOnSrc ? notifOffSrc : notifOnSrc,
      };
    });
  }

  // Brings the settings panel up and down
  function toggleSetting() {
    setSettingToggled((e) => (e === "-85vh" ? "50px" : "-85vh"));
  }

  return (
    <>
      {/* Taskbar */}
      <div className="taskbar">
        <img className="taskbar--logo" src={logoSrc} alt="PB Logo" />
        <div className="taskbar--searchbar">
          <img src={searchSrc} alt="Search Icon" />
          <p>Change the status quo.</p>
        </div>
        <SocialMedia />
        <Timer />
        <img src={settingSrc} alt="Setting" onClick={toggleSetting} />
        <img
          src={notifButtonData.notifIcon}
          alt="Notification"
          onClick={toggleNotif}
        />
      </div>

      {/* Notification Panel */}
      <div
        className="notif--container"
        style={{ bottom: notifButtonData.closedNotifPanelOffest }}
      >
        <Notifications />
      </div>

      {/* Settings Panel */}
      <div className="setting--container" style={{ bottom: settingToggled }}>
        <Setting />
      </div>
    </>
  );
}
