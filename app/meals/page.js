import Link from 'next/link'
import { Suspense } from 'react'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import s from './page.module.css'

export const metadata = {
	title: 'All Meals',
}

async function Meals() {
	const meals = await getMeals()

	return <MealsGrid meals={meals} />
}
export default async function MealsPage() {
	const meals = await getMeals()

	return (
		<>
			<header className={s.header}>
				<h1>
					Delicious meals, created <span className={s.highlight}>by you</span>
				</h1>
				<p>Choose your favorite recipes and cook it youself! It is easy and fun!</p>
				<p className={s.cta}>
					<Link href='/meals/share'>Share Your Favourite Recipe</Link>
				</p>
			</header>
			<main className={s.main}>
				<Suspense fallback={<h1 className={s.loading}>Loading meals...</h1>}>
					<Meals />
				</Suspense>
			</main>
		</>
	)
}
