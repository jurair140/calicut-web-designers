import React from 'react'
import NavBar from '../components/NavBar'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const AboutPage = () => {
  return (

    <div>
        <NavBar/>
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

            </div>
        </div>
        

        <div className='m-20 w-full '>
            <h4 className='text-center text-4xl font-bold'>Stages of Development Process
            </h4>
            <div className="p-5 md:m-10 md:grid grid-cols-2 gap-5">
                    {[
                        { title: "Discussion", text: "Requirement Analysis and Concept Development. The process of application development starts with requirement analysis. Entire features will be documented and a feasibility study will be carried out." },
                        { title: "Designing", text: "Wireframe Modelling and Prototype Design. Wireframes are used for the visual representation of the application. Then it will be converted into a prototype for building an interactive experience." },
                        { title: "Development", text: "Front end Designing and Application Development. Front-end design includes User Interface Designing and User Experience Designing. Both of these are essential for web and mobile applications." },
                        { title: "Application Testing", text: "Application Testing After development, testing will be carried out to evaluate its performance. The application will be hosted on servers after testing." },
                        { title: "Go Live", text: "The final step involves deploying the application on live servers. Continuous monitoring and maintenance ensure smooth functionality after launch." }
                    ].map((item, index) => (
                        <div key={index} className="relative w-full border border-gray-300 p-10 shadow-2xl transition-all duration-300 hover:scale-105 hover:text-blue-700 group">
                        <h2 className="text-center text-2xl font-semibold ">{item.title}</h2>
                        
                        {/* Hover Text - Appears Over Other Cards */}
                        <p className="absolute left-0 bottom-full w-full bg-white p-4 text-gray-600 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                            {item.text}
                        </p>
                        </div>
                    ))}
            </div>




        </div>

        <div className='w-full'>
             <h4 className='text-center text-4xl font-bold'>Meet our creative staff </h4>
             <div className='flex flex-wrap m-20 justify-around '>
                <div className='mb-10'>
                    <img src="https://calicutwebdesigners.com/site_assets/img/team/rd1.png" alt="" />
                    <h2 className='text-2xl font-bold text-center mt-3'>Esther Howard</h2>
                    <p className='text-center font-semibold'>CTO & Founder</p>
                    <div className="flex gap-5 mt-5 justify-center ">
                        <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
                        <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
                        <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
                        <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
                    </div>
                </div>

                <div className='mb-10'>
                    <img src="https://calicutwebdesigners.com/site_assets/img/team/rd2.png" alt="" />
                    <h2 className='text-2xl font-bold text-center mt-3'>Darlene Robertson</h2>
                    <p className='text-center font-semibold'>UI/UX Designer</p>
                    <div className="flex gap-5 mt-5 justify-center ">
                        <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
                        <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
                        <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
                        <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
                    </div>
                </div>

                <div className='mb-10'>
                    <img src="https://calicutwebdesigners.com/site_assets/img/team/rd3.png" alt="" />
                    <h2 className='text-2xl font-bold text-center mt-3'>Ralph Edwards</h2>
                    <p className='text-center font-semibold'>Software Tester</p>
                    <div className="flex gap-5 mt-5 justify-center ">
                        <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
                        <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
                        <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
                        <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
                    </div>
                </div>

                <div className='mb-10'>
                    <img src="https://calicutwebdesigners.com/site_assets/img/team/rd4.png" alt="" />
                    <h2 className='text-2xl font-bold text-center mt-3'>Ronald Richards</h2>
                    <p className='text-center font-semibold'>Team Leader</p>
                    <div className="flex gap-5 mt-5 justify-center ">
                        <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
                        <a href="#" className="hover:text-blue-300 transition"><Twitter /></a>
                        <a href="#" className="hover:text-pink-400 transition"><Instagram /></a>
                        <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
                    </div>
                </div>

             </div>

        
        
        </div>

    </div>
    </div>
  )
}

export default AboutPage
