import React, { use } from 'react';
import CropCard from '../CropCard';
import { Link } from 'react-router';

const latestCropPromise = fetch("http://localhost:3000/crop/latest").then(
  (res) => res.json()
);

const LatestCrop = () => {
  
    const latestCrops = use(latestCropPromise)
    return (
      <div className="mt-25">
        <h2 className="text-3xl text-center font-bold text-green-800 mb-2">
         Latest Crops
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 py-10 px-1 lg:px-10 md:px-10">
          {latestCrops.map((crop) => (
            <CropCard key={crop._id} crop={crop}></CropCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/allCrops">
            <button className="btn  bg-[#07f255]">All Crops</button>
          </Link>
        </div>
      </div>
    );
};

export default LatestCrop;