import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import icon from '../../assets/icon.gif'

function Header() {

    const [overlay ,setOverylay] = useState(false)


  return (
    <>

        <div className="overlay"></div>



      <div className="header parent">
        <div className="dock glass">
          
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">
            <img src={icon} alt="My Image" />
          </Link>
          <Link to="/">Projects</Link>
          <Link to="/">Hobbies</Link>
          
        </div>
      </div>
    </>
  );
}

export default Header;
