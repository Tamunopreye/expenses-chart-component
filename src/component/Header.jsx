import logo from "../images/logo.svg";
const Header = () => {
	return (
		<header className="header">
			<p>
				My balance <span className="price">$921.48</span>
			</p>
			<img src={logo} alt="logo" />
		</header>
	);
};

export default Header;
