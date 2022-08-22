import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Gallery from '../pages/Gallery'
import Studio from "../pages/Studio"
import Alert from './Alert'

export default function AppRouter(props){
  const{ setAlert } = Alert
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='studio' element={<Studio setAlert={setAlert}/>} />
      <Route path='gallery' element={<Gallery />} />
    </Routes>
  )
}