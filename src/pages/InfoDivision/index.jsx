import React from 'react';
import styles from './Info.module.scss';
import Title from '../../components/Title';
import Facts from '../../components/Facts';
import BackButton from '../../components/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { slidesDivisions } from '../Divisions/Divisions';

const InfoDivision = () => {
  const { id } = useParams();

  const item = slidesDivisions.find((item) => item.id === Number(id));
  return (
    <>
      <Title title={item.name} />
      <Facts text={item.description} imgSrc={item.srcDescription} />
      <div className="back-buttons">
        <BackButton backUrl="/divisions" />
        <div></div>
      </div>
    </>
  );
};

export default InfoDivision;
