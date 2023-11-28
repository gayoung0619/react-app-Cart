import classes from './CartItem.module.css';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { cartActions } from '../../redux/cartSlice'

 const CartItem = (props) => {
	const dispatch = useDispatch();
	const [option, setOption] = useState(props.count);
	const incrementCount = () => {
		dispatch(cartActions.updateCartItem({ itemId: props.id, newOption: props.count + 1 }));
	};
	const decrementCount = () => {
		if (props.count > 0) {
			dispatch(cartActions.updateCartItem({ itemId: props.id, newOption: props.count - 1 }));
		}
	}

	// 각 항목의 가격을 계산합니다.
	const itemPrice = props.price * props.count;
	return (
		<li className={classes['cart-item']}>
			<div>
				<h2>{props.name}</h2><span className={classes.amount}>x{option}</span>
				<div className={classes.summary}>
					<span className={classes.price}>- {itemPrice.toLocaleString('ko-KR')}원</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={decrementCount}>−</button>
				<button onClick={incrementCount}>+</button>
			</div>
		</li>
	);
};

export default CartItem;