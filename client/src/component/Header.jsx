import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "./Index";

function Header() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);

  return (
    <div className="w-screen h-16 bg-[#FFF2D3] m-0 flex justify-between items-center px-4">
      <Logo alt="Logo" className="h-16 w-auto" />

      {/* Navigation Section */}
      <div className="flex space-x-14">
        <NavLink
          to={"/"}
          className="transition-all duration-300 hover:scale-95 hover:text-blue-500"
        >
          <div className="text-xl cursor-pointer flex flex-col items-center">
            <div role="img" aria-label="Home" className="mb-1">
              🏠
            </div>
            <div>Home</div>
          </div>
        </NavLink>

        <NavLink
          to={"/feed"}
          className="transition-all duration-300 hover:scale-95 hover:text-blue-500"
        >
          <div className="text-xl cursor-pointer flex flex-col items-center">
            <div role="img" aria-label="Feed" className="mb-1">
              📰
            </div>
            <div>Feed</div>
          </div>
        </NavLink>

        <NavLink
          to={"/share"}
          className="transition-all duration-300 hover:scale-95 hover:text-blue-500"
        >
          <div className="text-xl cursor-pointer flex flex-col items-center">
            <div role="img" aria-label="Share" className="mb-1">
              🔗
            </div>
            <div>Share</div>
          </div>
        </NavLink>

        <NavLink
          to={"/explore"}
          className="transition-all duration-300 hover:scale-95 hover:text-blue-500"
        >
          <div className="text-xl cursor-pointer flex flex-col items-center">
            <div role="img" aria-label="Explore" className="mb-1">
              🌐
            </div>
            <div>Explore</div>
          </div>
        </NavLink>

        {!currentUser
          ? null
          : currentUser.adminStatus && (
              <NavLink
                to={"/approve"}
                className="transition-all duration-300 hover:scale-95 hover:text-blue-500"
              >
                <div className="text-xl cursor-pointer flex flex-col items-center">
                  <div role="img" aria-label="Explore" className="mb-1">
                    ✔️
                  </div>
                  <div>Approve</div>
                </div>
              </NavLink>
            )}

        <span className="p-2 text-2xl">
          {currentUser ? (
            <Link to={"/profile"}>
              <img
                src={currentUser.profilePicture}
                alt="Profile Picture"
                className="h-12 rounded-full object-cover"
              />
            </Link>
          ) : (
            <span className="bg-green-200 p-2 rounded-md ">
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

export default Header;
