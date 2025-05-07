import React from 'react';
import styles from './Title.module.scss';

const Title = ({ title, fullWidth, isIcon }) => {
  return (
    <div
      className={`${styles.wrapper} ${isIcon ? styles.setIcon : ''}`}
      style={{
        width: fullWidth ? 'fit-content' : '50%',
      }}
    >
      {isIcon && <span className={styles.icon}></span>}

      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Title;
