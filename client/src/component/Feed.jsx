import React, { useState, useEffect } from "react";
import { FeedCard } from "./Index";
import { useFetch } from "../customApiHook/useFetch";

function Feed() {
  //use of Custom hook to fetch data
  const { error, loading, data } = useFetch(
    "http://localhost:3001/api/literature/get-literatures"
  );
  if (error) {
    console.log(error);
  }

  return (
    <div className="min-h-screen bg-[#EDE7E3] py-12 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-[#6B4226] mb-12 text-center">
        साहित्य संग्रह
      </h1>

      {loading && <p className="text-center text-[#6B4226]">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="space-y-12 w-full">
        {!loading &&
          !error &&
          data.map((literature) => (
            <FeedCard
              key={literature._id}
              title={literature.title}
              author={literature.author}
              createdAt={literature.createdAt}
              literatureType={literature.literatureType}
              content={literature.content}
            />
          ))}

        {/* Show a fallback message if no literatures are available */}
        {!loading && !error && data.length === 0 && (
          <p className="text-center text-[#6B4226]">No literatures found.</p>
        )}
      </div>
    </div>
  );
}

export default Feed;
