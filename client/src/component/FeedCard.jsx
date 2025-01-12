import React from "react";

function FeedCard({
  title = "Poem",
  author = "Narayan",
  createdAt = "20202",
  literatureType = "poem",
  content = "123",
}) {
  return (
    <div className="w-[60%] mx-auto p-6 bg-[#F5F0E1] border border-[#DCCFC0] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center relative">
      {/* Author - Positioned at the top-left */}
      <p className="text-sm text-[#6B4226] font-semibold absolute top-4 left-4">
        Author: {author}
      </p>

      {/* Published Date */}
      <p className="text-sm text-[#8E7C3D] italic absolute top-4 right-4">
        <span className="font-semibold">Published On:</span>{" "}
        {new Date(createdAt).toLocaleDateString()}
      </p>

      {/* Literature Type */}
      <p className="text-md text-[#6B4226] mb-4">
        <span className="font-semibold">Type:</span> {literatureType}
      </p>

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#4E342E] mb-4">{title}</h2>

      {/* Content */}
      <div className="bg-[#FFF9F1] px-4 py-6 rounded-lg shadow-md border border-[#EADBCB] text-left">
        {content.split("\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-[#4E342E] leading-relaxed font-serif mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FeedCard;
