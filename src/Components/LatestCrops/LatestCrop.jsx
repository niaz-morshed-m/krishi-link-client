import React, { use } from 'react';
import CropCard from '../CropCard';
import { Link } from 'react-router';

const latestCropPromise = fetch("http://localhost:3000/crop/latest").then(
  (res) => res.json()
);

const LatestCrop = () => {
    const latestCrops = use(latestCropPromise)
    return (
      <div>
        <p>Latest Crop</p>
        <div className="grid grid-cols-3 gap-5 p-10">
          {latestCrops.map((crop) => (
            <CropCard key={crop._id} crop={crop}></CropCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/allCrops">
            {" "}
            <button className="btn  bg-[#07f255]">All Crops</button>
          </Link>
        </div>
      </div>
    );
};

export default LatestCrop;