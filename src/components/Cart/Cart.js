import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from "../../redux/cartSlice";
import {useEffect, useState} from "react";
import Checkout from "./Checkout";
const Cart = props => {
	const cart = useSelector(state => state.cart.items);
	const dispatch = useDispatch();
	const [cartPrice, setCartPrice] = useState(0);
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);


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
	const orderHandler = () => {
		setIsCheckout(true)
	}
	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		await fetch('https://react-app-cart-11233-default-rtdb.firebaseio.com/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user : userData,
				orderedItems: cart
			})
		});
		setIsSubmitting(false);
		setDidSubmit(true);
		// 카트 비우기
		dispatch(cartActions.removeItem())
	}
	const cartModalContent = (
		<>
			{cart.length <= 0?
				<p>담겨있는 아이템이 없습니다</p>
				:
				<div>
					{cartItems}
					<div className={classes.total}>
						<span>Total Amount</span>
						<span>{cartPrice.toLocaleString('ko-KR')}원</span>
					</div>
					{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
					{!isCheckout &&
						<div className={classes.actions}>
							<button className={classes['button--alt']} onClick={props.onClose}>Close</button>
							<button className={classes.button} onClick={orderHandler}>Order</button>
						</div>
					}
				</div>
			}
		</>
	)
	const isSubmittingModalContent = <p>Sending order data...</p>
	const didSubmittingModalContent = (
		<>
			<p>Successfully sent the order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>
					Close
				</button>
			</div>
		</>
	)
	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting &&!didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmittingModalContent}
		</Modal>
	)
}
export default Cart