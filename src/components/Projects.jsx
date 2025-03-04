import { ArrowUpRight, Link as LucideLink } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {
    const nav = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container py-4 pt-20 px-6 md:px-16 lg:px-24 xl:px-32 my-20 w-full overflow-hidden bg-gray-100'
            id='Projects'
        >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
            </h1>
            <p className='text-center text-gray-500 mb-8 max-w-lg mx-auto'>
                Specializing in creating stunning, user-friendly websites that drive business growth.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8'>
                {[
                    {
                        img: 'https://calicutwebdesigners.com/site_assets/img/case/study-grid1.png',
                        title: 'Urban Cab Service',
                        link: '#'
                    },
                    {
                        img: 'https://calicutwebdesigners.com/site_assets/img/case/study-grid2.png',
                        title: 'Sreekalalayam',
                        link: '#'
                    },
                    {
                        img: 'https://calicutwebdesigners.com/site_assets/img/case/case-grid11.png',
                        title: 'Flyway',
                        link: '#'
                    }
                ].map((project, index) => (
                    <div key={index} className='relative w-full border rounded-lg shadow-md overflow-hidden'>
                        <img src={project.img} className='w-full h-auto mb-14 object-cover' alt={project.title} />

                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='flex justify-between items-center bg-gray-200 w-3/4 px-4 py-2 rounded-lg shadow-md'>
                                <h2 className='text-lg sm:text-xl font-semibold text-gray-800'>{project.title}</h2>
                                <a href={project.link} className='text-gray-500 hover:text-yellow-800'>
                                    <LucideLink />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className='p-3 bg-blue-600 text-white rounded mx-auto flex items-center hover:bg-blue-700 transition duration-300'
                onClick={() => nav('/projects')}
            >
                <p className='inline mr-2'>View More</p> <ArrowUpRight />
            </button>
        </motion.div>
    )
}

export default Projects
