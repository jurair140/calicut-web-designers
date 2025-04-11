import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Testimoniels from '../components/Testimoniels'
import OurBenefits from '../components/OurBenefits'
import GymTiming from '../components/GymTiming'
import GalleryComponent from '../components/GalleryComponts'
import TrainersSection from '../components/TrainersSection '

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>

      <OurBenefits/>

      <GymTiming/>
      <Testimoniels/>
      <GalleryComponent/>
      <TrainersSection/>
     
    </div>
  )
}

export default Home
