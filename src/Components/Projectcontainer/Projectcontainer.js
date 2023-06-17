import React from 'react'
import { Element } from 'react-scroll'
import Projectlist from '../Projects/Projectlist'
import './Projectcontainer.css'




const Projectcontainer = () => {

    const projects =[
        {
            img: "https://wallpaperaccess.com/full/2159510.jpg",
            title:"facebook",
            desc: "Projects Today is India's largest databank with updated projects information",
        },
        {
            img: "https://wallpaperaccess.com/full/2159510.jpg",
            title:"facebook",
            desc: "Projects Today is India's largest databank with updated projects information",
        },
        {
            img: "https://wallpaperaccess.com/full/2159510.jpg",
            title:"facebook",
            desc: "Projects Today is India's largest databank with updated projects information",
        },
        {
            img: "https://wallpaperaccess.com/full/2159510.jpg",
            title:"facebook",
            desc: "Projects Today is India's largest databank with updated projects information",
        },
        {
            img: "https://i.pinimg.com/originals/4e/50/19/4e5019b53ab32881d59b4921d43b59c3.jpg",
            title:"facebook",
            desc: "Projects Today is India's largest databank with updated projects information",
        },
        {
            img: "https://images4.alphacoders.com/936/936378.jpg",
            title:"facebook",
            desc: "Projects Today is India's largest databank with updated projects information",
        },
    ]
  return (
    
        <Element className="Projectcontainer" id="projects">
            <h1>Projects</h1>
            <p>Here are some important projects are listed below</p>
            <div className='projectcontainer_projects'>

            {
                projects.map((project, index)=>{
                return(
                    <Projectlist key={index}   img={project.img}  desc={project.desc}   title={project.title} link={project.link}/>
                )
            })
        }
        </div>
    </Element>
  )
}


export default Projectcontainer