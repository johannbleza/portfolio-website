import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'


const Contact = () => {
  return (
    <section id='contact' className='text-center my-5'>
        <h5 className='mt-2'>Get in Touch</h5>
        <h1 className='mb-4'>Contact Me</h1>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                    <div className="col-12 contact-card mt-4">
                          <MdEmail className='contact-icons' />
                          <h4 className='pt-3'>Email</h4>
                          <p className='pt-2'>johannsealtiel.bleza@gmail.com</p>
                          <a href='mailto:johannsealtiel.bleza@gmail.com' className='send-message'>Send a message</a>
                    </div>
                    <div className="col-12 contact-card mt-4">
                          <BsMessenger className='contact-icons' />
                          <h4 className='pt-3'>Messenger</h4>
                          <p className='pt-2'>Johann Sealtiel Bleza</p>
                          <a href='http://m.me/johannscb' target='_blank' className='send-message'>Send a message</a>
                    </div>
                    <div className="col-12 contact-card mt-4">
                          <AiFillPhone className='contact-icons' />
                          <h4 className='pt-3'>Phone</h4>
                          <p className='pt-2'>+639266986282</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact