// Slider.jsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Gallery.module.scss';
import { useNavigate } from 'react-router-dom';

const Gallery = ({ slides }) => {
  const navigate = useNavigate();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 85,
    },
    mode: 'free-snap',
  });

  const handleSlideClick = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => slider.prev()}
        className={styles.arrow}
        aria-label="Previous"
      >
        ‹
      </button>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {slides.map((slide) => (
          <div key={slide.id} className={`keen-slider__slide ${styles.slide}`}>
            <img
              src={slide.src}
              alt={slide.title}
              className={styles.image}
              onClick={() => handleSlideClick(slide.link)}
            />
            <button
              className={styles.detail}
              onClick={() => handleSlideClick(slide.link)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => slider.next()}
        className={styles.arrow}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

export default Gallery;
