import React from 'react'
import "./header.css"
import Me from "./../../assets/me.png"

const Header = () => {
  return (
    <header className='d-flex flex-column text-center'>
        <h4>Hello I'm</h4>
        <h1>Johann Bleza</h1>
        <h5>Full Stack Developer</h5>
        <div className='mt-3'>
            <a href="" className='button'>Download CV</a>
            <a href="" className='button-primary button'>Contact Me</a>
        </div>
        {/* <img src={Me} alt="" className='img-fluid'/> */}
    </header>
  )
}

export default Header