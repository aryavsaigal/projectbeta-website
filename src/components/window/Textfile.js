import React from "react";

// Data to retrieve text from
import AlumniData from "../data/alumniData";
import GuidelinesData from "../data/guidelinesData.js";

// Textfile acts as a placeholder for displaying text in a notepad like window for
// .txt (in black bg) and .zip files (in white bg)

export default function Textfile(props) {
  const [textFileContent, setTextFileContent] = React.useState();

  // Manual switch-case to determine which text file to display based on the
  // webpage it is opened in
  React.useEffect(() => {
    switch (props.dir) {
      case "Alumni.zip":
        setTextFileContent(<AlumniData />);
        break;
      case "Guidelines.txt":
        setTextFileContent(<GuidelinesData />);
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={props.dir.endsWith(".zip") ? "zipfile" : "textfile"}>
      <div className="txtcontent">{textFileContent}</div>
    </div>
  );
}
