import React from 'react';
import { apartmentImages } from '../data/apartmentImages';
import { ZoomableImage } from './ZoomableImage';

interface ApartmentGalleryProps {
  name: string;
}

export function ApartmentGallery({ name }: ApartmentGalleryProps) {
  const images = apartmentImages[name as keyof typeof apartmentImages].map((url, index) => ({
    id: index + 1,
    url: `${url}?auto=format&fit=crop&w=800&q=80`
  }));

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <ZoomableImage
              src={image.url}
              alt={`${name} - Image ${image.id}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}