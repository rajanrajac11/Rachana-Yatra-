import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="w-screen h-16 bg-gray-600 m-0 flex justify-between items-center px-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Navigation Section */}
      <div className="flex space-x-14">
        <div className="text-xl cursor-pointer flex-col items-center">
          <div role="img" aria-label="Home">🏠</div>
          <div>Home</div>
        </div>
        <div className="text-xl cursor-pointer flex-col items-center">
          <div role="img" aria-label="Menu">📰</div>
          <div>Menu</div>
        </div>
        <div className="text-xl cursor-pointer flex-col items-center">
          <div role="img" aria-label="Share">🔗</div>
          <div>Share</div>
        </div>
        <div className="text-xl cursor-pointer flex-col items-center">
          <div role="img" aria-label="Explore">🌐</div>
          <div>Explore</div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-xl cursor-pointer flex-col items-center">
        <div role="img" aria-label="Profile">👤</div>
        <div>Profile</div>
      </div>
    </div>
  );
}

export default Header;
