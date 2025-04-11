import React from 'react';
import photoHeader from '../assets/photo-1.jpg';

import test1 from '../assets/photo-13.jpg';
import test12 from '../assets/photo-12.jpg';
import NavBar from '../components/NavBar';

const testimonials = [
  { name: 'Dr. DEEPA RAJESH', role: 'Consultant Paediatrician, Starcare Hospital', feedback: 'Belly Gym...A perfect blend of state of the art fitness equipments, qualified trainers and ever supportive management.', image: test1 },
  { name: 'PRADEEP KUMAR C.K.', role: 'Vice President & Cluster head, Axis Bank', feedback: 'The Belly Gym makes my morning session exciting. Techniques they follow are innovative.', image: test1 },
  { name: 'JEEJA DHIRAJ', role: 'Centre Head, Maple Bear Canadian Pre-School', feedback: 'I like the way the gym is maintained esp. the hygiene & the courteous staff & trainers.', image: test1 },
  { name: 'JOSSY CHERIAN', role: 'Deputy Superintendent of Police, Crime Branch', feedback: 'The personal training in Belly Gym is very unique. Equipments are up to international standards.', image: test1 },
  { name: 'M. Ashokan', role: 'Leading criminal lawyer', feedback: 'I love working out daily at the belly gym. Trainers are qualified, assertive & supportive.', image: test1 },
  { name: 'RAJEEV MENON', role: 'Bureau Chief, Malayala Manorama', feedback: 'Whenever I am in Calicut I never miss my sessions at The Belly Gym.', image: test1 },
  { name: 'LATHA KUMAR', role: 'Social Activist', feedback: 'My overall personality was changed and thanks to the trainers and management of The Belly Gym.', image: test1 },
  { name: 'HONEY', role: 'Customer Relations Officer, BMW Calicut', feedback: 'I have been working out at The Belly Gym since its inception & I am happy with their service.', image: test12 },
];

const TrustedClients = () => {
  return (
    <div className="bg-black text-white">
      <NavBar />

      {/* Hero Header */}
      <div className="relative h-64 md:h-[500px] w-full overflow-hidden">
        <img
          src={photoHeader}
          alt="Testimonial Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">Testimonials</h1>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-yellow-400 mb-12">What Our Clients Say</h2>
        
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-yellow-500 object-cover"
                />
                <div>
                  <h4 className="text-yellow-400 font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrustedClients;
