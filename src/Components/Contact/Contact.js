import React from 'react'
import { Element } from 'react-scroll'
import './contact.css'

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contactdetails'>
        <p>Email : <span>arulprakash.a10@gmail.com</span></p>
        <p>Github Username : <span>prakasha90</span></p>
        <div className='contacticon'>
               <a href="www.google.com" alt=''>
                <IconButton>
                    <LinkedInIcon/>
                </IconButton>
                </a>
                <a href="www.google.com" alt=''>
                <IconButton>
                    <FacebookIcon/>
                </IconButton>
                </a>
                
                <a href="www.google.com" alt=''>
               
                <IconButton>
                    <GoogleIcon/>
                </IconButton>                
               </a>
        </div>
        </div>
    </Element>  
    )
}

export default Contact