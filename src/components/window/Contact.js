import React from "react";

import SocialMedia from "../main/SocialMedia";

export default function Contact() {
  const [phonerecord, unused] = React.useState([
    ["Simar Tandon - President", "91 98715 99988"],
    ["Aadi Jain - Vice President", "91 97735 00570"],
    ["Adit Magotra - Secretary", "91 99588 77036"],
    ["Anuja Mittal - Faculty In-charge", "91 99539 5074"],
    ["Ruchi Mehra - Faculty In-charge", "91 98110 89272"],
  ]);

  const phoneRecordElems = phonerecord.map((e, i) => (
    <div key={i}>
      <p>{e[0]}</p>
      <a href={`tel:${e[1]}`}>+{e[1]}</a>
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
            <a href="https://www.instagram.com/projectbeta.club/">
              @projectbeta.club
            </a>
            <a href="https://github.com/Project-Beta">@projectbeta.tech</a>
            <a href="https://www.facebook.com/ProjectBetaOfficial">
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
