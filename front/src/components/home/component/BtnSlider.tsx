import React from "react";
import "..CSS/Slider.css";
import leftArrow from "../../GlobalStatic/leftArrow.png";
import rightArrow from "../../GlobalStatic/rightArrow.png";
export default function BtnSlider() {
	return (
		<button className="btn-slide">
			<img src={rightArrow} />
		</button>
	);
}
