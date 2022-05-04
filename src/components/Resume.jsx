import React from 'react'
import resume from '../components/resume.pdf'
import "./resume.css"

const Resume = () => {
  return (
    <div className='Resume'>
        <button className='resumeBtn'>
        <a href={resume} target="_blank" rel="noreferrer" >Download Resume</a>
        </button>
    </div>
  )
}

export default Resume;