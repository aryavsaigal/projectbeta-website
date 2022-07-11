import React from "react";
import "../../css/Unknown.css";

export default function Unknown(props) {
  const [hintArray, setHintArray] = React.useState([
    undefined,
    undefined,
    undefined,
  ]);
  let password = "";
  const text_obj = React.useRef();
  const pwdprompt_obj = React.useRef();
  const submitbtn_obj = React.useRef();
  const displayIncorrect_obj = React.useRef();

  const [isCorrect, setIsCorrect] = React.useState(false);
  React.useEffect(() => {
    // if (isCorrect) {
    //   pwdprompt_obj.current.style.display = "none";
    // }
  }, [isCorrect]);

  function PasswordPrompt() {
    if (!isCorrect)
      return (
        <div className="pwdprompt" ref={pwdprompt_obj}>
          <h2>Welcome</h2>
          <h3>Enter password to proceed:</h3>
          <input
            placeholder="Password"
            onInput={(event) => {
              password = event.target.value;
            }}
            ref={text_obj}
            className="txt_input"
          ></input>
          <button onClick={fetchHint} ref={submitbtn_obj}>
            Submit
          </button>
          <small ref={displayIncorrect_obj}></small>
        </div>
      );
    else return <></>;
  }

  function Hint() {
    if (isCorrect) {
      return (
        <div className="hint">
          <p>{hintArray[0]}</p>
          <img src={hintArray[1]} alt="Hint" />
          <p>{hintArray[2]}</p>
        </div>
      );
    }
  }

  async function fetchHint(event) {
    text_obj.current.value = "";
    text_obj.current.disabled = true;
    fetch(
      `https://why-are-we-here.up.railway.app/whyarewehere?level=level1&submitted=${password}`
    )
      .then((e) => e.json())
      .then((data) => {
        text_obj.current.disabled = false;
        if (data.password) {
          setIsCorrect(true);
          setHintArray(data.answer);
        } else displayIncorrect_obj.current.innerText = "Incorrect Password";
      });
  }

  return (
    <div className="unknown">
      <PasswordPrompt />
      <Hint />
    </div>
  );
}
