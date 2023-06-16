import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import auth from "./../firebse_auth";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  // if (loading) {
  //   return <Loading />;
  // }
  const validate = () => {
    if (!name) {
      setErrors(true);
    }
    if (!email && !email.includes("@")) {
      setErrors(true);
    }
    if (password.length < 6) {
      setErrors(true);
    }

    return true;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validate()) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <div className="relative flex flex-col justify-center py-4 mx-4 overflow-hidden">
      <div className="w-full px-10 md:px-16 py-4 m-auto bg-[#0a183d] text-white rounded-md shadow-xl lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center  uppercase">
          Sign Up
        </h1>
        {user && <p>{user}</p>}
        <div className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white"
            >
              Name
            </label>
            <input
              type="name"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border rounded-md"
            />
            {errors && name.length <= 0 ? (
              <span className="text-sm text-red-500 font-sans font-semibold">
                Name is required
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border rounded-md"
            />
            {errors ? (
              <span className="text-sm text-red-500 font-sans font-semibold">
                Email is not valid
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-white"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border rounded-md"
            />
            {errors && password.length <= 0 ? (
              <span className="text-sm text-red-500 font-sans font-semibold">
                Password is required
              </span>
            ) : (
              ""
            )}
          </div>
          {error && (
            <p className="text-red-500 font-bold py-4 text-sm">
              {error?.message}
            </p>
          )}
          <div className="mt-6">
            <button
              onClick={handleSignUp}
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white text-black">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
