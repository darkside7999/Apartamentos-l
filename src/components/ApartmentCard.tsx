import React, { useState } from 'react';
import { Users, Building, Maximize2 } from 'lucide-react';
import { Modal } from './Modal';
import { ApartmentDetails } from './ApartmentDetails';
import { type Apartment } from '../types';

interface ApartmentCardProps extends Apartment {}

export function ApartmentCard(props: ApartmentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="relative h-64">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">{props.name}</h3>
          <p className="text-gray-600 mt-2 line-clamp-2">{props.description}</p>
          
          <div className="flex items-center justify-between mt-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{props.baseGuests}+{props.maxGuests - props.baseGuests}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              <span>{props.floor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize2 className="w-5 h-5" />
              <span>{props.size}m²</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ApartmentDetails apartment={props} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}