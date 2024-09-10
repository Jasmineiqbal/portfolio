import React from 'react'
import { Element } from 'react-scroll'
import abouting from "..//img8about.jpg"
import "./aboutcontainer.css"

const Aboutcontainer = () => {
 

  return (
    <Element className="aboutcontainer" id='about me'>
      <div className="aboutcontainer__image" >
       
        <img src={abouting} alt="" />
      </div>
      <div className="aboutcontainer__text">
        <h2>About me</h2>
        <p>
          Hi,My Name is Jasmine Barveen.I am a Full stack web developer.</p>
          <p>I built beautiful websites with html,css,bootstrap,java and react js
        </p>
        <p>
          I am proficient in Frontend skills React.js,css and many more.
        
        In Backend I know Node.js,Express js and MongoDB</p>
      </div>
    </Element>
  );
}

export default Aboutcontainer
