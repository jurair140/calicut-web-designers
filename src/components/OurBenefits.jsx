import React from 'react';
import benefil1 from '../assets/photo-11.jpg';
import benefit2 from '../assets/photo-13.jpg';
import benefit3 from '../assets/photo-12.jpg';

const OurBenefits = () => {
  return (
    <div className="bg-black py-20 px-6 md:px-16 lg:px-32 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-yellow-400">Why Choose The Belly Gym?</h2>
        <p className="text-white mt-4 max-w-xl mx-auto">
          Discover what makes us Calicut’s top fitness destination. From advanced equipment to expert guidance, The Belly Gym is built to transform your fitness journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Benefit 1 */}
        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg">
          <img src={benefil1} alt="Hitech Gym Equipments" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Hitech Gym Equipments</h3>
            <p>
              The Belly Gym offers cutting-edge and well-maintained fitness equipment to make your workouts effective and enjoyable — all while vibing to your favorite tunes.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg">
          <img src={benefit2} alt="Benefits of The Belly Gym" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Benefits of The Belly Gym</h3>
            <p>
              Tone up those abs and lose the extra flab at Calicut’s best gym. We specialise in getting you fit, in shape, and feeling amazing. Come feel the difference!
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg">
          <img src={benefit3} alt="Agile Aerobics" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Agile Aerobics</h3>
            <p>
              Get moving with rhythmic exercises designed to boost your endurance and health. Our partner Agile Aerobics brings the best aerobic sessions to Calicut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
