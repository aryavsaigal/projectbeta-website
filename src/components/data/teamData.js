// TeamData stores the information of the club members for the Team webpage
// Board Members and HoDs are displayed with their names, photos,
// designations and quotes.
// Regular members are displayed with only their names.

// import undefined_photo from "../../images/team/undefined.png";

// Images of Board Members and HoDs
// import aadiJain from "../../images/team/aadi_jain.jpeg";
// import aditMagotra from "../../images/team/adit_magotra.jpeg";
// import aniketKumar from "../../images/team/aniket_kumar.jpeg";
// import arnavWhig from "../../images/team/arnav_whig.jpeg";
// import aryavSaigal from "../../images/team/aryav_saigal.jpeg";
// import chiragSehgal from "../../images/team/chirag_sehgal.jpeg";
// import dhimanthNath from "../../images/team/dhimanth_nath.jpeg";
// import gauriTandon from "../../images/team/gauri_tandon.jpeg";
// import gayatri from "../../images/team/gayatri.jpeg";
// import gerickRazdan from "../../images/team/gerick_razdan.jpeg";
// import inikaHarikrishnan from "../../images/team/inika_harikrishnan.jpeg";
// import kabirVerdiJain from "../../images/team/kabir_verdi_jain.jpeg";
// import kanhaSingh from "../../images/team/kanha_singh.jpeg";
// import navvyeAnand from "../../images/team/navvye_anand.jpeg";
// import nitishSehgal from "../../images/team/nitish_sehgal.jpeg";
// import paavanGupta from "../../images/team/paavan_gupta.jpeg";
// import puranjayChawla from "../../images/team/puranjay_chawla.jpeg";
// import rishiMathur from "../../images/team/rishi_mathur.jpeg";
// import shreeyaMishra from "../../images/team/shreeya_mishra.jpeg";
// import shreyasVartia from "../../images/team/shreyas_vertia.jpeg";
// import siaJhaNath from "../../images/team/sia_jha_nath.jpeg";
// import simarTandon from "../../images/team/simar_tandon.jpeg";
// import taranSingh from "../../images/team/taran_singh.jpeg";
// import vidushiJain from "../../images/team/vidhushi_jain.jpeg";

import aryavSaigal from "../../images/team/Aryav.jpeg";
import gauriTandon from "../../images/team/Gauri.jpg";
import gaurangKhera from "../../images/team/gaurang.png";
import arnavGarg from "../../images/team/Arnav.jpg";
import shreyMehra from "../../images/team/Shrey.jpg"
import arjanMinocha from "../../images/team/Arjan.jpg"
import naiwritJoyShukla from "../../images/team/Naiwrit.jpg"
import vedantPrakash from "../../images/team/Vedant.jpeg"
import medhaShrivastava from "../../images/team/Medha.jpg"
import reyhaanAryan from "../../images/team/Reyhaan.jpg"
import anmolKumarDabral from "../../images/team/Anmol.jpg"

export default function teamData() {
  return {
    board: [
      {
        name: "Gauri Tandon",
        hod: "Graphic Designing and Logistics",
        img_src: gauriTandon,
        quote: "better tandon, better president.",
        title: "President",
      },
      {
        name: "Aryav Saigal",
        hod: "Programming and Cryptic Hunt",
        img_src: aryavSaigal,
        quote: "i love cp",
        title: "Vice President",
      },
    ],
    core: [
      {
        name: "Gaurang Khera",
        hod: "Web Development",
        img_src: gaurangKhera,
        quote:
          "checkmate.",
      },
      {
        name: "Arnav Garg",
        hod: "Quizzing",
        img_src: arnavGarg,
        quote: "The paths of glory lead but to the grave.",
      },
      {
        name: "Shrey Mehra",
        hod: "Quizzing and Logistics",
        img_src: shreyMehra,
        quote: "SM1X3",
      },
      {
        name: "Arjan Minocha",
        hod: "Gaming",
        img_src: arjanMinocha,
        quote: "\"I love little kids\" - Dhimant Nath"
      },
      {
        name: "Naiwrit Joy Shukla",
        hod: "Gaming",
        img_src: naiwritJoyShukla,
        quote: "I love little kids"
      },
      {
        name: "Vedant Prakash",
        hod: "Gaming",
        img_src: vedantPrakash,
        quote: "sMoOoOOoTH oPerAtOrRrR"
      },
      {
        name: "Medha Shrivastava",
        hod: "Pitching",
        img_src: medhaShrivastava,
        quote: "Hey there! JavaScript is using me. "
      },
      {
        name: "Anmol Kumar Dabral",
        hod: "Robotics and IoT",
        img_src: anmolKumarDabral,
        quote: ""
      },
      {
        name: "Reyhaan Aryan",
        hod: "Surprise",
        img_src: reyhaanAryan,
        quote: ""
      },
      

    ],
    // Enter names of club members in any order; they will be automatically
    // sorted alphabetically
    members: [
      "Aayush Mahapatra",
      "Arbor",
      "Arjun Singhal",
      "Aarav Bansal",
      "Shrey Mehra",
      "Medha Shrivastava ",
      "Vandan Parakh",
      "Samarveer Singh Tuli",
      "Naphirisa Nongrang",
      "Dwij Mishra",
      "Kanav Goyal",
      "Shaurya Rastogi",
      "Hardik Khurana",
      "Ved Gautam",
      "Aadya Narula",
      "Vinayak Navneet Kothari ",
      "Ishmeet Wadhwa",
      "Seemon Saraogi",
      "Reyhaan Aryan",
      "Azaan Karan",
      "Aarya Sharma",
      "Naiwrit Joy Shukla",
      "Tvisha Tiwari",
      "Arjun Taneja ",
      "Shikraj Singh",
      "Abhijay Kansal",
      "Shaurya Midha",
      "Arnav Jain",
      "Shaurya JM",
      "Vihaan Pathak",
      "Ananmay Jalan Wadhwa",
      "Amay Mangal",
      "Suyash Chandel",
      "Angelina Deol",
      "Ujaan Sen",
      "Anaahat Singh ",
      "Naina Singh",
      "Yugyal",
      "Jaskirat Singh Maskeen",
      "Syed Ali Akbar",
      "Kartik Singh",
      "Anvee Choudary",
      "Kashvi Pathak",
      "Arnav Garg",
    ].sort(),
  };
}
