import React, { useState } from 'react'
import "./project.css";

const Project = ({ img, title, desc, githubLink }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="project"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show ? (
        <div className="project__content">
          <h4>{title}</h4>
          <p>{desc}</p>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          )}
        </div>
      ) : (
        <img src={img} alt="" />
      )}
    </div>
  );
};

export default Project
