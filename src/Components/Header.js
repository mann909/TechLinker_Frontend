import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';
import ApiService from '../ApiServices/ApiService';
import { apiPaths } from '../ApiServices/ApiPaths';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Find Jobs', path: '/find-jobs' },
    { name: 'Training', path: '/training' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const dropdownLinks = [
    { name: 'IT Sectors', path: '/services/it-sectors' },
    { name: 'Recruitment Services', path: '/services/recruitment-services' },
    { name: 'Industry-Specific Training', path: '/services/industry-specific-training' },
    { name: 'Ongoing Support', path: '/services/ongoing-support' },
  ];

  if (isLoggedIn) {
    links.push({ name: 'Logout', path: '/' });
  } else {
    links.push({ name: 'Login', path: '/login' });
    links.push({ name: 'Signup', path: '/signup' });
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await ApiService({
        method: "GET",
        endpoint: apiPaths.logout,
      });
      navigate('/');
    } catch (e) {
      console.log("Error while Logging out", e);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735032761/techlogo_tjqy5g.png"
              alt="Logo"
              className="h-20 lg:h-32 w-auto transform hover:scale-125 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Logout' ? (
                  <button
                    onClick={handleLogout}
                    className="group flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Logout</span>
                  </button>
                ) : link.name === 'Services' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="group flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200">
                        {dropdownLinks.map((dropdownLink) => (
                          <NavLink
                            key={dropdownLink.name}
                            to={dropdownLink.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          >
                            {dropdownLink.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 transition-all duration-200 ${
                        link.name === 'Login' || link.name === 'Signup'
                          ? 'bg-orange-500 text-white rounded-lg hover:bg-orange-600'
                          : isActive
                          ? 'text-orange-600 font-medium'
                          : 'text-gray-700 hover:text-orange-600'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <div key={link.name}>
              {link.name === 'Logout' ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  Logout
                </button>
              ) : link.name === 'Services' ? (
                <div className="space-y-1">
                  <div className="px-4 py-2 text-gray-700 font-medium">Services</div>
                  {dropdownLinks.map((dropdownLink) => (
                    <NavLink
                      onClick={()=>setIsOpen(false)}
                      key={dropdownLink.name}
                      to={dropdownLink.path}
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    >
                      {dropdownLink.name}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  onClick={()=>setIsOpen(false)}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 ${
                      link.name === 'Login' || link.name === 'Signup'
                        ? 'bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-center'
                        : isActive
                        ? 'text-orange-600 font-medium'
                        : 'text-gray-700 hover:text-orange-600'
                    } transition-colors duration-200`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;