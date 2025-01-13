import React from "react";
import "../CSS/Slider.css";
import leftArrow from "../CSS/leftArrow.png";
import rightArrow from "../CSS/rightArrow.png";
export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}