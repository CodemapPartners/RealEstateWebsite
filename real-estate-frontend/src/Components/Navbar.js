import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" to="/">
          Real Estate
        </Link>
        <div className="space-x-4">
          <Link className="hover:text-gray-300" to="/">Home</Link>
          <Link className="hover:text-gray-300" to="/property/:id">Property Details</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
