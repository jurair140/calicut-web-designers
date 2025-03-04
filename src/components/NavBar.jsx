import { Cross, Menu, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div className='absolulte top-0 left-0 w-full z-10 bg-black' >
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src="https://calicutwebdesigners.com/site_assets/img/logo/logo.png" className='w-30' alt="" />
            <ul className='hidden md:flex gap-7 text-white '>
                <a href="" className='cursor-pointer hover:text-gray-400'><Link to={"/"}>Home</Link></a>
                <a href="" className='cursor-pointer hover:text-gray-400'><Link to={"/aboutus"}>About Us</Link></a>
                <a href="" className='cursor-pointer hover:text-gray-400'><Link to={'/service'}>Service</Link></a>
                <a href="" className='cursor-pointer hover:text-gray-400'><Link to={'/projects'}>Projects</Link></a>
                <a href="" className='cursor-pointer hover:text-gray-400'><Link to={'/clients'}>Our Clients</Link></a>
                <a href="" className='cursor-pointer hover:text-gray-400'><Link to={'/contact'}>Contact Us</Link></a>
            </ul>
            {/* <button className='hidden md:block bg-white px-8 py-2 rounded-full'><Search/></button> */}
             <Menu size={40} className='text-white md:hidden cursor-pointer' onClick={() => setShowMenu(true)} />
             
        </div>

        <div className={`md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${showMenu ? ' fixed w-full' : 'h-0 w-0'}`}>
            <div className='flex justify-end '>
            <X size={40} className='cursor-pointer transition-all duration-300' onClick={()=>setShowMenu(false)}/>
            </div>
            
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                <a href="" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}><Link to={"/"}>Home</Link></a>
                <a href="" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}><Link to={"/aboutus"}>About Us</Link></a>
                <a href="" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}><Link to={'/service'}>Service</Link></a>
                <a href="" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}><Link to={'/projects'}>Projects</Link></a>
                <a href="" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}><Link to={'/clients'}>Our Clients</Link></a>
                <a href="" className='px-4 rounded-full inline-block' onClick={()=>setShowMenu(false)}><Link to={'/contact'}>Contact Us</Link></a>

            </ul>
        </div>
      
    </div>
  )
}

export default NavBar
