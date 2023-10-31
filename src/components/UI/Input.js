import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
	  <div className={classes.input}>
		  <button type="button">up</button>
		  <input/>
		  <button type="button">down</button>
	  </div>
  )
});
export default Input;