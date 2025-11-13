import React, { useState } from 'react';
import Swal from 'sweetalert2';
const LocationPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);
const EditForm = ({post}) => {
    const [onePost, setOnePost] = useState(post);
    const {
        name,
      type,
      pricePerUnit,
      unit,
      description,
      quantity,
      location,
      image,
      _id,
    } = onePost;

     const handleEditCrop = (e) => {
      e.preventDefault()
       const form = e.target;
       const updatedCropName = form.name.value;
       const updatedType = form.type.value;
       const updatedQuantity = form.quantity.value;
       const updatedUnit = form.unit.value;
       const updatedPrice = form.price.value;
       const updatedDescription = form.description.value;
       const updatedLocation = form.location.value;
       const updatedImage = form.image.value;

       // console.log(cropName, type, quantity, unit, description, location, image)
    
       const updatedCrop = {
        _id: _id,
         name:updatedCropName,
         type: updatedType,
         pricePerUnit: updatedPrice,
         unit: updatedUnit,
         quantity: updatedQuantity,
         description:  updatedDescription,
         location: updatedLocation,
         image: updatedImage,
       };

       fetch(`http://localhost:3000/crop/${_id}`, {
         method: "PATCH",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(updatedCrop),
       })
         .then((res) => res.json())
         .then(() =>  {
            setOnePost(updatedCrop)
         });
         setTimeout(() => {
           location.reload(); // Reload the page after 5 seconds
         }, 5000);
         Swal.fire({
           title: "Drag me!",
           icon: "success",
           draggable: true,
         });
     };
    return (
      <div className=" min-h-screen p-2 md:p-5">
        <div className="max-w-3xl mx-auto">
          {/* Form is broken into sections for styling */}
          <form onSubmit={handleEditCrop} className="space-y-6">
            {/* --- Crop Details Section --- */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Edit Details
                </h2>
                <p className="text-gray-600 mt-1">
                  Provide basic information about the crop you want to list.
                </p>
              </div>

              {/* Crop Name */}
              <div>
                <label
                  htmlFor="cropName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crop Name
                </label>
                <input
                  type="text"
                  id="cropName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="e.g., Organic Tomatoes"
                  name="name"
                  defaultValue={name}
                />
              </div>

              {/* Crop Type */}
              <div>
                <label
                  htmlFor="cropType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crop Type
                </label>
                <input
                  name="type"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-500"
                  placeholder="e.g. vegetable"
                  defaultValue={type}
                />
              </div>

              {/* Quantity and Unit */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="e.g., 500"
                    defaultValue={quantity}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="unit"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Unit
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-500"
                    placeholder="e.g. Kg"
                    name="unit"
                    defaultValue={unit}
                  />
                </div>
              </div>

              {/* Price per Unit */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price per Unit (₹)
                </label>
                <input
                  type="text"
                  id="price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="e.g., 25"
                  name="price"
                  defaultValue={pricePerUnit}
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Describe your crop in detail, including variety, cultivation method, and quality."
                  defaultValue={description}
                ></textarea>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LocationPinIcon />
                  </div>
                  <input
                    name="location"
                    type="text"
                    id="location"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="e.g. Dhaka"
                    defaultValue={location}
                  />
                </div>
              </div>
            </div>

            {/* --- Image URL Section --- */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Image URL</h2>
              <div>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon />
                  </div>
                  <input
                    name="image"
                    type="text"
                    id="imageUrl"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Paste image URL here"
                    defaultValue={image}
                  />
                </div>
              </div>
            </div>

            {/* --- Submit Button --- */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditForm;