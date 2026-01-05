import React, { useEffect } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { FaLeaf, FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-25 space-y-9">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">How it works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div
          data-aos="fade-down"
          data-aos-duration="5000"
          className="card bg-base-100 shadow-xl border border-green-100 hover:shadow-2xl transition-all space-y-4 py-6 px-5 mx-auto"
        >
          <h1 className="text-[#565D6D80] text-4xl text-center font-semibold">
            1
          </h1>

          <p className="text-primary flex justify-center text-4xl">
            <IoPersonAdd />
          </p>

          <p className="font-medium text-2xl text-center">Register</p>

          <p className="text-[#565D6D] text-center">
            Sign up easily as a farmer, trader, or consumer.
          </p>
        </div>

        {/* Step 2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          className="card bg-base-100 shadow-xl border border-green-100 hover:shadow-2xl transition-all space-y-4 py-6 px-5 mx-auto"
        >
          <h1 className="text-[#565D6D80] text-4xl text-center font-semibold">
            2
          </h1>

          <p className="text-primary flex justify-center text-4xl">
            <FaLeaf />
          </p>

          <p className="font-medium text-2xl text-center">Post or Browse</p>

          <p className="text-[#565D6D] text-center">
            List your crops or find fresh produce from local farms.
          </p>
        </div>

        {/* Step 3 */}
        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          className="card bg-base-100 shadow-xl border border-green-100 hover:shadow-2xl transition-all space-y-4 py-6 px-5 mx-auto"
        >
          <h1 className="text-[#565D6D80] text-4xl text-center font-semibold">
            3
          </h1>

          <p className="text-primary flex justify-center text-4xl">
            <FaHandshake />
          </p>

          <p className="font-medium text-2xl text-center">Connect & Transact</p>

          <p className="text-[#565D6D] text-center">
            Connect directly with partners and secure your deals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
