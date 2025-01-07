import React from 'react';
import { MapPin } from 'lucide-react';

interface CommunityFeatureProps {
  name: string;
  distance: string;
}

export function CommunityFeature({ name, distance }: CommunityFeatureProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{distance}</p>
      </div>
    </div>
  );
}