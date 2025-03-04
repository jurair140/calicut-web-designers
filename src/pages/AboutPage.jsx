import React from 'react';
import NavBar from '../components/NavBar';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col items-center container mx-auto p-10 md:px-32 w-full bg-gray-100' id='About'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>
          About <span className='underline decoration-2 font-light'>Our Company</span>
        </h1>
        <p className='text-gray-500 max-w-lg text-center mb-10'>
          Leading Website Development Company
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-12 md:px-20 lg:px-32">
              <img
                src="https://calicutwebdesigners.com/site_assets/img/about/about-v02.png"
                className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[45%] xl:max-w-[40%] rounded-lg shadow-lg"
                alt="About Us"
              />

              <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-start text-gray-600 text-center lg:text-left"
              >
                <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full">
                  {[
                    { number: "1000+", label: "Happy Clients" },
                    { number: "25K+", label: "Completed Projects" },
                    { number: "10K+", label: "Service Providing" },
                    { number: "100+", label: "Experts Support" },
                  ].map((item, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <p className="text-3xl sm:text-4xl font-medium text-gray-800">{item.number}</p>
                      <p className="text-sm sm:text-base">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 max-w-lg text-center lg:text-left leading-relaxed">
                  Welcome to Calicut Web Designers, where innovation meets excellence in web development.
                  Our mission is to deliver top-notch website solutions tailored to your business needs.
                </p>
              </motion.div>
            </div>

      </div>

      <div className='my-20 w-full px-5 md:px-20'>
        <h4 className='text-center text-3xl md:text-4xl font-bold mb-10'>Stages of Development Process</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[   
            { title: 'Discussion', text: 'Requirement Analysis and Concept Development. The process of application development starts with requirement analysis. Entire features will be documented and a feasibility study will be carried out.' },
            { title: 'Designing', text: 'Wireframe Modelling and Prototype Design. Wireframes are used for the visual representation of the application. Then it will be converted into a prototype for building an interactive experience.' },
            { title: 'Development', text: 'Front end Designing and Application Development. Front-end design includes User Interface Designing and User Experience Designing. Both of these are essential for web and mobile applications.' },
            { title: 'Application Testing', text: 'After development, testing will be carried out to evaluate its performance. The application will be hosted on servers after testing.' },
            { title: 'Go Live', text: 'The final step involves deploying the application on live servers. Continuous monitoring and maintenance ensure smooth functionality after launch.' },
          ].map((item, index) => (
            <div key={index} className='relative p-6 border border-gray-300 shadow-lg transition-all duration-300 hover:scale-105 hover:text-blue-700 group'>
              <h2 className='text-xl font-semibold text-center'>{item.title}</h2>
              <p className='absolute left-0 bottom-full w-full bg-white p-4 text-gray-600 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='my-20 w-full px-5 md:px-20'>
        <h4 className='text-center text-3xl md:text-4xl font-bold mb-10'>Meet Our Creative Staff</h4>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center'
        >
          {[
            { name: 'Esther Howard', role: 'CTO & Founder', img: 'https://calicutwebdesigners.com/site_assets/img/team/rd1.png' },
            { name: 'Darlene Robertson', role: 'UI/UX Designer', img: 'https://calicutwebdesigners.com/site_assets/img/team/rd2.png' },
            { name: 'Ralph Edwards', role: 'Software Tester', img: 'https://calicutwebdesigners.com/site_assets/img/team/rd3.png' },
            { name: 'Ronald Richards', role: 'Team Leader', img: 'https://calicutwebdesigners.com/site_assets/img/team/rd4.png' },
          ].map((staff, index) => (
            <div key={index} className='text-center'>
              <img src={staff.img} alt={staff.name} className='rounded-lg shadow-lg' />
              <h2 className='text-xl font-bold mt-3'>{staff.name}</h2>
              <p className='font-semibold'>{staff.role}</p>
              <div className='flex gap-5 mt-4 justify-center'>
                <a href='#' className='hover:text-blue-400 transition'><Facebook /></a>
                <a href='#' className='hover:text-blue-300 transition'><Twitter /></a>
                <a href='#' className='hover:text-pink-400 transition'><Instagram /></a>
                <a href='#' className='hover:text-blue-600 transition'><Linkedin /></a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
