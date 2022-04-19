import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>


    </>

  );
}

export default App;
