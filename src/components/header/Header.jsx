import React from 'react'
import "./header.css"
import cv from './../../assets/cv.pdf'

const Header = () => {
  return (
    <header className='d-flex flex-column text-center'>
        <h4>Hello I'm</h4>
        <h1>Johann Bleza</h1>
        <h5>Full Stack Developer</h5>
        <div className='mt-3'>
            <a href={cv} download className='button'>Download CV</a>
            <a href="#contact" className='button-primary button'>Contact Me</a>
        </div>
    </header>
  )
}

export default Header