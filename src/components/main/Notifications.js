// Notification contains the notification panel and displays all defined notifications
// New notifications are explicitly highlighted

// Visit notifData.js to modify the notifications shown in the panel
// Visit maindata.js to modify the number of days the notification has to be
//  young to be marked as 'new'

import React from "react";

import { notifData } from "../data/notifData";

import logo_src from "../../images/logo-white.png";
import { maindata } from "../data/maindata";

export default function Notifications(props) {
  const rawNotifData = React.useState(notifData)[0];
  const [newNotifs, setNewNotifs] = React.useState(0);

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const expiryDuration = msPerDay * maindata.notif_recent_expiry_duration;

  React.useEffect(() => {
    rawNotifData.forEach((e) => {
      const elapsed = Date.now() - new Date(e.time);
      if (elapsed < expiryDuration) setNewNotifs((e) => e + 1);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isNew(current, previous) {
    const elapsed = current - previous;

    if (elapsed < expiryDuration) {
      return true;
    } else return false;
  }

  function timeDifference(current, previous) {
    const elapsed = current - previous;
    let msg = "";
    if (elapsed < msPerMinute) {
      msg = Math.round(elapsed / 1000) + " second ago";
    } else if (elapsed < msPerHour) {
      msg = Math.round(elapsed / msPerMinute) + " minute ago";
    } else if (elapsed < msPerDay) {
      msg = Math.round(elapsed / msPerHour) + " hour ago";
    } else if (elapsed < msPerMonth) {
      msg = Math.round(elapsed / msPerDay) + " day ago";
    } else if (elapsed < msPerYear) {
      msg = Math.round(elapsed / msPerMonth) + " month ago";
    } else {
      msg = Math.round(elapsed / msPerYear) + " year ago";
    }

    // Checks if the number is more than 1 or not
    // and makes the unit of time singular or plural accordingly
    let determiner = msg.split(" ");
    if (determiner[0] !== "1") determiner[1] += "s";
    return determiner.join(" ");
  }

  // Creates box elements of all notifications for the panel
  const notifs = rawNotifData.map((e, i) => (
    <div
      className={`notif--self`}
      key={i}
      id={isNew(Date.now(), new Date(e.time)) ? "notif--new" : ""}
    >
      <div className="notif--heading">
        <img src={logo_src} alt="PB Logo" />
        <h4>ProjectBeta</h4>
      </div>
      <hr />
      <p>{e.notif}</p>
      <small>{timeDifference(Date.now(), new Date(e.time))}</small>
    </div>
  ));

  return (
    <div className="notif--main">
      <h2>Notifications</h2>
      <p>
        {newNotifs === 0 ? "No" : newNotifs} new notification
        {newNotifs !== 1 ? "s" : ""}
      </p>
      <small>{`${rawNotifData.length} total notification${
        rawNotifData.length === 1 ? "" : "s"
      }`}</small>
      <div className="notif--list">{notifs}</div>
    </div>
  );
}
