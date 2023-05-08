import React from 'react'
import styles from './Header.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import NavigateList from '../Navigate/NavigateList'
import Logo from '../Logo/Logo'

const Header = () => {
	return (
		<div className={styles.Header}>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Logo />
					</Col>
					<Col>
						<NavigateList />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
