import React from "react";

import nav_menu from "../../images/navigation/nav-menu.png";
import nav_close from "../../images/navigation/close.png";
import nav_shelf_close from "../../images/navigation/nav-shelf-close.png";
import nav_shelf_open from "../../images/navigation/nav-shelf-open.png";
// import nav_shelf_open from "../../images/navigation/nav-shelf-open.png";

import Desktop from "../main/Desktop";
import Notifications from "../main/Notifications";

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
          src={mobileToggled.shelf ? nav_shelf_open : nav_shelf_close}
          onClick={toggleShelf}
          alt="Mobile Shelf Icon"
        />
        <img
          src={mobileToggled.sidebar ? nav_close : nav_menu}
          onClick={toggleSidebar}
          alt="Mobile Menu Icon"
        />
      </div>
      <div
        className="mobile--shelf--container"
        style={{ bottom: mobileToggled.shelf ? "80px" : "-150px" }}
      >
        <Desktop {...props} mobile={true} />
      </div>
      <div
        className="mobile--sidebar"
        style={{ right: mobileToggled.sidebar ? "10px" : "-250px" }}
      >
        <Notifications />
      </div>
    </>
  );
}
