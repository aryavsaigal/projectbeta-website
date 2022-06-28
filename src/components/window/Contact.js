import React from "react";

import SocialMedia from "../main/SocialMedia";

export default function Contact() {
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
          <div>
            <p>Simar Tandon - President</p>
            <a href="tel:91 98715 99988">+91 98715 99988</a>
          </div>
          <div>
            <p>Aadi Jain - Vice President</p>
            <a href="tel:91 97735 00570">+91 97735 00570</a>
          </div>
          <div>
            <p>Adit Magotra - Secretary</p>
            <a href="tel:91 99588 77036">+91 99588 77036</a>
          </div>
          <div>
            <p>Anuja Mittal - Faculty In-charge</p>
            <a href="tel:91 99539 50743">+91 91 99539 50743</a>
          </div>
          <div>
            <p>Ruchi Mehra - Faculty In-charge</p>
            <a href="tel:91 91 98110 89272">+91 91 98110 89272</a>
          </div>
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
