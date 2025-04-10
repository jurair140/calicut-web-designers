import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import photo14 from '../assets/photo-13.jpg';
import Video1 from '../assets/video-1.mp4';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-10 md:px-12 lg:px-32 flex flex-col-reverse md:flex-row items-center gap-10">
      
      {/* Left Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start relative">
        {/* Video Block */}
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg overflow-hidden border-r-[18px] border-b-[18px] border-black z-10">
          <video
            src={Video1}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1 right-0 bg-yellow-400 text-black px-4 py-2">
            <div className="text-3xl md:text-4xl font-bold">20</div>
            <div className="text-xs md:text-sm font-semibold">YEAR EXPERIENCE</div>
          </div>
        </div>

        {/* Image Behind */}
        <img
          src={photo14}
          alt="Bodybuilder"
          className="w-[280px] md:w-[400px] shadow-lg absolute bottom-[-40px] md:bottom-[-110px] left-[60px]  z-0"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex flex-col">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-2"
        >
          Wake up it's time
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          To Take The <span className="text-yellow-400">Action</span>
        </motion.h1>

        <p className="italic text-base md:text-lg mb-4">
          Start Your Training With Our Professional Trainers
        </p>

        <p className="mb-6 text-gray-300 text-sm md:text-base">
          The Belly Gym was founded by young entrepreneur, Rohit Thayyil on October 10th, 2005 in Calicut, Kerala. The Belly Gym which started with the specific aim of helping members reduce belly fat, has exceeded all expectations which our members had, in terms of quality and service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            "Personal Training",
            "Boxing Classess",
            "Body Building",
            "Cardio And More",
            "Personal Training",
            "Boxing Classess",
            "Body Building",
            "Cardio And More",
          ].map((service, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <Check className="text-yellow-400 w-4 h-4" />
              <span className="italic text-sm md:text-base">{service}</span>
            </div>
          ))}
        </div>

        <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-500 transition w-fit">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
