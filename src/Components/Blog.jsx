import Aos from 'aos';
import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
             Aos.init();
           }, []);
         
         
    return (
      <div className="mt-25 space-y-8">
        <p className="text-4xl font-bold text-center mt-10">Blogs</p>
        <div
          className="flex md:flex-row flex-col lg:flex-row items-center justify-center gap-6"
          data-aos-duration="5000"
          data-aos="fade-up"
        >
          <div className=" w-full bg-white rounded-lg shadow-md overflow-hidden h-full flex-1">
     
            <img
              className="w-full h-48 object-cover"
              src="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU="
              alt="Man inspecting crops in a field"
            />

        
            <div className="p-6">
     
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Bangladesh’s rising reliance on imported seeds sparks
                food‑security concerns.
              </h2>

  
              <p className="text-sm text-gray-500 mb-3">May 22, 2024</p>


              <p className="text-gray-700 text-base mb-4">
                Experts warn that Bangladesh is increasingly relying on imported
                seeds for major crops like jute, maize, hybrid...
              </p>


              <a
                href="#"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
          <div className=" w-full bg-white rounded-lg shadow-md overflow-hidden h-full flex-1">

            <img
              className="w-full h-48 object-cover"
              src="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU="
              alt="Man inspecting crops in a field"
            />


            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Bangladesh’s rising reliance on imported seeds sparks
                food‑security concerns.
              </h2>

              <p className="text-sm text-gray-500 mb-3">May 22, 2024</p>

  
              <p className="text-gray-700 text-base mb-4">
                Experts warn that Bangladesh is increasingly relying on imported
                seeds for major crops like jute, maize, hybrid...
              </p>

 
              <a
                href="#"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
          <div className=" w-full bg-white rounded-lg shadow-md overflow-hidden h-full flex-1">

            <img
              className="w-full h-48 object-cover"
              src="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU="
              alt="Man inspecting crops in a field"
            />


            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Bangladesh’s rising reliance on imported seeds sparks
                food‑security concerns.
              </h2>


              <p className="text-sm text-gray-500 mb-3">May 22, 2024</p>

              <p className="text-gray-700 text-base mb-4">
                Experts warn that Bangladesh is increasingly relying on imported
                seeds for major crops like jute, maize, hybrid...
              </p>


              <a
                href="#"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>

        

          
        </div>
      </div>
    );
};

export default Blog;