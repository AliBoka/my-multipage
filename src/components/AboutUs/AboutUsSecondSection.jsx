import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { items } from './SliderItems';
const AboutUsSecondSection = () => {
  return (
    <div className="flex flex-col justify-center  py-10 px-7">
      <h1 className="text-xl font-semibold mb-7">Meet Our Team </h1>
      <AliceCarousel
      mouseTracking
      autoPlay={true}
      animationType={"fadeout"}
      animationDuration={1000}
      autoPlayInterval={5000}
      infinite
      autoHeight
      // autoWidth
      items={items}
      responsive={{
        0: {
          items: 1,
        },
        640: {
          items: 2,
        },
        1100: {
          items: 3,
        },
        1400: {
          items: 4,
        },
      }}
   />
    </div>
  );
};

export default AboutUsSecondSection;
