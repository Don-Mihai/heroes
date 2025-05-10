import React from 'react';
import styles from './Info.module.scss';
import Title from '../../components/Title';
import Facts from '../../components/Facts';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { slidesTimes } from '../TimeOfHeroes/TimeOfHeroes';

const InfoTime = () => {
  const { id } = useParams();

  const item = slidesTimes.find((item) => item.id === Number(id));
  return (
    <>
      <div className={styles.container}>
        <video
          className={styles.video}
          src={item.srcDescription}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="back-buttons">
        <BackButton backUrl="/time" />
        <div></div>
      </div>
    </>
  );
};

export default InfoTime;
