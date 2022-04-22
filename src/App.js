import React from "react";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Service from "./components/Service/Service";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <>


      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
     <Footer/>

    </>

  );
}

export default App;
