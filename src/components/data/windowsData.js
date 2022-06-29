import { eventsData } from "./eventsData";

export default function windowsData() {
  let returnValue = [
    { id: "1", z: 100, visible: false, dir: "Events" },
    { id: "2", z: 101, visible: false, dir: "Schedule.png" },
    { id: "3", z: 102, visible: false, dir: "Alumni.zip" },
    { id: "4", z: 103, visible: false, dir: "Sponsors" },
    { id: "5", z: 104, visible: false, dir: "Team.pdf" },
    { id: "6", z: 105, visible: false, dir: "Contact.pdf" },
  ];
  eventsData.map((e, i) =>
    returnValue.push({
      id: `1.${i + 1}`,
      z: 110 + i,
      visible: false,
      dir: `Events/${e.name}.pdf`,
    })
  );
  return returnValue;
}