import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProjectDisplay from "./components/gallery/component/ProjectDisplay";

const response = await fetch("127.0.0.1:3000/projects").then((r) => r.json());
const Arr = JSON.parse(response);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ProjectDisplay AllProjects={response} />
	</StrictMode>
);
