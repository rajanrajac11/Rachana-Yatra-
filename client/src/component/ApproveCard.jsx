import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo image

function ApproveCard({
  title,
  author,
  createdAt,
  literatureType,
  content,
  id,
}) {
  const updatingId = id;
  const navigate = useNavigate();
  const handleReject = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/literature/reject-literature/",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: updatingId }),
        }
      );
      if (res.ok) {
        console.log("Literature rejected and deleted Successfully");

        navigate("/feed");
        alert("Literature Rejected");
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred");
    }
  };

  const handleAccept = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/literature/accept-literature/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: updatingId }),
        }
      );
      if (res.ok) {
        alert("Literature approved successfully");
        navigate("/feed");
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred");
    }
  };
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

      {/* Buttons Section */}
      <div className="w-full mt-6 flex justify-between absolute bottom-4 px-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          onClick={handleAccept}
        >
          Approve
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default ApproveCard;
