import React from 'react';
import NavBar from '../components/NavBar';

const ServicePage = () => {
    const services = [
        {
          title: 'Website Design',
          description: 'Specialized designs for online stores, focusing on user experience and conversion. Websites built on content management systems like WordPress, Joomla, or Drupal for easy content updates.',
          features: ['Custom website design', 'Responsive web design', 'E-commerce website design', 'CMS-based development'],
          image: 'https://calicutwebdesigners.com/site_assets/img/service/tab1.png',
        },
        {
          title: 'Web Development',
          description: 'Tailored designs that reflect the unique identity and goals of a business. Websites that adapt seamlessly to different devices and screen sizes.',
          features: ['Custom development', 'Responsive development', 'E-commerce websites', 'CMS-based development'],
          image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=600&auto=format&fit=crop&q=60',
        },
        {
          title: 'UI/UX Design',
          description: 'Creating visually appealing and intuitive interfaces. Enhancing user satisfaction by improving usability and accessibility.',
          features: ['User Interface (UI) Design', 'User Experience (UX) Design', 'Wireframing & Prototyping', 'Usability Testing'],
          image: 'https://plus.unsplash.com/premium_photo-1661331840715-086514dff6c2?w=600&auto=format&fit=crop&q=60',
        },
        {
          title: 'Content Management',
          description: 'Writing and curating engaging content for websites. Setting up and maintaining blogs with regular content updates.',
          features: ['Content Creation & Copywriting', 'Blog Design & Management', 'Content Strategy', 'Content Planning'],
          image: 'https://calicutwebdesigners.com/site_assets/img/service/tab4.png',
        },
      ];
      
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-6 md:px-32 py-14 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Services <span className="underline decoration-2 font-light">We Provide</span>
        </h1>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
          Leading Website Development Company
        </p>

        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {index % 2 === 0 && (
              <img src={service.image} className="rounded-lg w-full md:w-1/3" alt={service.title} />
            )}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="border border-blue-700 rounded-full px-4 py-2 text-sm text-blue-700">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            {index % 2 !== 0 && (
              <img src={service.image} className="rounded-lg w-full md:w-1/3" alt={service.title} />
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default ServicePage;

