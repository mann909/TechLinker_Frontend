import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "Trusted & Quality Jobs",
    "International Jobs",
    "Top Companies",
    "Integrated Solutions",
    "Ready-to-Work Candidates"
  ];

  return (
    <div className="bg-orange-100 min-h-[40rem]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-2/3 space-y-8 animate-fade-in pl-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Choose Us ?
              </h1>
              
              <div className="relative">
                <h2 className="text-xl text-gray-700 font-medium">
                  Your Path to Success Starts Here
                </h2>
                <div className="absolute -bottom-2 left-0 w-48 h-0.5 bg-orange-400"></div>
              </div>
            </div>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-gray-700 transform hover:translate-x-2 transition-transform duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/3 animate-float ">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735022924/008_1_c0vrbu.jpg"
                alt="Success Target"
                className=" rounded-lg shadow-2xl w-[30rem] h-[30rem] transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add required keyframe animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .animate-slide-in {
    opacity: 0;
    animation: slide-in 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default WhyChooseUs;