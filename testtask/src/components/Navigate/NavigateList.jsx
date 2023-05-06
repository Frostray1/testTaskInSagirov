import React from 'react';
import styles from "./NavigateList.module.scss";

const NavigateList = () => {
  return (
    <div className={styles.menu}>
      <ol>
        <li>Главная</li>
        <li>Технология</li>
        <li>График полетов</li>
        <li>Гарантии</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ol>
      <div className={styles["burger-menu"]}>&#9776;</div>
    </div>
  );
}

export default NavigateList;
