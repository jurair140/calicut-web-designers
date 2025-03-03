import { ArrowUpRight, ChevronsLeft, ChevronsRight, Link } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {

    const nav = useNavigate()

  return (
    <div className='container  py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden bg-gray-100' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'> specializing in creating stunning, user-friendly websites that drive business growth</p>





    <div className=''>
        <div className='flex flex-wrap justify-around gap-10 mb-8'>

            <div className='relative flex-shrink-0 w-full sm:w-1/4 border '>
                <img src="https://calicutwebdesigners.com/site_assets/img/case/study-grid1.png" className='w-full h-auto mb-14' alt="" />


                <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                    <div className='flex justify-between bg-gray-200 w-3/4 px-4 py-2 shadow-md '>
                    <h2 className='text-xl font-semibold text-gray-800'>
                    Urban cab service
                    </h2>
                    <a href='' className='text-gray-500 hover:text-yellow-800'>
                    <Link/>
                    </a>

                    </div>

                </div>
            </div>

            <div className='relative flex-shrink-0 w-full sm:w-1/4 border'>
                <img src="https://calicutwebdesigners.com/site_assets/img/case/study-grid2.png" className='w-full h-auto mb-14' alt="" />

                
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                    <div className='flex justify-between  w-3/4 px-4 py-2 shadow-md bg-gray-200'>
                    <h2 className='text-xl font-semibold text-gray-800'>
                    Sreekalalayam
                    </h2>
                    <a href='' className='text-gray-500 hover:text-yellow-800'>
                    <Link/>
                    </a>

                    </div>

                </div>


            </div>

            <div className='relative flex-shrink-0 w-full sm:w-1/4 border'>
                <img src="https://calicutwebdesigners.com/site_assets/img/case/case-grid11.png" className='w-full h-auto mb-14' alt="" />

                
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                    <div className='flex justify-between  w-3/4 px-4 py-2 shadow-md bg-gray-200'>
                    <h2 className='text-xl font-semibold text-gray-800'>
                    Flyway                    </h2>
                    <a href='' className='text-gray-500 hover:text-yellow-800'>
                    <Link/>
                    </a>

                    </div>

                </div>


            </div>



           

                
        

          
             
        </div>
       <button className='p-3 bg-blue-600 text-white rounded mx-auto flex' onClick={()=> nav('/projects')}  ><p className='inline'>view more</p><ArrowUpRight /></button>

    </div>

    
        
     


    </div>
  )
}

export default Projects
