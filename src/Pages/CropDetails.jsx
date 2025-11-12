import React, { useEffect, useState } from 'react';
import InterestForm from '../Components/InterestForm';
import DetailCard from '../Components/DetailCard';
import { useParams } from 'react-router';


const CropDetails = () => {
const [data, setData] = useState({})
    const {id} =useParams()
     useEffect(() => {
    fetch(`http://localhost:3000/crop/${id}`)
      .then((res) => res.json())   // convert response to JSON
      .then((data) => setData(data))  // set the fetched data
      .catch((err) => console.log("Error:", err)); // handle error
  }, [id]);

    return (
      <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-inter">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
           {data.name}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* --- Left Column: Crop Details (Hardcoded) --- */}
           <DetailCard data={data}></DetailCard>

            {/* --- Right Column: Interest Form --- */}
            
                <InterestForm></InterestForm>
            
          </div>
        </div>
      </div>
    );
};

export default CropDetails;