import React from "react";

import { VANTA } from "vanta";
import NET from "vanta/dist/vanta.net.min";

export default function Background(props) {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const obj = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      if (!props.isMobile)
        setVantaEffect(
          NET({
            el: obj.current,
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x1a293e,
            color: 0x813f22,
            showDots: false,
          })
        );
      else if (props.isMobile)
        setVantaEffect(
          NET({
            el: obj.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 500.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 2.0,
            backgroundColor: 0x1a293e,
            color: 0x813f22,
            showDots: false,
            points: 4.0,
            maxDistance: 25.0,
            spacing: 30.0,
          })
        );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="background" ref={obj}></div>;
}
