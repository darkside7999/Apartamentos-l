import React from 'react';
import { Users, Building, Maximize2, Waves } from 'lucide-react';
import { type Apartment } from '../types';
import { ExitButton } from './ExitButton';
import { ApartmentRules } from './ApartmentRules';
import { ApartmentGallery } from './ApartmentGallery';

interface ApartmentDetailsProps {
  apartment: Apartment;
  onClose: () => void;
}

export function ApartmentDetails({ apartment, onClose }: ApartmentDetailsProps) {
  return (
    <div className="relative">
      <ExitButton onClick={onClose} />
      
      <div className="relative h-96">
        <img
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-2">{apartment.name}</h2>
        <p className="text-gray-600 mb-6">{apartment.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Capacity</p>
              <p className="font-medium">{apartment.baseGuests}+{apartment.maxGuests - apartment.baseGuests} persons</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Floor</p>
              <p className="font-medium">{apartment.floor}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Size</p>
              <p className="font-medium">{apartment.size}m² + {apartment.terrace.size}m² terrace</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">View</p>
              <p className="font-medium">{apartment.terrace.hasSeaView ? 'Sea view' : 'City view'}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {apartment.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <ApartmentRules rules={apartment.rules} />
        
        <ApartmentGallery name={apartment.name} />

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact for Availability & Pricing
          </a>
        </div>
      </div>
    </div>
  );
}