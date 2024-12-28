import React from 'react';

const UniqueAdvantage = () => {
  return (
    <div className=" mx-auto px-4 mt-20 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Paper planes section */}
        <div className="w-full lg:w-1/3 relative h-[400px] animate-fade-in mt-10">
        <img
                  src="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735022908/Group_18_pc5ef9.png"
                  alt="Paper plane"
                  className={`w-[42rem] h-[400px]`}
                />
        </div>

        {/* Content section */}
        <div className="w-full lg:w-2/3 space-y-6 animate-slide-in-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Unique Advantage
          </h1>
          
          <div className="w-full h-0.5 bg-gray-300 relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-red-500 animate-expand"></div>
          </div>
          
          <h2 className="text-gray-600 text-lg italic">
            Empowering your business through our unique, tailored approach.
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            TechLinker Solution is a trailblazer in the recruitment industry, offering a comprehensive solution 
            that includes both recruitment and specialized training. Our exclusive focus on providing skilled and 
            trained professionals sets us apart, making us the go-to partner for industries seeking to enhance 
            their workforce efficiently and effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

// Add required keyframe animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(0.7);
    }
    50% {
      transform: translateY(-10px) scale(0.7);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes expand {
    from {
      width: 0;
    }
    to {
      width: 33.333333%;
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slide-in-right 1s ease-out forwards;
  }

  .animate-expand {
    animation: expand 1.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default UniqueAdvantage;