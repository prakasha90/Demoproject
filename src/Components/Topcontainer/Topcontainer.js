import React from 'react'
import './topcontainer.css'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent'



const Topcontainer = () => {
  return (

  
    <Element className='Topcontainer' id='about'>
    <Topcontent/>
    </Element>
  
  )
}

export default Topcontainer