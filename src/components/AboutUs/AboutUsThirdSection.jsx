import React from "react";
import brandImg1 from '../../assets/l2 1.png'
import brandImg2 from '../../assets/l3 1.png'
import brandImg3 from '../../assets/l4 1.png'
import brandImg4 from '../../assets/l5 1.png'
import brandImg5 from '../../assets/l6 1.png'
import brandImg6 from '../../assets/uc 1.png'


const AboutUsThirdSection = () => {
  return (
    <div className="flex flex-col w-full md:py-20 py-12 px-16 bg-primary   justify-center items-center text-white">
      <div className="flex flex-col text-center md:w-4/5 w-full">
          <h1 className="text-2xl font-medium mb-6">Who we are engaged with...</h1>
          <p className="text-sm lg:text-base font-light leading-6">We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they’re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between h-96 items-center mt-10 pl-5 md:pl-0 md:h-auto">
          <img src={brandImg1} alt="brandImg1" className="mr-6 w-32 sm:w-24 md:w-24 lg:w-36 xl:w-40" />
          <img src={brandImg2} alt="brandImg2" className="mr-6 w-32 sm:w-24 md:w-24 lg:w-36 xl:w-40" />
          <img src={brandImg3} alt="brandImg3" className="mr-6 w-32 sm:w-24 md:w-24 lg:w-36 xl:w-40" />
          <img src={brandImg4} alt="brandImg4" className="mr-6 w-32 sm:w-24 md:w-24 lg:w-36 xl:w-40" />
          <img src={brandImg5} alt="brandImg5" className="mr-6 w-32 sm:w-24 md:w-24 lg:w-36 xl:w-40" />
          
      </div>
      <div className="flex justify-center items-center mt-6">
      <img src={brandImg6} alt="brandImg6" />

      </div>
    </div>
  );
};

export default AboutUsThirdSection;
