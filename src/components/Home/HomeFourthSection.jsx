import React from 'react'

import bellAngleImg from "../../assets/Bell Angle 1.png";
import succlentImg from "../../assets/Succlent angle 1.png";
import vector1Img from "../../assets/Vector 1.png";
import vector2Img from "../../assets/Vector 2.png";
import vector3Img from "../../assets/Vector 3.png";
const HomeFourthSection = () => {
  return (
    <div className="w-full flex justify-center items-center h-[30rem] text-white bg-slate-100  ">
          <div className="bg-primary px-24 lg:px-28 xl:px-40 2xl:px-44 py-24 flex flex-col md:flex-row items-center w-full justify-between relative">
            <div className="flex flex-col items-center mb-8 -mt-5 sm:m-0  ">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                6
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">ppy Clients</p>
            </div>
            <div className="flex flex-col items-center mb-8 sm:m-0 ">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                11
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">
                Compled Projects
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 sm:m-0 ">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                7M
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">anssactions</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                6000+
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">Customers</p>
            </div>
            <img
              src={bellAngleImg}
              alt="bellAngleImg"
              className="absolute w-24 -top-14 right-36 "
            />
            <img
              src={succlentImg}
              alt="succlentImg"
              className="absolute w-20 -bottom-7 left-48 "
            />
            <img
              src={vector1Img}
              alt="vector1Img"
              className="absolute w-32 bottom-0 left-0 "
            />
            <img
              src={vector2Img}
              alt="vector2Img"
              className="absolute w-32 -top-16 left-24 "
            />
            <img
              src={vector3Img}
              alt="vector3Img"
              className="absolute w-40 -top-8 right-44 "
            />
          </div>
        </div>
  )
}

export default HomeFourthSection