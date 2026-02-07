'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'

export async function shareMeal(prevState, formData) {
	const meal = {
		title: formData.get('title'),
		image: formData.get('image'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
	}

	if (!isFormValid(meal)) {
		// Possible option, but bad UX
		// throw new Error('Please fill out all the fields')
		return {
			error: 'Please fill out all the fields',
		}
	}

	await saveMeal(meal)

	redirect('/meals')
}

function isFormValid(meal) {
	// just to save time, proper validation should be used here
	return (
		isTextValid(meal.title) &&
		isTextValid(meal.summary) &&
		isTextValid(meal.instructions) &&
		isTextValid(meal.creator) &&
		isTextValid(meal.creator_email) &&
		meal.image?.size > 0
	)
}

function isTextValid(text) {
	return text?.trim().length > 0
}
