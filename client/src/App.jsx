import { useState } from "react";
import { Header, Footer, Lcard } from "./component/Index.js";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#F5F0E1] text-[#4E342E] font-serif">
        {/* Header */}
        <Header />

        <div className="flex h-screen">
      {/* Left Fixed Card */}
      <div className="w-1/3 bg-gray-100 shadow-md fixed h-full p-6 text-center">
        <Lcard />
      </div>

        {/* Main Content */}
        <main className="flex-grow  ml-1/3 w-2/3 p-6 overflow-y-auto ">
          <Outlet />
        </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
