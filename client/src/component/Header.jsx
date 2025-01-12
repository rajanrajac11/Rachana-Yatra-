import React from "react";

function Header()
{
  return(
  <div className="w-screen h-16 bg-red-600 *:m-0  flex justify-around items-center">
<div className="">
  <img src="logo.png" alt="" />
</div>
<div className="flex space-x-6">
<div className="text-xl cursor-pointer">🏠</div>
        <div className="text-xl cursor-pointer">📰</div>
        <div className="text-xl cursor-pointer">📅</div>
        <div className="text-xl cursor-pointer">🌐</div> 
       
</div>
<div className="flex space-x-6">
<div className="text-xl cursor-pointer">👤</div>
</div>
  </div>
  );
} export default Header;