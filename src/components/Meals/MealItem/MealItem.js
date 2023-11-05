import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useSelector, useDispatch } from 'react-redux';
const MealItem = props => {

	return (
		<li className={classes.meal}>
			<div className={classes.img_wrap}>
				<img src={props.src} alt={props.description} />
				<div>
					<h3>{props.name}</h3>
					<div className={classes.description}>{props.description}</div>
					<div className={classes.price}>{props.price}원</div>
				</div>
			</div>
			<div>
				<MealItemForm
					key={props.id}
					src={props.src}
					alt={props.alt}
					id={props.id}
					name={props.name}
					description={props.description}
					price={props.price}
				/>
			</div>
		</li>
	)
}
export default MealItem;