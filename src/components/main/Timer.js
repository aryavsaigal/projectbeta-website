import React from "react";

export default function Timer() {
  let entry = {
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0,
    sign: "-",
  };
  const [countdown, setCountdown] = React.useState(entry);

  React.useEffect(() => {
    updateTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown]);

  function updateTimer() {
    setTimeout(() => {
      const target = new Date("Aug 6, 2022 00:00:00").getTime();
      const time = new Date().getTime();
      const diff = target - time > 0 ? target - time : time - target;
      let newsign = "-";
      if (target - time < 0) newsign = "+";

      var newdd = Math.floor(diff / (1000 * 60 * 60 * 24));
      var newhh = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newmm = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var newss = Math.floor((diff % (1000 * 60)) / 1000);

      let countdown = {
        dd: newdd,
        hh: newhh,
        mm: newmm,
        ss: newss,
        sign: newsign,
      };

      setCountdown(countdown);
      console.log(diff);
    }, 1000);
  }
  function addDoubleZero(num) {
    if (num < 10) {
      return `0${String(num)}`;
    } else return num;
  }

  return (
    <div className="taskbar--timer">
      T {countdown.sign} {addDoubleZero(countdown.dd)}dd:{" "}
      {addDoubleZero(countdown.hh)}hh: {addDoubleZero(countdown.mm)}mm:{" "}
      {addDoubleZero(countdown.ss)}ss
    </div>
  );
}
