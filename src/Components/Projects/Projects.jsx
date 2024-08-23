import React from 'react'
import './Projects.css'
import portfolio from '../../images/PortfolioImg.PNG'
import zomato from '../../images/ZomatoSite.PNG'
import tourist from '../../images/Tourist.PNG'
function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className="project-one">
        <div className="left-side">
              <h2>Zomato Clone</h2>
              <p>A Zomato clone website frontend built with React features a sleek UI, dynamic restaurant listings, search functionality, responsive design, user reviews, and seamless navigation.</p>

              <div className="used">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React.js</div>
                <div>Gsap</div>
                
              </div>
        </div>
        <div className="right-side">
        <img src={zomato} alt="" />
              
        </div>
      </div>

      <div className="project-two">
        <div className="left-side">
        <img src={portfolio} alt="" />
        </div>
        <div className="right-side">
        <h2>Portfolio</h2>
              <p>A portfolio which describe my Tech career. Created in react.js, responsive design, user interactive design. My skills , experiences , education and etc are mentioned there.</p>

              <div className="used">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React.js</div>
                <div>Figma</div>
              </div>
        </div>
      </div>

      <div className="project-three">
        <div className="left-side">
        <h2>Tourism Website</h2>
              <p>A dynamic React-based front-end for a tourism website, showcasing stunning destinations with interactive maps, user reviews, booking features, responsive design, and seamless navigation.</p>

              <div className="used">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React.js</div>
                <div>Styled-Com</div>
                
              </div>
        
        </div>
        <div className="right-side">
        <img src={tourist} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Projects
