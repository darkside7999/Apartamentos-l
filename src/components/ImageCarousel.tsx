// src/components/ImageCarousel.tsx
import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Photo {
  url: string;
  caption?: string;
}

interface ImageCarouselProps {
  photos: Photo[];
}

export default function ImageCarousel({ photos }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % photos.length);
  }, [photos.length]);

  return (
    <>
      {/* Slides: ocupan todo el contenedor padre */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${photos.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 flex items-center justify-center bg-black"
          >
            <img
              src={photo.url}
              alt={photo.caption ?? `Slide ${idx + 1}`}
              className="max-w-full max-h-full object-contain"
              loading="eager"
            />
            {photo.caption && (
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-center text-lg">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow focus:outline-none"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow focus:outline-none"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Puntos */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-current={idx === currentIndex}
          />
        ))}
      </div>
    </>
  );
}
