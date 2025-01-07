import React, { useState } from 'react';
import { Modal } from './Modal';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${className}`}
        onClick={() => setIsZoomed(true)}
      />
      
      <Modal isOpen={isZoomed} onClose={() => setIsZoomed(false)}>
        <div className="relative p-4">
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute right-2 top-2 z-50 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <img
            src={src.replace('w=800', 'w=1920')}
            alt={alt}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </Modal>
    </>
  );
}