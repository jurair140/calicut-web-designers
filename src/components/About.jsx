import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-6 sm:p-10 md:p-14 lg:px-32 w-full overflow-hidden bg-gray-100'
      id='About'
    >
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center'>
        About <span className='underline decoration-1 font-light'>Our Company</span>
      </h1>
      <p className='text-gray-500 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-8'>
        Leading Website Development Company
      </p>
      
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-10 lg:gap-20 w-full'>
        <img 
          src='https://calicutwebdesigners.com/site_assets/img/about/about-v02.png' 
          className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl' 
          alt='About Us' 
        />
        
        <div className='flex flex-col items-center md:items-start mt-6 md:mt-10 text-gray-600 w-full px-4 sm:px-6 md:px-0'>
          <div className='grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full 2xl:pr-28 text-center md:text-left'>
            <div>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>1000+</p>
              <p className='text-sm sm:text-base'>Happy Clients</p>
            </div>
            <div>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>25K+</p>
              <p className='text-sm sm:text-base'>Completed Projects</p>
            </div>
            <div>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>10K+</p>
              <p className='text-sm sm:text-base'>Service Providing</p>
            </div>
            <div>
              <p className='text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800'>100+</p>
              <p className='text-sm sm:text-base'>Experts Support</p>
            </div>
          </div>
          
          <p className='my-6 sm:my-8 md:my-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center md:text-left'>
            Welcome to Calicut Web Designers, where innovation meets excellence in web development. Our mission is to deliver top-notch website solutions tailored to your business needs. With a team of expert developers, we specialize in creating responsive, user-friendly websites that drive results.
          </p>
          
          <button className='bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base'>
            <Link to={'/aboutus'}> Learn More </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
