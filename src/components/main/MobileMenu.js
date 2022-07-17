import React from "react";

import pb_logo_src from "../../images/logo-white.png";
import nav_menu_src from "../../images/navigation/nav-menu.png";
import nav_close_src from "../../images/navigation/close.png";
import nav_shelf_close_src from "../../images/navigation/nav-shelf-close.png";
import nav_shelf_open_src from "../../images/navigation/nav-shelf-open.png";

import Desktop from "../main/Desktop";
import Notifications from "../main/Notifications";
import Timer from "../main/Timer";
import SocialMedia from "../main/SocialMedia";

export default function MobileMenu(props) {
  const [mobileToggled, setMobileToggled] = React.useState({
    shelf: false,
    sidebar: false,
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
          src={mobileToggled.shelf ? nav_shelf_open_src : nav_shelf_close_src}
          onClick={toggleShelf}
          alt="Mobile Shelf Icon"
        />
        <img src={pb_logo_src} alt="PB Logo" />
        <img
          src={mobileToggled.sidebar ? nav_close_src : nav_menu_src}
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
