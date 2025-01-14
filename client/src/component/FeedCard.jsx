import React from "react";
import logo from "../assets/logo.png"; // Import the logo image
import { useSelector } from "react-redux";

function FeedCard({ title, author, createdAt, literatureType, content }) {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);

  return (
    <div className="w-[90%] max-w-[800px] mx-auto p-6 bg-[#F5F0E1] border border-[#DCCFC0] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center relative min-h-[300px] md:p-8">
      {/* Top Section: Author, Date, and Type */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        {/* Author Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Author Logo"
            className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover"
          />
          <p className="text-sm md:text-base text-[#6B4226] font-bold">
            Author: {author}
          </p>
        </div>

        {/* Literature Type */}
        <p className="text-sm md:text-base text-[#6B4226] font-semibold">
          Type: {literatureType}
        </p>

        {/* Published Date */}
        <p className="text-sm md:text-base text-[#8E7C3D] italic font-bold">
          <span className="font-bold">Published On:</span>{" "}
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#4E342E] mt-12">
        {title}
      </h2>

      {/* Content */}
      <div
        className="bg-[#FFF9F1] px-4 py-6 rounded-lg shadow-md border border-[#EADBCB] text-left w-full md:w-3/4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      {/* comment */}
      {currentUser ? (
        <div className="flex justify-between flex-wrap p-4 gap-4 ">
          <span>Like ❤️</span>

          <input
            type="text"
            name=""
            id="commentInput"
            placeholder="Write Comment"
            className="p-1 rounded-md"
          />

          <span>
            <label
              htmlFor="commentInput"
              className="cursor-pointer p-2 rounded-md bg-[#5e4842] text-white hover:backdrop-opacity-95"
            >
              Comment
            </label>
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default FeedCard;
