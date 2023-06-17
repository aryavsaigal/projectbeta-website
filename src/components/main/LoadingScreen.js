// LoadingScreen shows the loading screen while other elements of the site finish loading

// Note:
// For Safari browsers, a static image of the PB Logo and text 'Please wait is displayed'
// For others, the animated PB logo video is played.
// This is because Safari does not allow autoplay of videos, meaning the
// animated PB Logo would not work

import React from "react";

import PBAnimatedLogoSource from "../../images/PBbootup.mp4";
import PBStaticLogoSource from "../../images/logo-white.png";

export default function LoadingScreen() {
  const loadingScreenParent = React.useRef();
  const PBStaticLogo = React.useRef();
  const PBAnimatedLogo = React.useRef();
  const skipButton = React.useRef();

  const isBrowserSafari = /^((?!chrome|android).)*safari/i.test(
    navigator.userAgent
  );
  // const browserException = /chrome/i.test(navigator.userAgent);
  //  ^^^ above line can be used to debug to test how both versions of loading screens look

  React.useLayoutEffect(() => {
    // Both the PB Logos are invisible by default
    // One of them is turned visible depending on the browser
    if (isBrowserSafari) PBAnimatedLogo.current.style.display = "block";
    else PBStaticLogo.current.style.display = "block";

    // If something prevents the loading screen to disappear automatically
    // A skip button will turn visible after 10 seconds for manual override
    // Note: The skip button is always present in the loading screen and be seen when hovered
    // on its location
    if (isBrowserSafari) setTimeout(() => handleEnd(), 1000);
    setTimeout(() => {
      skipButton.current.style.opacity = 1;
    }, 10000);
    // Alternatively, the user can skip the loading screen by pressing any key on the keyboard
    let checkKeyStroke = document.addEventListener("keydown", () =>
      handleEnd()
    );
    return () => document.removeEventListener(checkKeyStroke);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handles the exit animation of the loading screen
  function handleEnd() {
    // The loading screen has CSS transition set to smooth the changed properties below
    loadingScreenParent.current.style.opacity = "0";
    if (isBrowserSafari) PBAnimatedLogo.current.style.display = "block";
    else PBStaticLogo.current.style.display = "block";
    // After the animation, the loading screen is essentially removed from the webpage
    let wait = setTimeout(() => {
      loadingScreenParent.current.style.display = "none";
    }, 1000);
    return () => {
      clearTimeout(wait);
    };
  }

  // Two independent and separate versions of the loading screen are maintained
  // One is shown for Safari browsers and the other for non-Safari ones
  if (isBrowserSafari)
    return (
      <div className="loadingscreen" ref={loadingScreenParent}>
        <div className="loadingscreen--safaricontainer" ref={PBAnimatedLogo}>
          <img src={PBStaticLogoSource} alt="PB Logo" />
          <h1>Loading</h1>
        </div>
        <p ref={skipButton} className="skip" onClick={handleEnd}>
          SKIP
        </p>
      </div>
    );
  else
    return (
      <div className="loadingscreen" ref={loadingScreenParent}>
        <video
          ref={PBStaticLogo}
          src={PBAnimatedLogoSource}
          type="video/mp4"
          onEnded={handleEnd}
          autoPlay
          muted
        ></video>
        <p ref={skipButton} className="skip" onClick={handleEnd}>
          SKIP
        </p>
      </div>
    );
}
