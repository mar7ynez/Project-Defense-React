import Particles from "react-tsparticles";
import { particlesConfig } from "./particleConfig";

const Particle = () => {

    return (
        <Particles
            id="tsparticles"
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: -1
            }}
            params={particlesConfig}
        />
    );
};

export default Particle