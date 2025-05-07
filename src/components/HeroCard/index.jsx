import React from 'react';
import styles from './HeroCard.module.scss';
import Button from '../HomeButton';

const HeroCard = ({ isIcon, imgSrc, textButton, link }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.sections} src={imgSrc} alt="Heroes" />
      <Button isIcon={isIcon} textButton={textButton} link={link} />
    </div>
  );
};

export default HeroCard;
