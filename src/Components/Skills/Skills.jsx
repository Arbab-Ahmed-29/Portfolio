import React from "react";
import "./Skills.css";
import green from '../../images/GSAPANIMATION.png'
import styled from '../../images/StyledComponents.png'
import tailwind from '../../images/TailwindCSS.jpeg'
import next from '../../images/NextjsImage.png'
import sql from '../../images/SQLINjectsImage.png'
import git from '../../images/GithubImage.jpeg' 
import html from '../../images/HYPERTEXT.png'
import css from '../../images/CASCADINGSTYLESHEET.png' 
import js from '../../images/JAVASCRIPTTWO.png'  
import react from '../../images/REACT.png'
function Skills() {
  return (
    <div className="skills">
      <div className="box">
        <h1>Skills</h1>
        <div className="skill-one">
          <div className="profile">Front-End:-</div>
          <div className="techs">
          <img src={html} alt="" className="green"/>
          <img src={css} alt="" className="green"/>
          <img src={js} alt="" className="green"/>
          </div>
        </div>
        <div className="skill-one">
          <div className="profile">Libraries:-</div>
          <div className="techs">
          <img src={react} alt="" className="green"/>
          <img src={green} alt="" className="green"/>
          <img src={styled} className="green" />
          <img src={tailwind} className="green" />
          </div>
        </div>
        <div className="skill-one">
          <div className="profile">Framework:-</div>
          <div className="techs">
            <img src={next} alt="" className="green"/>
          </div>
        </div>
        <div className="skill-one">
          <div className="profile">Database:-</div>
          <div className="techs">
          <img src={sql} alt="" className="green"/>
          </div>
        </div>
        <div className="skill-one">
          <div className="profile">
            <div className="short">
              V.C.S
            </div>
            <p className="ver">Version Control System:-</p></div>
          <div className="techs">
          <img src={git} alt="" className="green"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
