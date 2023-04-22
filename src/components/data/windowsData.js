import { eventsData } from "./eventsData";

// windowsData contains the information of all windows in the site.
// There will be as many windows as there are individual elements in the array.

// Note:
// Two additional fields for each element are added at the time of execution:
// 1. visible: sets the visibility of the window
// 2. zMax: determines the relative z-index of the window
// Due to the frequently changing nature of both of these properties, they
// have not been defined among other read-only properties here
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
  // The events subpages are procedurally generated
  eventsData.map((e, i) =>
    returnValue.push({
      id: `1.${i + 1}`,
      dir: `Events/${e.name}.pdf`,
    })
  );
  return returnValue;
}
