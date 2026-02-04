'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './nav-link.module.css'

export default function NavLink({ href, children }) {
	const pathname = usePathname()

	return (
		<Link href={href} className={pathname.startsWith(href) ? `${s.link} ${s.active}` : s.link}>
			{children}
		</Link>
	)
}
