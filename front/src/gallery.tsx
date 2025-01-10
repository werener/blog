import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProjectDisplay from "./components/gallery/component/ProjectDisplay";

const Arr = await fetch("http://localhost:3000/api/gallery", ).then(r => r.json());

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ProjectDisplay AllProjects={response} />
	</StrictMode>
);
