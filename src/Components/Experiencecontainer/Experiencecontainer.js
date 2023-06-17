import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../Experience/Experience'
import './Experiencecontainer.css'


const Experiencecontainer = () => {
  return (
    <Element className='experiencecontainer' id='experience'>
        
            <h1>Experience</h1>  
            <div className='experincecontainer_info'>
            <Experience number="5+" title="Clients" />
            <Experience number="5" title="Projects"  style={{backgroundColor:"crimson"}}/>
            <Experience number="6+" title="Teaching" />
            <Experience number="6000+" title="Students got placed"/>
            </div>
        
    </Element>
  )
}

export default Experiencecontainer