import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center w-full flex  flex-wrap overflow-hidden' 
    style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        
      }} id='Header'>
      <NavBar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white '>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-bold text-white drop-shadow-[2px_2px_0_black]'>
         WE ARE CREATIVE WEB DESIHNERS
        </h2>
        <p className='text-center  text-semibold text-white drop-shadow-[2px_2px_0_black]'>Calicut Web Designers is a leading web design company based in Calicut, <br /> specializing in creating stunning, user-friendly websites <br /> that drive business growth.</p>
        <div className='space-x-6 mt-16'>
          <Link to={'/projects'}>  <a href="" className='border border-white px-8 py-3 rounded'>Projects</a></Link>
          <Link to={'/contact'}>  <a href="" className='border border-white px-8 py-3 rounded bg-yellow-500'>Contact Us</a> </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
