import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/userSlice";

function Profile() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      await fetch("/api/user/signout");
      dispatch(signout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E1] to-[#EDE7E3] p-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl text-center font-serif text-[#6B4226] mb-6">
          Profile
        </h1>
        <div className="flex flex-col items-center gap-6">
          {/* Profile Picture */}
          <img
            src={currentUser.profilePicture}
            alt="Profile Picture"
            className="h-32 w-32 rounded-full object-cover border-4 border-[#E9E3D9] shadow-md"
          />

          {/* Username */}
          <div className="text-center">
            <h2 className="text-2xl font-serif text-[#4E342E] mb-2">
              {currentUser.username}
            </h2>
            <p className="text-sm text-[#6B4226]">Username</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <h2 className="text-lg font-serif text-[#4E342E] mb-2">
              {currentUser.email}
            </h2>
            <p className="text-sm text-[#6B4226]">Email</p>
          </div>

          {/* Sign Out */}
          <button
            className="mt-6 px-6 py-2 bg-[#8E7C3D] text-white rounded-full shadow-md hover:bg-[#6E4B31] transition duration-300"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
