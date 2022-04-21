import React from "react";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <>


      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
     <Footer/>

    </>

  );
}

export default App;
