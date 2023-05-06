import React from "react";
import styles from "./Header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import NavigateList from "../Navigate/NavigateList";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <Row>
          <Col>
            <div className={styles.border}>
              <img src="/images/logo.png" alt="logo" />
            </div>
          </Col>
          <Col><NavigateList/></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
