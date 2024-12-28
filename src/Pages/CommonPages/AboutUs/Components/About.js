import React from 'react';

import image1 from '../../../../Assets/images/about-us/about1.webp'
import image2 from '../../../../Assets/images/about-us/about2.webp'
import image3 from '../../../../Assets/images/about-us/about3.webp'
import image4 from '../../../../Assets/images/about-us/about4.webp'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Top Images */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Woman with Orange Folder */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <img
                src={image1}
                alt="Woman holding orange folder"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            
            {/* Man at Cafe */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <img
                src={image2}
                alt="Man working at cafe"
                className="w-full h-full object-cover animate-fade-in delay-100"
              />
            </div>
          </div>
            {/* <div className="relative w-full md:w-1/2 aspect-square rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <img
                src={image2}
                alt="Man working at cafe"
                className="w-full h-full object-cover animate-fade-in delay-100"
              />
            </div>
          </div> */}
          
          {/* Bottom Images */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Person in Yellow */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-none md:rounded-bl-[100px] overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <img
                src={image3}
                alt="Person in yellow shirt"
                className="w-full h-full object-cover animate-fade-in delay-200"
              />
            </div>
            
            {/* Woman at Desk */}
            <div className="relative w-full md:w-1/2 aspect-square rounded-none md:rounded-br-[100px] overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <img
                src={image4}
                alt="Woman working at desk"
                className="w-full h-full object-cover animate-fade-in delay-300"
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6 animate-slide-in-right">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-orange-500">TechLinker</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Unlocking potential through advanced technology
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Welcome to TechLinker Solution</span>, where recruitment meets expert training. We specialize in not only connecting top talent with industries but also equipping them with the essential skills needed to thrive.
            </p>
            <p className="text-gray-700">
              Our unique approach ensures that the professionals we place are not only skilled but also industry-ready from day one.
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
    animation: fade-in 0.8s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out forwards;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default About;