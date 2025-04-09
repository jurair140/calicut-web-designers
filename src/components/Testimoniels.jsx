import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// import test1 from '@/assets/test1.jpg';
// import test2 from '@/assets/test2.jpg';
// import test3 from '@/assets/test3.jpg';
// import test4 from '@/assets/test4.jpg';
// import test5 from '@/assets/test5.jpg';
// import test6 from '@/assets/test6.jpg';
// import test7 from '@/assets/test7.jpg';
// import test8 from '@/assets/test8.jpg';
// import test9 from '@/assets/test9.jpg';
// import test10 from '@/assets/test10.jpg';
// import test11 from '@/assets/test11.jpg';
// import test12 from '@/assets/test12.jpg';
// import test13 from '@/assets/test13.jpg';
// import test14 from '@/assets/test14.jpg';
// import test15 from '@/assets/test15.jpg';

import test1 from '../assets/photo-13.jpg';
import test2 from '../assets/photo-13.jpg';
import test3 from '../assets/photo-13.jpg';
import test4 from '../assets/photo-13.jpg';
import test5 from '../assets/photo-13.jpg';
import test6 from '../assets/photo-13.jpg';
import test7 from '../assets/photo-13.jpg';
import test8 from '../assets/photo-13.jpg';
import test9 from '../assets/photo-13.jpg';
import test10 from '../assets/photo-13.jpg';
import test11 from '../assets/photo-13.jpg';
import test12 from '../assets/photo-12.jpg'; // default image
import test13 from '../assets/photo-13.jpg';
import test14 from '../assets/photo-13.jpg';
import test15 from '../assets/photo-13.jpg';


const testimonials = [
  { name: 'Dr. DEEPA RAJESH', role: 'Consultant Paediatrician, Starcare Hospital', feedback: 'Belly Gym...A perfect blend of state of the art fitness equipments, qualified trainers and ever supportive management. The scientifically driven, personalised work out sessions are really impressive and rejuvenating.. Thanks to the entire team for the great effort.', image: test1 },
  { name: 'PRADEEP KUMAR C.K.', role: 'Vice President & Cluster head, Axis Bank', feedback: 'The Belly Gym makes my morning session exciting. This makes my body fit during my busy schedule. Techniques they follow are innovative.', image: test2 },
  { name: 'JEEJA DHIRAJ', role: 'Centre Head, Maple Bear Canadian Pre-School', feedback: 'I like the way the gym is maintained esp. the hygiene & the courteous staff & trainers.', image: test3 },
  { name: 'JOSSY CHERIAN', role: 'Deputy Superintendent of Police, Crime Branch, Calicut City', feedback: 'The personal training in Belly Gym is very unique suitable for the individual body requirements and restrictions. The gym equipments are upto international standards and well maintained.', image: test4 },
  { name: 'M. Ashokan', role: 'Leading criminal lawyer', feedback: 'I love working out daily at the belly gym because their trainers are well qualified, assertive & supportive.', image: test5 },
  { name: 'RAJEEV MENON', role: 'Bureau Chief, Malayala Manorama', feedback: 'Whenever I am in Calicut I never miss my sessions at The Belly Gym.', image: test6 },
  { name: 'LATHA KUMAR', role: 'Social Activist', feedback: 'I joined The Belly Gym to reduce my belly. However, my fitness classes had an effect on both body and mind. My overall personality was changed and thanks to the trainers and management of The Belly Gym.', image: test7 },
  { name: 'A J BABU', role: 'Deputy Superintendent of Police, Calicut City.', feedback: 'I love to workout at the belly gym because of the cleanliness, discipline and good attitude of the trainers and the management.', image: test8 },
  { name: 'DR. SHEELA ANIL', role: 'Phychologist, Navajeevan Community Mental Heath Centre', feedback: 'The techniques they follow are scientific & effective. I am satisfied with every aspect of this gym, esp. the trainers & management.', image: test9 },
  { name: 'RAJESH VALIYAVEETTIL', role: 'Corporate Manager, Paragon Group of Restaurants', feedback: 'Hats off to Rohit for initiating a gym concentrating on belly reduction. I lost 11 kgs after joining The Belly Gym. Thanks to the trainer\'s personal attention & care.', image: test10 },
  { name: 'QUILINA MOHAN', role: 'Customer Service Executive', feedback: 'The doctor’s personal health & diet counseling in The Belly Gym made my life change. I was able to learn many tips which were beneficial in weight loss & maintenance.', image: test11 },
  { name: 'HONEY', role: 'Customer Relations Officer, BMW Calicut', feedback: 'I have been working out at The Belly Gym since its inception & I am happy with their service & techniques.', image: test12 },
  { name: 'DIVYA SUDHEER', role: 'Managing Director, Alankrithi Designers', feedback: 'I start my day with the workout sessions at The Belly Gym & Agile Aerobics. The sessions which are invigorating & refreshing makes me stay active throughout the day.', image: test13 },
  { name: 'ADIRAJA ARSHAD', role: 'Managing Director, Pik-Nik Dates', feedback: 'The Belly Gym is a trustworthy centre which caters to the need of the modern man.', image: test14 },
  { name: 'AHSAN ABDULLAH', role: 'General Manager, Thakhiyudheen & Associates, Chartered Accountants', feedback: 'I heard about The Belly Gym from my friends and the name itself attracted me because belly itself was my problem. Within short time Belly Gym became addictive due to the changes it brought in me. It made me confident and changed my personality. I would really recommend joining there.', image: test15 },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className='bg-black py-16 text-white'>
      <h2 className='text-3xl sm:text-4xl text-center font-bold mb-10 text-yellow-400'>What Our Clients Say</h2>
      <div className='max-w-3xl mx-auto px-6 relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center'
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-500'
            />
            <p className='italic text-gray-300 mb-4'>"{testimonial.feedback}"</p>
            <h4 className='text-yellow-400 font-bold'>{testimonial.name}</h4>
            <span className='text-sm text-gray-400'>{testimonial.role}</span>
          </motion.div>
        </AnimatePresence>
        <div className='flex justify-center mt-6 gap-2'>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${index === i ? 'bg-yellow-400' : 'bg-gray-600'} transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
