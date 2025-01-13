interface Props {
	AllProjects: { name: string; img: string; description: string }[];
}

export default function ProjectDisplay({ AllProjects }: Props) {
	return (
		<ul>
			{AllProjects.map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
}
