import { use } from 'react'

export default function MealDetailPage({ params }) {
	const { slug } = use(params)

	return (
		<main>
			<h1>Meal Detail Page</h1>
		</main>
	)
}
