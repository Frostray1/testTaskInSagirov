import React, { useState } from 'react'
import styles from './NavigateList.module.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavigateList = () => {
	const [nav, setNav] = useState(false)
	return (
		<div className={styles.box}>
			<ul
				// className={
				// 	nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
				// }
				className={styles.menu}
			>
				<li>
					<a href='##'>Главная</a>
				</li>
				<li>
					<a href='##'>Технология</a>
				</li>
				<li>
					<a href='##'>График полетов</a>
				</li>
				<li>
					<a href='##'>О компании</a>
				</li>
				<li>
					<a href='##'>Контакты</a>
				</li>
			</ul>
			<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
				{nav ? (
					<AiOutlineClose size={25} />
				) : (
					<AiOutlineMenu size={25} />
				)}
			</div>
		</div>
	)
}

export default NavigateList
