import Link from 'next/link'
import Image from 'next/image'

import s from './meal-item.module.css'

export default function MealItem({ title, slug, image, summary, creator }) {
	return (
		<article className={s.meal}>
			<header>
				<div className={s.image}>
					<Image src={image} alt={title} fill />
				</div>
				<div className={s.headerText}>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</header>
			<div className={s.content}>
				<p className={s.summary}>{summary}</p>
				<div className={s.actions}>
					<Link href={`/meals/${slug}`}>View Details</Link>
				</div>
			</div>
		</article>
	)
}
