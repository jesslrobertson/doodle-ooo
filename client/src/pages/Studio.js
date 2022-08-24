import React from "react";
import Canvas from "../components/Canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Studio() {
  const notify = (message) => toast(message);

  return (
    <div className="page studio">
      <h1 className="subtitle">Click and drag on the canvas to draw!</h1>
      <ToastContainer />
      <Canvas notify={notify} />
    </div>
  );
}
