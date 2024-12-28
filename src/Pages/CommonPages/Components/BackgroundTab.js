import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BackgroundTab = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dagd6qt6p/image/upload/v1735017228/home_sm9ed5.jpg')",
          fontFamily: "'Raleway', sans-serif"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-xl md:max-w-2xl lg:max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-white animate-fade-in">
              Empowering Industries with{' '}
              <span className="text-yellow-400 inline-block transform hover:scale-105 transition-transform duration-300 pt-4">
                Skilled & Trained
              </span>{' '}
              Talent
            </h1>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <Link 
                to="/find-jobs"
                className="group flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Find Jobs
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/training"
                className="group flex items-center justify-center bg-white hover:bg-yellow-50 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Training Programs
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Optional: Additional Content */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>500+ Job Openings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Expert Training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Industry Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundTab;