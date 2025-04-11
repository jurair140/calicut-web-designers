import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-3">About The Belly Gym</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              With the state-of-the-art facilities, personal attention by qualified trainers, air conditioned rooms, 
              hygienic atmosphere, doctors for diet counseling and with most modern equipment, The Belly Gym has 
              established as a well-known brand within a short span of time in the city.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 ">
             
              <Link to='/' onClick={() => setShowMenu(false)}><li className="text-gray-400 hover:text-white transition">Home</li></Link>
              <Link to='/aboutus' onClick={() => setShowMenu(false)}><li className="text-gray-400 hover:text-white transition">About Us</li></Link>
              <Link to='/gallery' onClick={() => setShowMenu(false)}><li className="text-gray-400 hover:text-white transition">Gallery</li></Link>
              <Link to='/advisoryboard' onClick={() => setShowMenu(false)}><li className="text-gray-400 hover:text-white transition">Advisory Board</li></Link>
              <Link to='/clients' onClick={() => setShowMenu(false)}><li className="text-gray-400 hover:text-white transition"> Testimonials</li></Link>
              <Link to='/contact' onClick={() => setShowMenu(false)}><li className="text-gray-400 hover:text-white transition">Contact Us</li></Link>
            </ul>
          </div>

         

          <div>
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-400">📍 1st Floor, Sreedhar Building, Above Elite Automobiles,</p>
            <p className="text-gray-400">East Nadakkavu, Kozhikode, Kerala</p>
            <p className="text-gray-400">📞 +91 984609 2222</p>
            <p className="text-gray-400">✉ mail@thebellygym.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
              <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
              <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
              <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} All Rights Reserved. | Designed and developed by<a href="https://www.calicutwebdesigners.com"   target="_blank" className='hover:text-amber-600'> Calicut Web Designers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;