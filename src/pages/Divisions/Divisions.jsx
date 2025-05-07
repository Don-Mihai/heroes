import React from 'react';
import styles from './Divisions.module.scss';
import Title from '../../components/Title';
import Gallery from '../../components/Gallery';
import BackButton from '../../components/BackButton/BackButton';
import Search from '../../components/Search';

const Divisions = () => {
  return (
    <>
      <Title title={'Батальоны и подразделения РБ'} />
      <Gallery />
      <div className={styles.buttons}>
        <BackButton backUrl="/main" />
        <Search />
      </div>
    </>
  );
};

export default Divisions;
