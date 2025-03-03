import React from 'react';
import { Star, Briefcase, Users } from 'lucide-react'; // Importing icons
import NavBar from '../components/NavBar';

// Sample client testimonials
const testimonials = [
  {
    name: "Samuel John",
    image: "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?ga=GA1.1.1807393414.1720174797&semt=ais_hybrid"

    ,
    rating: 5,
    feedback: "Using this service has been a game-changer for me. The interface is smooth, and everything works seamlessly.",
  },
  {
    name: "Lara",
    image: "https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-coral-pink-studio-background-with-copyspace_155003-46026.jpg?ga=GA1.1.1807393414.1720174797&semt=ais_hybrid"
,
    rating: 5,
    feedback: "Impressed by the efficiency. This product has saved me so much time and effort in my daily tasks.",
  },
  {
    name: "David Isaac",
    image: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.1807393414.1720174797&semt=ais_hybrid"

,
    rating: 5,
    feedback: "From excellent customer support to a user-friendly interface, this service has exceeded my expectations.",
  },
];

// Sample brand partners
const brands = [
    { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" },
    { name: "Tesla", img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" }
  ]

const TrustedClients = () => {
  return (
    <div>
      <NavBar />
      <div className='container mx-auto py-10 lg:px-32 w-full bg-gray-100' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
          Our <span className='underline underline-offset-4 decoration-1 font-light'>Trusted Clients</span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-lg mx-auto'>
          Real stories from our satisfied customers and partners.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 bg-white shadow-md p-6 rounded-lg">
          {brands.map((brand, index) => (
            <div key={index} className="p-4">
              <img src={brand.img} alt={brand.name} className="w-32 max-h-15 object-contain" />
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className='flex flex-wrap justify-center gap-8 mt-12 bg-gray-100'>
          {testimonials.map((client, index) => (
            <div key={index} className='max-w-[340px] shadow-lg bg-white rounded px-8 py-12 text-center'>
              <img src={client.image} className='w-20 h-20 rounded-full mx-auto mb-4' alt={client.name} />
              <h2 className='text-xl text-gray-700 font-medium'>{client.name}</h2>
              <div className='flex items-center justify-center mb-4'>
                {[...Array(client.rating)].map((_, i) => (
                  <Star key={i} color="#fbbf24" fill="#fbbf24" />
                ))}
              </div>
              <p className='text-gray-600'>{client.feedback}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-10 text-gray-700">
            <div className="flex flex-col items-center">
              <Briefcase size={40} className="text-yellow-600" />
              <p className="text-lg font-semibold mt-2">50+ Business Partners</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={40} className="text-yellow-600" />
              <p className="text-lg font-semibold mt-2">1000+ Happy Clients</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustedClients;
