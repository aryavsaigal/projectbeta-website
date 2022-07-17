import { eventsData } from "./eventsData";

export default function windowsData() {
  let returnValue = [
    { id: "0.1", dir: "Unknown.exe" },
    { id: "0.2", dir: "Shortcuts.png" },
    { id: "1", dir: "Events" },
    { id: "2", dir: "Guidelines.txt" },
    { id: "3", dir: "Schedule.png" },
    { id: "4", dir: "Sponsors" },
    { id: "5", dir: "Team.pdf" },
    { id: "6", dir: "Alumni.zip" },
    { id: "7", dir: "Contact.pdf" },
  ];
  eventsData.map((e, i) =>
    returnValue.push({
      id: `1.${i + 1}`,
      dir: `Events/${e.name}.pdf`,
    })
  );
  return returnValue;
}
