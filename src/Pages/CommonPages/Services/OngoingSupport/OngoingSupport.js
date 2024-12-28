import React, { useState } from 'react';
import { BarChart  , BookOpen  , Settings   } from 'lucide-react';

import mainImage from '../../../../Assets/images/services/sectors/Business support-cuate.png';

const OngoingSupport = () => {
  const [activeCard, setActiveCard] = useState(null);

  const sectorData = {
    title: "Ongoing Support",
    description: "To ensure sustained success, TechLinker Solution offers ongoing support to both employers and employees. We are committed to helping you achieve your goals long after the initial placement.",
    mainImage: mainImage,
    sectors: [
      {
        id: 1,
        title: "Performance Monitoring",
        description: "We track performance and provide feedback to ensure continuous improvement.",
        icon: BarChart  ,
        color: "from-cyan-500 to-blue-500",
        shadowColor: "shadow-cyan-500/50"
      },
      {
        id: 2,
        title: "Additional Training Resources",
        description: "Access further training resources as needed to keep skills up-to-date.",
        icon: BookOpen  ,
        color: "from-green-500 to-emerald-500",
        shadowColor: "shadow-green-500/50"
      },
      {
        id: 3,
        title: "Adjustments and Support",
        description: "Receive support for any adjustments required to maintain alignment between candidates and your industry needs.",
        icon: Settings  ,
        color: "from-purple-500 to-pink-500",
        shadowColor: "shadow-purple-500/50"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Left Side - Image */}
        <div className="lg:w-1/3 relative group">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img
              src={sectorData.mainImage}
              alt="IT Sector Illustration"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 space-y-6 animate-slide-in-right">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {sectorData.title}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {sectorData.description}
          </p>
        </div>
      </div>

      {/* Sectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectorData.sectors.map((sector, index) => (
          <div
            key={sector.id}
            className="relative animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setActiveCard(sector.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${sector.color} 
              transform transition-all duration-300 
              ${activeCard === sector.id ? 'scale-105' : 'scale-100'}
              ${sector.shadowColor} shadow-lg hover:shadow-xl`}>
              <div className="flex flex-col h-full">
                <div className="bg-white/20 p-4 rounded-xl w-16 h-16 mb-6">
                  <sector.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {sector.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed flex-grow">
                  {sector.description}
                </p>
                
                <div className={`mt-6 h-1 bg-white/30 rounded transform transition-all duration-300 
                  ${activeCard === sector.id ? 'w-full' : 'w-16'}`} />
              </div>
            </div>
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
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out forwards;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default OngoingSupport;