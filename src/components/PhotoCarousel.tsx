import React, { useState, useCallback } from 'react';
import './PhotoCarousel.css';

interface Photo {
  url: string;
  caption?: string;
}

const photos: Photo[] = [
  { url: '/img/beach/1.jpg', caption: 'Beautiful Pag City' },
  { url: '/img/beach/2.jpg', caption: 'Stunning Pag Bridge' },
  { url: '/img/beach/3.jpg', caption: 'Pag Streets' },
  { url: '/img/beach/4.jpg', caption: 'Large Beach' },
];

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent(i => (i - 1 + photos.length) % photos.length);
  }, []);

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % photos.length);
  }, []);

  return (
    <div className="carousel">
      {/* Slides */}
      <div
        className="carousel__slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {photos.map((p, idx) => (
          <div key={idx} className="carousel__slide">
            <img src={p.url} alt={p.caption} />
            {p.caption && (
              <div className="carousel__caption">{p.caption}</div>
            )}
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        className="carousel__button carousel__button--prev"
        onClick={prev}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={next}
        aria-label="Siguiente"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="carousel__indicators">
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={
              'carousel__indicator' +
              (idx === current ? ' carousel__indicator--active' : '')
            }
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
