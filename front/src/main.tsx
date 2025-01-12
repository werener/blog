import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/home/component/Header.tsx";
import Slider from "./components/home/component/Slider.tsx";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header />
		<Slider />
	</StrictMode>
);
