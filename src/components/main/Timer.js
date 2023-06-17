// Timer displays the countdown timer for the beginning of the ProjectBeta event
// in the taskbar.
// The timer can count both ways (time left and time elapsed).

// Visit maindata.js to set the starting date of the event for the countdown
// to count down from

import React from "react";
import { maindata } from "../data/maindata";

export default function Timer() {
  // Stores the different time parts of the countdown timer
  const countdownEntry = {
    dd: 0, // Days
    hh: 0, // Hours
    mm: 0, // Minutes
    ss: 0, // Seconds
    sign: "-", // Whether countdown is moving forwards or backwards
  };
  const [countdownData, setCountdownData] = React.useState(countdownEntry);

  // The recursive function keeps updating the countdown timer every second
  React.useEffect(() => {
    updateTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdownData]);

  function updateTimer() {
    setTimeout(() => {
      const eventDate = maindata.event_starting_date;
      const countdownTarget = new Date(eventDate).getTime();

      const currentTime = new Date().getTime();

      const timeDifference =
        countdownTarget - currentTime > 0
          ? countdownTarget - currentTime
          : currentTime - countdownTarget;

      const newSign = countdownTarget - currentTime < 0 ? "+" : "-";

      var newDd = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var newHh = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMm = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var newSs = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const countdown = {
        dd: newDd,
        hh: newHh,
        mm: newMm,
        ss: newSs,
        sign: newSign,
      };

      setCountdownData(countdown);
    }, 1000);
  }
  // If any time part of the timer is single digit,
  // manually add a zero digit to make it two digit
  function addDoubleZero(num) {
    if (num < 10) {
      return `0${String(num)}`;
    } else return num;
  }

  return (
    <div className="taskbar--timer">
      T {countdownData.sign} {addDoubleZero(countdownData.dd)}d:{" "}
      {addDoubleZero(countdownData.hh)}h: {addDoubleZero(countdownData.mm)}m:{" "}
      {addDoubleZero(countdownData.ss)}s
    </div>
  );
}
