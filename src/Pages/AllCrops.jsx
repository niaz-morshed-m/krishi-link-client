import React, { useState, useEffect } from "react";
import CropCard from "../Components/CropCard";

const AllCrops = () => {
  const [allCrops, setAllCrops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCrops, setFilteredCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/crop/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCrops(data);
        setFilteredCrops(data); 
      });
  }, []);


  useEffect(() => {
    const filtered = allCrops.filter((crop) =>
      crop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCrops(filtered);
  }, [searchQuery, allCrops]);

  return (
    <div>
      <p>All Crops</p>
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

      <div className="grid grid-cols-3 gap-5 p-10">
        {filteredCrops.map((crop) => (
          <CropCard key={crop._id} crop={crop}></CropCard>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;
