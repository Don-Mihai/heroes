import React from 'react';
import styles from './BackButton.module.scss';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ backUrl }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(backUrl ? backUrl : '/');
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleBack}>
        <h3>НАЗАД</h3>
      </button>
    </div>
  );
};

export default BackButton;
