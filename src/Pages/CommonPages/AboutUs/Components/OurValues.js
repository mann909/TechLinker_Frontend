import React from 'react';

import image1 from '../../../../Assets/images/about-us/Soft skills-amico.png'
import image2 from '../../../../Assets/images/about-us/Website Creator-bro.png'
import image3 from '../../../../Assets/images/about-us/Innovation-rafiki.png'

const OurValues = () => {
  const values = [
    {
      title: 'EXPERTISE',
      description: 'We leverage our extensive industry knowledge to provide insightful recruitment and training solutions.',
      imageSrc: image1,
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: 'INTEGRITY',
      description: 'We uphold the highest standards of honesty and transparency in all our operations.',
      imageSrc: image2,
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: 'INNOVATION',
      description: 'We continuously adapt and innovate to meet the evolving needs of the industry.',
      imageSrc: image3,
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Values
        </h1>
        <div className="h-1 w-24 bg-gray-900 mx-auto mt-4 transform transition-transform duration-500 hover:scale-x-110"></div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={value.title}
            className={`${value.bgColor} rounded-2xl p-8 transform transition-all duration-500 
              ${value.hoverColor} hover:shadow-xl hover:-translate-y-2
              ${index === 0 ? 'animate-slide-in-left' : 
                index === 1 ? 'animate-slide-in-up' : 'animate-slide-in-right'}`}
          >
            <div className="aspect-square mb-6 overflow-hidden">
              <img
                src={value.imageSrc}
                alt={value.title}
                className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center">
              {value.title}
            </h3>
            
            <p className="text-gray-600 text-center leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add custom animations
const styles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-2rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(2rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slide-in-up {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 1s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 1s ease-out forwards;
  }
  
  .animate-slide-in-up {
    animation: slide-in-up 1s ease-out forwards;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default OurValues;