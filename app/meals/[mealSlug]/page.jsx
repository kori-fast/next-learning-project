import { use, Suspense } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import s from './page.module.css'

export async function generateMetadata({ params }) {
	const { mealSlug } = await params
	const meal = getMeal(mealSlug)

	if (!meal) {
		notFound()
	}

	return {
		title: meal.title,
		description: meal.summary,
	}
}

export default function MealDetailPage({ params }) {
	const { mealSlug } = use(params)
	const meal = getMeal(mealSlug)

	if (!meal) {
		notFound()
	}

	const instructions = meal.instructions.replace(/\n/g, '<br/>')

	return (
		<>
			<header className={s.header}>
				<div className={s.image}>
					<Image
						src={meal.image}
						alt={meal.title}
						fill
					/>
				</div>
				<div className={s.headerText}>
					<h1>{meal.title}</h1>
					<p className={s.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={meal.summart}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={s.instructions}
					dangerouslySetInnerHTML={{ __html: instructions }}
				></p>
			</main>
		</>
	)
}
