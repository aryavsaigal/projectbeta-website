import React from "react";

export default function HomeInfoCards() {
  return (
    <div className="home_infocards--container">
      <div className="home_infocards--2022">
        <h2>2022</h2>
        <hr />
        <p>
          ProjectBeta 6.0 invites out! Click{" "}
          <a href="https://drive.google.com/file/d/17LrfkBwqoPM_AP97ZhC0lnEwDGMMcgdj/view?usp=sharing">
            here
          </a>{" "}
          to view. <br />
          <br />
          ProjectBeta is back in the year 2022, with its 6th Annual Inter-School
          Conference on Technology and Entrepreneurship, bringing along its vast
          wealth of experience while also introducing unprecedented innovation.
          Continuing the tradition of passing on a unique skillset, the tech
          guild promises to touch new heights this year.
        </p>
      </div>
      <div className="home_infocards--about">
        <h2>About</h2>
        <hr />
        <p>
          ProjectBeta is the tech club of{" "}
          <a href="http://sanskritischool.edu.in/">Sanskriti School</a>. <br />
          <br />
          Taking its humble roots as a small group of talented individuals in
          2013, ProjectBeta has since matured into a diverse team who have
          worked in tandem to inspire, organise and lead countless events and
          competitions to success. <br />
          <br />
          Constituting 120+ incredibly talented members the club has represented
          the school in various competitions and has grown to become one of the
          foremost clubs of its kind in New Delhi.
        </p>
      </div>
      <div className="home_infocards--contact">
        <h2>Contact</h2>
        <hr />
        <p>
          Want to send an email? Call? Mail a letter? Or simply fill a form? Go
          to the Contact page!
        </p>
      </div>
    </div>
  );
}
