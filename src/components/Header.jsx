import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

import hero1 from '../assets/photo-1.jpg';
import hero2 from '../assets/photo-3.jpg';
import hero3 from '../assets/photo-4.jpg';

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'UNLEASH THE BEAST WITHIN',
    description:
      'Join Belly Gym and take your fitness to the next level. Strength, endurance, and transformation — all under one roof.',
  },
  {
    id: 2,
    image: hero2,
    title: 'TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE',
    description:
      'From beginners to pros, our personalized training and top-notch equipment help you become your best self.',
  },
  {
    id: 3,
    image: hero3,
    title: 'STRONGER EVERYDAY AT BELLY GYM',
    description:
      'Push your limits with expert trainers, intense workouts, and the motivation you need to keep going.',
  },
];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" id="Header">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* NavBar Always on Top */}
      <div className="relative z-30">
        <NavBar />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen bg-black/50 text-white px-6 text-center md:px-20 lg:px-32">
        <h2 className="text-5xl sm:text-6xl md:text-[72px] max-w-4xl font-extrabold drop-shadow-[3px_3px_0_black] uppercase tracking-wide">
          {slides[index].title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl drop-shadow-[2px_2px_0_black] font-medium">
          {slides[index].description}
        </p>
        <div className="space-x-6 mt-12">
          <Link to={'/membership'}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded font-semibold shadow-md transition">
              Join Now
            </button>
          </Link>
          <Link to={'/'}>
            <button className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition">
              Book Free Trial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
