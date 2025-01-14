import React from "react";
import logo from "../assets/Logo.png";
import { useSelector } from "react-redux";

function Lcard() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);

  return (
    <div className="flex flex-col items-center text-center h-full">
      <div className="w-24 h-24 mb-4">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full rounded-full shadow-lg"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">
        Hello, {currentUser ? currentUser.username : "User"}
      </h2>
      <p className="text-gray-700 px-4 font-merriweather text-lg italic">
        "Your Gateway to Endless Stories, where Stories Come Alive One Share at
        a Time"
      </p>
    </div>
  );
}

export default Lcard;
