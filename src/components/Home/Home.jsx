import React from "react";
import '../../index.css'
import HomeFifthSection from "./HomeFifthSection";
import HomeFirstSection from "./HomeFirstSection";
import HomeFourthSection from "./HomeFourthSection";
import HomeSecondSection from "./HomeSecondSection";
import HomeSixthSection from "./HomeSixthSection";
import HomeThirdSection from "./HomeThirdSection";





const Home = () => {
 
 
  return (
    <div className=" w-full">
      <div>
    <HomeFirstSection/>
    <HomeSecondSection/>
    <HomeThirdSection/>
    <HomeFourthSection/>
    <HomeFifthSection/>
    <HomeSixthSection/>
      
        
        
      
        
      </div>
    </div>
  );
};

export default Home;
