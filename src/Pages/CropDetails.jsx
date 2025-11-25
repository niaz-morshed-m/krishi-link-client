import React, { useContext, useEffect, useState } from 'react';
import InterestForm from '../Components/InterestForm';
import DetailCard from '../Components/DetailCard';
import { useParams } from 'react-router';
import Interest from '../Components/Interest';
import { AuthContext } from '../Provider/AuthProvider';


const CropDetails = () => {
  const {user} = useContext(AuthContext)

const [data, setData] = useState({})
const {owner} = data
    const {id} =useParams()
     useEffect(() => {
    fetch(`https://krishi-link-server-ten.vercel.app/crop/details/${id}`)
      .then((res) => res.json()) 
      .then((data) => setData(data)) 
      .catch((err) => console.log("Error:", err)); 
  }, [id]);

  
    return (
      <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-inter">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{data.name}</h1>

          <div className="flex flex-col lg:flex-row gap-8">
       
            <DetailCard data={data}></DetailCard>

        

            {user&&user.email === owner?.ownerEmail ? (
              <Interest data={data}></Interest>
            ) : (
              <InterestForm data={data}></InterestForm>
            )}
          </div>
        </div>
      </div>
    );
};

export default CropDetails;