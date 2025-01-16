import React from "react";
import RyLogo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Logo({ ...props }) {
  return (
    <>
      <img src={RyLogo} alt="" {...props} />
    </>
  );
}

export default Logo;
