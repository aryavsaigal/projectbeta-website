import React from "react";
import AlumniData from "../data/alumniData";

export default function Textfile(props) {
  return (
    <div className="textfile">
      <div className="txtcontent">
        {props.dir === "Alumni.zip" && <AlumniData />}
      </div>
    </div>
  );
}
