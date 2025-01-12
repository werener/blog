interface Props {
	onClickFunction: (a: any) => void;
	type: "left" | "right";
}

export default function PageNavigationButton({ onClickFunction, type }: Props) {
	return (
		<button onClick={onClickFunction}>
			<img src="" alt="" />
		</button>
	);
}
