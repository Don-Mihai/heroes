import React from 'react';
import styles from './Info.module.scss';
import Title from '../../components/Title';
import Facts from '../../components/Facts';
import BackButton from '../../components/BackButton/BackButton';
import HomeButton from '../../components/HomeButton/';

const Info = () => {
    return (
        <>
            <Title />
            <Facts />
            <div className={styles.buttons}>
                <BackButton />
                <HomeButton />
            </div>
        </>
    );
};

export default Info;
