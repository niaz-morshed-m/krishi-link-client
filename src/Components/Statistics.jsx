import React from "react";
import { motion } from "motion/react";
import {
  FaUserFriends,
  FaSeedling,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";

const Statistics = () => {
  return (
    <motion.section
      className="my-25 bg-base-100 border-y border-gray-100 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700">
            KrishiLink by the Numbers
          </h2>
          <p className="text-gray-500 mt-2">
            Growing the agricultural community through digital connection.
          </p>
        </div>

        {/* Stats Container */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full border border-green-100">
          {/* Stat 1: Total Users */}
          <div className="stat">
            <div className="stat-figure text-green-600">
             
            </div>
            <div className="stat-title text-gray-600 font-medium">
              Active Members
            </div>
            <div className="stat-value text-green-700 font-bold">1,500+</div>
            <div className="stat-desc text-gray-400">
              Farmers, Traders & Consumers{" "}
            </div>
          </div>

          {/* Stat 2: Total Crops */}
          <div className="stat">
            <div className="stat-figure text-green-600">
         
            </div>
            <div className="stat-title text-gray-600 font-medium">
              Crops Available
            </div>
            <div className="stat-value text-green-700 font-bold">450+</div>
            <div className="stat-desc text-gray-400">
              Fresh posts from diverse locations [cite: 7]
            </div>
          </div>

          {/* Stat 3: Successful Interests */}
          <div className="stat">
            <div className="stat-figure text-green-600">
             
            </div>
            <div className="stat-title text-gray-600 font-medium">
              Connections Made
            </div>
            <div className="stat-value text-green-700 font-bold">320+</div>
            <div className="stat-desc text-gray-400">
              Successful interest collaborations [cite: 8]
            </div>
          </div>

          {/* Stat 4: Districts */}
          
        </div>
      </div>
    </motion.section>
  );
};

export default Statistics;
