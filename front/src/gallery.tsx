import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectDisplay from "./components/gallery/component/ProjectDisplay";
import Header from "./components/global/component/Header";

const response = await fetch("http://localhost:3000/api/gallery").then((r) =>
	r.json()
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header launchedAt="gallery" />
		<ProjectDisplay AllProjects={response} />
	</StrictMode>
);
