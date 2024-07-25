import "./WorkCard.css";
import React from "react";
import img1 from "../assets/images/project1.png";
import { Link, NavLink } from "react-router-dom";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((obj, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={obj.imgsrc}
              title={obj.title}
              text={obj.text}
              view={obj.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
