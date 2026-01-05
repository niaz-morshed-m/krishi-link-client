import React from 'react';

const Hero = () => {
    return (
      <div
        className="hero rounded-3xl my-2.5 bg-cover bg-center bg-no-repeat h-[60vh] md:h-[70vh]"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/004/486/983/large_2x/couple-farmer-working-on-green-rice-field-together-in-thailand-photo.jpg')",
        }}
      >
        <div className="hero-overlay bg-black/50 rounded-3xl"></div>

        <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Grow Together, Share <span className="text-primary">Together</span>
            </h1>
            <p className="mb-5 text-base sm:text-sm md:text-xl lg:text-2xl">
              Post what you grow, explore new produce, and collaborate directly
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero;