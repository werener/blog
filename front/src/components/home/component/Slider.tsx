import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);
	const nextSlide = () => {};
	const prevSlide = () => {};
	return (
		<div className="container-slider">
			{dataSlider.map((obj, index) => {
				return (
					<div
						key={obj.id}
						className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
					>
						<img
							src={
								ProcessingInstruction.env.PUBLIC_URL +
								`/Imgs/img${index + 1}.jpg`
							}
						/>
					</div>
				);
			})}
			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />
			<div className="container-dots">
				{Array.from({ length: 5 }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? "dot active" : "dot"}
					></div>
				))}
			</div>
		</div>
	);
}
