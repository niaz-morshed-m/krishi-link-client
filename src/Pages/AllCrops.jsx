import React, { useState, useEffect } from "react";
import CropCard from "../Components/CropCard";
import { MdErrorOutline } from "react-icons/md";

const AllCrops = () => {
  const [allCrops, setAllCrops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    fetch("https://krishi-link-server-ten.vercel.app/crop/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCrops(data);
        setFilteredCrops(data);
        setLoading(false); 
      });
  }, []);

  useEffect(() => {
    const filtered = allCrops.filter((crop) =>
      crop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCrops(filtered);
  }, [searchQuery, allCrops]);

  return (
    <div className="space-y-7 m-6 mt-8">
      <p className="text-4xl font-bold text-center">All Crops</p>

      <div className="flex justify-center mb-5">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center p-5 m-3">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : filteredCrops.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-5 p-10">
          {filteredCrops.map((crop) => (
            <CropCard key={crop._id} crop={crop} />
          ))}
        </div>
      ) : (
        searchQuery !== "" && (
          <div className="flex justify-center items-center gap-2 text-center mx-auto m-20">
            <MdErrorOutline /> <span>No Results Found</span>
          </div>
        )
      )}
    </div>
  );
};

export default AllCrops;
