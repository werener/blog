import React from "react";
import "..CSS/Slider.css";
import leftArrow from "../CSS/leftArrow.png";
import rightArrow from "../CSS/rightArrow.png";
export default function BtnSlider() {
    return (
        <button className="btn-slide">
            <img src={rightArrow} />
        </button>
    );
}