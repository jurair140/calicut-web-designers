import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center  container mx-auto p-14 md:px-32 w-full overflow-hidden bg-gray-100' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-ofset-4 decoration-1 under font-light'>Our Company</span></h1>

    <p className='text-gray-500 max-w-80 text-center mb-8'>Leading Website Development Company</p>      
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src="https://calicutwebdesigners.com/site_assets/img/about/about-v02.png" className='w-full  max-w-lg' alt="" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>1000+</p>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25K+</p>
                        <p>Completed Projects</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10K+</p>
                        <p>Service Providing</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>100+</p>
                        <p>Experts Support</p>
                    </div>

                </div>
                <p className='my-10 max-w-lg'>
                Welcome to Calicut web designers, where innovation meets excellence in web development. Our mission is to deliver top-notch website solutions tailored to your business needs. With a team of expert developers, we specialize in creating responsive, user-friendly websites that drive results.
                </p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'><Link to={'/aboutus'}> Learn more </Link></button>

            </div>
        </div>
    </div>

  )
}

export default About
