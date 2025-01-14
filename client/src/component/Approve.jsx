import React, { useState, useEffect } from "react";
import ApproveCard from "./ApproveCard";
import { useFetch } from "../customApiHook/useFetch";

function Approve() {
  const { error, loading, data } = useFetch(
    "http://localhost:3001/api/literature//get-non-approved-literatures"
  );

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
            <ApproveCard
              key={literature._id} // Use MongoDB's `_id` field
              title={literature.title}
              author={literature.author}
              createdAt={literature.createdAt}
              literatureType={literature.literatureType}
              content={literature.content}
              id={literature._id}
            />
          ))}

        {!loading && !error && data.length === 0 && (
          <p className="text-center text-[#6B4226]">No literatures found.</p>
        )}
      </div>
    </div>
  );
}

export default Approve;
