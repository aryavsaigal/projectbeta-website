// notifData holds all the notifications that are displayed in the notification
// panel.
// New notifications (less than 3 days old) will be highlighted in the panel
// and a red mark in the notification icon in the taskbar will indicate
// the same.

// Note:
// There is currently no support to load notifications from an external API due
// to lack of need for real time notifications in the website. However, you are
// welcome to add it if required.

export const notifData = [
  // Format: { notif:"This is a notification", time: "Jan 1, 2022 12:34:56"}
  {
    notif: "ProjectBeta 7.0 has started.",
    time: "May 3, 2024 00:00:00",
  },
  {
    notif: "The site has adopted a new, simpler and lighter background.",
    time: "Oct 5, 2022 13:15:00",
  },
  {
    notif: "ProjectBeta 6.0 has ended.",
    time: "Aug 14, 2022 00:00:00",
  },
  {
    notif: "Registrations for ProjectBeta 6.0 are now closed.",
    time: "Aug 6, 2022 00:00:00",
  },
  {
    notif: "New PB website officially launched!",
    time: "Jul 13, 2022 15:55:00",
  },
  {
    notif: "ProjectBeta 6.0 is coming. 7th August.",
    time: "Jun 25, 2022 00:00:00",
  },
  {
    notif: "Meet the new team of ProjectBeta 2022-23!",
    time: "Apr 20, 2022 00:00:00",
  },
  {
    notif: "ProjectBeta 5.0 has ended.",
    time: "Jul 16, 2021 12:34:56",
  },
].filter((e) => Date.now() > new Date(e.time));
