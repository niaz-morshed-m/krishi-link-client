import React from 'react';

const Hero3 = () => {
    return (
      <div
        className="hero rounded-3xl my-2.5 bg-cover bg-center bg-no-repeat 
             aspect-[16/9] sm:aspect-[16/9] md:min-h-screen"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1262878973/photo/rice%E3%80%80farmer.jpg?s=612x612&w=0&k=20&c=jc5A0bXiq3Bz4k79Fqlt-LcjqqkrWFGyJ9haoW46MKQ=')",
        }}
      >
        <div className="hero-overlay bg-black/50 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Crops, Your <span className="text-primary">Market</span>
            </h1>
            <p className="mb-5 text-base sm:text-sm md:text-xl lg:text-2xl">
              Post what you grow, explore new produce, and collaborate directly
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero3;