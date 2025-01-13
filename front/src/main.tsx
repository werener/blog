import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/global/component/Header.tsx";
import BtnSlider from "./components/home/component/BtnSlider.tsx";
import Slider from "./components/home/component/Slider.tsx";

const allSlides = [
	{ id: 1, image: "../CSS/telegram.png", title: "telegram" },
	{ id: 2, image: "../CSS/discord.png", title: "discord" },
	{ id: 3, image: "../CSS/youtube.png", title: "youtube" },
];

// <Slider />
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header launchedAt="main" />
		<Slider slides={allSlides} />
	</StrictMode>
);
