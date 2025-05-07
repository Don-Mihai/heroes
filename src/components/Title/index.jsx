import React from 'react';
import styles from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Title;
