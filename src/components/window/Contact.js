// Contact is the Contact webpage of the site, holding contact information of
// board members, teachers and social handles

// Visit maindata.js to update the contact details of the contactable
// club members

import React from "react";

// Social Media icons with links
import SocialMedia from "../main/SocialMedia";

import { maindata } from "../data/maindata";

export default function Contact() {
  // Contact details of the club team
  const phoneRecord = React.useState(maindata.phone_record)[0];

  // Creates box elements of all contactable club members
  const phoneRecordElems = phoneRecord.map((e, i) => (
    <div key={i}>
      <p>{e[0]}</p>
      <p>
        Phone: <a href={`tel:${e[1]}`}>+{e[1]}</a>
      </p>
      {e[2] && <p>Discord: {e[2]}</p>}
    </div>
  ));
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        The best way to get in contact with us is by mailing us at any one of
        the given email IDs. If deemed appropriate, you may reach out to us by
        calling any one of the given phone numbers.
        <br />
        <br /> You can connect with us on Facebook and Instagram too.
      </p>
      <div className="contact--grid">
        <div className="contact--phone">
          <h2>Phone</h2>
          {phoneRecordElems}
        </div>
        <div className="contact--email">
          <h2>Email</h2>
          <a href="maitlto:projectbeta@sanskritischool.edu.in">
            projectbeta@sanskritischool.edu.in
          </a>
        </div>
        <div className="contact--social">
          <h2>Social</h2>
          <div className="contact--socialgrid">
            <SocialMedia />
            {/* Text parts of the links are not included in the SocialMedia component */}
            <a
              href="https://www.instagram.com/projectbeta.club/"
              target="_blank"
              rel="noreferrer"
            >
              @projectbeta.club
            </a>
            <a
              href="https://github.com/Project-Beta"
              target="_blank"
              rel="noreferrer"
            >
              @projectbeta.tech
            </a>
            <a
              href="https://www.facebook.com/ProjectBetaOfficial"
              target="_blank"
              rel="noreferrer"
            >
              @ProjectBetaOfficial
            </a>
          </div>
        </div>
        <div className="contact--address">
          <h2>Address</h2>
          <p>
            Sanskriti School
            <br />
            Dr. S. Radhakrishnan Marg,
            <br />
            Chanakyapuri,
            <br />
            New Delhi, Delhi 110021
          </p>
        </div>
      </div>
    </div>
  );
}
