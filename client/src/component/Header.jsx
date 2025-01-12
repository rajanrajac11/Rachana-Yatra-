import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Feed",
    path: "/feed",
  },
  {
    name: "Share Literature",
    path: "/share-literature",
  },
  {
    name: "Explore",
    path: "/explore",
  },
];

function Header() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);

  return (
    <div className="sticky top-0 z-10 bg-[#F5F0E1] shadow-md">
      <div className="p-4 flex flex-wrap justify-between items-center">
        {/* Platform Logo */}
        <span className="text-2xl font-serif text-[#6B4226]">
          <Link to={"/"}>R</Link>
        </span>
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-around items-center gap-6">
          {navItems.map((item, index) => (
            <span
              key={index}
              className="p-2 px-4 text-[#6B4226] bg-[#E9E3D9] hover:bg-[#DCCFC0] hover:text-[#4E342E] rounded-md transition duration-200"
            >
              <Link to={item.path}>{item.name}</Link>
            </span>
          ))}
        </div>
        {/* {currentUser.adminStatus && (
          <span className="p-2 px-4 text-[#6B4226] bg-[#E9E3D9] hover:bg-[#DCCFC0] hover:text-[#4E342E] rounded-md transition duration-200">
            <NavLink to={"/approvals"}>Approvals</NavLink>
          </span>
        )} */}
        {/* conditional rendering for Login and profile */}
        {currentUser ? (
          <Link to={"/profile"}>
            <img
              src={currentUser.profilePicture}
              alt="Profile Picture"
              className="h-12 rounded-full object-cover"
            />
          </Link>
        ) : (
          <span className="bg-green-400 p-2 rounded-md mr-4 hover:opacity-95">
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;