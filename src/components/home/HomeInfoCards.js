// HomeInfoCards displays the three information boxes in the site when scrolled down
// as well as the footer

import React from "react";

import starSrc from "../../images/homecards/homeinfocard-star.png";
import infoSrc from "../../images/homecards/homeinfocard-info.png";
import callSrc from "../../images/homecards/homeinfocard-call.png";

import { maindata } from "../data/maindata";

import {
  InfoCardYear,
  InfoCardAbout,
  InfoCardContact,
} from "../data/InfoCardsData";

export default function HomeInfoCards() {
  return (
    <>
      <span id="lookdown"></span>
      <div className="home_infocards--container">
        {/* 1st box: 2022 */}
        <div className="home_infocards--2022">
          <h2>{maindata.current_year}</h2>
          <InfoCardYear />
          <img src={starSrc} alt="Star icon" />
        </div>

        {/* 2nd box: About */}
        <div className="home_infocards--about">
          <h2>About</h2>
          <InfoCardAbout />
          <img src={infoSrc} alt="Star icon" />
        </div>

        {/* 3rd box: Contact */}
        <div className="home_infocards--contact">
          <h2>Contact</h2>
          <InfoCardContact />
          <img src={callSrc} alt="Star icon" />
        </div>
      </div>
      <footer>© ProjectBeta {maindata.current_year}</footer>
    </>
  );
}
