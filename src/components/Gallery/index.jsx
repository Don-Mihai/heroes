// Slider.jsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Gallery.module.scss';
import { useNavigate } from 'react-router-dom';

const Gallery = ({ slides, isVideo }) => {
    const navigate = useNavigate();
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: {
            perView: 5,
            spacing: 15,
        },
        mode: 'free-snap',
    });

    const handleSlideClick = link => {
        navigate(link);
    };

    return (
        <div className={styles.container}>
            <img onClick={() => slider.current.prev()} className={styles.arrow} src="/img/arrow.png" alt="" />
            <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
                {slides.map(slide => (
                    <>
                        <div key={slide.id} className={`keen-slider__slide ${styles.slide}`} onClick={() => handleSlideClick(slide.link)}>
                            {isVideo ? (
                                <img src={slide.src} alt={slide.title} className={styles.video} />
                            ) : (
                                <img src={slide.src} alt={slide.title} className={styles.image} />
                            )}
                            <div className={styles.bottom}>
                                <div className={styles.title}>{slide.name}</div>
                                <div className={styles.subtitle}>{slide.title}</div>
                                {/* <button className={styles.detail}>Подробнее</button> */}
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <img onClick={() => slider.current.next()} className={`${styles.arrow} ${styles.arrowRight}`} src="/img/arrow.png" alt="" />
        </div>
    );
};

export default Gallery;
