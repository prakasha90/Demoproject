

import React from 'react'
import Header from './Components/Header/Header'
import Topcontainer from './Components/Topcontainer/Topcontainer'
import Skillcontent from './Components/Skillcontent/Skillcontent'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer'
import './App.css'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      
      <Header/>
      <Topcontainer/>
      <Skillcontent/>
      <Projectcontainer/>
      <Experiencecontainer/>
      <Contact/>
      
    </div>
  )
}

export default App
