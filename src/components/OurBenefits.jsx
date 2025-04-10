import React from "react";
import video1 from "../assets/video-1.mp4";
import { LucideDumbbell, LucideUser, LucideMedal } from "lucide-react";
import photo9 from '../assets/photo-9.jpg';



const OurBenefits = () => {
  return (
   
    <div className="bg-black text-white  px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-8  bg-opacity-80 items-center justify-center  sm-mt-[-100px] min-h-screen min-w-screen"
    style={{
      backgroundImage: `url(${photo9})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
     
    {/* Left Column - 8 parts */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-18 col-span-12 md:col-span-8 p-18 ">
      {/* Cards go here */}
      {/* Card 1 */}
      <div className="bg-[#1c1c1c] p-6 rounded-lg border-l-4 border-yellow-400 shadow-md ">
        <LucideDumbbell className="text-yellow-400 w-10 h-10 mb-4" />
        <h3 className="text-xl font-bold mb-2">Hitech Gym Equipments</h3>
        <p className="text-sm mb-4">
          The Belly Gym offers cutting-edge and well-maintained fitness equipment & facilities.
        </p>
        <a href="#" className="text-yellow-400 font-semibold hover:underline">
          Read More →
        </a>
      </div>
  
      {/* Card 2 */}
      <div className="bg-[#1c1c1c] p-6 rounded-lg border-r-4 border-yellow-400 shadow-md">
        <LucideUser className="text-yellow-400 w-10 h-10 mb-4" />
        <h3 className="text-xl font-bold mb-2">Benefits</h3>
        <p className="text-sm mb-4">
          Tone up those abs and lose the extra flab at Calicut’s best gym. We specialize in getting you fit.
        </p>
        <a href="#" className="text-yellow-400 font-semibold hover:underline">
          Read More →
        </a>
      </div>
  
      {/* Card 3 */}
      <div className="bg-[#1c1c1c] p-6 rounded-lg border-l-4 border-yellow-400 shadow-md">
        <LucideMedal className="text-yellow-400 w-10 h-10 mb-4" />
        <h3 className="text-xl font-bold mb-2">Agile Aerobics</h3>
        <p className="text-sm mb-4">
          Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with strength training.
        </p>
        <a href="#" className="text-yellow-400 font-semibold hover:underline">
          Read More →
        </a>
      </div>
  
      {/* Card 4 */}
      <div className="bg-[#1c1c1c] p-6 rounded-lg border-r-4 border-yellow-400 shadow-md">
        <LucideMedal className="text-yellow-400 w-10 h-10 mb-4" />
        <h3 className="text-xl font-bold mb-2">Our Timeline</h3>
        <p className="text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <a href="#" className="text-yellow-400 font-semibold hover:underline">
          Read More →
        </a>
      </div>
    </div>
  
    {/* Right Column - 4 parts */}
    <div className="col-span-12 md:col-span-4 w-[400px] h-[400px] overflow-hidden  md:block my-auto">
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-lg"
      />
    </div> 
  
  </div>
  )
}

export default OurBenefits
