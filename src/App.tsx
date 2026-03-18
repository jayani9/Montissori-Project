import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";/* 
import { Navbar } from "./components/navbar/Navbar"; */
/* import Home from "./pages/Home";
import Activities from "./pages/Activities"; */

import About from "./pages/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// A Home component to group your landing page sections
const Home = () => (
  <>
    <Hero />
    <Features />
    <About />
  </>
);

function App() {
  return (
    <Router>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* <Navbar /> */}
        {/* <main style={{ marginLeft: 0 }} className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main> */}
        <div className="absolute z-50 w-full">
          <Navbar />
        </div>
        {/* <Hero />
        <Features />
        <About /> */}
        <main>
          <Routes>
            {/* The landing page shows Hero, Features, and About */}
            <Route path="/" element={<Home />} />
            
            {/* Other routes - these will render on a clean page */}
            <Route path="/pedagogiikka" element={<About />} /> 
            <Route path="/toiminta" element={<Features />} />
            {/* Add more routes as you create pages */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
