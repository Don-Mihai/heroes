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
      spacing: 60,
    },
    mode: 'free-snap',
  });

  const handleSlideClick = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <img
        onClick={() => slider.current.prev()}
        className={styles.arrow}
        src="/img/arrow.png"
        alt=""
      />
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`keen-slider__slide ${styles.slide}`}
            onClick={() => handleSlideClick(slide.link)}
          >
            <div className={styles.imageContainer}>
              {isVideo ? (
                <img src={slide.src} alt={slide.title} className={styles.video} />
              ) : (
                <img src={slide.src} alt={slide.title} className={styles.image} />
              )}
            </div>
            <div className={styles.bottom}>
              <div className={styles.title}>{slide.name}</div>
              <div className={styles.subtitle}>{slide.title}</div>
            </div>
          </div>
        ))}
      </div>
      <img
        onClick={() => slider.current.next()}
        className={`${styles.arrow} ${styles.arrowRight}`}
        src="/img/arrow.png"
        alt=""
      />
    </div>
  );
};

export default Gallery;
