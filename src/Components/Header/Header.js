import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        

        <div className='Header_left'>
            <h1>Programm<span>er</span></h1>
        </div>

        
        
        <div className='Header_right'>  
        
        <Link  to="about"  smooth={true} duration={500}>
          <h1>About Me</h1>
        </Link>

        <Link  to="skills"  smooth={true} duration={500}>
          <h1>Skills</h1>
        </Link>

        <Link  to="projects"  smooth={true} duration={500}>
          <h1>Projects</h1>
        </Link>

        <Link  to="experience"  smooth={true} duration={500}>
          <h1>Experience</h1>
        </Link>

        <Link  to="contact"  smooth={true} duration={500}>
          <h1>Contact Us</h1>
        </Link>
        <h1 className='Header_rightbutton'>Join with me</h1>
       
       </div>

    </div>
  )
}

export default Header