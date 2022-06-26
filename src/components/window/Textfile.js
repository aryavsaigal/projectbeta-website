import React from "react";

export default function Textfile(props) {
  function AlumniText() {
    return (
      <>
        <div>-----</div>
        <div>2020</div>
        <div>{"\n"}</div>
        <div> Parth Sarthi - President</div>
        <div> Shorya Mehra - Vice President</div>
        <div> Krish Goel - Head of AI and IoT</div>
        <div> Jayani Tripathi - Head of AI and IoT</div>
        <div> Amartya Charkrborthy - Head of Graphic Design</div>
        <div> Kartikay Kataria - Head of Graphic Design</div>
        <div> Yashwin Chaudhary - head of PC Gaming</div>
        <div> Tejas Gandhi - Head of Console Gaming</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2019</div>
        <div>{"\n"}</div>
        <div> Vibhhu Sharma - President</div>
        <div> Krish Goel - Vice President</div>
        <div> Sarthak Bhatnagar - Head of Gaming</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2018</div>
      </>
    );
  }
  return (
    <div className="textfile">
      <p className="txtcontent">
        {props.dir[0] === "Alumni.zip" && AlumniText()}
      </p>
    </div>
  );
}
