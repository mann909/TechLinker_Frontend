import React, { useEffect, useRef } from 'react';

import img1 from '../../../../Assets/images/training/information-technology.png';
import img2 from '../../../../Assets/images/training/app-settings.png';
import img3 from '../../../../Assets/images/training/app-settings.png';
import img4 from '../../../../Assets/images/training/design.png';
import img5 from '../../../../Assets/images/training/infrastructure.png';
import img6 from '../../../../Assets/images/training/shopping-online.png';
import img7 from '../../../../Assets/images/training/3d-printer.png';
import img8 from '../../../../Assets/images/training/automation.png';
import img9 from '../../../../Assets/images/training/robot.png';
import img10 from '../../../../Assets/images/training/maintenance.png';
import img11 from '../../../../Assets/images/training/shopping-online.png';
import img12 from '../../../../Assets/images/training/human-resources.png';

const TrainingCards = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-scroll-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const sectors = [
        {
            title: 'IT Sectors',
            description: 'Get trained in cutting-edge IT solutions.',
            bgColor: 'bg-yellow-100',
            iconBg: 'bg-yellow-400',
            img: img1,
        },
        {
            title: 'Web Technologies',
            description: 'Explore the latest tools and techniques for effective web development.',
            bgColor: 'bg-teal-100',
            iconBg: 'bg-teal-600',
            img: img2,
        },
        {
            title: 'Mobile App',
            description: 'Learn to develop powerful mobile apps for all platforms.',
            bgColor: 'bg-orange-100',
            iconBg: 'bg-orange-400',
            img: img3,
        },
        {
            title: 'Web Design',
            description: 'Focuses on the look and feel of the website.',
            bgColor: 'bg-green-100',
            iconBg: 'bg-green-400',
            img: img4,
        },
        {
            title: 'Industries Design',
            description: 'Strategic problem-solving process.',
            bgColor: 'bg-emerald-100',
            iconBg: 'bg-emerald-600',
            img: img5,
        },
        {
            title: 'Digital Marketing',
            description: 'How to use it effectively for your business.',
            bgColor: 'bg-blue-100',
            iconBg: 'bg-blue-400',
            img: img6,
        },
        {
            title: '3D Printing',
            description: '3D printing is a revolutionary manufacturing process.',
            bgColor: 'bg-red-100',
            iconBg: 'bg-red-400',
            img: img7,
        },
        {
            title: 'Automation',
            description: 'Automation may create as many jobs as it destroys.',
            bgColor: 'bg-gray-100',
            iconBg: 'bg-gray-600',
            img: img8,
        },
        {
            title: 'Robotics',
            description: 'Science of designing or building robots and their applications.',
            bgColor: 'bg-amber-100',
            iconBg: 'bg-amber-400',
            img: img9,
        },
        {
            title: 'Automobile Sector',
            description: 'Investments & opportunities in the auto sector.',
            bgColor: 'bg-cyan-100',
            iconBg: 'bg-cyan-600',
            img: img10,
        },
        {
            title: 'Sales Marketing',
            description: 'Sales and marketing alignment challenges.',
            bgColor: 'bg-orange-100',
            iconBg: 'bg-orange-400',
            img: img11,
        },
        {
            title: 'HR',
            description: 'Communicating effectively is essential in HR.',
            bgColor: 'bg-lime-100',
            iconBg: 'bg-lime-400',
            img: img12,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, index) => (
                    <div
                        key={sector.title}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl 
                            transition-all duration-300 transform hover:-translate-y-1 
                            animate-fade-in opacity-0`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="p-6 flex items-start space-x-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                    {sector.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {sector.description}
                                </p>
                            </div>
                            <div
                                className={`w-16 h-16 flex-shrink-0 rounded-full ${sector.iconBg} 
                                transform transition-transform duration-300 group-hover:rotate-12`}
                            >
                                <img
                                    src={sector.img}
                                    alt={sector.title}
                                    className="w-full h-full object-contain p-3"
                                />
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
        from {
            opacity: 0;
            transform: translateY(1rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes scroll-in {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-in {
        animation: fade-in 0.5s ease-out forwards;
    }

    .animate-scroll-in {
        animation: scroll-in 0.8s ease-out forwards;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default TrainingCards;
