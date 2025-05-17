import styles from './HumAid.module.scss';
import React from 'react';
import BackButton from '../../components/BackButton/BackButton';

const HumAid = () => {
    return (
        
         <div className={styles.wrapper}>
				<div className={styles.container_video}>
      			<video
      			  className={styles.video}
      			  src="/videos/videoAid.mp4"
      			  autoPlay
      			  loop
      			  muted
      			  playsInline
      			/>
    			</div>
             <div className="back-buttons">
                 <BackButton backUrl="/main" />
             </div>
         </div>
        
    );
};

export default HumAid;
