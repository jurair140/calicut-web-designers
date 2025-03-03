import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import NavBar from '../components/NavBar';

const ContactPage = () => {
  return (
    <>
    <NavBar/>
   
    <div className="container mx-auto px-6 lg:px-32 py-12 bg-gray-100">
        
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        Get In <span className="underline underline-offset-4 decoration-1 font-light">Touch</span>
      </h1>
      <p className="text-center text-gray-500 max-w-lg mx-auto mb-12">
        Have questions? Reach out to us and we'll get back to you as soon as possible.
      </p>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Phone size={32} className="mx-auto text-blue-600" />
          <h3 className="text-lg font-semibold mt-4">Phone & Fax</h3>
          <p className="text-gray-600 mt-2">+91 9207 207 000</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Mail size={32} className="mx-auto text-red-600" />
          <h3 className="text-lg font-semibold mt-4">Mail Address</h3>
          <p className="text-gray-600 mt-2">calicutwebdesigner@gmail.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <MapPin size={32} className="mx-auto text-green-600" />
          <h3 className="text-lg font-semibold mt-4">Our Location</h3>
          <p className="text-gray-600 mt-2">Indo Arcade, Near Beach, Calicut</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Clock size={32} className="mx-auto text-yellow-600" />
          <h3 className="text-lg font-semibold mt-4">Office Hours</h3>
          <p className="text-gray-600 mt-2">Sun - Sat: 09 AM - 06 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Leave A Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Find Us on the Map</h2>
        <iframe
          className="w-full h-72 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8372950570797!2d75.77661791531944!3d11.258753451289204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfa49353e8b%3A0xf021c3a517c1d9cf!2sCalicut%20Beach!5e0!3m2!1sen!2sin!4v1641203657342"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
