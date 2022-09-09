import React from "react";

export default function Menu(props) {
  const { setBrushSize, setBrushColor, clearCanvas, saveImage } = props;

  function handleColor(color) {
    setBrushColor(color);
  }

  function handleBrushSize(size) {
    setBrushSize(size);
  }

  const colors = {
    red: "#ff0000",
    orange: "#ffa500",
    yellow: "#ffff00",
    green: "#01a201",
    blue: "#0000ff",
    purple: "#800080",
    brown: "#a52a2a",
    black: "#000000",
    white: "#ffffff",
  };

  return (
    <div className="menu-container">
      <div className="swatch-box">
        <div
          className="swatch red"
          name="red"
          onClick={() => handleColor(colors.red)}
        />
        <div
          className="swatch orange"
          name="orange"
          onClick={() => handleColor(colors.orange)}
        />
        <div
          className="swatch yellow"
          name="yellow"
          onClick={() => handleColor(colors.yellow)}
        />
        <div
          className="swatch green"
          name="green"
          onClick={() => handleColor(colors.green)}
        />
        <div
          className="swatch blue"
          name="blue"
          onClick={() => handleColor(colors.blue)}
        />
        <div
          className="swatch violet"
          name="violet"
          onClick={() => handleColor(colors.purple)}
        />
        <div
          className="swatch black"
          name="black"
          onClick={() => handleColor(colors.black)}
        />
        <div
          className="swatch brown"
          name="black"
          onClick={() => handleColor(colors.brown)}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="swatch eraser"
          onClick={() => handleColor(colors.white)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9995 13L10.9995 6.00004M20.9995 21H7.99955M10.9368 20.0628L19.6054 11.3941C20.7935 10.2061 21.3875 9.61207 21.6101 8.92709C21.8058 8.32456 21.8058 7.67551 21.6101 7.07298C21.3875 6.388 20.7935 5.79397 19.6054 4.60592L19.3937 4.39415C18.2056 3.2061 17.6116 2.61207 16.9266 2.38951C16.3241 2.19373 15.675 2.19373 15.0725 2.38951C14.3875 2.61207 13.7935 3.2061 12.6054 4.39415L4.39366 12.6059C3.20561 13.794 2.61158 14.388 2.38902 15.073C2.19324 15.6755 2.19324 16.3246 2.38902 16.9271C2.61158 17.6121 3.20561 18.2061 4.39366 19.3941L5.06229 20.0628C5.40819 20.4087 5.58114 20.5816 5.78298 20.7053C5.96192 20.815 6.15701 20.8958 6.36108 20.9448C6.59126 21 6.83585 21 7.32503 21H8.67406C9.16324 21 9.40784 21 9.63801 20.9448C9.84208 20.8958 10.0372 20.815 10.2161 20.7053C10.418 20.5816 10.5909 20.4087 10.9368 20.0628Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="brush-box">
        <div className="brush small-b" onClick={() => setBrushSize(2)} />
        <div className="brush medium-b" onClick={() => setBrushSize(5)} />
        <div className="brush large-b" onClick={() => setBrushSize(10)} />
      </div>
      <div className="button-box">
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveImage}>Save</button>
      </div>
    </div>
  );
}
