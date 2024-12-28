import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Book } from 'lucide-react';

const CareerSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Join <span className="text-indigo-600">TechLinker</span> Solution
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Where talented individuals thrive in a dynamic, growth-focused environment. Unlock opportunities to develop your skills and shape the future of work.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-300"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: Users, label: "Expert Team", value: "500+" },
                { icon: Target, label: "Projects", value: "1000+" },
                { icon: Book, label: "Training Hours", value: "5000+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto text-indigo-600 mb-2" />
                  <div className="font-bold text-2xl text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-indigo-600 opacity-10"></div>
              <img 
                src="https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg?size=626&ext=jpg&ga=GA1.1.1486460245.1719573189&semt=ais_hybrid"
                alt="Professional at work"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-sm font-semibold text-gray-600">Join us today!</div>
              <div className="text-2xl font-bold text-indigo-600">20+ Positions Open</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;