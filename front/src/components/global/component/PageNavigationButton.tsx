import leftArrow from "../Static/leftArrow.png";
import rightArrow from "../Static/rightArrow.png";

type buttonDirection = "left" | "right";
interface Props {
	onClickFunction: (a: any) => void;
	type: buttonDirection;
}

export default function PageNavigationButton({ onClickFunction, type }: Props) {
	return (
		<img
			onClick={onClickFunction}
			className="navigation-button-styling"
			src={type === "left" ? leftArrow : rightArrow}
		/>
	);
}
