import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600">404</h1>
                <div className="absolute rotate-12 transform">
                    <div className="absolute top-0 -ml-4 -mt-2 h-1 w-28 bg-purple-500"></div>
                    <div className="absolute top-0 -ml-4 -mt-2 h-1 w-24 bg-blue-500 transform -rotate-6"></div>
                </div>
                <div className="mt-8">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                        Oops! Page not found
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
                        hover:bg-blue-700 transition duration-300 ease-in-out
                        hover:shadow-lg inline-block"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;