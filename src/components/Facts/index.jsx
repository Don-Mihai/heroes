import React from 'react';
import styles from './Facts.module.scss';

const Facts = ({ text, imgSrc }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <div className={styles.text__content}>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.wrap__foto}>
        <img className={styles.foto} src={imgSrc} alt="Heroes" />
      </div>
    </div>
  );
};

export default Facts;
