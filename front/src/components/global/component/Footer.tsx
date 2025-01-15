import "../Static/Footer.css";

interface Props {
	launchedAt: "main" | "gallery";
}
export default function Footer({ launchedAt }: Props) {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}