import React from 'react';
import { Building2, Users, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExporeJobsCards = () => {
  const navigate = useNavigate()
  const cards = [
    {
      title: "EMPLOYERS",
      icon: <Building2 className="w-12 h-12 text-orange-500" />,
      description: "FIND THE PERFECT MATCH FOR YOUR TEAM WITH TECHLINKER.",
      buttonText: "Post Jobs",
      link:"/employer/postjobs"
    },
    {
      title: "CANDIDATES",
      icon: <Users className="w-12 h-12 text-orange-500" />,
      description: "BROWSE A RANGE OF JOB POSTINGS THAT MATCH YOUR SKILLS.",
      buttonText: "Find Jobs",
      link:"/candidate/findjobs"
    },
    {
      title: "UNIVERSITY & INSTITUTES",
      icon: <GraduationCap className="w-12 h-12 text-orange-500" />,
      description: "FIND THE PERFECT MATCH FOR YOUR ORGANIZATIONS.",
      buttonText: "Registration",
      link:"/university/explore"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-2 border-orange-500 animate-bounce">
              {card.icon}
            </div>
            
            <h2 className="text-xl font-bold text-gray-800">
              {card.title}
            </h2>
            
            <p className="text-gray-600 text-sm flex-grow">
              {card.description}
            </p>
            
            <button 
            onClick={()=>navigate(card.link)}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors duration-300 transform hover:scale-110">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExporeJobsCards;