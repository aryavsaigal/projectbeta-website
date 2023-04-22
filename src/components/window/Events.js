import React from "react";
import "react-markdown";
import { eventsData } from "../data/eventsData";

import schoolSrc from "../../images/events/events-school.png";
import pplSrc from "../../images/events/events-ppl.png";
import passSrc from "../../images/events/events-pass.png";
import mediumSrc from "../../images/events/events-medium.png";

import infinitySymbolSrc from "../../images/misc/infinity_symbol.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// Events is the boilerplate code for all event sub-webpages in the site

// IMPORTANT:
// Make sure to edit both the file eventsData.js and the .md files within the events
// folder in order to update the information for each department event

export default function Events(props) {
  // Retrieves the data pertaining to the file that the instance webpage is
  // supposed to show
  const rawEventsData = React.useState(
    eventsData.filter(
      (e) => e.name === props.dir.replace(".pdf", "").replace("Events/", "")
    )[0]
  )[0];

  // Reads the data above to display the appropriate values for the four cards
  // displayed in each events sub-webpage
  const EventsFields = () => {
    return rawEventsData.fields.map((e, i) => {
      const isIndividual =
        rawEventsData.fields[0].name === "team" &&
        rawEventsData.fields[0].value === "0";
      const eventName =
        e.name === "team"
          ? "Participation Mode"
          : e.name === "max"
          ? `${isIndividual ? "Students" : "Teams"} per school`
          : e.name === "eligible"
          ? "Eligiblity"
          : e.name === "medium"
          ? "Medium"
          : null;
      const imgSrc =
        e.name === "team"
          ? pplSrc
          : e.name === "max"
          ? schoolSrc
          : e.name === "eligible"
          ? passSrc
          : e.name === "medium"
          ? mediumSrc
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
              {/* Infinity symbol shown for events with unlimited participants from one school */}
              {e.value === "0" && (
                <img
                  src={infinitySymbolSrc}
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
              <h3>Grade{e.value === "Open to All" ? "s" : ""}</h3>
            </>
          );
        }
      }
      return (
        <div key={e.name}>
          <img src={imgSrc} alt="" />
          <p>{eventName}</p>
          <FieldValue />
        </div>
      );
    });
  };

  // Retrieves the contents of the correspoding Markdown file
  const [markdownFile, setMarkdownFile] = React.useState("");

  React.useEffect(() => {
    fetch(rawEventsData.desc)
      .then((res) => res.text())
      .then((text) => setMarkdownFile(text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="events">
      <img src={rawEventsData.img_src} alt="Event" className="events--bg" />
      <h1>{rawEventsData.name}</h1>
      <div className="events--fieldscontainer">{EventsFields()}</div>
      <div className="events--desc">
        <ReactMarkdown>{markdownFile}</ReactMarkdown>
      </div>
    </div>
  );
}
