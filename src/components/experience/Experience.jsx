import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' className='text-center'>
        <h5 className='mt-2'>What Skills I have</h5>
        <h1 className='mb-4'>My Experience</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 col-lg-5 experience-card">
                    <h2>Front-End Development</h2>
                    <div className="row">
                    <div className="col-6 pt-5">
                        <h4>HTML</h4>
                        <small>Experienced</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>CSS</h4>
                        <small>Experienced</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>Javascript</h4>
                        <small>Intermediate</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>Bootstrap</h4>
                        <small>Experienced</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>React</h4>
                        <small>Intermediate</small>
                    </div>
                    </div>
                </div>
                <div className="col-11 col-lg-5 experience-card">
                    <h2>Back-End Development</h2>
                    <div className="row">
                    <div className="col-6 pt-5">
                        <h4>Javascript</h4>
                        <small>Intermediate</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>MongoDB</h4>
                        <small>Experienced</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>Node JS</h4>
                        <small>Intermediate</small>
                    </div>
                    <div className="col-6 pt-5">
                        <h4>Express JS</h4>
                        <small>Intermediate</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience