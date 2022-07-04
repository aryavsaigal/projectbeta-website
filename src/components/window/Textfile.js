import React from "react";

export default function Textfile(props) {
  function AlumniText() {
    return (
      <>
        <div>-----</div>
        <div>2021</div>
        <div>{"\n"}</div>
        <div>Shorya Mehra - President</div>
        <div>Mantek Singh Burn - Vice President {"&"} Head of Cryptic</div>
        <div>Aman Sinha - Head of Programming</div>
        <div>Harsh - Head of Programming</div>
        <div>Kushagra Ganesh - Head of Gaming {"(Console)"} </div>
        <div>Ayush Kishor - Head of Pitching</div>
        <div>Venkatesh Gaur - Head of Quizzing</div>
        <div>Aarushi Khuranna - Corporate Cabinet</div>
        <div>Asmit Kumar - Corporate Cabinet</div>
        <div>Anusha Verma - Corporate Cabinet</div>
        <div>Annika Saigal - Corporate Cabinet</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2020</div>
        <div>{"\n"}</div>
        <div>Parth Sarthi - President</div>
        <div>Shorya Mehra - Vice President</div>
        <div>Krish Goel - Head of AI and IoT</div>
        <div>Jayani Tripathi - Head of AI and IoT</div>
        <div>Amartya Charkrborthy - Head of Graphic Design</div>
        <div>Kartikay Kataria - Head of Graphic Design</div>
        <div>Yashwin Chaudhary - head of PC Gaming</div>
        <div>Tejas Gandhi - Head of Console Gaming</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2019</div>
        <div>{"\n"}</div>
        <div>Vibhhu Sharma - President</div>
        <div>Krish Goel - Vice President</div>
        <div>Sarthak Bhatnagar - Head of Gaming</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2018</div>
        <div>{"\n"}</div>
        <div>Arya Nagar - President</div>
        <div>Mehul Agarwal - Vice President</div>
        <div>Pranav Bhatnagar - Head of Programming</div>
        <div>Mihir Chaturvedi - Head of Web Development</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2017</div>
        <div>{"\n"}</div>
        <div>Karan Singh Lobana - President</div>
        <div>Ayushman Jain - Vice President</div>
        <div>Pranav Bhatt - Vice President</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2016</div>
        <div>{"\n"}</div>
        <div>Akshat Pratap Singh - President</div>
        <div>Sammad Grover - Vice President</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2015</div>
        <div>{"\n"}</div>
        <div>Siddhartha Jain - President</div>
        <div>Kaustubh Lall - Vice President</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2014</div>
        <div>{"\n"}</div>
        <div>Abhinav Kapur - President</div>
        <div>{"\n"}</div>
        <div>-----</div>
        <div>2013</div>
        <div>{"\n"}</div>
        <div>Harsh Dev Gupta - President</div>
        <div>Suvrat Bhooshan - Head of Programming</div>
        <div>{"\n"}</div>
        <div></div>
      </>
    );
  }
  return (
    <div className="textfile">
      <div className="txtcontent">
        {props.dir === "Alumni.zip" && AlumniText()}
      </div>
    </div>
  );
}
