import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimoniels from '../components/Testimoniels'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import OurBenefits from '../components/OurBenefits'
import GymTiming from '../components/GymTiming'
import GalleryComponent from '../components/GalleryComponts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Header/>
      <OurBenefits/>
      <GymTiming/>
      <Testimoniels/>
      <GalleryComponent/>
      
      {/* <About/> */}
      {/* <Services/> */}
      {/* <Projects/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Home
