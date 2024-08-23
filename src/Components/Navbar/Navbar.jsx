import React from 'react'
import './Navbar.css'
import { NavLink,  Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
  useGSAP(()=>{
    gsap.from(".logo",{
      opacity: 0,
      duration: 2,
      delay: 0.5,
    })
  })

  useGSAP(()=>{
    gsap.from(".menu",{
      opacity: 0,
      duration: 2,
      delay: 1,
    })
  })
  return (
    <div>
      <div className="nav">
            <div className="logo">
                <h4>Arbab</h4>
            </div>

            <div className="menu">
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                <Link to="/projects" style={{textDecoration: 'none', color: 'black'}}>Projects</Link>
                <Link to="/skills" style={{textDecoration: 'none', color: 'black'}}>Skills</Link>
                <Link to="/education" style={{textDecoration: 'none', color: 'black'}}>Education</Link>
                <Link to="/experience" style={{textDecoration: 'none', color: 'black'}}>Experience</Link>

                <button>Contact</button>
            </div>
      </div>
    </div>
  )
}

export default Navbar
