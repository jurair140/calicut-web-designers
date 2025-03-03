import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const validateForm = () => {
      const { name, email, message } = formData;
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!nameRegex.test(name)) {
        toast.error('Name should contain only alphabets.');
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
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden bg-gray-100' id='Contact'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact <span className='underline underline-offset-4 decoration-1 font-light'>Our Team</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Keep in touch with us. We are always here to help you.
      </p>

      {/* Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Leave A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
    </div>
  );
};

export default Contact;
