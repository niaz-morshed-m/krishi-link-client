import React from 'react';

const Hero2 = () => {
    return (
      <div
        className="hero rounded-3xl my-2.5 bg-cover bg-center bg-no-repeat 
             aspect-[16/9] sm:aspect-[16/9] md:min-h-screen"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/farmer-control-unmanned-aircraft-dorn-corn-agricultural-automation-digital-farming-132738255.jpg')",
        }}
      >
        <div className="hero-overlay bg-black/50 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From Field to<span className="text-primary"> Network</span>
            </h1>
            <p className="mb-5 text-base sm:text-sm md:text-xl lg:text-2xl">
              A platform where everyone in agriculture can connect, share, and
              grow.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero2;