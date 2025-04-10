import React, { useState } from 'react';
import photo1 from '../assets/photo-1.jpg';
import photo2 from '../assets/photo-2.jpg';
import photo3 from '../assets/photo-3.jpg';
import photo4 from '../assets/photo-4.jpg';
import photo5 from '../assets/photo-5.jpg';
import photo6 from '../assets/photo-6.jpg';
import photo7 from '../assets/photo-7.jpg';
import photo8 from '../assets/photo-8.jpg';
import photo9 from '../assets/photo-9.jpg';
import photo10 from '../assets/photo-10.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="bg-black py-16 px-6 md:px-16 lg:px-32 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-10">Gallery Highlights</h2>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, 6).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`gallery-${i}`}
            className="cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300 h-64 w-100" 
            onClick={() => openImage(img)}
            
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="selected" className="max-w-full max-h-screen rounded-lg shadow-xl" />
            <button
              className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm hover:bg-yellow-500"
              onClick={closeImage}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <a
          href="/gallery"
          className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          View Full Gallery
        </a>
      </div>

      {/* <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">Our Clients on Instagram</h3>
       
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
            <div className="w-full md:w-[340px] h-[600px] overflow-hidden rounded-xl relative group">
                <iframe
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                src="https://www.instagram.com/reel/Cqxk0oUuGn3/embed"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                ></iframe>
            </div>

            <div className="w-full md:w-[340px] h-[600px] overflow-hidden rounded-xl relative group">
                <iframe
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                src="https://www.instagram.com/reel/Cqxk0oUuGn3/embed"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                ></iframe>
            </div>

            <div className="w-full md:w-[340px] h-[600px] overflow-hidden rounded-xl relative group">
                <iframe
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                src="https://www.instagram.com/reel/Cqxk0oUuGn3/embed"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                ></iframe>
            </div>
  
        </div> */}

      {/* </div> */}
    </div>
  );
};

export default GalleryComponent;
