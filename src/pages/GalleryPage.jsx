import React, { useEffect, useState } from 'react';
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
import photoHeader from '../assets/photo-1.jpg';


import NavBar from '../components/NavBar';






const images = ["https://lumea.in/belly6/assets/images/gallery/grid2/pic1.jpg",
                "https://lumea.in/belly6/assets/images/gallery/grid2/pic2.jpg",
                "https://lumea.in/belly6/assets/images/gallery/grid2/pic3.jpg",
                "https://lumea.in/belly6/assets/images/gallery/grid2/pic4.jpg",
                "https://lumea.in/belly6/assets/images/gallery/grid2/pic5.jpg",
                "https://lumea.in/belly6/assets/images/gallery/grid2/pic6.jpg",
                "https://lumea.in/belly6/assets/images/gallery/grid2/pic7.jpg",
              ];


const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [isMobile, setIsMobile] = useState(false);
  const [toggled, setToggled] = useState({});

  // Detect screen width on load and on resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleImageToggle = (id) => {
    setToggled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar/>

      <div className="relative h-64 md:h-full w-full overflow-hidden">
              <img
                src={photoHeader}
                alt="About Us Banner"
                className="w-full  md:h-[500px] opacity-80"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
                  Gallery
                </h1>
              </div>
            </div>

      {/* Gallery */}
      <section className="px-6 py-16 md:px-16 lg:px-32">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-10">Gallery Highlights</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className="rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Popup View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Popup" className="rounded-xl max-h-[90vh] w-auto" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full hover:bg-yellow-500 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Client Transformations */}
      <section className="px-6 py-20 md:px-16 lg:px-32">
  <h3 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-12">
    Client Transformations
  </h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
    {[1, 2, 3].map((id) => (
      <div key={id} className="group relative overflow-hidden rounded-2xl h-[450px] w-sm"
      onClick={() => isMobile && handleImageToggle(id)}

      >
        {/* Before Image */}
        <img
                src={`/transformations/before-${id}.png`}
                alt={`Before ${id}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition duration-700 ease-in-out 
                ${isMobile
                    ? toggled[id] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                    : 'opacity-100 group-hover:opacity-0 group-hover:scale-105'
                  }`}
              />

        {/* After Image */}
        <img
                src={`/transformations/after-${id}.png`}
                alt={`After ${id}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition duration-700 ease-in-out 
                ${isMobile
                    ? toggled[id] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    : 'opacity-0 group-hover:opacity-100 group-hover:scale-100'
                  }`}
              />

      </div>
    ))}
  </div>
</section>



    </div>
  );
};

export default GalleryPage;
