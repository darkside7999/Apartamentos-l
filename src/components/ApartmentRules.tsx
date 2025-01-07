import React from 'react';
import { Clock, DoorOpen, Dog, Sprout, Cigarette } from 'lucide-react';

interface RulesProps {
  rules: {
    checkOut: string;
    checkIn: string;
    pets: string;
    cleaning: string;
    smoking: boolean;
  };
}

export function ApartmentRules({ rules }: RulesProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">House Rules</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium">Check-out</p>
            <p className="text-gray-600">{rules.checkOut}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <DoorOpen className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium">Check-in</p>
            <p className="text-gray-600">{rules.checkIn}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Dog className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium">Pets</p>
            <p className="text-gray-600">{rules.pets}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Sprout className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium">Cleaning</p>
            <p className="text-gray-600">{rules.cleaning}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Cigarette className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium">Smoking</p>
            <p className="text-gray-600">{rules.smoking ? 'Allowed' : 'Not allowed'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}