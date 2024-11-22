
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Header  from "./ui/Header";
import About from "./about/About";
import NotFound from "./NotFound";
import Devices from "./devices/Devices";

export default function App() {
    return (
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    );
  }
  