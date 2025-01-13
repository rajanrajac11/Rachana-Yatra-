import React, { useState, useEffect } from "react";
import ApproveCard from "./ApproveCard";

function Approve() {
  const [literatures, setLiteratures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching literatures from the API
  useEffect(() => {
    const fetchLiteratures = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:3001/api/literature/get-non-approved-literatures"
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setLiteratures(data);
      } catch (err) {
        console.error("Error fetching literatures:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLiteratures();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen bg-[#EDE7E3] py-12 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-[#6B4226] mb-12 text-center">
        साहित्य संग्रह
      </h1>

      {/* Show loading indicator */}
      {loading && <p className="text-center text-[#6B4226]">Loading...</p>}

      {/* Show error if any */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display FeedCards when data is available */}
      <div className="space-y-12 w-full">
        {!loading &&
          !error &&
          literatures.map((literature) => (
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

        {/* Show a fallback message if no literatures are available */}
        {!loading && !error && literatures.length === 0 && (
          <p className="text-center text-[#6B4226]">No literatures found.</p>
        )}
      </div>
    </div>
  );
}

export default Approve;
