import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../../redux/cartSlice";
import {isAllOf} from "@reduxjs/toolkit";

const MealItemForm = props => {
	const cartItems = useSelector(state => state.cart.items);
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();
	const addItemHandler = (e) => {
		e.preventDefault();
		const itemData = {
			id: props.id,
			name: props.name,
			price: props.price,
			count: count
		}
		const existingItem = cartItems.find(item => item.id === itemData.id);
		if(existingItem){
			console.log("같은 아이디")
			const updatedItem = {
				...existingItem,
				count: existingItem.count + itemData.count
			}
			dispatch(cartActions.updateItem(updatedItem));}
		else if(!existingItem){
			console.log("다른 아이디");
			dispatch(cartActions.addItem(itemData));
			setCount(0);
		}

	}
	return (
		<form className={classes.form}>
			<Input count={count} setCount={setCount} />
			<button className={classes['btn_add']} onClick={addItemHandler} >+ Add</button>
		</form>
	)
}
export default MealItemForm;