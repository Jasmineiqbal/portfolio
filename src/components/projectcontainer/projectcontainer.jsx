import React from "react";
import { Element } from "react-scroll";
import Project from "../project/project";
import "./projectcontainer.css"
const Projectcontainer = () => {
  const myprojects = [
    {
      img: "https://cdn.dribbble.com/users/3839356/screenshots/7011905/caterline-index-v2.jpg",
      title: "Food Order Website",
      desc: "A eccommerce website built with HTML,CSS,Bootstrap",
      githubLink: "https://github.com/Jasmineiqbal/Food-order-website",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/007/642/187/original/to-do-list-template-decorated-by-spring-flowers-in-a-teapot-cute-design-of-schedule-daily-planner-or-checklist-hand-drawn-illustration-perfect-for-planning-notes-and-self-organization-vector.jpg",
      title: "To Do List",
      desc: "To do list Built With Java script.",
      githubLink:
        "https://github.com/Jasmineiqbal/Form-To-do-list-and-Product-table",
    },
    {
      img: "https://uicookies.com/wp-content/uploads/2020/04/Marian.jpg",
      title: "Hotel Booking  Website",
      desc: "Hotel booking website built with HTML,CSS,Bootstrap.",
      githubLink: "https://github.com/Jasmineiqbal/Resort",
    },
    {
      img: "https://w3layouts.com/wp-content/uploads/2018/10/toys-shop-w3layouts-featured.jpg",
      title: "Toys Shop",
      desc: "Toys shop for kids built with React js and CSS",
      githubLink: "https://github.com/Jasmineiqbal/Funzone_toys-",
    },
  ];
  return (
    <Element className="projectcontainer" id="projects">
      <h1>
        Projects
      </h1><br/>
      <p>
        Here are some projects which I done for making lives of people easy.
      </p>

      <div className="projectcontainer__projects">
        {myprojects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </Element>
  );
};

export default Projectcontainer;

