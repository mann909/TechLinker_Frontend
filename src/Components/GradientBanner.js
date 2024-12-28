import React, { useEffect } from 'react';

const GradientBanner = ({title}) => {
  useEffect(() => {
    // Add required keyframe animations dynamically
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
        animation: slide-in 0.6s ease-out forwards;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative w-full h-48 lg:h-64 bg-gradient-to-r from-blue-200 via-gray-200 to-orange-300 animate-gradient">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-8">
        <h1 
          className="text-3xl lg:text-5xl font-bold text-black mb-2 animate-fade-in"
        >
          {title}
        </h1>
        <p 
          className="text-sm lg:text-lg text-gray-700 animate-slide-in"
        >
          Home &gt; <span className="text-black">{title}</span>
        </p>
        <button
          className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition animate-float"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GradientBanner;
