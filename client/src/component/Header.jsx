import React from "react";

function Header() {
  return (
    <div className="w-screen h-16 bg-red-600 m-0 flex justify-around items-center">
      <div>
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="flex space-x-6">
        <div className="text-xl cursor-pointer flex-col items-center -space-x-2">
          <div>🏠</div>
          <div className="fon">Home</div>
        </div>
        <div className="text-xl cursor-pointer flex-col items-center -space-x-2">
          <div>📰</div>
          <div>Menu</div>
        </div>
        <div className="text-xl cursor-pointer flex-col items-center -space-x-2">
          <div>🔗</div>
          <div>Share</div>
        </div>
      
        <div className="text-xl cursor-pointer flex-col items-center -space-x-2">
          <div>🌐</div>
          <div>Explore</div>
        </div>
       
      </div>
      <div className="flex-col space-x-6">
        <div className="text-xl cursor-pointer">👤</div>
      </div>
    </div>
  );
}

export default Header;
