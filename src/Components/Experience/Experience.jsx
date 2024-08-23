import React from 'react'
import './Experience.css'
import samyak from '../../images/samyak.png'
function Experience() {
  return (
    <div className='experience'>
        <div className="exper">
            <h1>Experience</h1>

            <div className="samyak">
                <div className="content">
                  <h1>Internship at Samyak</h1>
                  <div className="cont">
                    <p>An internship at Samyak in React.js offers hands-on experience in building modern web applications. Interns work on real-world projects, learning best practices in React development, state management, and component-based architecture. The program emphasizes collaborative teamwork, code reviews, and problem-solving, providing a strong foundation for a career in front-end development.</p>
                  </div>
                  <div className="wor">
                  <div className="workdone">
                    <h4>Working</h4>
                    
                    <p>1. Bike Website</p>
                    <p>2. E-commerce Website</p>
                    <p>3. Bubble Game</p>
                  </div>

                  <div className="learn">
                    <h4>Skills</h4>
                    
                    <p>1. JavaScript</p>
                    <p>2. React.js</p>
                    <p>3. Core Java</p>
                  </div>  
                  </div>
                
                </div>
                <div className="img">
                  <img src={samyak} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
