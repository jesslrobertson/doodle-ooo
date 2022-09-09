import React, { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import DrawingPrompt from "../components/DrawingPrompt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Studio() {
  const notify = (message) => toast(message);

  //render canvas size based on screen size
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [ratio, setRatio] = useState({
    heightRatio: 0.6,
    widthRatio: 0.7,
  });

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  console.log(dimensions);

  useEffect(() => {
    handleRatio();
  }, [dimensions]);
  function handleRatio() {
    window.innerWidth < 900
      ? setRatio({
          heightRatio: 0.75,
          widthRatio: 0.85,
        })
      : setRatio({
          heightRatio: 0.6,
          widthRatio: 0.7,
        });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log(ratio);
  
  let canvasHeight
  let canvasWidth

  if (dimensions.innerWidth > 900){
    canvasHeight = 600
    canvasWidth = 800
  } else {
    canvasHeight = dimensions.height * ratio.heightRatio;
    canvasWidth = dimensions.width * ratio.widthRatio;
  }


  console.log(canvasHeight, canvasWidth);

  return (
    <div className="page studio">
      <h1 className="subtitle">Click and drag on the canvas to draw!</h1>
      <ToastContainer />
      <Canvas
        notify={notify}
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
      />
      <DrawingPrompt />
    </div>
  );
}
