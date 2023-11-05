import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';
import { useSelector, useDispatch } from 'react-redux';

const AvailableMeals = () => {
	const tea = useSelector((state) => state.teas);
	const MealsList = tea.map(tea => (
		<MealItem
			key={tea.id}
			src={tea.src}
			alt={tea.alt}
			id={tea.id}
			name={tea.name}
			description={tea.description}
			price={tea.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				{MealsList}
			</Card>
		</section>
	)
}
export default AvailableMeals;