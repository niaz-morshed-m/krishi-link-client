import React from "react";
import { motion } from "motion/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const CropCard = ({ crop }) => {
  const { name, type, pricePerUnit, unit, description, location, image, _id } =
    crop;

  return (
    <motion.div
      className="card bg-base-100 shadow-lg rounded-2xl border border-base-200 space-y-2 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <figure className="h-[175px]">
        <img src={image} alt="Shoes" className="rounded-t-xl" />
      </figure>
      <div className="items-center space-y-5 p-6">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <IoLocationSharp className="w-5 h-5 text-primary" />
                {location}
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold">
              ৳{pricePerUnit}/{unit}
            </p>
          </div>
        </div>
        <div className="">
          <Link to={`/details/${_id}`}>
            <button className="btn w-full bg-primary">
              View Details <HiOutlineArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CropCard;
