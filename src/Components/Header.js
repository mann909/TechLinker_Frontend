import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import ApiService from '../ApiServices/ApiService';
import { apiPaths } from '../ApiServices/ApiPaths';
import { setIsLoggedIn, setUser } from '../Store/user.slice';
import toast from 'react-hot-toast';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch()

  const userMain = useSelector((state) => state.user);

    const isLoggedIn = userMain?.isLoggedIn || false
    const user = userMain?.user


  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' ,type:'dropdown' },
    // { name: 'Jobs', path: '/jobs' },
    { name: 'Training', path: '/training' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const dropdownLinks = {
    Services : [
    { name: 'IT Sectors', path: '/services/it-sectors' },
    { name: 'Recruitment Services', path: '/services/recruitment-services' },
    { name: 'Industry-Specific Training', path: '/services/industry-specific-training' },
    { name: 'Ongoing Support', path: '/services/ongoing-support' },
    ],

    
};


  if(user && user?.role==='Candidate'){
    links.push({ name: 'Find Jobs', path: '/candidate/findjobs' });
  }
  else if(user && user?.role==='Employer'){
    links.push({ name: 'Jobs', path: '/employer/jobs', type:'dropdown' });

    dropdownLinks['Jobs'] = [
      { name: 'Post Jobs', path: '/employer/postjobs' },
      { name: 'View Applications', path: '/employer/applications' },
      // { name: 'Jobs Posted By Me', path: '/employer/postedjobs' }
      ];
    // links.push({ name: 'Post Jobs', path: '/employer/postjobs' });
    // links.push({ name: 'View Applications', path: '/employer/applications' });
    // links.push({ name: 'View Applications', path: '/employer/applications' });
  }
  else if(user && user?.role==='University'){
    links.push({ name: 'Explore', path: '/university/explore' });
  }


  if (isLoggedIn) {
    links.push({ name: "Profile", path: `${user?.role.toLowerCase()}/profile` });
    links.push({ name: 'Logout', path: '/' });
  } else {
    links.push({ name: 'Jobs', path: '/jobs' });
    links.push({ name: 'Login', path: '/login' });
    links.push({ name: 'Signup', path: '/signup' });
  }


  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await ApiService({
        method: "DELETE",
        endpoint: apiPaths.logout,
      });
      dispatch(setIsLoggedIn(false))
      dispatch(setUser(null))
      toast.success('Logged out successfully');
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
          <nav className="hidden w-full lg:flex items-center justify-end space-x-1">
            {links.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Logout' ? (
                  <button
                    
                    onClick={handleLogout}
                    className="group flex items-center bg-orange-500 hover:bg-orange-600 rounded-md px-4 py-3 text-white transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Logout</span>
                  </button>
                ) : link.type && link.type === 'dropdown' ? (
                  <div
                    id={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="group flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {dropdownOpen && document.getElementById(link.name)?.matches(':hover') && (
                      <div className="absolute left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200">
                        {dropdownLinks[link.name].map((dropdownLink) => (
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
                ) : link.name === "Profile" ? (
                  <NavLink
                    to={link.path}
                    className="flex items-center justify-center bg-gray-200  font-semibold w-12 h-12 mr-3 rounded-full hover:text-orange-600 transition-colors duration-200"
                  >
                    {/* <span className="mr-2">Profile</span> */}
                    <div className="w-12 h-12 bg-gray-200 text-gray-700   hover:text-orange-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 "  />
                    </div>
                  </NavLink>
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
              ) : link.type && link.type === 'dropdown' ? (
                <div className="space-y-1">
                  <div className="px-4 py-2 text-gray-700 font-medium">Services</div>
                  {dropdownLinks[link.name].map((dropdownLink) => (
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