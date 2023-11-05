import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux';
const Cart = props => {
	const cart = useSelector(state => state.cart.items);
	const cartItems = (
		<ul className={classes['cart-items']}>
			{cart.map(item =>
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
				/>
			)}
		</ul>
	)
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{cart.totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}
export default Cart