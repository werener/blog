import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProjectDisplay from "./components/gallery/component/ProjectDisplay.tsx";

let Arr = [
	{ img: "sjdfgasdf", name: "penis", description: "penis2D" },
	{ img: "asgdfasd", name: "zalupa_slonika", description: "zalupa" },
];

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ProjectDisplay AllProjects={Arr} />
	</StrictMode>
);
