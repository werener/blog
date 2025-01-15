import React from "react";
import "../CSS/Slider.css";
import leftArrow from "../../global/Static/leftArrow.png";
import rightArrow from "../../global/Static/rightArrow.png";

interface Props {
	direction: "next" | "prev";
	moveSlide: () => void;
}
export default function BtnSlider({ direction, moveSlide }: Props) {
	return (
		<div className="btn-slide">
			<button
				onClick={moveSlide}
				className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
			>
				<img
					className="btn-slide"
					src={direction === "next" ? rightArrow : leftArrow}
				/>
			</button>
		</div>
	);
}
