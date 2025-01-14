import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-8 bg-[#F0E6D2] text-[#6B4226] font-serif min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl text-center space-y-8">
     
        <h1 className="text-5xl font-playfair font-bold text-[#4E342E] drop-shadow-lg">
          Welcome to रचना यात्रा
        </h1>

       
        <p className="text-lg font-nunito leading-relaxed px-6">
          <span className="font-semibold text-[#8E7C3D]">रचना यात्रा</span> is a
          platform created to celebrate the beauty of literature, where words
          are as timeless as the dried leaves that flutter in the wind. Here,
          writers and literature lovers come together to share stories, poems,
          and ideas that inspire change. Whether you are a poet, storyteller, or
          reader, this space is meant for you to express your creativity and be
          part of a community that cherishes the art of writing.
        </p>

        <p className="text-lg font-nunito leading-relaxed px-6">
          Just like dry leaves fall and create something new, your words can
          inspire others and find new paths. Discover the power of written
          expression, share your works, and explore the diversity of voices that
          make our literary world rich.
        </p>

       
        <Link
          to="/feed"
          className="inline-block px-8 py-3 bg-[#8E7C3D] text-[#F5F0E1] rounded-full shadow-lg hover:bg-[#6E4B31] transition duration-300"
        >
          Explore Feed
        </Link>
      </div>
    </div>
  );
}

export default Home;
