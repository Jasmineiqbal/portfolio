
import React from 'react'
import { Element } from 'react-scroll'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material'; // Optional, for clickable icons
import "./contact.css"




const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email: <span>jasminebarveen0609@gmail.com</span>
        </p>
        <p>
          Phone no: <span>+91 9345280182</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.facebook.com/share/ym3ojYM9QMsnFSMy/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>

          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>

          <a
            href="https://linkedin.com/in/jasmine-barveen-m-5b578731b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
}

export default Contact
