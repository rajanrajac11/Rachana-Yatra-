import React, { useState } from "react";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`); // Replace with your actual search logic
  };

  return (
    <div className="flex justify-center items-center p-4 w-full">
      <div className="relative w-[35%]">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full p-2 pl-10 rounded-2xl shadow-sm hover:shadow-md focus:shadow-lg focus:outline-none transition duration-200"
          placeholder="Search..."
        />
        <button
          type="button"
          onClick={handleSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          aria-label="Search"
        >
          🔍
        </button>
      </div>
    </div>
  );
}

export default Explore;
