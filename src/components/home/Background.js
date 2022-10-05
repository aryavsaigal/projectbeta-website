import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particles_config from "../../particles.json";

export default function Background(props) {
  // React.useEffect(() => {
  //   if (!vantaEffect) {
  //     if (!props.isMobile)
  //       setVantaEffect(
  //         NET({
  //           el: obj.current,
  //           mouseControls: true,
  //           touchControls: false,
  //           gyroControls: false,
  //           minHeight: 200.0,
  //           minWidth: 200.0,
  //           scale: 1.0,
  //           scaleMobile: 1.0,
  //           backgroundColor: 0x1a293e,
  //           color: 0x813f22,
  //           showDots: false,
  //         })
  //       );
  //     else if (props.isMobile)
  //       setVantaEffect(
  //         NET({
  //           el: obj.current,
  //           mouseControls: false,
  //           touchControls: false,
  //           gyroControls: false,
  //           minHeight: 500.0,
  //           minWidth: 200.0,
  //           scale: 1.0,
  //           scaleMobile: 2.0,
  //           backgroundColor: 0x1a293e,
  //           color: 0x813f22,
  //           showDots: false,
  //           points: 4.0,
  //           maxDistance: 25.0,
  //           spacing: 30.0,
  //         })
  //       );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [vantaEffect]);

  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      options={particles_config}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
}
