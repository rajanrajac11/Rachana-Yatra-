import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="w-screen h-16 bg-[#FFF2D3] m-0 flex justify-between items-center px-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Navigation Section */}
      <div className="flex space-x-14">
        <div className="text-xl cursor-pointer flex flex-col items-center">
          <div role="img" aria-label="Home" className="mb-1">🏠</div>
          <div>Home</div>
        </div>
        <div className="text-xl cursor-pointer flex flex-col items-center">
          <div role="img" aria-label="Menu" className="mb-1">📰</div>
          <div>Menu</div>
        </div>
        <div className="text-xl cursor-pointer flex flex-col items-center">
          <div role="img" aria-label="Share" className="mb-1">🔗</div>
          <div>Share</div>
        </div>
        <div className="text-xl cursor-pointer flex flex-col items-center">
          <div role="img" aria-label="Explore" className="mb-1">🌐</div>
          <div>Explore</div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="text-xl cursor-pointer flex flex-col items-center">
        <div role="img" aria-label="Profile" className="mb-1">👤</div>
        <div>Profile</div>
      </div>
    </div>
  );
}

export default Header;
