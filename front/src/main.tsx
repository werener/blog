import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/global/component/Header.tsx";

// <Slider />
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header launchedAt="main" />
	</StrictMode>
);
