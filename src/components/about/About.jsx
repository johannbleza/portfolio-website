import React from 'react'
import './about.css'
import me from './../../assets/me.png'
import { BsPeopleFill } from 'react-icons/bs'
import { FiAward } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about' className='text-center'>
        <h5 className='mt-2'>Get To Know</h5>
        <h1 className='mb-5'>About Me</h1>
        <div className="container">
            <div className="row"> 
                <div className="col-12 col-lg-5">
                      <img src={me} alt="" className='img-fluid about-img' />
                </div>
                <div className="col-12 col-lg-7 mt-4">
                      <div className="row d-flex justify-content-center">
                          <div className="col-11 col-lg-3 about-card p-4 mt-3">
                              <FiAward className='about-icon m-2' />
                              <h4>Experience</h4>
                              <small>5+ Months Coding</small>
                          </div>
                          <div className="col-11 col-lg-3 about-card p-4 mt-3">
                              <BsPeopleFill className='about-icon m-2' />
                              <h4>Clients</h4>
                              <small>2+ Clients</small>
                          </div>
                          <div className="col-11 col-lg-3 about-card p-4 mt-3">
                              <VscFolderLibrary className='about-icon m-2' />
                              <h4>Projects</h4>
                              <small>3 Projects Completed</small>
                          </div>

                      </div>
                      <div className="row justify-content-center">
                          <div className="col-12 col-md-11">
                              <p className='p-4 paragraph'>Hey! I’m Johann Seatiel Bleza.

                                  I’m a web developer currently based in the Philippines. I gathered my first working experience in freelance. When it comes to my design, I strive to bring the best of both worlds that are known for their refined simplicity and thoughtful design.

                                  Proficient in graphic design and programming. I’m fascinated with the logic and structure of coding.

                                  In my leisure time, I enjoy a fresh cup of coffee, watching movies, and playing video games.</p>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About