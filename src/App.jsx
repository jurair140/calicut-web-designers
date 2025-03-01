import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimoniels from './components/Testimoniels'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    
    <div className="w-full overflow-hidden">
    <Header/>
    <About/>
    <Projects/>
    <Services/>
    <Testimoniels/>
    <Contact/>
    <Footer/>
    </div>
   
    </>
  )
}

export default App
