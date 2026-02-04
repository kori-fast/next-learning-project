import MealItem from './meal-item'
import s from './meals-grid.module.css'

export default function MealsGrid({ meals }) {
	return (
		<ul className={s.meals}>
			{meals.map(meal => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	)
}
