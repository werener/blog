import discord from "../CSS/discord.png";
import blog_logo from "../CSS/blog_logo.png";
import "../CSS/Header.css";

function Header() {
	console.log(typeof blog_logo);
	return (
		<div className="header">
			<div className="logo">
				<h2>
					<img src={blog_logo} />
					blog
				</h2>
			</div>
			<div className="icons">
				<img src={discord} alt="discord" />
				<img src="" alt="telegram" />
				<img src="" alt="youtube" />
			</div>
		</div>
	);
}

export default Header;
