import React from "react";

import { eventsData } from "../data/eventsData";

import school_src from "../../images/events/events-school.png";
import ppl_src from "../../images/events/events-ppl.png";
import pass_src from "../../images/events/events-pass.png";
import medium_src from "../../images/events/events-medium.png";

import infinity_symbol_src from "../../images/infinity_symbol.png";

export default function Events(props) {
  const [rawEventsData, setRawEventsData] = React.useState(
    eventsData.filter(
      (e) => e.name === props.dir.replace(".pdf", "").replace("Events/", "")
    )[0]
  );

  const EventsFields = () => {
    return rawEventsData.fields.map((e, i) => {
      const isIndividual =
        rawEventsData.fields[0].name === "team" &&
        rawEventsData.fields[0].value === "0";
      const eventname =
        e.name === "team"
          ? "Participation Mode"
          : e.name === "max"
          ? `${isIndividual ? "Students" : "Teams"} per school`
          : e.name === "eligible"
          ? "Eligiblity"
          : e.name === "medium"
          ? "Medium"
          : null;
      const img_src =
        e.name === "team"
          ? ppl_src
          : e.name === "max"
          ? school_src
          : e.name === "eligible"
          ? pass_src
          : e.name === "medium"
          ? medium_src
          : null;
      function FieldValue() {
        if (e.name === "team") {
          if (e.value === "0")
            return (
              <>
                <h2>Individually</h2>
                <h3>based</h3>
              </>
            );
          else
            return (
              <>
                <h2>Team{rawEventsData.fields[1].value !== "1" ? "s" : ""}</h2>
                <h3>of {e.value}</h3>
              </>
            );
        } else if (e.name === "medium") {
          if (e.value === "Both")
            return (
              <>
                <h4>1st Round: Online</h4>
                <h4>2nd Round: Offline</h4>
              </>
            );
          else {
            return (
              <>
                <h2>{e.value}</h2>
                <h3>mode</h3>
              </>
            );
          }
        } else if (e.name === "max") {
          return (
            <>
              {e.value === "0" && (
                <img
                  src={infinity_symbol_src}
                  alt="Infinity Symbol"
                  className="infinity"
                />
              )}
              {e.value !== "0" && <h2>{e.value}</h2>}
              <h3>
                {isIndividual && e.value !== "1"
                  ? "Students"
                  : isIndividual && e.value === "1"
                  ? "Student"
                  : !isIndividual && e.value !== "1"
                  ? "Teams"
                  : "Team"}
              </h3>
            </>
          );
        } else if (e.name === "eligible") {
          return (
            <>
              <h2>{e.value}</h2>
              <h3>Grade</h3>
            </>
          );
        }
      }
      return (
        <div key={e.name}>
          <img src={img_src} alt="" />
          <p>{eventname}</p>
          <FieldValue />
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
