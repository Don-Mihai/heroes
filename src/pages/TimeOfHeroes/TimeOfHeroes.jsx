import React from 'react';
import styles from './TimeOfHeroes.module.scss';
import Title from '../../components/Title';
import Player from '../../components/Player';
import BackButton from '../../components/BackButton/BackButton';

const TimeOfHeroes = () => {
  return (
    <>
      <Title text='Проект "Время Героев"' />
      <Player />
      <BackButton backUrl="/main" />
    </>
  );
};

export default TimeOfHeroes;
