import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'


const Contact = () => {
  return (
    <section id='contact' className='text-center'>
        <h5 className='mt-2'>Get in Touch</h5>
        <h1 className='mb-4'>Contact Me</h1>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 col-lg-4">
                    <div className="col-12 contact-card">
                          <HiOutlineMail className='contact-icons' />
                          <h4 className='pt-3'>Email</h4>
                          <p className='pt-2'>johannsealtiel.bleza@gmail.com</p>
                          <a href='mailto:johannsealtiel.bleza@gmail.com' className='text-primary'>Send a message</a>
                    </div>
                </div>
                <div className="col-11 col-lg 7"></div>
            </div>
        </div>
    </section>
  )
}

export default Contact