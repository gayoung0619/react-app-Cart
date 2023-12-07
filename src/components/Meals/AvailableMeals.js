import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from "react-query";
const AvailableMeals = () => {
	// const tea = useSelector((state) => state.teas);
	const fetchTeas = async () => {
		const response = await fetch(
			`https://react-app-cart-11233-default-rtdb.firebaseio.com/teas.json`
		);
		return response.json();
	}
	const { data, isLoading, isError, error } = useQuery(
		"teas",
		fetchTeas
	)
	if(isLoading) return <div>isLoading...</div>
	if(isError) return <div>{error.toString()}</div>

	return (
		<section className={classes.meals}>
			<Card>
				{data.map((tea, i) => (
					<MealItem
						key={i}
						src={tea.src}
						alt={tea.alt}
						id={i}
						name={tea.name}
						description={tea.description}
						price={tea.price}
					/>
				))}
			</Card>
		</section>
	)
}
export default AvailableMeals;