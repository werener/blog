import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gallery from "./components/gallery/component/Gallery.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Gallery />
	</StrictMode>
);
