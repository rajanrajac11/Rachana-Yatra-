import React from "react";
import RyLogo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Logo({ ...props }) {
  return (
    <>
      <NavLink to={"/"}>
        <img src={RyLogo} alt="" {...props} />
      </NavLink>
    </>
  );
}

export default Logo;
