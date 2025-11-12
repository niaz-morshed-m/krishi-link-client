import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
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

const PostForm = () => {
    const { user } = useContext(AuthContext);
    const handlePostCrop = (e)=>{
e.preventDefault()
const form = e.target
const cropName = form.name.value
const type = form.type.value
const quantity = form.quantity.value;
const unit = form.unit.value
const price = form.price.value
const description = form.description.value
const location = form.location.value
const image = form.image.value 

// console.log(cropName, type, quantity, unit, description, location, image)
const currentTime = new Date().toISOString().split(".")[0] + "Z";
const newCrop = {
  name: cropName,
  type:type,
  pricePerUnit: price,
  unit: unit,
  quantity: quantity,
  description: description,
  location: location,
  image: image,
  owner: {
    ownerEmail: user.email,
    ownerName: user.displayName,
  },
  addTime: currentTime,
  interests: [],
};

fetch("http://localhost:3000/crop", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(newCrop),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

}
    return (
      <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-inter">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Add New Crop Listing
          </h1>

          {/* Form is broken into sections for styling */}
          <form onSubmit={handlePostCrop} className="space-y-6">
            {/* --- Crop Details Section --- */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Crop Details
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
                  name='name'
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
                name='type'
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-500"
                  placeholder="e.g. vegetable"
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
                    name='quantity'
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="e.g., 500"
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
                    name='unit'
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
                  name='price'
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
                name='description'
                  id="description"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Describe your crop in detail, including variety, cultivation method, and quality."
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
                  name='location'
                    type="text"
                    id="location"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="e.g. Dhaka"
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
                  name='image'
                    type="text"
                    id="imageUrl"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Paste image URL here"
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

export default PostForm;