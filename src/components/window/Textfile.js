import React from "react";
import AlumniData from "../data/alumniData";
import GuidelinesData from "../data/guidelinesData.js";

export default function Textfile(props) {
  return (
    <div className={props.dir.endsWith(".zip") ? "zipfile" : "textfile"}>
      <div className="txtcontent">
        {props.dir === "Alumni.zip" && <AlumniData />}
        {props.dir === "Guidelines.txt" && <GuidelinesData />}
      </div>
    </div>
  );
}
