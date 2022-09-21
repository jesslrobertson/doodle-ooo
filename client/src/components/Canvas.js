import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import axios from "axios";

export default function Canvas(props) {
  const canvasRef = useRef();
  const ctxRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(4);
  const [brushColor, setBrushColor] = useState("000000");
  const [brushCoords, setBrushCoords] = useState({ x: 0, y: 0 });
  const { notify, canvasHeight, canvasWidth } = props;

  // set context for canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.setLineCap = "round";
    ctx.lineJoin = "round";
    ctx.setLineJoin = "round";
    ctx.filter = "blur(.9px)";
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctxRef.current = ctx;
  }, [brushColor, brushSize]);

  // handle drawing
  const handleMouseMove = (e) => {
    setBrushCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  };

  function startDrawing(e) {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(brushCoords.x, brushCoords.y);
    setIsDrawing(true);
  }

  function draw(e) {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(brushCoords.x, brushCoords.y);
    ctxRef.current.stroke();
  }

  function stopDrawing(e) {
    ctxRef.current.closePath();
    setIsDrawing(false);
  }

  //save an image to the 'savedImages' array - soon to be a POST request
  function saveImage(){
    const canvas = canvasRef.current;
    const Url = { Url: `${canvas.toDataURL()}` };
    console.log("Axios request made");
    axios
      .post("https://api-doodle-ooo.cyclic.app/gallery", Url)
      .then((res) => {
        notify("Artwork Saved!");
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data))
  }

  //clear the canvas
  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="canvas-container">
      <canvas
        className="canvas"
        id="canvas"
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={(e) => startDrawing()}
        onMouseUp={(e) => stopDrawing()}
        onMouseMove={(e) => {
          handleMouseMove(e);
          draw(e);
        }}
        ref={canvasRef}
      ></canvas>
      <Menu
        setBrushSize={setBrushSize}
        setBrushColor={setBrushColor}
        clearCanvas={clearCanvas}
        saveImage={saveImage}
      />
    </div>
  );
}
