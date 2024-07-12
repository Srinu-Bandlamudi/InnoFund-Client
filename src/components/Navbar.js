import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgg from './logo.png';
import useAuthStore from './useStore';

const Navbar = () => {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md" style={{ height: '80px' }}>
      <div className="flex items-center space-x-4">
        <Link to='/' className="text-xl font-bold flex items-center">
          <img src={imgg} width="200px" alt="InnFund Logo" className="h-13 w-48 mr-2" />
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <a href="/myprofile" className="hover:text-teal-500">My Profile</a>
        <a href="/projects" className="hover:text-teal-500">Projects</a>
        <a href="/about" className="hover:text-teal-500">About Us</a>
        <a href="/campaignform" className="hover:text-teal-500">Start a Campaign</a>
        
        {/* Conditional rendering based on token */}
        {!token && (
          <>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              onClick={() => handleNavigation('/register')}
            >
              REGISTER
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              onClick={() => handleNavigation('/login')}
            >
              LOG IN
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
