import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import icon from '../../assets/icon.gif'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

jsConfetti.addConfetti({
  confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  ],
})



function Header() {

  return (
    <>

      <div className="header parent">
        <div className="dock glass">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link onClick={(e) => { e.preventDefault(); jsConfetti.addConfetti() }}> <img src={icon} alt="harsh memoji" />  </Link>
          <Link to="/">Projects</Link>
          <Link to="/">Hobbies</Link>

        </div>
      </div>

    </>

  );
}

export default Header;
