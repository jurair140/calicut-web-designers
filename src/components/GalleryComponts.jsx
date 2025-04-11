import { useState } from 'react';
import { X } from 'lucide-react';

function GalleryComponts() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const panels = [
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic1.jpg" },
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic2.jpg" },
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic3.jpg" },
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic4.jpg" },
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic5.jpg" },
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic6.jpg" },
    { image: "https://lumea.in/belly6/assets/images/gallery/grid2/pic7.jpg" },  
  ];

  const handleClick = (index) => {
    if (window.innerWidth < 768) {
      setModalImage(panels[index].image);
      setIsModalOpen(true);
    } else {
      setExpandedIndex(index);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Fullscreen blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center blur-sm brightness-50 z-0 transition-all duration-500"
        style={{ backgroundImage: `url(${panels[expandedIndex].image})` }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 px-4 pt-16 pb-8 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-6 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
            Our Gallery
          </h2>
          <p className="text-sm sm:text-base text-white max-w-md mx-auto">
            Where dedication meets transformation — swipe through the grind!
          </p>
        </div>

        {/* Gallery */}
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center sm:h-[80vh] gap-4">
          {/* Desktop view */}
          <div className="hidden sm:flex w-full h-full gap-2 items-center justify-center px-4">
            {panels.map((panel, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`h-full rounded-2xl cursor-pointer overflow-hidden bg-white transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? 'w-[60%]' : 'w-[10%] hover:bg-gray-200'
                }`}
              >
                <img src={panel.image} alt="" className="w-full h-full object-cover object-top" />
              </div>
            ))}
          </div>

          {/* Mobile view */}
          <div className="sm:hidden grid grid-cols-2 gap-3 w-full px-2">
            {panels.map((panel, index) => (
              <img
                key={index}
                src={panel.image}
                onClick={() => handleClick(index)}
                className="rounded-lg object-cover w-full h-44 cursor-pointer border-2 border-yellow-400"
                alt=""
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-8">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            View More
          </button>
        </div>
      </div>

      {/* Modal for mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-md bg-black p-4 rounded-lg">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white">
              <X size={24} />
            </button>
            <img src={modalImage} alt="Enlarged" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </main>
  );
}

export default GalleryComponts;
