import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <div className='fixed top-0 left-0 w-full z-30'>
      <div className='flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-black/60 backdrop-blur-md'>
        <img
          src='https://lumea.in/belly6/assets/images/logo-white.png'
          className='w-32 sm:w-40'
          alt='Logo'
        />
        <ul className='hidden md:flex gap-7 text-white font-medium'>
          <Link to='/'><li className='hover:text-yellow-400'>Home</li></Link>
          <Link to='/aboutus'><li className='hover:text-yellow-400'>About Us</li></Link>
          <Link to='/gallery'><li className='hover:text-yellow-400'>Gallery</li></Link>
          <Link to='/advisoryboard'><li className='hover:text-yellow-400'>Advisory Board</li></Link>
          <Link to='/clients'><li className='hover:text-yellow-400'>Testimonials</li></Link>
          <Link to='/contact'><li className='hover:text-yellow-400'>Contact Us</li></Link>
        </ul>
        <Menu size={34} className='text-white md:hidden cursor-pointer' onClick={() => setShowMenu(true)} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-white z-40 transition-all duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4'>
          <X size={34} className='cursor-pointer' onClick={() => setShowMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-6 mt-6 text-xl font-semibold'>
          <Link to='/' onClick={() => setShowMenu(false)}><li>Home</li></Link>
          <Link to='/aboutus' onClick={() => setShowMenu(false)}><li>About Us</li></Link>
          <Link to='/gallery' onClick={() => setShowMenu(false)}><li>Gallery</li></Link>
          <Link to='/advisoryboard' onClick={() => setShowMenu(false)}><li>Advisory Board</li></Link>
          <Link to='/clients' onClick={() => setShowMenu(false)}><li>Testimonials</li></Link>
          <Link to='/contact' onClick={() => setShowMenu(false)}><li>Contact Us</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
