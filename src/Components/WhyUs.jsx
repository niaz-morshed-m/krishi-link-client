import Aos from 'aos';
import React, { useEffect } from 'react';

const WhyUs = () => {
    useEffect(() => {
             Aos.init();
           }, []);
         
           
    return (
      <div
        className=" my-25 space-y-5"
        data-aos-duration="5000"
        data-aos="fade-right"
      >
        <h2 className="text-3xl text-center font-bold text-green-800 mb-6">
          Why Choose KrishiLink
        </h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">
              Free and easy to use
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box">
              Direct farmer-to-farmer connection
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">
              Collaborative agricultural community
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box">
              Verified profiles and secure data
            </div>
            <hr />
          </li>
        </ul>
      </div>
    );
};

export default WhyUs;