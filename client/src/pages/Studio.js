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
    width: window.innerWidth
  });

  const [canvasSize, setCanvasSize] = useState({
    height: 600,
    width: 800
  });

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    handleSize();
  }, [handleSize]);

  function handleSize() {
    window.innerWidth >= 900 ?
      setCanvasSize({
        height: 600,
        width: 800
      })
      :setCanvasSize({
        height: dimensions.height * 0.75,
        width: dimensions.width * 0.85,
      });
    }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="page studio">
      <h1 className="subtitle">Click and drag on the canvas to draw!</h1>
      <ToastContainer />
      <Canvas
        notify={notify}
        canvasHeight={canvasSize.height}
        canvasWidth={canvasSize.width}
      />
      <DrawingPrompt />
    </div>
  );
}
