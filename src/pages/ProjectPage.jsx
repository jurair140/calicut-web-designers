import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const projects = [
  { name: "Urban Cab Service", img: "https://calicutwebdesigners.com/site_assets/img/case/study-grid1.png", link: "#" },
  { name: "Sreekalalayam", img: "https://calicutwebdesigners.com/site_assets/img/case/study-grid2.png", link: "#" },
  { name: "Flyway", img: "https://calicutwebdesigners.com/site_assets/img/case/case-grid11.png", link: "#" },
  { name: "Hoowa", img: "https://calicutwebdesigners.com/site_assets/img/case/case-grid22.png", link: "#" },
  { name: "KTDO", img: "https://calicutwebdesigners.com/site_assets/img/case/case-grid23.png", link: "#" },
  { name: "Brilliance Academy", img: "https://calicutwebdesigners.com/site_assets/img/case/case-grid24.png", link: "#" }
];

const ProjectPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleOverlay = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div>
      <NavBar />
      <div className='container py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-100' id='Projects'>
        
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
          Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
        </h1>
        <p className='text-center text-gray-500 max-w-lg mx-auto mb-20'>
          Specializing in creating stunning, user-friendly websites that drive business growth.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className='relative group overflow-hidden rounded-lg shadow-lg cursor-pointer'
              onClick={() => toggleOverlay(index)}
            >

              {/* Image */}
              <img 
                src={project.img} 
                alt={project.name} 
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />

              <div 
                className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center 
                transition-opacity duration-500 ${activeProject === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                <h2 className='text-xl font-semibold text-white'>{project.name}</h2>
                <a href={project.link} className='mt-2 px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-500 transition'>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default ProjectPage;
