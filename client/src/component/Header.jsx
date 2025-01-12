import React from 'react';

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-amber-50 p-4 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="logo.png" // Replace with your logo path
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-lg border border-gray-300 bg-blue-100 outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Icons */}
      <div className="flex space-x-6">
        <div className="text-xl cursor-pointer">🏠</div>
        <div className="text-xl cursor-pointer">📰</div>
        <div className="text-xl cursor-pointer">📅</div>
        <div className="text-xl cursor-pointer">🌐</div>
        <div className="text-xl cursor-pointer">👤</div>
      </div>
    </nav>
  );
};

export default Header;

