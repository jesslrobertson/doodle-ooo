import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Studio from "../pages/Studio";

export default function AppRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="studio" element={<Studio />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  );
}
