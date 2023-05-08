import React from 'react'

import styles from './Main.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../Button/Button'
import Conclusions from '../Conclusions/Conclusions'

const Main = () => {
	return (
		<Container className={styles.Main}>
			<Row>
				<Col >
					<h1 className={styles.mainText}>ПУТЕШЕСТВИЕ</h1>
					<h5 className={styles.secondText}>на красную планету</h5>
					<Button />
				</Col>
				<Col>
					<Conclusions />
				</Col>
			</Row>
		</Container>
	)
}

export default Main
