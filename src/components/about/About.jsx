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
                              <small>4+ Months Coding</small>
                          </div>
                          <div className="col-11 col-lg-3 about-card p-4 mt-3">
                              <BsPeopleFill className='about-icon m-2' />
                              <h4>Clients</h4>
                              <small>10+ Clients</small>
                          </div>
                          <div className="col-11 col-lg-3 about-card p-4 mt-3">
                              <VscFolderLibrary className='about-icon m-2' />
                              <h4>Projects</h4>
                              <small>5 Projects Completed</small>
                          </div>

                      </div>
                      <div className="row justify-content-center">
                          <div className="col-12 col-md-11">
                              <p className='p-4 paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsam nihil eos dicta harum fuga, explicabo ea. Fugit officiis aperiam eum minima commodi, adipisci expedita maxime harum sint molestias quis perspiciatis quaerat? Soluta molestias saepe cupiditate unde? Alias fugit consequuntur, ipsam omnis, recusandae atque saepe eligendi dolore, voluptatum dignissimos nam.</p>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About