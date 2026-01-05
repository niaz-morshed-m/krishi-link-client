import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Aos from "aos";


const Register = () => {
  const { registerWithEmail, googleLogin, profileUpdate } =
    useContext(AuthContext);

     const [error, setError] = useState("")

       useEffect(() => {
             Aos.init();
           }, []);
         
         const navigate = useNavigate();
         
         
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

if (!validPassword) {
  setError(
    "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long."
  );
  return;
}



    registerWithEmail(email, password)
      .then(() => {
          profileUpdate(name, photo)
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch(() => {
              // An error occurred
              // ...
            });
        const newUser = {
          name: name,
          email: email,
          image: photo,
        };
         fetch("https://krishi-link-server-ten.vercel.app/users", {
           method: "POST",
           headers: { "content-type": "application/json" },
           body: JSON.stringify(newUser),
         })
           .then((res) => res.json())
           .then((data) => {
             navigate("/");
           });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
       setError(errorMessage)
      });
  
     
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("https://krishi-link-server-ten.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate('/');
          });
      })
      .catch(() => {});
  };

  return (
    <div
      className="shadow-lg border border-[#d5d9e0] rounded-xl px-5 h-[50%] flex flex-col justify-center space-y-6 w-[80%] lg:w-[35%]  md:w-[35%] mx-auto py-4 mt-25 mb-10"
      data-aos-duration="7000"
      data-aos="fade-left"
    >
      <div>
        <p className="text-2xl text-center font-semibold">Register Now!</p>
        <p className="text-center">
          Already have an Account?{" "}
          <Link to="/login">
            <span className="text-primary">Login</span>
          </Link>
        </p>
      </div>
      <form onSubmit={handleRegister}>
        <label className="label">Your Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Name"
          required
        />
        <label className="label">Photo</label>
        <input
          type="url"
          name="photo"
          className="input w-full"
          placeholder="Photo url"
          required
        />
        <label className="label">Your Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <input
          name="password"
          className="input w-full"
          placeholder="Password"
          required
        />
        {error && (
          <span className="text-sm text-red-600">
            <p>{error}</p>
          </span>
        )}
        <button type="submit" className="btn  bg-primary mt-4 w-full">
          Register
        </button>
      </form>
      <p className="text-center">Or</p>
      <button
        onClick={handleGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] w-full"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Sign In with Google
      </button>
    </div>
  );
};

export default Register;
