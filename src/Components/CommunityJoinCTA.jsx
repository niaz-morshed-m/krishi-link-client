import React from "react";
import { FaLeaf, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you use React Router

const CommunityJoinCTA = () => {
  return (
    <section className="py-20 bg-green-700 text-white relative overflow-hidden">
      {/* Background Pattern Overlay (Optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/ag-square.png')]"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">Join the KrishiLink Network</h2>
        <p className="text-green-100 text-lg mb-10">
          Whether you are a farmer looking to sell your harvest or a trader
          seeking fresh produce, we have a place for you.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Farmer Button */}
          <Link
            to="/register"
            className="btn btn-lg bg-white text-green-800 hover:bg-green-50 border-none shadow-lg gap-3"
          >
            <FaLeaf /> I am a Farmer
          </Link>

          {/* Trader Button */}
          <Link
            to="/register"
            className="btn btn-lg btn-outline text-white hover:bg-green-800 hover:text-white border-2 gap-3"
          >
            <FaShoppingBasket /> I am a Buyer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityJoinCTA;
