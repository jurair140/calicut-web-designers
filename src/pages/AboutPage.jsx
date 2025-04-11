// src/pages/AboutUs.jsx

import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import About from '../components/About';
import photoHeader from '../assets/photo-1.jpg';

const AboutUs = () => {
  const [counts, setCounts] = useState({ members: 0, coaches: 0, programs: 0 });

  useEffect(() => {
    const endValues = { members: 872, coaches: 120, programs: 100 };
    const duration = 1500;
    const steps = 30;
    const interval = duration / steps;

    let step = 0;
    const counter = setInterval(() => {
      step++;
      setCounts({
        members: Math.min(Math.floor((endValues.members / steps) * step), endValues.members),
        coaches: Math.min(Math.floor((endValues.coaches / steps) * step), endValues.coaches),
        programs: Math.min(Math.floor((endValues.programs / steps) * step), endValues.programs),
      });
      if (step >= steps) clearInterval(counter);
    }, interval);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <NavBar />

      {/* Header Banner */}
      <div className="relative h-64 md:h-full w-full overflow-hidden">
        <img
          src={photoHeader}
          alt="About Us Banner"
          className="w-full  md:h-[500px] opacity-80"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
            About Us
          </h1>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Founder Section */}
      <div className="bg-[#1c1c1c] text-white px-6 py-20 md:px-16 lg:px-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image with intersecting badge */}
          <div className="relative w-fit mx-auto">
            <img
              src="https://lumea.in/belly6/assets/images/team/team-7.png"
              alt="Rohit Thayyil"
              className="w-72 h-auto object-cover rounded-lg shadow-lg border-4 border-yellow-400"
            />
            <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-md text-black text-center shadow-md">
              <h2 className="text-lg font-bold leading-tight">Rohit Thayyil</h2>
              <p className="text-xs font-semibold -mt-1">Founder</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              They Are Always Best
            </h3>
            <p className="italic mb-4">
              Start your training with our Professional Trainers
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Which is why we are constantly investing in the very best equipment the fitness industry has to offer and training for all of our team to guarantee that you achieve your fitness goals. Want to be in shape for a special event? Then working with our handpicked personal trainers will guarantee you achieve your goal by using their vast knowledge of what works for your aims and goals. But be warned — they want you to win as much as you do, so they’ll push you that extra step beyond where you normally quit, so that when the day comes, you know you’re going to feel good and look great!
            </p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-yellow-400 text-black text-center py-10 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="text-4xl font-extrabold">{counts.members}+</h4>
          <p className="text-sm font-semibold mt-1">Members</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold">{counts.coaches}+</h4>
          <p className="text-sm font-semibold mt-1">Total Coach</p>
        </div>
        <div>
          <h4 className="text-4xl font-extrabold">{counts.programs}+</h4>
          <p className="text-sm font-semibold mt-1">Exercises Program</p>
        </div>
      </div>

      {/* New Feature Cards Section */}
      <div className="bg-[#111] text-white px-6 py-10 md:px-16 lg:px-32 lg:py-12 border-t border-yellow-400">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10 text-center">
          What Makes Us Different
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: '💪',
              title: 'Elite Training Methods',
              description: 'We adopt scientifically proven workout strategies designed for quick results and long-term performance.',
            },
            {
              icon: '🧠',
              title: 'Mind-Body Focus',
              description: 'We help our members focus not just on muscle, but mental discipline and stress relief too.',
            },
            {
              icon: '⚙️',
              title: 'Smart Equipment',
              description: 'Modern, cutting-edge machines that track your workout and maximize every move.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#1c1c1c] p-5 rounded-xl shadow-md border border-yellow-600 hover:shadow-yellow-400 transition-shadow"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-yellow-400 mb-1">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
