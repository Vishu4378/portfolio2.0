import React from "react";
// import reactLogo from "./assets/react.svg";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Work from "./Components/Work";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div classNameName="bg-white h-screen ">
        <About />
        <Post />
        <Work />
        <Contact />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
