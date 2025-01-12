import React from "react";

function FeedCard({ title="Poem", author="Narayan", createdAt="20202", literatureType="poem", content="123" }) {
  return (
    <div className="w-[80%] mx-auto p-8 bg-[#F5F0E1] border border-[#DCCFC0] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#4E342E] mb-6">{title}</h2>

      {/* Author and Literature Type */}
      <p className="text-lg text-[#6B4226] mb-4">
        <span className="font-semibold">Author:</span> {author} |{" "}
        <span className="font-semibold">Type:</span> {literatureType}
      </p>

      {/* Published Date */}
      <p className="text-md text-[#8E7C3D] italic mb-8">
        <span className="font-semibold">Published On:</span>{" "}
        {new Date(createdAt).toLocaleDateString()}
      </p>

      {/* Content */}
      <div className="bg-[#FFF9F1] px-6 py-8 rounded-lg shadow-md border border-[#EADBCB] text-left">
        {content.split("\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-xl text-[#4E342E] leading-relaxed font-serif mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FeedCard;
