import React from 'react';

const CropCard = ({crop}) => {
    const {name, type, pricePerUnit, unit, description, location, image} = crop
    return (
      <div className="card bg-base-100  shadow-sm space-y-2">
        <figure className="max-h-[200px]">
          <img src={image} alt="Shoes" className="rounded-t-xl" />
        </figure>
        <div className="items-center space-y-5 p-6">
          <div className='flex justify-between items-center'>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <div className="flex items-center gap-3">
                <p>{location}</p>
                <div className="badge badge-soft badge-primary">{type}</div>
              </div>
              <p>{description}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                TK {pricePerUnit}/{unit}
              </p>
            </div>
          </div>
          <div className="">
            <button className="btn w-full bg-[#07f255]">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default CropCard;