import React from "react";
import logo from "../assets/Logo.png"
function Lcard() {
  return (
<div className="w-1/3 bg-gray-100 shadow-md fixed h-full flex flex-col items-center text-center p-6">
          <div className="w-full mb-4">
            <img
              src={logo} // Replace with actual image URL
              alt="Books"
              className="w-full rounded-lg "
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Hello, user</h2>
          <p className="text-gray-700">
            Believe in yourself! Have faith in your abilities! Without a humble
            but reasonable confidence in your own powers you cannot be
            successful or happy.
          </p>
        </div>
  );
}

export default Lcard;
