import React from "react";

import { VANTA } from "vanta";
import NET from "vanta/dist/vanta.net.min";

export default function Background() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const obj = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: obj.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 4.0,
          backgroundColor: 0x1a293e,
          color: 0x813f22,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="background" ref={obj}></div>;
}
