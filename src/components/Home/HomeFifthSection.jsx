import React from 'react'

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { items } from './SliderItems';
const HomeFifthSection = () => {
  return (
    <div className="bg-slate-100 px-4 pt-12">
    <div className="flex flex-col px-8 items-center">
      <h1 className="text-3xl lg:text-4xl font-medium">
        Our Latest News
      </h1>
      <p className="text-sm lg:text-base text-gray-700 my-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt
      </p>
    </div>
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
  )
}

export default HomeFifthSection