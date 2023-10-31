import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mainImage from '../../assets/main_visual.jpeg';
import logo from '../../assets/logo.png'
import classes from "./Header.module.css";
const Header = props => {
	return(
		<Fragment>
			<header className={classes.header}>
				<h1 className={classes.logo}>
					<img src={logo} alt="TWG Tea Logo - Luxury Tea Brand"/>
				</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mainImage} alt="A table full of delicious food" />
			</div>
		</Fragment>
	)
};

export default Header;