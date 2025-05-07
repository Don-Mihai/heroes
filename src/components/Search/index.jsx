import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
    return (
        <>
            <input className={styles.input} type="text"></input>
            <span className={styles.icon}></span>
        </>
    );
};

export default Search;
