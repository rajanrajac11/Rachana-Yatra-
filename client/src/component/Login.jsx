import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../store/userSlice";

function Login() {
  const { register, handleSubmit } = useForm();
  const { loading, error } = useSelector(
    (state) => state.persistedReducer.user
  );
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (data, e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const dataGot = await res.json();
      if (dataGot.success === false) {
        dispatch(loginFailure(dataGot.message));
        return;
      }
      dispatch(loginSuccess(dataGot));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(dataGot.message));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#F5F0E1] to-[#EDE7E3] p-10">
      <div className="mx-auto w-96 max-w-lg bg-white shadow-lg rounded-xl p-10 border border-[#E9E3D9]">
        <h2 className="text-center text-3xl font-serif font-bold text-[#6B4226]">
          Login
        </h2>

        <p className="text-red-600 mt-3 text-center">
          {error ? error || "Something went wrong" : ""}
        </p>

        <form onSubmit={handleSubmit(login)} className="mt-5 space-y-5">
          <div className="space-y-4">
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
              type="password"
              id="password"
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
              value={loading ? "Loading..." : "Login"}
              className="cursor-pointer bg-[#7b7047] text-black py-3 rounded-xl hover:bg-[#6E4B31] transition duration-300 w-full"
            />
          </div>
        </form>
        <div className="mt-5 text-center">
          <p className="text-[#4E342E]">
            Don't have an account?{" "}
            <span className="text-[#6B4226] underline hover:text-[#4E342E]">
              <Link to="/signup">Create an account</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
