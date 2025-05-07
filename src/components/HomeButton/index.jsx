import React from 'react';
import styles from './HomeButton.module.scss';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({ isIcon, textButton, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      {Boolean(isIcon) && <img src="/img/star.png" className={styles.icon} />}

      <span className={styles.text}>{textButton}</span>
    </button>
  );
};

export default HomeButton;
