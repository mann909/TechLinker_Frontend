import React from 'react';
import { Home, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { title: "About Us", href: "#" },
    { title: "Find Jobs", href: "#" },
    { title: "Traning", href: "#" },
    { title: "Career", href: "#" },
  ];

  const services = [
    { title: "IT Sectors", href: "#" },
    { title: "Recruitment Services", href: "#" },
    { title: "Industry-Specific Training", href: "#" },
    { title: "Ongoing Support", href: "#" },
  ];

  return (
    <footer className="bg-sky-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Home className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
                D-902, Siddhraj Zoey, Nr. Axis Bank Branch, Beside Maruti Magnum, Randesan, Gandhinagar-382007
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:ceo@techlinker.in" className="text-sm hover:text-gray-300 transition-colors">
                ceo@techlinker.in
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+919537466959" className="text-sm hover:text-gray-300 transition-colors">
                + 91 9537466959
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-sm hover:text-gray-300 transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <a href={service.href} className="text-sm hover:text-gray-300 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-100">
              Copyright © 2024 TechLinker Solution || All Rights Reserved
            </p>
            <p className="text-sm text-gray-100">
              Developed by :Alliedge Technologies Pvt Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;