import React from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div className={styles.borderLogo}>
			<img src='/images/logo.png' alt='logo' />
		</div>
	)
}

export default Logo
