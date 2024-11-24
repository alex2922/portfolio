import React from "react";
import "./Hero.scss";
import icon from "../../../assets/icon.gif";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Hero() {
  return (
    <div className="parent hero">
      <div className="hero-container container">
        <img src={icon} alt="" />
        <h1>Harshvardhan Singh</h1>
        <p>
        Hi, I’m Harsh, a passionate <span>Web Developer</span> and <span>Designer</span> from India. I create stunning, user-friendly websites that blend creativity with functionality to bring your digital vision to life.
        </p>
       <div className="btn-box">
       <Link to="#" className="btn">Contact Me</Link>
       <Link to="#" className="btn c"><FaDownload /></Link>
       <Link to="#" className="btn c"><FaGithub /></Link>

       </div>
      </div>
    </div>
  );
}

export default Hero;
