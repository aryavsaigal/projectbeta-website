// InfoCardsData stores the descriptions of the three infomation boxes in the homepage

import React from "react";

import invitePdfSrc from "../../PDFs/invite.pdf";

export function InfoCardYear() {
  return (
    <p>
      ProjectBeta 7.0 invites out! Click{" "}
      <a href={invitePdfSrc} target="_blank" rel="noreferrer">
        here
      </a>{" "}
      to view. <br />
      <br />
      ProjectBeta is back in the year 2024, with its 7th Annual Inter-School
      Conference on Technology and Entrepreneurship, bringing along its vast
      wealth of experience while also introducing unprecedented innovation.
      Continuing the tradition of passing on a unique skillset, the tech guild
      promises to touch new heights this year.
    </p>
  );
}
export function InfoCardAbout() {
  return (
    <p>
      ProjectBeta is the tech club of{" "}
      <a href="http://sanskritischool.edu.in/" target="_blank" rel="noreferrer">
        Sanskriti School
      </a>
      . <br />
      <br />
      Taking its humble roots as a small group of talented individuals in 2013,
      ProjectBeta has since matured into a diverse team who have worked in
      tandem to inspire, organise and lead countless events and competitions to
      success. <br />
      <br />
      Constituting 120+ incredibly talented members the club has represented the
      school in various competitions and has grown to become one of the foremost
      clubs of its kind in New Delhi.
    </p>
  );
}

export function InfoCardContact() {
  return (
    <p>
      Want to send an email? Call? Mail a letter? Or simply fill a form? Go to
      the Contact page!
    </p>
  );
}
