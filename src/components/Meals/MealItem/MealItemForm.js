import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../../redux/cartSlice";

const MealItemForm = props => {
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();
	const addItemHandler = (e) => {
		e.preventDefault();
		const itemData = {
			name: props.name,
			price: props.price,
			count: count
		}
		dispatch(cartActions.addItem(itemData));
		setCount(0);
	}
	return (
		<form className={classes.form}>
			<Input count={count} setCount={setCount} />
			<button className={classes['btn_add']} onClick={addItemHandler} >+ Add</button>
		</form>
	)
}
export default MealItemForm;