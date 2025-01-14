import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Index";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const create = async (data, e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      reset();

      const dataGot = await res.json();
      setLoading(false);
      if (dataGot.success === false) {
        setError(true);
        return;
      }
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const handleChange = (e) => {
    setError(false);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#F5F0E1] to-[#EDE7E3] p-10">
      <div className="mx-auto w-96 max-w-lg bg-white shadow-lg rounded-xl p-10 border border-[#E9E3D9]">
        <h2 className="text-center text-3xl font-serif font-bold text-[#6B4226]">
          Sign up to create an account
        </h2>

        {error && (
          <p className="text-red-600 mt-4 text-center">Something went wrong!</p>
        )}

        <form
          onSubmit={(e) => {
            handleSubmit((data) => create(data, e))(e);
          }}
          className="mt-5"
        >
          <div className="space-y-5">
            <Input
              label="Username: "
              id="username"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md text-md border-[#8E7C3D] focus:ring-[#8E7C3D] focus:ring-2 focus:outline-none"
              {...register("name", {
                required: true,
              })}
              onChange={handleChange}
            />
            <Input
              label="Email: "
              id="email"
              placeholder="Enter your email"
              type="email"
              className="w-full p-3 rounded-md text-md border-[#8E7C3D] focus:ring-[#8E7C3D] focus:ring-2 focus:outline-none"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              onChange={handleChange}
            />
            <Input
              label="Password: "
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md text-md border-[#8E7C3D] focus:ring-[#8E7C3D] focus:ring-2 focus:outline-none"
              {...register("password", {
                required: true,
              })}
              onChange={handleChange}
            />
            <Input
              type="submit"
              disabled={loading}
              value={loading ? "Loading..." : "Create Account"}
              className="cursor-pointer  bg-orange-100 text-black py-3 rounded-xl hover:bg-[#dda377] transition duration-300 w-full"
            />
          </div>
        </form>
        <div className="mt-5 text-center">
          <p className="text-[#4E342E]">
            Have an account?{" "}
            <span className="text-[#6B4226] underline hover:text-[#4E342E]">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
