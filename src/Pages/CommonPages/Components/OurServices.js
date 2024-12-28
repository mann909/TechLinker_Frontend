import React from 'react';
import { Monitor, Users, BookOpen, Headphones } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      title: "IT Sectors",
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      title: "Recruitment Services",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Industry-Specific Training",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: "Ongoing Support",
      icon: <Headphones className="w-8 h-8" />,
    }
  ];

  return (
    <div className=" bg-purple-50 p-8 mt-20 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 animate-fade-in-down">
        Our Services
      </h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-8 flex flex-col items-center text-center
                       transform hover:scale-105 transition-all duration-300 ease-in-out
                       hover:shadow-2xl 
                       animate-fade-in-up"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center
                          border-2 border-purple-500 mb-6
                          hover:rotate-12 transition-transform duration-300
                          text-purple-600">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6
                         hover:text-purple-600 transition-colors duration-300">
              {service.title}
            </h3>
            
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full
                             hover:bg-purple-700 transform hover:-translate-y-1
                             transition-all duration-300
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add required CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-fade-in-down {
    animation: fade-in-down 0.6s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default OurServices;