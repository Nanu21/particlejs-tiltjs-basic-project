import React from 'react';
import Particles from "react-particles-js";
import { particleConfigLight, particleConfigDark } from './config/particleConfig';
import './App.css';

function ParticleBackground({ darkTheme }) {
    return (
        <Particles className="particles"
            params={darkTheme ? particleConfigDark : particleConfigLight}
        />
    )
}

export default ParticleBackground
