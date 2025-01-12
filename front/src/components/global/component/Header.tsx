import discord from "../Static/discord.png";
import blog_logo from "../Static/blog_logo.png";
import telegram from "../Static/telegram.png";
import youtube from "../Static/youtube.png";
import "../Static/Header.css";
import PageNavigationButton from "./PageNavigationButton";

interface Props {
	launchedAt: "main" | "gallery";
}

export default function Header({ launchedAt }: Props) {
	const typeOfButton = launchedAt === "main" ? "right" : "left";
	return (
		<div className="header">
			<div className="navigation-button">
				<PageNavigationButton type={typeOfButton} onClickFunction={() => {}} />
			</div>
			<style>
				{`.navigation-button { float: ${typeOfButton}; 
				margin-${typeOfButton}: 12px}`}
			</style>
			<div className="logo">
				<h2>
					<img className="logo-photo" src={blog_logo} width="50px" />
					blog
				</h2>
			</div>
			<div className="icons">
				<div className="discord">
					<img
						src={discord}
						alt="discord"
						width="100px"
						className="discord-img"
					/>
				</div>
				<div className="telegram">
					<img
						src={telegram}
						alt="telegram"
						width="64px"
						className="telegram-img"
					/>
				</div>
				<div className="youtube">
					<img
						src={youtube}
						alt="youtube"
						width="100px"
						className="youtube-img"
					/>
				</div>
			</div>
		</div>
	);
}
