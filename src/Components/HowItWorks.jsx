import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoBookOutline, IoPersonAddOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuHandshake, LuLeafyGreen } from "react-icons/lu";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-25 space-y-9">
      <p className="text-4xl font-bold text-center">How it works</p>
      <div className="flex justify-center gap-4 md:flex-row flex-col lg:flex-row ">
        <div
          data-aos-duration="5000"
          data-aos="fade-down"
          className="lg:w-90 md:w-90 w-70 space-y-4 py-6 px-5 shadow-lg border border-[#d5d9e0] rounded-xl animate__animated animate__fadeInUp animate__delay-5s mx-auto"
        >
          <h1 className="text-[#565D6D80] text-4xl text-center font-semibold">
            1
          </h1>
          <p className="text-primary flex justify-center text-6xl">
            <IoPersonAddOutline />
          </p>
          <p className="font-medium text-3xl text-center">Register</p>
          <p className="text-[#565D6D] text-center">
            Sign up easily as a farmer, trader, or consumer.
          </p>
        </div>
        <div
          data-aos-duration="5000"
          data-aos="fade-up"
          className="lg:w-90 md:w-90 w-70 space-y-4 py-6 px-5 shadow-lg border border-[#d5d9e0] rounded-xl animate__animated animate__fadeInUp animate__delay-5s mx-auto"
        >
          <h1 className="text-[#565D6D80] text-4xl text-center font-semibold">
            2
          </h1>
          <p className="text-primary flex justify-center text-6xl">
            <LuLeafyGreen />
          </p>
          <p className="font-medium text-3xl text-center">Post or Browse</p>
          <p className="text-[#565D6D] text-center">
            List your crops or find fresh produce from local farms.
          </p>
        </div>
        <div
          data-aos-duration="5000"
          data-aos="fade-up"
          className="lg:w-90 md:w-90 w-70 space-y-4 py-6 px-5 shadow-lg border border-[#d5d9e0] rounded-xl animate__animated animate__fadeInUp animate__delay-5s mx-auto"
        >
          <h1 className="text-[#565D6D80] text-4xl text-center font-semibold">
            3
          </h1>
          <p className="text-primary flex justify-center text-6xl">
            <LuHandshake />
          </p>
          <p className="font-medium text-3xl text-center">Connect & Transact</p>
          <p className="text-[#565D6D] text-center">
            Connect directly with partners and secure your deals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
