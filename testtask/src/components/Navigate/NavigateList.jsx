import React, { useState } from 'react';
import styles from "./NavigateList.module.scss";

const NavigateList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <span>-</span>
        
      </div>
      <ol>
        <li>Главная</li>
        <li>Технология</li>
        <li>График полетов</li>
        <li>Гарантии</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ol>
    </div>
  );
}

export default NavigateList;
