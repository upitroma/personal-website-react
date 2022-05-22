import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import classes from "./TsParticles.module.css";

const TsParticles = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className={classes.background}>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fpsLimit: 60,
            background: {
            color: "#0f0f0f"
            },
            backgroundMode: {
            enable: true
            },
            particles: {
            color: {
                value: "#ffffff"
            },
            links: {
                color: "#6e6e6e",
                enable: true,
                triangles: {
                enable: false
                },
                distance: 120,
            },
            move: {
                enable: true,
                speed: 1
            },
            size: {
                value: 0,
                
            },
            collisions: {
                "enable": false
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                    factor: 1200
                },
                limit: 0,
                value: 100
                },
            }}}
        />
    </div>
  );
};

export default TsParticles;