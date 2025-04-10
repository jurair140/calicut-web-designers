import React from 'react';
import { Dumbbell, Users, ShieldCheck, CalendarCheck, Wind } from 'lucide-react';

const features = [
  {
    title: 'State-of-the-Art Equipment',
    icon: <Dumbbell className="w-10 h-10 text-yellow-400" />,
    description:
      'We use branded cardio, fitness & strength machines that are hygienically maintained and regularly serviced. No waiting—just workout.',
  },
  {
    title: 'Designed for Men & Women',
    icon: <Users className="w-10 h-10 text-yellow-400" />,
    description:
      'Trainers tailor workouts based on your medical status, body type, and fitness level. Machines & routines fit both men and women perfectly.',
  },
  {
    title: 'Premium Amenities',
    icon: <Wind className="w-10 h-10 text-yellow-400" />,
    description:
      'Air-conditioned gym with an ozone generator for clean airflow. Includes washrooms & dressing rooms for comfort and convenience.',
  },
  {
    title: 'Certified Trainers',
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
    description:
      'Our trainers are certified experts who offer safe, effective, and motivating guidance to help you reach your fitness goals.',
  },
  {
    title: 'Flexible Membership Plans',
    icon: <CalendarCheck className="w-10 h-10 text-yellow-400" />,
    description:
      'Choose from a range of membership options to suit your schedule and budget — daily, monthly, quarterly, or annual plans available.',
  },
];

const Services = () => {
  return (
    <div className="bg-black py-20 px-6 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-12">
        Elite Features
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-16 lg:px-32">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/5 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-yellow-400/20"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-300 text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-center text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
