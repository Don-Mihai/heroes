import React from 'react';
import HeroCard from '../../components/HeroCard';
import styles from './Home.module.scss';
import BackButton from '../../components/BackButton/BackButton';
import Telegram from '../../components/Telegram';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card__container}>
        <HeroCard link="/heroes" imgSrc="/img/Heroes.png" isIcon={true} textButton="Герои рф" />
        <HeroCard link="/divisions" imgSrc="/img/Batalony.png" textButton="батальоны и подразделения РБ" />
        <HeroCard link="/time" imgSrc="/img/HeroesTime.png" textButton='Проект "Время Героев"' />
        <HeroCard link="/help" imgSrc="/img/save.png" textButton="Гуманитарная помощь" />
      </div>
      <div className="back-buttons">
        <BackButton backUrl="/" />
        <Telegram />
      </div>
    </div>
  );
};

export default Home;
