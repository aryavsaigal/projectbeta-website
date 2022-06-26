import React from "react";

export default function Textfile(props) {
  const alumniText =
    "-----\n\
  2020\n\
  \n\
  Parth Sarthi - President\n\
  Shorya Mehra - Vice President\n\
  Krish Goel - Head of AI and IoT\n\
  Jayani Tripathi - Head of AI and IoT\n\
  Amartya Charkrborthy - Head of Graphic Design\n\
  Kartikay Kataria - Head of Graphic Design\n\
  Yashwin Chaudhary - head of PC Gaming\n\
  Tejas Gandhi - Head of Console Gaming\n\
  \n\
  -----\n\
  2019\n\
  Vibhhu Sharma - President\n\
  Krish Goel - Vice President\n\
  Sarthak Bhatnagar - Head of Gaming\n\
  \n\
  -----\n\
  2018\n\
  ";

  return (
    <div className="textfile">
      <p className="txtcontent">
        {props.dir[0] === "Alumni.zip" && alumniText}
      </p>
    </div>
  );
}
