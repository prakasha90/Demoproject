import React from 'react'
import { Element } from 'react-scroll'
import skill from '../../assets/app.png'
import LinearProgress from '@mui/material/LinearProgress'
import './Skillcontent.css'


const Skillcontent = () => {
  return (
    <Element className='Skillcontent' id='skills' >
        <div className='skillcontent_image'>
            <img src= {skill}  alt='app'/>
        </div>    
        <div className='skillcontent_text'>
            <h2>SKILLSET</h2>
            
            <div className='skillcontent-skillset'>
               <h5>React</h5>

               <div className='skillcontent_slider skillcontent_slider1'>
               <LinearProgress variant="determinate" value={60} />
               </div>
             </div>  
            
             <div className='skillcontent-skillset'>
               <h5>Javascript</h5>
               <div className='skillcontent_slider skillcontent_slider2'>
               <LinearProgress variant="determinate" value={80} />
               </div>
             </div>  


             <div className='skillcontent-skillset'>
               <h5>Wordpress</h5>
               <div className='skillcontent_slider skillcontent_slider3'>
               <LinearProgress variant="determinate" value={30} />
               </div>
             </div>  

             <div className='skillcontent-skillset'>
               <h5>Trading</h5>
               <div className='skillcontent_slider skillcontent_slider4'>
               <LinearProgress variant="determinate" value={90} />
               </div>
             </div>  

             <div className='skillcontent-skillset'>
               <h5>Crypto</h5>
               <div className='skillcontent_slider skillcontent_slider5'>
               <LinearProgress variant="determinate" value={80} />
               </div>
             </div>     
               
        </div>
    </Element>
  )
}

export default Skillcontent
