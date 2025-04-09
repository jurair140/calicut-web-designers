import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const GymTiming = () => {
  const timings = [
    {
      title: 'Unisex',
      time: 'MON - SAT 05:00AM - 09:30AM',
    },
    {
      title: 'Ladies Only',
      time: 'MON - SAT 09:30AM - 06:30PM',
    },
    {
      title: 'Unisex',
      time: 'MON - SAT 06:30PM - 10:00PM',
    },
  ];

  return (
    <div className="bg-black py-20 px-6 md:px-16 lg:px-32 text-white w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 uppercase tracking-wide">
          Gym Timings
        </h2>
        <p className="mt-3 text-lg text-gray-300">We are open when you need us most</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {timings.map((slot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900 hover:bg-zinc-800 border border-yellow-500 transition-all duration-300 p-8 rounded-2xl shadow-xl group transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300" size={48} />
              </div>
              <h3 className="text-xl font-bold text-center text-white">{slot.title}</h3>
              <p className="mt-2 text-center text-gray-300 font-medium tracking-wide">{slot.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GymTiming;
