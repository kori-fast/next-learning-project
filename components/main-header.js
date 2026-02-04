import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import MainHeaderBackground from '@/components/main-header-background'
import NavLink from './nav-link'
import s from './main-header.module.css'

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={s.header}>
				<Link href='/' className={s.logo}>
					<Image src={logoImg} alt='A plate with food on it' priority />
					Next Level Food
				</Link>

				<nav className={s.nav}>
					<ul>
						<li>
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href='/community'>Food Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
