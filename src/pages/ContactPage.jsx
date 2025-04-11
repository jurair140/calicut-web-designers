import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import photoHeader from '../assets/photo-1.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      toast.error('Please enter a valid name.');
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format.');
      return false;
    }
    if (message.trim().length === 0) {
      toast.error('Message cannot be empty.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <NavBar />
       <div className="relative h-64 md:h-[500px] w-full overflow-hidden">
              <img
                src={photoHeader}
                alt="Testimonial Banner"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">Contact Us</h1>
              </div>
            </div>
      
      <div className="bg-black text-white min-h-screen py-12 px-6 lg:px-32">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Let's <span className="text-yellow-400">Connect</span>
        </h1>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Want to join our fitness family or have questions? Reach out to The Belly Gym team and we’ll get back to you ASAP.
        </p>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-16"
        >
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <Phone size={32} className="mx-auto text-yellow-500" />
            <h3 className="text-lg font-semibold mt-4">Call Us</h3>
            <p className="text-gray-700 mt-2 font-medium">+91 984609 2222</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <Mail size={32} className="mx-auto text-yellow-500" />
            <h3 className="text-lg font-semibold mt-4">Email</h3>
            <p className="text-gray-700 mt-2 font-medium">bellygymcalicut@gmail.com</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <MapPin size={32} className="mx-auto text-yellow-500" />
            <h3 className="text-lg font-semibold mt-4">Location</h3>
            <p className="text-gray-700 mt-2 font-medium"> 1st Floor, Sreedhar Building, Above Elite Automobiles,East Nadakkavu, Kozhikode, Kerala</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <Clock size={32} className="mx-auto text-yellow-500" />
            <h3 className="text-lg font-semibold mt-4">Timings</h3>
            <p className="text-gray-700 mt-2 font-medium">Mon - Fri : 7:00 - 21:00</p>
            <p className="text-gray-700 mt-2 font-medium">Sat : 7:00 - 16:00</p>
            <p className="text-gray-700 mt-2 font-medium">Sunday Closed</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-yellow-400">Leave Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-black text-white focus:outline-none focus:ring focus:ring-yellow-500"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-400">Visit Us</h2>
          <iframe
            className="w-full h-72 rounded-lg shadow-xl"
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
