import Aos from "aos";
import React, { useEffect, useState } from "react";

const MyInterestsTable = ({ interestsData }) => {
  const [isAscending, setIsAscending] = useState(true);


  const sortedData = [...interestsData].sort((a, b) => {
    const nameA = a.cropName.toLowerCase();
    const nameB = b.cropName.toLowerCase();

    if (isAscending) {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
  useEffect(() => {
             Aos.init();
           }, []);
         
          
  return (
    <div className="m-7 text-center">
      <div
        className="flex justify-center mb-3"
        data-aos-duration="5000"
        data-aos="fade-up"
      >
        <button
          onClick={() => setIsAscending(!isAscending)}
          className="btn btn-sm bg-primary"
        >
          Sort: {isAscending ? "Ascending" : "Descending"}
        </button>
      </div>

      <div
        className="overflow-x-auto"
        data-aos-duration="5000"
        data-aos="fade-up"
      >
        <table className="table text-center">
          <thead>
            <tr>
              <th></th>
              <th>Crop Name</th>
              <th>Crop Owner</th>
              <th>Requested Quantity</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((interest, index) => (
              <tr key={index} className="hover:bg-base-300">
                <th>{index + 1}</th>
                <td>{interest.cropName}</td>
                <td>{interest.ownerInfo.ownerName}</td>
                <td>{interest.interest.quantity}</td>
                <td>{interest.interest.message}</td>
                <td>{interest.interest.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInterestsTable;
