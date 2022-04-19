import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {
  IoLogoInstagram,
  IoLogoDribbble,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";
const HomeSixthSection = () => {
  return (
      <>
    
    <div className="w-full text-white">
          <div className="flex flex-col md:flex-row bg-primary px-8 py-7 items-center md:h-[22rem] ">
            <div className="flex justify-centermd: px-7 border-b md:border-r md:border-b-0 border-gray-400 md:w-3/12 w-full pt-3 pb-8 h-full">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="mb-1 text-xl ">Key words</h1>
                <div className="gap-2 flex w-full h-full ">
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                </div>
                <div className="w-4/6 md:h-7 py-2 h-9 bg-rgba-gray rounded  flex justify-center items-center mb-1">
                  Lorem
                </div>
                <div className="gap-2 flex">
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                </div>
                <div className="w-4/6  md:h-7 py-2 h-9 bg-rgba-gray rounded  flex justify-center items-center mb-1">
                  Lorem
                </div>
                <div className="gap-2 flex">
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                </div>
                <div className="gap-2 flex">
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                  <div className="w-full md:h-7 h-9 bg-rgba-gray rounded  flex justify-center items-center">
                    Lorem
                  </div>
                </div>
              </div>
            </div>

            <div className="md:px-10 border-b md:border-r md:border-b-0  border-gray-400 md:w-4/12 w-full pt-3 pb-3 flex flex-col items-center h-full ">
              <div className="flex flex-col justify-center  w-full h-full md:mb-7">
                <div className="mb-6 flex ">
                  <h1 className="text-xl">Lorem Ipsum is simply</h1>
                </div>
                <div className="relative flex justify-center items-center w-full ">
                  <input
                    type="text"
                    className="w-full rounded px-2 py-1 text-gray-600"
                  />
                  <button className="cursor-pointer flex justify-center items-center w-9 h-8 bg-violet-600 rounded absolute right-0">
                    <AiOutlineSearch size={20} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full md:mt-10 mt-4">
                <h1 className="text-xl">Lorem Ipsum is simply</h1>
                <p className="text-gray-500 my-4 text-sm ">
                  Go to our official Announcements
                </p>
              </div>
            </div>

            <div className="px-1 md:px-10 md:w-5/12 w-full py-5 flex flex-col  items-center ">
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full  md:mb-16">
                  <h1 className="text-lg">Lorem Ipsum is simply dummy</h1>
                  <p className="text-gray-500 my-4">Go to DID requirements</p>
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Lorem Ipsum is simply</h1>
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full">

                  <p className="text-gray-500 my-4 mr-4">To the knowledgebase</p>

                  <div className="flex -mb-12 justify-center md:justify-start py-3">
                <div className="flex ">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-rgba-gray mr-3 cursor-pointer">
                    <IoLogoInstagram className="text-secondary" />
                  </div>
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-rgba-gray mr-3 cursor-pointer">
                    <IoLogoDribbble className="text-secondary" />
                  </div>
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-rgba-gray mr-3 cursor-pointer">
                    <IoLogoTwitter className="text-secondary" />
                  </div>
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-rgba-gray mr-3 cursor-pointer">
                    <IoLogoYoutube className="text-secondary text-sm" />
                  </div>
                </div>
              </div>

                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
        <div className="w-full bg-slate-100 flex justify-center items-center">
          <p className="py-3 text-xs md:text-sm">© Copyright ©2021 All rights reserved | Powered by Lorem</p>
        </div>
        </>
  )
}

export default HomeSixthSection