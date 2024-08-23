import React from 'react'
import './Education.css'
import holman from '../../images/holman.jpeg'
import anand from '../../images/Anand.jpeg'
function Education() {
  return (
    <div className='education'>
        <div className="edu">
            <h1>Education</h1>
            
            <div className="places">
            <div className="school">
                <div className="data">
                  <div className="class">
                  <h2>Holman Institute (English Medium), Agra</h2>
                  <p>12th (PCM)</p>
                  </div>
                  <div className="desc">
                    <p>Studied 12th with PCM (Physics, Chemistry, Mathematics) at Holman Institute focuses on strong academic rigor, experienced faculty, and comprehensive preparation for engineering and science entrance exams.</p>
                  </div>
                  
                </div>
                <div className="none">
                  <img src={holman} alt="" />
                </div>
            </div>
            <div className="college">
            
                <div className="data">
                <div className="class">
                  <h2>Anand Engineering College, Agra</h2>
                  <p>BCA (Bachelor of Computer Applications)</p>
                  </div>
                  <div className="desc">
                    <p>
                    BCA at Anand Engineering College, Agra, emphasizes front-end development, offering students in-depth training in HTML, CSS, JavaScript, and modern frameworks like React. The program combines theory with practical projects, preparing students for dynamic careers in web development.</p>
                  </div>
                  
                </div>
                <div className="none">
              <img src={anand} alt="" />
            </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Education
