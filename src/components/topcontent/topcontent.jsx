import React from 'react'
import { Link } from 'react-scroll';
import "./topcontent.css"
const Topcontent = () => {
const config = {
  link: "/jasmine.pdf",
};

  return (
    <div className="topcontent">
      <div className="topcontent__container">
        <h1>Hii,</h1>
        <h1>
          I'<span>am</span> Jasmi<span>ne</span> barve<span>en</span>
        </h1>
        <h3>I'm a Full-Stack Web Developer</h3>
        <a href={config.link} download>
          <button className="topcontent__downloadbutton">
            Download Resume
          </button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topcontent__workdbutton">My Work</button>
        </Link>
       
      </div>
    </div>
  );
}

export default Topcontent;
