import React, { useState } from "react";
import classes from "./Input.module.css";
const Input = ({ count,setCount }) => {
	const incrementCount = () => {
		setCount(count + 1);
	};
	const decrementCount = () => {
		if(count > 0) {
			setCount(count - 1);
		}
	}
	const handleInputChange = (e) => {
		const numValue = e.target.value.replace(/\D/g, '');
		setCount(Number(numValue));
	}
	return (
		<div className={classes.input}>
			<button type="button" onClick={incrementCount}>up</button>
			<input value={count} onChange={handleInputChange}/>
			<button type="button" onClick={decrementCount}>down</button>
		</div>
	);
};
export default Input;