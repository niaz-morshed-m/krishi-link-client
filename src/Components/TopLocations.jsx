import React from "react";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const TopLocations = () => {
  // Static locations based on typical agricultural hubs
  const locations = [
    { id: 1, name: "Bogura", count: "120+ Crops" },
    { id: 2, name: "Rajshahi", count: "85+ Crops" },
    { id: 3, name: "Dinajpur", count: "60+ Crops" },
    { id: 4, name: "Cumilla", count: "45+ Crops" },
    { id: 5, name: "Rangpur", count: "90+ Crops" },
    { id: 6, name: "Jessore", count: "75+ Crops" },
  ];

  return (
    <section className="py-16 bg-green-50 mt-25">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Top Agricultural Hubs
        </h2>
        <p className="text-gray-600 mb-10">
          Find fresh produce directly from these major farming districts.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-green-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 p-3 rounded-full mb-3 text-green-600">
                <FaMapMarkerAlt size={20} />
              </div>
              <h3 className="font-bold text-gray-800">{loc.name}</h3>
              <span className="text-xs text-gray-500">{loc.count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopLocations;

