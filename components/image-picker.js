'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import s from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState(null)
	const imageInput = useRef()
	const handlePickImageClick = () => {
		imageInput.current.click()
	}

	const handleImageChange = e => {
		const file = e.target.files[0]

		if (!file) {
			setPickedImage(null)

			return
		}

		const reader = new FileReader()
		reader.onload = () => {
			setPickedImage(reader.result)
		}
		reader.readAsDataURL(file)
	}

	return (
		<div className={s.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={s.controls}>
				<div className={s.preview}>
					{!pickedImage && <p>No image picked yet</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt='Picked image'
							fill
						/>
					)}
				</div>
				<input
					id={name}
					name={name}
					ref={imageInput}
					className={s.input}
					type='file'
					accept='image/png, image/jpeg'
					required
					onChange={handleImageChange}
				/>
				<button
					className={s.button}
					type='button'
					onClick={handlePickImageClick}
				>
					Pick an image
				</button>
			</div>
		</div>
	)
}
