// MobileMenu displays a separate set of Taskbar elements made specially for mobile devices

import React from "react";

import pbLogoSrc from "../../images/logo-white.png";
import navMenuSrc from "../../images/navigation/nav-menu.png";
import navCloseSrc from "../../images/navigation/close.png";
import navShelfCloseSrc from "../../images/navigation/nav-shelf-close.png";
import navShelfOpenSrc from "../../images/navigation/nav-shelf-open.png";

import Desktop from "../main/Desktop";
import Notifications from "../main/Notifications";
import Timer from "../main/Timer";
import SocialMedia from "../main/SocialMedia";

export default function MobileMenu(props) {
  // Stores state of visibility of the mobile exclusive panels
  const [mobileToggled, setMobileToggled] = React.useState({
    shelf: false, // Bottom toolbar containing all desktop icons
    sidebar: false, // Sidebar with notifications, countdown
  });

  function toggleShelf() {
    setMobileToggled((e) => ({ ...e, shelf: !e.shelf }));
  }
  function toggleSidebar() {
    setMobileToggled((e) => ({ ...e, sidebar: !e.sidebar }));
  }
  return (
    <>
      <div className="mobile--navbar">
        <img
          src={mobileToggled.shelf ? navShelfOpenSrc : navShelfCloseSrc}
          onClick={toggleShelf}
          alt="Mobile Shelf Icon"
        />
        <img src={pbLogoSrc} alt="PB Logo" />
        <img
          src={mobileToggled.sidebar ? navCloseSrc : navMenuSrc}
          onClick={toggleSidebar}
          alt="Mobile Menu Icon"
        />
      </div>
      <div
        className="mobile--shelf--container"
        style={{ bottom: mobileToggled.shelf ? "70px" : "-150px" }}
      >
        <Desktop {...props} mobile={true} />
      </div>
      <div
        className="mobile--sidebar"
        style={{ right: mobileToggled.sidebar ? "10px" : "-275px" }}
      >
        <Notifications />
        <hr />
        <Timer />
        <hr />
        <div className="mobile--sidebar--social">
          <SocialMedia />
        </div>
        <small className="mobile--sidebar--statusquo">
          Change the status quo.
        </small>
      </div>
    </>
  );
}
