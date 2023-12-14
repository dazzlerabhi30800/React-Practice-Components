import React, { useState } from "react";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="sliderContainer">
      <div
        style={{ transform: `translateX(${-slideIndex * 500}px )` }}
        className="images-container"
      >
        <img
          src="https://images.unsplash.com/photo-1682695799561-033f55f75b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div
        onClick={() => setSlideIndex(slideIndex - 1 <= 0 ? 3 : slideIndex - 1)}
        className="btn prev"
      >
        &larr;
      </div>
      <div
        onClick={() => setSlideIndex(slideIndex + 1 > 3 ? 0 : slideIndex + 1)}
        className="btn next"
      >
        &rarr;
      </div>
    </div>
  );
}
