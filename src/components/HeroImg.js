import "./HeroImgStyles.css"
import IntroImg from "./assets/intro-bg.jpg"
import {Link} from "react-router-dom";

import React from 'react'

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src=
        {IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>HI, I AM A DEVELOPER WITH 3D DESIGN
            BACKGROUND.</p>
            <h1>Frontend developer.</h1>
            <div>
                <Link to="/project" 
                className="btn">PROJECTS</Link>
                <Link to="/contact"
                className="btn btn-light">
                    Contact</Link>    
            </div>
    </div>
  </div>;

};

export default HeroImg