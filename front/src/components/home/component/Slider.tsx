import { useState } from "react";
import "../CSS/Slider.css";
import BtnSlider from "./BtnSlider";
import { isOk } from "latex-parser";

type slide_type =
	| "slide active-anim"
	| "slide background-visible left"
	| "slide background-visible right"
	| "slide";

type dot_type = 
	| "dot active-anim" 
	| "dot background-visible" 
	| "dot";

type picture_type =
	| "picture active-anim"
	| "picture background-visible left"
	| "picture background-visible right"
	| "picture";

type slide_position = "first" | "last" | "middle";
interface Props {
	slides: Array<{ id: number; image: string; title: string }>;
}

export default function Slider({ slides }: Props) {
	const [slideIndex, setSlideIndex] = useState(1);

	const getSlidePosition = (): slide_position => {
		if (slideIndex === 1) return "first";
		if (slideIndex === slides.length) return "last";
		return "middle";
	};
	const getSlideStatus = (index: number) => {
		if (slideIndex === index) return "slide active-anim";
		if (getSlidePosition() === "middle") {
			if (slideIndex === index - 1) return "slide background-visible right";
			if (slideIndex === index + 1) return "slide background-visible left";
			return "slide";
		}
		if (getSlidePosition() === "first") {
			if (slideIndex === index - 1) return "slide background-visible right";
			if (index === slides.length) return "slide background-visible left";
			return "slide";
		}
		if (getSlidePosition() === "last") {
			if (slideIndex === index + 1) return "slide background-visible left";
			if (index === 1) return "slide background-visible right";
			return "slide";
		}
	};
	const getPictureStatus = (index: number) => {
		if (slideIndex === index) return "picture active-anim";
		if (getSlidePosition() === "middle") {
			if (slideIndex === index - 1) return "picture background-visible right";
			if (slideIndex === index + 1) return "picture background-visible left";
			return "picture";
		}
		if (getSlidePosition() === "first") {
			if (slideIndex === index - 1) return "picture background-visible right";
			if (index === slides.length) return "picture background-visible left";
			return "picture";
		}
		if (getSlidePosition() === "last") {
			if (slideIndex === index + 1) return "picture background-visible left";
			if (index === 1) return "picture background-visible right";
			return "picture";
		}
	};
	const getDotStatus = (index: number) => {
		if (slideIndex === index) return "dot active-anim";
		if (getSlidePosition() === "middle") {
			if (slideIndex === index - 1) return "dot background-visible";
			if (slideIndex === index + 1) return "dot background-visible";
			return "dot";
		}
		if (getSlidePosition() === "first") {
			if (slideIndex === index - 1) return "dot background-visible";
			if (index === slides.length) return "dot background-visible";
			return "dot";
		}
		if (getSlidePosition() === "last") {
			if (slideIndex === index + 1) return "dot background-visible";
			if (index === 1) return "dot background-visible";
			return "dot";
		}
	}

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
	const moveDot = (index: number) => {
		setSlideIndex(index);
	};

	return (
		<div className="container-slider">
			<div className="slides-and-arrows">
				<BtnSlider moveSlide={prevSlide} direction={"prev"} />
				<div className="shown-slides-only">
					{slides.map((obj, index) => {
						return (
							<div key={obj.id} className={getSlideStatus(index + 1)}>
								<img
									className={getPictureStatus(index + 1)}
									src={"src/components/global" + `/Static/${index + 1}.jpg`}
								/>
							</div>
						);
					})}
				</div>
				<BtnSlider moveSlide={nextSlide} direction={"next"} />
			</div>
			<div className="container-dots">
				{Array.from({ length: slides.length }).map((item, index) => (
					<button
						onClick={() => moveDot(index + 1)}
						className={getDotStatus(index + 1)}
					></button>
				))}
			</div>
		</div>
	);
}
