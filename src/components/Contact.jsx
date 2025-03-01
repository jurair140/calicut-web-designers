import React from 'react';

const Contact = () => {
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
      <form action="" className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input 
              type="text" 
              name="Name" 
              placeholder="Your Name" 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input 
              type="tel" 
              name="Phone" 
              placeholder="Your Phone Number" 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              name="Email" 
              placeholder="Your Email Address" 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea 
              name="Message" 
              placeholder="Write your message..." 
              rows="5" 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Contact;
