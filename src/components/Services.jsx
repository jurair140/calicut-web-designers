import { Brush, Database, Laptop, Phone, ShoppingCart, Smartphone } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <div className='container  py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden bg-gray-100 pb-20' id='Service'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our<span className='underline underline-offset-4 decoration-1 under font-light'>Services</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'> specializing in creating stunning, user-friendly websites that drive business growth</p>


      <div className='flex p-5 flex-wrap justify-around'>
        <div className=' shadow-2xl bg-white max-w-50 rounded p-10 mb-3 hover:bg-amber-500 transition-colors duration-300'>
        <Brush size={40} color="#343432" className='mx-auto'/>
            <h3 className='text-xl font-bol'>Web Design </h3>
        </div>

        <div className=' shadow-2xl bg-white max-w-50 rounded p-10 mb-3 hover:bg-amber-500'>
        <Database size={40} color="#343432" className='mx-auto'/>
            <h3 className='text-xl font-bol'>Web Development</h3>
        </div>

        <div className=' shadow-2xl bg-white max-w-50 rounded p-10 mb-3 hover:bg-amber-500'>
        <Laptop size={40} color="#343432" className='mx-auto'/>
            <h3 className='text-xl font-bol'>Wordpress Websites </h3>
        </div>

        <div className=' shadow-2xl bg-white max-w-50 rounded p-10 mb-3 hover:bg-amber-500'>
        <Smartphone size={40} color="#343432" className='mx-auto'/>
            <h3 className='text-xl font-bol'>Mobile App Development</h3>
        </div>

        <div className=' shadow-2xl bg-white max-w-50 rounded p-10 mb-3 hover:bg-amber-500'>
        <ShoppingCart size={40} color="#343432" className='mx-auto'/>
            <h3 className='text-xl font-bol'>Ecommerce Application </h3>
        </div>

       

        

      </div>

      
    </div>
  )
}

export default Services
