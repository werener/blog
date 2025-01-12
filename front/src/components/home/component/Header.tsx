import discord from "../CSS/discord.png";
import blog_logo from "../CSS/blog_logo.png";
import telegram from "../CSS/telegram.png";
import youtube from "../CSS/youtube.png";
import "../CSS/Header.css";

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<h2>
					<img className="logo-photo" src={blog_logo} width="50px"/>
					blog
				</h2>
			</div>
			<div className="icons">
				<div className="discord">
					<img src={discord} alt="discord" width="50px"/>
				</div>
				<div className="telegram">
					<img src={telegram} alt="telegram" width="50px" />
				</div>
				<div className="youtube">
					<img src={youtube} alt="youtube" width="50px"/>
				</div>
			</div>
		</div>
	);
}

export default Header;
