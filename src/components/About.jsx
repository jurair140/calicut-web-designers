import React from 'react';
import { Link } from 'react-router-dom';
import photo7 from '../assets/photo-7.jpg';
import photo8 from '../assets/photo-8.jpg';

const About = () => {
  return (
    <div className="bg-[#0f172a] text-white py-16 px-6 md:px-20 lg:px-32" id="About">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img src={photo7} alt="The Belly Gym" className="rounded-2xl shadow-lg w-full" />
        </div>

        {/* Right Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">About The Belly Gym</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Founded by young entrepreneur <strong>Rohit Thayyil</strong> on <strong>October 10, 2005</strong> in Calicut, Kerala,
            <span className="text-yellow-300"> The Belly Gym</span> started with a focused mission – helping people reduce belly fat. Since then, it has grown into a well-known fitness brand that goes beyond expectations.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Open to anyone struggling with excessive belly fat, The Belly Gym has earned a stellar reputation across the city. With state-of-the-art facilities, air-conditioned spaces, personal attention by certified trainers, and diet counselling by qualified doctors, we ensure every member feels motivated and supported.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            What sets us apart is our focus on hygiene, customer satisfaction, and the use of modern equipment – all within a friendly and inclusive environment.
          </p>
          <Link to="/aboutus">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-all text-black font-semibold px-6 py-3 rounded-full">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Second Image Section */}
      <div className="container mx-auto mt-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Right Text */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-4 text-yellow-400">Why Choose Us?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-3">
            <li>Expert personal trainers focused on belly fat reduction</li>
            <li>Clean, air-conditioned, and hygienic workout environment</li>
            <li>Modern, branded fitness equipment maintained regularly</li>
            <li>Customized training plans based on your fitness level</li>
            <li>Separate attention to male and female fitness needs</li>
          </ul>
        </div>

        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img src={photo8} alt="Gym Equipment" className="rounded-2xl shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
