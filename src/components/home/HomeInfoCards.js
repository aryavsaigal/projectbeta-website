import React from "react";

import starSrc from "../../images/homecards/homeinfocard-star.png";
import infoSrc from "../../images/homecards/homeinfocard-info.png";
import callSrc from "../../images/homecards/homeinfocard-call.png";

import invitePdfSrc from "../../PDFs/invite.pdf";

// HomeInfoCards displays the three rounded information boxes in the site when scrolled down
// as well as the footer

export default function HomeInfoCards() {
  return (
    <>
      <span id="lookdown"></span>
      <div className="home_infocards--container">
        {/* 1st box: 2022 */}
        <div className="home_infocards--2022">
          <h2>2022</h2>
          <p>
            ProjectBeta 6.0 invites out! Click{" "}
            <a href={invitePdfSrc} target="_blank" rel="noreferrer">
              here
            </a>{" "}
            to view. <br />
            <br />
            ProjectBeta is back in the year 2022, with its 6th Annual
            Inter-School Conference on Technology and Entrepreneurship, bringing
            along its vast wealth of experience while also introducing
            unprecedented innovation. Continuing the tradition of passing on a
            unique skillset, the tech guild promises to touch new heights this
            year.
          </p>
          <img src={starSrc} alt="Star icon" />
        </div>

        {/* 2nd box: About */}
        <div className="home_infocards--about">
          <h2>About</h2>
          <p>
            ProjectBeta is the tech club of{" "}
            <a
              href="http://sanskritischool.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Sanskriti School
            </a>
            . <br />
            <br />
            Taking its humble roots as a small group of talented individuals in
            2013, ProjectBeta has since matured into a diverse team who have
            worked in tandem to inspire, organise and lead countless events and
            competitions to success. <br />
            <br />
            Constituting 120+ incredibly talented members the club has
            represented the school in various competitions and has grown to
            become one of the foremost clubs of its kind in New Delhi.
          </p>
          <img src={infoSrc} alt="Star icon" />
        </div>

        {/* 3rd box: Contact */}
        <div className="home_infocards--contact">
          <h2>Contact</h2>
          <p>
            Want to send an email? Call? Mail a letter? Or simply fill a form?
            Go to the Contact page!
          </p>
          <img src={callSrc} alt="Star icon" />
        </div>
      </div>
      <footer>© ProjectBeta 2022</footer>
    </>
  );
}
