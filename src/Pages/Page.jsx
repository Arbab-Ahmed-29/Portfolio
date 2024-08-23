import React from 'react'
import LandingPage from '../Components/LandingPage/LandingPage'
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills'
import Education from '../Components/Education/Education'
import Experience from '../Components/Experience/Experience'
import { Route , Routes  } from "react-router-dom";
function Page() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  )
}

export default Page
