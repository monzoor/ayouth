import React from 'react';
import heroImg from '../../assets/images/hero-1.jpg';

const bgimg = {
    background: `linear-gradient(to right, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 100%), url(${heroImg}) no-repeat center center / cover`,
};

const Hero = () => (
    <div className="hero minvh-100" style={bgimg}>
        <h1 className="text-primary pt-5 text-align-right">GIVE SCHOL A RSHIPSONLINE</h1>
    </div>
);

export default Hero;
