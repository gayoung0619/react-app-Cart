import classes from './CartItem.module.css';
import {useState} from "react";

const CartItem = (props) => {
	const [option, setOption] = useState(props.count);
	const incrementCount = () => {
		setOption(option + 1);
	};
	const decrementCount = () => {
		if(option > 0) {
			setOption(option - 1);
		}
	}
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