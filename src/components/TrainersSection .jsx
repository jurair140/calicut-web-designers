import React, { useState } from "react";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import trainer4 from "../assets/trainer4.jpg";

const trainers = [
  { name: "DESERT", role: "Fitness Trainer", img: trainer1 },
  { name: "CHARLES", role: "CrossFit Coach", img: trainer2 },
  { name: "JAMES", role: "Dumbbell Trainer", img: trainer3 },
  { name: "AMELIA", role: "Boxing Trainer", img: trainer4 },
];

const TrainersShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-black text-white p-6 md:p-16 lg:p-32">
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 text-4xl font-extrabold mb-2">
          They Are Always Best
        </h2>
        <p className="text-lg font-medium">
          Start your training with our Professional Trainers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => toggleOverlay(index)}
          >
            {/* Trainer Image */}
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 flex items-end justify-center p-6 
                ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } 
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 bg-black/70 text-center text-white
                md:pointer-events-none md:group-hover:pointer-events-auto
              `}
            >
              <div className="p-4 rounded-md w-full">
                <h3 className="text-yellow-400 text-xl font-bold mb-1">
                  {trainer.name}
                </h3>
                <p className="text-sm">{trainer.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainersShowcase;
