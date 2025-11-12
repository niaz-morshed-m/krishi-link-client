import React, { use } from 'react';
import CropCard from '../CropCard';

const latestCropPromise = fetch("http://localhost:3000/latestProducts").then(res=>res.json())

const LatestCrop = () => {
    const latestCrops = use(latestCropPromise)
    return (
      <div>
        <p>Latest Crop</p>
        <div className='grid grid-cols-3 gap-5 p-10'>
          {latestCrops.map((crop) => (
            <CropCard key={crop._id} crop={crop}></CropCard>
          ))}
        </div>
      </div>
    );
};

export default LatestCrop;