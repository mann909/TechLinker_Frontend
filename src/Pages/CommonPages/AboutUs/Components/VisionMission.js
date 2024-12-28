import React from 'react';

import image1 from '../../../../Assets/images/about-us/about1.webp'
import image2 from '../../../../Assets/images/about-us/mission.jpg'

const VisionMission = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Main Title */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold">
          OUR VISION MISION
        </h1>
        <div className="h-1 w-32 bg-orange-500 mx-auto mt-4 transform duration-500 hover:scale-x-125"></div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="relative h-[400px] group overflow-hidden animate-slide-in-left">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url('${image1}')`,
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}
          ></div>
          <div className="relative h-full flex flex-col justify-center p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
              OUR MISSION
            </h2>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100">
              At TechLinker Solution, our mission is clear: to bridge the skills gap in various industries 
              by delivering not only top-tier talent but also the necessary training to ensure they excel. 
              We are committed to providing a complete solution that prepares professionals to meet 
              and exceed industry standards.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative h-[400px] group overflow-hidden animate-slide-in-right">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url('${image2}')`,
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}
          ></div>
          <div className="relative h-full flex flex-col justify-center p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
              OUR VISION
            </h2>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100">
              To become the leading recruitment agency known for our dual focus on exceptional talent 
              acquisition and industry-specific training. We aim to set a new benchmark in workforce 
              readiness and industry excellence.
            </p>
          </div>
        </div>
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
  
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 1s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 1s ease-out forwards;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default VisionMission;