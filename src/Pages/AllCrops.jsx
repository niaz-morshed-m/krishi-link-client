import React, { useState, useEffect, useRef } from "react";
import CropCard from "../Components/CropCard";
import { MdErrorOutline } from "react-icons/md";

const ITEMS_PER_PAGE = 8;

const AllCrops = () => {
  const [allCrops, setAllCrops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const loaderRef = useRef(null);

  // Fetch all crops
  useEffect(() => {
    const fetchAllCrops = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://krishi-link-server-ten.vercel.app/crop/all");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAllCrops(data);
        setFilteredCrops(data);
      } catch (error) {
        console.error('Error fetching crops:', error);
        setError(error.message);
        setAllCrops([]);
        setFilteredCrops([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCrops();
  }, []);

  // Search filter
  useEffect(() => {
    const filtered = allCrops.filter((crop) =>
      crop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCrops(filtered);
    setVisibleCount(ITEMS_PER_PAGE); // reset on search
  }, [searchQuery, allCrops]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredCrops.length) {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [visibleCount, filteredCrops]);

  return (
    <div className="space-y-7 m-6 mt-8">
      <p className="text-4xl font-bold text-center">All Crops</p>

      {/* Search */}
      <div className="flex justify-center mb-5">
        <label className="input input-bordered flex items-center gap-2">
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search crops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="grow"
          />
        </label>
      </div>

      {/* Initial Loader */}
      {loading ? (
        <div className="flex justify-center p-10">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <MdErrorOutline size={48} className="text-red-500 mb-4" />
          <p className="text-xl text-red-600 mb-2">Failed to load crops</p>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn bg-[#07f255]"
          >
            Try Again
          </button>
        </div>
      ) : filteredCrops.length > 0 ? (
        <>
          {/* Crops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 px-1 md:px-10">
            {filteredCrops.slice(0, visibleCount).map((crop) => (
              <CropCard key={crop._id} crop={crop} />
            ))}
          </div>

          {/* Infinite Scroll Loader */}
          {visibleCount < filteredCrops.length && (
            <div ref={loaderRef} className="flex justify-center py-6">
              <span className="loading loading-dots loading-md"></span>
            </div>
          )}
        </>
      ) : (
        searchQuery !== "" && (
          <div className="flex justify-center items-center gap-2 text-center mx-auto m-20 text-gray-500">
            <MdErrorOutline size={22} />
            <span>No Results Found</span>
          </div>
        )
      )}
    </div>
  );
};

export default AllCrops;
