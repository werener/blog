import { useState } from "react";
import "../CSS/Slider.css";
import BtnSlider from "./BtnSlider";

interface Props {
	slides: Array<{ id: number; image: string; title: string }>;
}
export default function Slider({ slides }: Props) {
	const [slideIndex, setSlideIndex] = useState(1);
	const nextSlide = () => {
		if (slideIndex !== slides.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === slides.length) {
			setSlideIndex(1);
		}
	};
	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(slides.length);
		}
	};
	const moveDot = (index: any) => {
		setSlideIndex(index);
	};
	return (
		<div className="container-slider">
			{slides.map((obj, index) => {
				return (
					<div
						key={obj.id}
						className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
					>
						<img
							className="slider-pictures"
							src={"src/components/global" + `/Static/${index + 1}.jpg`}
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
