import React from 'react';
import styles from './Heroes.module.scss';
import Title from '../../components/Title';
import Gallery from '../../components/Gallery';
import BackButton from '../../components/BackButton/BackButton';

const Heroes = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}></span>
      <Title title={'Герои РФ'} />
      <Gallery />
      <BackButton backUrl="/main" />
    </div>
  );
};

export default Heroes;
