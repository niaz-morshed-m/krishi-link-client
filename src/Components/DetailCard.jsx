import React from 'react';

const DetailCard = ({data}) => {
    const {
      
      type,
      pricePerUnit,
      unit,
      description,
      quantity,
      location,
      image,
      _id,
      owner
    } = data;

    return (
      <div className="w-full lg:w-3/5 space-y-4">
        {/* Image Placeholder */}
        <div className="">
          <img
            className="w-full h-64 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center"
            src={image}
            alt=""
          />
        </div>

        {/* Tags (Hardcoded) */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
            {type}
          </span>
        </div>

        {/* Description (Hardcoded) */}
        <p className="text-gray-600">{description}</p>

        {/* Other Details (Hardcoded) */}
        <div className="space-y-2 text-gray-700">
          <p className="text-2xl font-bold text-green-600">
            Price:TK {pricePerUnit} / {unit}
          </p>
          <p>
            <span className="font-semibold">Available Stock:</span> {quantity}{" "}
            kg
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Posted by:</span>{" "}
            {owner&&owner.ownerName}
           
          </p>
          <p>
            <span className="font-semibold">Posted on:</span> {data.addTime}
          </p>
        </div>
      </div>
    );
};

export default DetailCard;