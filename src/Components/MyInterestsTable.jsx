import React from 'react';

const MyInterestsTable = ({ interestsData }) => {
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Crop Name</th>
            <th>Requested Quantity</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        {interestsData.map((interest, index) => (
          <tbody>
            {/* row 2 */}
            <tr className="hover:bg-base-300">
              <th>{index + 1}</th>
              <td>{interest.cropName}</td>
              <td>{interest.interest.quantity}</td>
              <td>{interest.interest.message}</td>
              <td>{interest.interest.status}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyInterestsTable;