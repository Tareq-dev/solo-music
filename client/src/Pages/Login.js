import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import auth from "./../firebse_auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }
  const validate = () => {
    if (!email && !email.includes("@")) {
      setErrors(true);
    }

    if (password.length < 6) {
      setErrors(true);
    }

    return true;
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    if (validate()) {
      signInWithEmailAndPassword(email, password);
    }
  };
  return (
    <div className="relative flex flex-col justify-center pt-8 mx-4 overflow-hidden">
      <div className="w-full px-10 md:px-16 py-4 m-auto bg-[#0a183d] text-white rounded-md shadow-xl lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center  uppercase">
          Log in
        </h1>
        <div className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border rounded-md"
            />
            {errors && !email.includes("@") && email.length <= 0 ? (
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
              name="password"
              value={password}
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
          <a href="#" className="text-xs text-white hover:underline">
            Forget Password?
          </a>
          {error && (
            <span className="text-sm text-red-500 block font-sans font-semibold">
              {error.message}
            </span>
          )}
          <div className="mt-6">
            <button
              onClick={handleSignIn}
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white text-black">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <SocialLogin />
        </div>

        <p className="mt-8 text-xs font-light text-center text-white">
          Don't have an account?
          <br />
          <Link
            to="/signup"
            className="font-medium text-red-400 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
