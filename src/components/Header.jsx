import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

// Import the video from the assets folder
import backgroundVideo from '../assets/background-video.mp4'; // Adjust the extension if needed (e.g., .mp4)

const slides = [
  {
    id: 1,
    title: 'UNLEASH THE BEAST WITHIN',
    description:
      'Join Belly Gym and take your fitness to the next level. Strength, endurance, and transformation — all under one roof.',
  },
  {
    id: 2,
    title: 'TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE',
    description:
      'From beginners to pros, our personalized training and top-notch equipment help you become your best self.',
  },
  {
    id: 3,
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
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden " id="Header">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full sm:h-full object-cover z-0 h-screen"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
        </div>
      </div>
    </div>
  );
};

export default Header;