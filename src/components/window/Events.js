import React from "react";

import { eventsData } from "../data/eventsData";

import school_src from "../../images/events/events-school.png";
import ppl_src from "../../images/events/events-ppl.png";
import pass_src from "../../images/events/events-pass.png";
import medium_src from "../../images/events/events-medium.png";

export default function Events(props) {
  const [rawEventsData, setRawEventsData] = React.useState(
    eventsData.filter(
      (e) => e.name === props.dir.replace(".pdf", "").replace("Events/", "")
    )[0]
  );

  const EventsFields = () => {
    return rawEventsData.fields.map((e) => {
      const cardInfo =
        e.name === "teams"
          ? ["Teams per school", "Team(s)", school_src]
          : e.name === "people"
          ? ["Students per school", "Student(s)", ppl_src]
          : e.name === "eligible"
          ? ["Eligibility", "Grade", pass_src]
          : e.name === "medium"
          ? ["Medium", "mode", medium_src]
          : undefined;
      return (
        <div key={e.name}>
          <img src={cardInfo[2]} alt="" />
          <p>{cardInfo[0]}</p>
          <h2>{e.value}</h2>
          <h3>{cardInfo[1]}</h3>
        </div>
      );
    });
  };

  return (
    <div className="events">
      <img src={rawEventsData.img_src} alt="Event" className="events--bg" />
      <h1>{rawEventsData.name}</h1>
      <div className="events--fieldscontainer">{EventsFields()}</div>
      <div className="events--desc">{rawEventsData.desc}</div>
    </div>
  );
}
