import React from 'react';
import styles from './Telegram.module.scss';

const Telegram = () => {
  return (
    <div className={styles.container}>
      <img src="/img/qr.png" alt="" className={styles.qr} />
      <img src="/img/telegram.png" alt="" className={styles.telegram} />
    </div>
  );
};

export default Telegram;
