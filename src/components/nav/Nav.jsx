import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { RiUserFill } from 'react-icons/ri'
import { MdLibraryBooks } from 'react-icons/md'
import { RiServiceFill } from 'react-icons/ri'
import { AiFillPhone } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <section  className='w-100 d-flex justify-content-center'>
        <nav className='d-flex'>
              <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
              <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUserFill/></a>
            <a href='#experience' onClick={()=> setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active': ''}><MdLibraryBooks/></a>
              <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceFill/></a>
              <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
        </nav>
    </section>
  )
}

export default Nav