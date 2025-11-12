import React, { use } from 'react';
import CropCard from '../Components/CropCard';



const allCropPromise = fetch("http://localhost:3000/crop/all").then(
  (res) => res.json()
);

const AllCrops = () => {
        const allCrops = use(allCropPromise)
    return (
      <div>
        <p>All Crops</p>
        <div className="grid grid-cols-3 gap-5 p-10">
          {allCrops.map((crop) => (
            <CropCard key={crop._id} crop={crop}></CropCard>
          ))}
        </div>
      </div>
    );
};

export default AllCrops;