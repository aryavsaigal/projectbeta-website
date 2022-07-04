import { eventsData } from "./eventsData";

export default function windowsData() {
  let returnValue = [
    { id: "1", dir: "Events" },
    { id: "2", dir: "Schedule.png" },
    { id: "3", dir: "Sponsors" },
    { id: "4", dir: "Team.pdf" },
    { id: "5", dir: "Alumni.zip" },
    { id: "6", dir: "Contact.pdf" },
  ];
  eventsData.map((e, i) =>
    returnValue.push({
      id: `1.${i + 1}`,
      dir: `Events/${e.name}.pdf`,
    })
  );
  return returnValue;
}
