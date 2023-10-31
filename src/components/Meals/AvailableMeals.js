import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'
// meals 데이터
const DUMMY_TEAS = [
	{
		id: 'm1',
		src: '/images/tea1.jpeg',
		name: '1837 블랙티',
		description: '달콤한 베리와 캐러맬의 풍미가 짙은 여운을 남기는 홍차',
		price: 59000,
	},
	{
		id: 'm2',
		src: '/images/tea2.jpeg',
		name: '엠페러 보이차',
		description: '강한 흙 내음으로 따스한 기운을 전하는 보이차',
		price: 59000,
	},
	{
		id: 'm3',
		src: '/images/tea3.jpeg',
		name: '레드 오브 아프리카 티',
		description: '마리골드에 상큼한 오렌지 향이 더해진 루이보스차',
		price: 59000,
	},
	{
		id: 'm4',
		src: '/images/tea4.jpeg',
		name: '싱가포르 브렉퍼스트 티',
		description: '녹차, 바닐라, 향싱료를 블렌딩해 동양적 풍미를 그려낸 홍차',
		price: 59000,
	},
];
const AvailableMeals = () => {
	const MealsList = DUMMY_TEAS.map(tea => (
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
	return <section className={classes.meals}>
		<Card>
			{MealsList}
		</Card>
	</section>
}
export default AvailableMeals;