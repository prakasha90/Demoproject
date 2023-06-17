import React from 'react'
import {  Link } from 'react-scroll'
import './Topcontent.css'


const Topcontent = () => {
  return (
    <div className='Topcontent'>
        <div className='Topcontent_container'>
            <h1>Mr ArulPrakash</h1>
            <p>Entrepreneur, Programmer and Trader </p>
            <a href="www.google.com">
                <button className="Topcontent_downloadbutton">Download CV</button>
            </a>
            <Link  to="Projects"  smooth={true} duration={500}>
            <button className='Topcontent_myprojects'>My Projects</button>
            </Link>
        </div>
    </div>
  )
}

export default Topcontent