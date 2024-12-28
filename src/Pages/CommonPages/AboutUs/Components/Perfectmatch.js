import React from 'react';
import { Link } from 'react-router-dom';

const PerfectMatch = () => {
    return (
        <section className="register-show bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-16 mb-20">
            <div className="container mx-auto h-full px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="lg:w-3/4 flex items-center">
                    <h1 
                    data-aos="fade-right" 
                    className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-wide"
                    >
                    Find the perfect match for your team with <span className="text-orange-400">TechLinker</span>
                    </h1>
                </div>
                <div className="lg:w-1/4 flex items-center justify-center mt-8 lg:mt-0">
                    <button
                    data-aos="fade-left"
                    className="px-8 py-4 bg-orange-500 text-white font-medium text-lg rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition transform hover:scale-105"
                    >
                    <Link className="no-underline text-white" to={'/signup'}>
                        Register Now
                    </Link>
                    </button>
                </div>
                </div>
            </div>
            </section>

    );
};

export default PerfectMatch;