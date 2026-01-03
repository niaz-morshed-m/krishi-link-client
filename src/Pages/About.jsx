import React from "react";
import { FaUsers, FaLeaf, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero / Title Section */}
      <div className="py-12 text-center bg-green-50">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            About KrishiLink
          </h1>
          <p className="text-lg text-gray-600">
            Bridging the gap between the field and the market. A modern platform
            for farmers, traders, and consumers.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            KrishiLink is more than just a marketplace; it is a{" "}
            <strong>social agro network</strong>. Unlike traditional e-commerce
            platforms, we allow users to interact directly, collaborate, and
            build relationships within the agricultural sector. Our goal is to
            create a digital space where growth and connection happen
            simultaneously[cite: 3].
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Community */}
          <div className="card bg-base-100 shadow-xl border border-green-100 hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <FaUsers className="text-5xl text-green-500 mb-4" />
              <h3 className="card-title text-xl font-bold">Community First</h3>
              <p className="text-gray-500">
                We connect farmers, traders, and consumers in one unified
                digital space.
              </p>
            </div>
          </div>

          {/* Feature 2: Showcase */}
          <div className="card bg-base-100 shadow-xl border border-green-100 hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <FaLeaf className="text-5xl text-green-500 mb-4" />
              <h3 className="card-title text-xl font-bold">Showcase Crops</h3>
              <p className="text-gray-500">
                Farmers can easily post what they are growing or selling for the
                world to see[cite: 6].
              </p>
            </div>
          </div>

          {/* Feature 3: Collaboration */}
          <div className="card bg-base-100 shadow-xl border border-green-100 hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <FaHandshake className="text-5xl text-green-500 mb-4" />
              <h3 className="card-title text-xl font-bold">
                Direct Collaboration
              </h3>
              <p className="text-gray-500">
                Show interest, connect with owners, and collaborate directly
                without intermediaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
