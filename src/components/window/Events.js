import React from "react";

import eventsData from "../data/eventsData";

export default function Events(props) {
  const [rawEventsData, unused] = React.useState(eventsData);

  return (
    <div>
      <h1>{props.dir}</h1>
    </div>
  );
}
