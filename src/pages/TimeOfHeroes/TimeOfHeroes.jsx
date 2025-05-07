import React from 'react';
import styles from './TimeOfHeroes.module.scss';
import Title from '../../components/Title';
import Player from '../../components/Player';
import BackButton from '../../components/BackButton/BackButton';

export const slidesTimes = [
  {
    id: 1,
    src: '/images/img1-1.jpg',
    srcDescription: '/img/img13-1.jpg',
    name: 'башкирский артиллерийский дивизион имени мугина нагаева',
    title: '',
    link: '/time-info/1',
    description: '',
  },
];
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
