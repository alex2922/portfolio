import React from "react";
import "./Hero.scss";
import icon from "../../../assets/icon.gif";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="parent hero">
      <div className="hero-container container">
        <img src={icon} alt="" />
        <h1>Harshvardhan Singh</h1>
        <p className="tag">Developer & Designer</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolorem tempore excepturi harum animi uis officiis fugiat totam aspernatur </p>
        <Link to="#"><button className="btn">About Me</button></Link>
      </div>
    </div>
  );
}

export default Hero;
