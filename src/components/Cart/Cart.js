import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
const Cart = props => {
	const cart = useSelector(state => state.cart.items);
	const [cartPrice, setCartPrice] = useState(0);
	useEffect(()=>{
		const updatedCartPrice = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0)
		setCartPrice(updatedCartPrice)
	}, [cart]);

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cart.map(item =>
				<CartItem
					key={item.id}
					id={item.id}
					name={item.name}
					count={item.count}
					price={item.price}
				/>
			)}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cart.length <= 0?
				<p>담겨있는 아이템이 없습니다</p>
				:
				<div>
					{cartItems}
					<div className={classes.total}>
						<span>Total Amount</span>
						<span>{cartPrice.toLocaleString('ko-KR')}원</span>
					</div>
					<div className={classes.actions}>
						<button className={classes['button--alt']} onClick={props.onClose}>Close</button>
						<button className={classes.button}>Order</button>
					</div>
				</div>
			}
		</Modal>
	)
}
export default Cart