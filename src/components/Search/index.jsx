import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text"></input>
      <span className={styles.icon}></span>
    </div>
  );
};

export default Search;
