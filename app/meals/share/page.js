'use client'
import ImagePicker from '@/components/image-picker'
import s from './page.module.css'
import { shareMeal } from '@/lib/actions'
import MealsFormSubmit from '@/components/meals/meals-form-submit'
import { useActionState } from 'react'

export default function ShareMealPage() {
	const [state, formAction] = useActionState(shareMeal, { error: null })

	return (
		<>
			<header className={s.header}>
				<h1>
					Share your <span className={s.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={s.main}>
				<form
					className={s.form}
					action={formAction}
				>
					<div className={s.row}>
						<p>
							<label htmlFor='name'>Your name</label>
							<input
								type='text'
								id='name'
								name='name'
							/>
						</p>
						<p>
							<label htmlFor='email'>Your email</label>
							<input
								type='email'
								id='email'
								name='email'
							/>
						</p>
					</div>
					<p>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							id='title'
							name='title'
							required
						/>
					</p>
					<p>
						<label htmlFor='summary'>Short Summary</label>
						<input
							type='text'
							id='summary'
							name='summary'
							required
						/>
					</p>
					<p>
						<label htmlFor='instructions'>Instructions</label>
						<textarea
							id='instructions'
							name='instructions'
							rows='10'
							required
						></textarea>
					</p>
					<ImagePicker
						label='Your image'
						name='image'
					/>
					{state.error ? <p className={s.error}>{state.error}</p> : null}
					<p className={s.actions}>
						<MealsFormSubmit />
					</p>
				</form>
			</main>
		</>
	)
}
