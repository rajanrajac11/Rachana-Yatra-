import React from "react";
import logo from "../assets/Logo.png";

function Lcard() {
  return (
    <div className="flex flex-col items-center text-center h-full">
      {/* Profile Image or Logo */}
      <div className="w-24 h-24 mb-4">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full rounded-full shadow-lg"
        />
      </div>

      {/* Greeting and Motivation */}
      <h2 className="text-xl font-semibold mb-4">Hello, user</h2>
      <p className="text-gray-700 px-4">
        Believe in yourself! Have faith in your abilities! Without a humble but
        reasonable confidence in your own powers, you cannot be successful or
        happy.
      </p>
    </div>
  );
}

export default Lcard;
