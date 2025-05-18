import React from 'react';
import styles from './TimeOfHeroes.module.scss';
import Title from '../../components/Title';
import Player from '../../components/Player';
import BackButton from '../../components/BackButton/BackButton';
import Gallery from '../../components/Gallery';
import { useState } from 'react';

export const slidesTimes = [
  {
    id: 1,
    src: '/videos/video-1.jpg',
    srcDescription: '/videos/video-1.mp4',
    link: '/time-info/1',
  },
  {
    id: 2,
    src: '/videos/video-2.jpg',
    srcDescription: '/videos/video-2.mp4',
    link: '/time-info/2',
  },
  {
    id: 3,
    src: '/videos/video-3.jpg',
    srcDescription: '/videos/video-3.mp4',
    link: '/time-info/3',
  },
  {
    id: 4,
    src: '/videos/video-4.jpg',
    srcDescription: '/videos/video-4.mp4',
    link: '/time-info/4',
  },
  {
    id: 5,
    src: '/videos/video-5.jpg',
    srcDescription: '/videos/video-5.mp4',
    link: '/time-info/5',
  },
  {
    id: 6,
    src: '/videos/video-6.jpg',
    srcDescription: '/videos/video-6.mp4',
    link: '/time-info/6',
  },
  {
    id: 7,
    src: '/videos/video-7.jpg',
    srcDescription: '/videos/video-7.mp4',
    link: '/time-info/7',
  },
  {
    id: 8,
    src: '/videos/video-8.jpg',
    srcDescription: '/videos/video-8.mp4',
    link: '/time-info/8',
  },
  {
    id: 9,
    src: '/videos/video-9.jpg',
    srcDescription: '/videos/video-9.mp4',
    link: '/time-info/9',
  },
  {
    id: 10,
    src: '/videos/video-10.jpg',
    srcDescription: '/videos/video-10.mp4',
    link: '/time-info/10',
  },
  {
    id: 11,
    src: '/videos/video-11.jpg',
    srcDescription: '/videos/video-11.mp4',
    link: '/time-info/11',
  },
  {
    id: 12,
    src: '/videos/video-12.jpg',
    srcDescription: '/videos/video-12.mp4',
    link: '/time-info/12',
  },
  {
    id: 13,
    src: '/videos/video-13.jpg',
    srcDescription: '/videos/video-13.mp4',
    link: '/time-info/13',
  },
  {
    id: 14,
    src: '/videos/video-14.jpg',
    srcDescription: '/videos/video-14.mp4',
    link: '/time-info/14',
  },
  {
    id: 15,
    src: '/videos/video-15.jpg',
    srcDescription: '/videos/video-15.mp4',
    link: '/time-info/15',
  },
  {
    id: 16,
    src: '/videos/video-16.jpg',
    srcDescription: '/videos/video-16.mp4',
    link: '/time-info/16',
  },
  {
    id: 17,
    src: '/videos/video-17.jpg',
    srcDescription: '/videos/video-17.mp4',
    link: '/time-info/17',
  },
  {
    id: 18,
    src: '/videos/video-18.jpg',
    srcDescription: '/videos/video-18.mp4',
    link: '/time-info/18',
  },
  {
    id: 19,
    src: '/videos/video-19.jpg',
    srcDescription: '/videos/video-19.mp4',
    link: '/time-info/19',
  },
  {
    id: 20,
    src: '/videos/video-20.jpg',
    srcDescription: '/videos/video-20.mp4',
    link: '/time-info/20',
  },
  {
    id: 21,
    src: '/videos/video-21.jpg',
    srcDescription: '/videos/video-21.mp4',
    link: '/time-info/21',
  },
  {
    id: 22,
    src: '/videos/video-22.jpg',
    srcDescription: '/videos/video-22.mp4',
    link: '/time-info/22',
  },
  {
    id: 23,
    src: '/videos/video-23.jpg',
    srcDescription: '/videos/video-23.mp4',
    link: '/time-info/23',
  },
  {
    id: 24,
    src: '/videos/video-24.jpg',
    srcDescription: '/videos/video-24.mp4',
    link: '/time-info/24',
  },
  {
    id: 25,
    src: '/videos/video-25.jpg',
    srcDescription: '/videos/video-25.mp4',
    link: '/time-info/25',
  },
  {
    id: 26,
    src: '/videos/video-26.jpg',
    srcDescription: '/videos/video-26.mp4',
    link: '/time-info/26',
  },
  {
    id: 27,
    src: '/videos/video-27.jpg',
    srcDescription: '/videos/video-27.mp4',
    link: '/time-info/27',
  },
  {
    id: 28,
    src: '/videos/video-28.jpg',
    srcDescription: '/videos/video-28.mp4',
    link: '/time-info/28',
  },
  {
    id: 29,
    src: '/videos/video-29.jpg',
    srcDescription: '/videos/video-29.mp4',
    link: '/time-info/29',
  },
  {
    id: 30,
    src: '/videos/video-30.jpg',
    srcDescription: '/videos/video-30.mp4',
    link: '/time-info/30',
  },
  {
    id: 31,
    src: '/videos/video-31.jpg',
    srcDescription: '/videos/video-31.mp4',
    link: '/time-info/31',
  },
  {
    id: 32,
    src: '/videos/video-32.jpg',
    srcDescription: '/videos/video-32.mp4',
    link: '/time-info/32',
  },
  {
    id: 33,
    src: '/videos/video-33.jpg',
    srcDescription: '/videos/video-33.mp4',
    link: '/time-info/33',
  },
  {
    id: 34,
    src: '/videos/video-34.jpg',
    srcDescription: '/videos/video-34.mp4',
    link: '/time-info/34',
  },
  {
    id: 35,
    src: '/videos/video-35.jpg',
    srcDescription: '/videos/video-35.mp4',
    link: '/time-info/35',
  },
  {
    id: 36,
    src: '/videos/video-36.jpg',
    srcDescription: '/videos/video-36.mp4',
    link: '/time-info/36',
  },
  {
    id: 37,
    src: '/videos/video-37.jpg',
    srcDescription: '/videos/video-37.mp4',
    link: '/time-info/37',
  },
  {
    id: 38,
    src: '/videos/video-38.jpg',
    srcDescription: '/videos/video-38.mp4',
    link: '/time-info/38',
  },
  {
    id: 39,
    src: '/videos/video-39.jpg',
    srcDescription: '/videos/video-39.mp4',
    link: '/time-info/39',
  },
  // {
  //   id: 40,
  //   src: '/videos/video-40.jpg',
  //   srcDescription: '/videos/video-40.mp4',
  //   link: '/time-info/40',
  // },
];
const TimeOfHeroes = () => {
  return (
    <>
      <Title fullWidth title='Проект "Время Героев"' />

      <Gallery isVideo={true} slides={slidesTimes} />

      <div className="back-buttons">
        <BackButton backUrl="/main" />
        <div></div>
      </div>
    </>
  );
};

export default TimeOfHeroes;
