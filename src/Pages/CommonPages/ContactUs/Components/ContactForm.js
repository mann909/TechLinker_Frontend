import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: "D-902, Siddhraj Zoey, Nr. Axis Bank Branch, Beside Maruti Magnum, Randesan, Gandhinagar-382007"
    },
    {
      icon: Mail,
      text: "ceo@techlinker.in"
    },
    {
      icon: Phone,
      text: "+91 9537466959"
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-orange-400 p-8 lg:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <info.icon className="w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base">{info.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;