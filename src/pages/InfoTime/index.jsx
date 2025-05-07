import React from 'react';
import styles from './Info.module.scss';
import Title from '../../components/Title';
import Facts from '../../components/Facts';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { slidesHeroes } from '../Heroes/Heroes';

const InfoTime = () => {
  const { id } = useParams();

  const item = slidesHeroes.find((item) => item.id === Number(id));
  return (
    <>
      <Title title={item.name} />
      <Facts text={item.description} imgSrc={item.srcDescription} />
      <div className={styles.buttons}>
        <BackButton backUrl="/heroes" />
        <div></div>
      </div>
    </>
  );
};

export default InfoTime;
