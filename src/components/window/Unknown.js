import React from "react";
import "../../css/Unknown.css";

// Unknown is a secret window that can be used for easter eggs or challenges
// like BetaTest, with support for custom elements and triggering, along
// with a dedicated CSS File.
// This window was last used for BetaTest 2022 in the form of a password
// protected file containing an image and a string of text which was fetched
// from an external API.
// You are free to overwrite the entire code in these file for it to serve a
// different purpose. Just make sure you set up a trigger for it open
// somewhere in the site.

// Warning:
// The password inputted in the field yet to be submitted is prone to deletion
// if the window is moved by the user.

export default function Unknown(props) {
  // Stores the hints fetched from the API upon successful login
  const [hintArray, setHintArray] = React.useState([
    undefined,
    undefined,
    undefined,
  ]);
  let password = "";
  const UserInputtedPassword = React.useRef();
  const PasswordPromptScreen = React.useRef();
  const SubmitButton = React.useRef();
  const DisplayErrorMessage = React.useRef();

  // Stores whether submitted password was correct
  // This is false by default to invoke the password prompt
  const [isCorrect, setIsCorrect] = React.useState(false);

  function PasswordPrompt() {
    if (!isCorrect)
      return (
        <div className="pwdprompt" ref={PasswordPromptScreen}>
          <h2>Welcome</h2>
          <h3>Enter password to proceed:</h3>
          <input
            placeholder="Password"
            onInput={(event) => {
              password = event.target.value;
            }}
            ref={UserInputtedPassword}
            className="txt_input"
          ></input>
          <button onClick={fetchHint} ref={SubmitButton}>
            Submit
          </button>
          <small ref={DisplayErrorMessage}></small>
        </div>
      );
    else return <></>;
  }

  // Shows the hints upon successful login, including the text and the image
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

  // Sends the submitted password to the API and receives the response
  async function fetchHint(event) {
    // Disables and resets the password input field
    UserInputtedPassword.current.value = "";
    UserInputtedPassword.current.disabled = true;

    // API GET request
    fetch(
      `https://why-are-we-here.up.railway.app/whyarewehere?level=level1&submitted=${password}`
    )
      .then((e) => e.json())
      .then((data) => {
        UserInputtedPassword.current.disabled = false; // Enables the password field
        // Whether submitted password was correct or not
        if (data.password) {
          setIsCorrect(true);
          setHintArray(data.answer);
        } else DisplayErrorMessage.current.innerText = "Incorrect Password";
      })
      // If API is dysfunctional (which it is, at the time of this comment)
      .catch((e) => {
        UserInputtedPassword.current.disabled = false;
        DisplayErrorMessage.current.innerText =
          "Unexpected Server-side Error. Please contact us for support.";
      });
  }

  return (
    <div className="unknown">
      {/* Only one of these will be displayed at a time , depending on
      whether the inputted password is correct or not*/}
      <PasswordPrompt />
      <Hint />
    </div>
  );
}
