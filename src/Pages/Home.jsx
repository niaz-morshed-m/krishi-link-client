import React from 'react';
import LatestCrop from '../Components/LatestCrops/LatestCrop';
import Slider from '../Components/Slider';
import HowItWorks from '../Components/HowItWorks';
import Statistics from '../Components/Statistics';
import WhyUs from '../Components/WhyUs';
import Testimonials from '../Components/Testimonials';
import AgroBlogSection from '../Components/AgroBlogSection';
import TopLocations from '../Components/TopLocations';




const Home = () => {
    return (
      <div className="w-11/12 mx-auto p-3">
        <Slider></Slider>
        <LatestCrop></LatestCrop>
        <HowItWorks></HowItWorks>
        <Testimonials></Testimonials>
       <AgroBlogSection></AgroBlogSection>
       <TopLocations></TopLocations>
        <Statistics></Statistics>
<WhyUs></WhyUs>
      </div>
    );
};

export default Home;