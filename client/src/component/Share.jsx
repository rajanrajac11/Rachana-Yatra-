import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { RTE, Input, Select } from "./Index";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LiteratureForm() {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);

  const { register, handleSubmit, reset, getValues, control } = useForm();

  const naviate = useNavigate();

  const post = async (data, e) => {
    e.preventDefault();
    const dataWithAuthor = {
      ...data,
      author: currentUser.username.toUpperCase(),
    };
    try {
      const res = await fetch(
        "http://localhost:3001/api/literature/share-literature/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataWithAuthor),
        }
      );
      const dataGot = await res.json();
      console.log(dataGot);

      reset();
      alert("Literature Created Successfully");
      naviate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#F5F0E1] to-[#EDE7E3] p-8 flex justify-center items-center">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          {!currentUser && (
            <h1 className="text-center text-lg font-semibold mb-4 text-brown-700 mt-1">
              Login to Share The Literature.{" "}
              <Link
                to="/login"
                className="text-blue-600 underline hover:text-blue-800 transition duration-200"
              >
                Login Now
              </Link>
            </h1>
          )}
          {currentUser && (
            <>
              <h2 className="text-3xl font-semibold text-[#6B4226] text-center mb-8">
                Post New Literature
              </h2>
              <form
                onSubmit={handleSubmit(post)}
                className="space-y-6 text-[#4E342E] font-serif"
              >
                {/* Title Input */}
                <div className="flex flex-col">
                  <Input
                    label="Title"
                    type="text"
                    placeholder="Enter the title"
                    {...register("title", { required: true })}
                    className="border-[#8E7C3D] focus:bg-[#F4F1E1] "
                  />
                </div>

                {/* Description Input */}
                <div className="flex flex-col">
                  <Input
                    label="Description"
                    type="text"
                    placeholder=" Brief description"
                    {...register("description", { required: true })}
                    className="border-[#8E7C3D] focus:bg-[#F4F1E1]"
                  />
                </div>

                {/* Select for Literature Type */}
                <div className="flex flex-col">
                  <Select
                    label="Literature Type"
                    options={["Poem", "Gajal", "Muktak", "Others"]}
                    {...register("literatureType", { required: true })}
                    className="border-[#8E7C3D] focus:bg-[#F4F1E1]"
                  />
                </div>

                <RTE
                  label="Content :"
                  name="content"
                  control={control}
                  defaultValue={getValues("content")}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#8E7C3D] text-white rounded-full shadow-md hover:bg-[#6E4B31] transition duration-300"
                  >
                    Post Literature
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LiteratureForm;
