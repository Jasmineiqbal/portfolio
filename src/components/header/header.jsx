import React from 'react';
import {Link} from "react-scroll";
import "./header.css";
import logo from "..//portfolio-vector-icon.jpg"

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Fullsta<span>ck</span> W<span>eb</span> Develop<span>er</span>
        </h1>
      </div>

      <div className="header__right">
        <Link to="home" smooth={true} duration={500}>
          <h4>Home</h4>
        </Link>
        <Link to="about me" smooth={true} duration={500}>
          <h4>About me</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <div className='header__image'>
          <img src={logo} alt="" />
        </div>

        {/* <h4 className='header__rightbutton'>Join me</h4> */}
      </div>
    </div>
  );
}

export default Header
