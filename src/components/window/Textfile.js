// Textfile acts as a placeholder for displaying text in a notepad like window for
// .txt (in black bg) and .zip files (in white bg)

// Visit alumniData.md and guidelinesData.md to modify/update the text within

import React from "react";

// Data to retrieve text from
import AlumniData from "../data/alumniData.md";
import GuidelinesData from "../data/guidelinesData.md";

import "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Textfile(props) {
  // Stores the contents of the mardkwon file for the specific window instance
  const [markdownFile, setMarkdownFile] = React.useState("");

  // Set the state of a variable with setState to the data fetched from src
  function fetchMd(src, setState) {
    fetch(src)
      .then((res) => res.text())
      .then((text) => setState(text));
  }

  // Manual switch-case to determine which text file to display based on the
  // webpage it is opened in
  React.useEffect(() => {
    switch (props.dir) {
      case "Alumni.zip":
        fetchMd(AlumniData, setMarkdownFile);
        break;
      case "Guidelines.txt":
        fetchMd(GuidelinesData, setMarkdownFile);
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={props.dir.endsWith(".zip") ? "zipfile" : "textfile"}>
      <div className="txtcontent">
        <ReactMarkdown children={markdownFile} />
      </div>
    </div>
  );
}
