import React from 'react'
import './LandingPage.css'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function LandingPage() {

  useGSAP(()=>{
    
    gsap.from(".container",{
      opacity:0,
      duration:1,
      delay:1.5
    })
    gsap.from(".dev",{
      opacity:0,
      duration:1,
      delay:2
    })
    gsap.from(".line",{
      opacity:0,
      duration:1,
      delay:2.5
    })
    gsap.from(".con",{
      opacity:0,
      duration:1,
      delay:3
    })
  })

  return (
    <div>
      <div className="main">
        <div className="container">
        <p className='dev'>Front End <span>Web</span> Developer</p>
        <p className='line'>A front-end web developer designs and implements the user interface, ensuring a seamless, responsive experience.</p>
        <button className='con'>Contact</button>
        </div>
      </div>
      <Projects />
      <Skills />
      <Education />
      <Experience />
    </div>
  )
}

export default LandingPage
