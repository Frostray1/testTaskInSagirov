import React from 'react'
import styles from './Conclusions.module.scss'
import { Col, Row } from 'react-bootstrap'

const Conclusions = () => {
	return (
		<div className={styles.ConclusionsBlock}>
			<Row>
				<Col
					className={`${styles.conclusionsItem} ${styles.conclusionsItemBackground_1}`}
				>
					<h6>мы</h6>
					<h1>1</h1>
					<p>на рынке</p>
				</Col>
				<Col
					className={`${styles.conclusionsItem} ${styles.conclusionsItemBackground_2}`}
				>
					<h6>гарантируем</h6>
					<h1>50%</h1>
					<p>безопасность</p>
				</Col>
			</Row>
			<Row>
				<Col
					className={`${styles.conclusionsItem} ${styles.conclusionsItemBackground_3}`}
				>
					<h6>календарик за</h6>
					<h1>2001</h1>
					<p>в подарок</p>
				</Col>
				<Col
					className={`${styles.conclusionsItem} ${styles.conclusionsItemBackground_4}`}
				>
					<h6>путешествие</h6>
					<h1>597</h1>
					<p>дней</p>
				</Col>
			</Row>
		</div>
	)
}

export default Conclusions
