import React from 'react';
import LatestCrop from '../Components/LatestCrops/LatestCrop';
import Slider from '../Components/Slider';
import HowItWorks from '../Components/HowItWorks';
import Blog from '../Components/Blog';
import Statistics from '../Components/Statistics';
import WhyUs from '../Components/WhyUs';




const Home = () => {
    return (
      <div className="w-11/12 mx-auto p-3">
        <Slider></Slider>
        <LatestCrop></LatestCrop>
        <HowItWorks></HowItWorks>
        <Blog></Blog>
        <Statistics></Statistics>
<WhyUs></WhyUs>
      </div>
    );
};

export default Home;