import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Calicut Web Designers is a leading web design company based in Calicut, specializing in creating stunning, user-friendly websites that drive business growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">UI/UX Experience</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Product Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">📞 +91 9207 207 000</p>
            <p className="text-gray-400">📍 Calicut Web Designers, Cherooty Road, Calicut</p>
            <p className="text-gray-400">✉ calicutwebdesigner@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
              <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
              <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
              <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Calicut Web Designers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
