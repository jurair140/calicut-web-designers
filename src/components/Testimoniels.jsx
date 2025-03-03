import { Star } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Testimoniels = () => {
  return (
    <motion.div
        initial ={{opacity:0 , x:-300}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
     className='container mx-auto py-10 lg:px-32 w-full overflow-hidden bg-gray-100' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonieals</span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Real stories from our satisfied customers.
        </p>

        <div className='flex flex-wrap justify-center gap-8 bg-gray-100 '>
            <div className='max-w-[340px] shadow-2xl bg-white rounded px-8 py-12 text-center'>
                <img src="
                    https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?ga=GA1.1.1807393414.1720174797&semt=ais_hybrid"

                className='w-20 h-20 rounded-full mx-auto mb-4' 
                alt="" />

                <h2 className='text-xl text-gray-700 font-medium'>Samual John</h2>
                <div className='flex items-center justify-center mb-4'>
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />

                </div>
                <p className='text-gray-600'>
                Using this service has been a game-changer for me. The interface is smooth, the features are well-designed, and everything works seamlessly. I highly recommend it to anyone looking for a reliable solution.
                </p>
            </div>


            <div className='max-w-[340px] shadow-2xl bg-white rounded px-8 py-12 text-center'>
                <img src="
                   https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-coral-pink-studio-background-with-copyspace_155003-46026.jpg?ga=GA1.1.1807393414.1720174797&semt=ais_hybrid"

                className='w-20 h-20 rounded-full mx-auto mb-4' 
                alt="" />

                <h2 className='text-xl text-gray-700 font-medium'>Lara</h2>
                <div className='flex items-center justify-center mb-4'>
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />

                </div>
                <p className='text-gray-600'>
                I was impressed by the ease of use and efficiency. The team behind this product has done an outstanding job ensuring a seamless experience. It has saved me so much time and effort in my daily tasks.
                </p>
            </div>

            <div className='max-w-[340px] shadow-2xl bg-white rounded px-8 py-12 text-center'>
                <img src="
                    https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.1807393414.1720174797&semt=ais_hybrid"

                className='w-20 h-20 rounded-full mx-auto mb-4' 
                alt="" />

                <h2 className='text-xl text-gray-700 font-medium'>David isaac</h2>
                <div className='flex items-center justify-center mb-4'>
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />
                <Star color="#91a211" />

                </div>
                <p className='text-gray-600'>
                From excellent customer support to a user-friendly interface, this service has exceeded my expectations. I’ve tried many alternatives, but nothing comes close to the convenience and performance this offers.
                </p>
            </div>



        </div>




      
    </motion.div>
  )
}

export default Testimoniels










