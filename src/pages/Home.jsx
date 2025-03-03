import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimoniels from '../components/Testimoniels'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Testimoniels/>
      <Contact/>
    </div>
  )
}

export default Home
