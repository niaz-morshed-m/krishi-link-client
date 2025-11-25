import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router';

const CropCard = ({crop}) => {
    const {name, type, pricePerUnit, unit, description, location, image, _id} = crop
      useEffect(() => {
             Aos.init();
           }, []);
         
          
    return (
      <div className="card bg-base-100  shadow-sm space-y-2" data-aos-duration="5000"
          data-aos="fade-up">
        <figure className="max-h-[200px]">
          <img src={image} alt="Shoes" className="rounded-t-xl" />
        </figure>
        <div className="items-center space-y-5 p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <div className="flex items-center gap-3">
                <p>{location}</p>
                <div className="badge badge-soft badge-primary">{type}</div>
              </div>
              <p>{description}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">
                TK {pricePerUnit}/{unit}
              </p>
            </div>
          </div>
          <div className="">
            <Link to={`/details/${_id}`}>
              <button className="btn w-full bg-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CropCard;