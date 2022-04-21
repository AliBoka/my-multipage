import React from "react";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>


      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
     <Footer/>

    </>

  );
}

export default App;
