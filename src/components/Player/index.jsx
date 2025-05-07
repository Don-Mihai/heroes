import React from 'react';
import styles from './Player.module.scss';

const Player = () => {
    return (
        <video className={styles.player} width="640" height="360" controls>
    <source src="video.mp4" type="video/mp4"/>
    Ваш браузер не поддерживает видео.
</video>
    );
};

export default Player;
