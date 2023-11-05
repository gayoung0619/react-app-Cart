import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";
const HeaderCartButton = props => {
	const cartItems = useSelector((state) => state.cart.items);

	// 카트 아이템 배열에서 모든 아이템의 count 값을 합산
	const itemCount = cartItems.reduce((count, item) => {
		return count + item.count
	}, 0);

	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>{itemCount}</span>
		</button>
	)
}
export default HeaderCartButton;