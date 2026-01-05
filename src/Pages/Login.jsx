import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Aos from "aos";

const Login = () => {
  const { googleLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // 🔐 Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
        };

        fetch("https://krishi-link-server-ten.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        navigate("/");
      })
      .catch(() => {});
  };

  // 🔐 Normal Login
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  const handleDemoUserLogin = () => {
    setError("");
    signIn("davidbekham@gmail.com", "Abc123")
      .then(() => navigate("/"))
      .catch((error) => setError(error.message));
  };

 

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="shadow-lg border border-[#d5d9e0] rounded-xl px-5 flex flex-col justify-center space-y-6 w-[80%] lg:w-[35%] md:w-[35%] mx-auto py-6 mt-25"
      data-aos="fade-left"
      data-aos-duration="700"
    >
      {/* Header */}
      <div>
        <p className="text-2xl text-center font-semibold">Login Now!</p>
        <p className="text-center">
          You didn't have an Account?{" "}
          <Link to="/register">
            <span className="text-primary">Register</span>
          </Link>
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogIn} className="space-y-3">
        <div>
          <label className="label">Your Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
            required
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <Link to="/forgotPassword">
          <span className="link link-hover text-sm">Forgot password?</span>
        </Link>

        <button type="submit" className="btn bg-primary w-full">
          Login
        </button>
      </form>

      {/* Demo Buttons */}
      <div className="space-y-2">
        <p className="text-center text-sm text-gray-500">Quick Demo Access</p>
        <button
          onClick={handleDemoUserLogin}
          className="btn btn-outline w-full"
        >
          Login as Demo User
        </button>
      </div>

      {/* Divider */}
      <p className="text-center">Or</p>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] w-full flex gap-2"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          viewBox="0 0 512 512"
        >
          <path
            fill="#EA4335"
            d="M256 0c141 0 256 115 256 256S397 512 256 512 0 397 0 256 115 0 256 0z"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
