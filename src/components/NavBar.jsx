import { Cross, Menu, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const [showMenu,setShowMenu] = useState(false)

    useEffect(()=>{
        if(showMenu){
            document.body.style.overflow = "hidden" 
        }
        else{
            document.body.style.overflow = "auto"
        }
        return ()=>{
            document.body.style.overflow = "auto"
        }
    },[showMenu])


  return (
    <div className='absolulte top-0 left-0 w-full z-10 ' >
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src="https://calicutwebdesigners.com/site_assets/img/logo/logo.png" className='w-30' alt="" />
            <ul className='hidden md:flex gap-7 text-white '>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About Us</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Service" className='cursor-pointer hover:text-gray-400'>Services</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Our Clients</a>
                <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact Us</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'><Search/></button>
             <Menu size={40} className='text-white md:hidden cursor-pointer' onClick={() => setShowMenu(true)} />
             
        </div>

        {/* mobile-menu */}
        <div className={`md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${showMenu ? ' fixed w-full' : 'h-0 w-0'}`}>
            <div className='flex justify-end '>
            <X size={40} className='cursor-pointer transition-all duration-300' onClick={()=>setShowMenu(false)}/>
            </div>
            
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                <a href="#Header" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}>Home</a>
                <a href="#About" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}>About Us</a>
                <a href="#Header" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}>Projects</a>
                <a href="#Header" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}>Services</a>
                <a href="#Header" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}>Testimonials</a>
            </ul>
        </div>
      
    </div>
  )
}

export default NavBar
