import React from 'react';
import { CommunityFeature } from './CommunityFeature';

const features = [
  { name: "Private parking", distance: "5 m" },
  { name: "Fast food", distance: "150 m" },
  { name: "Grocery shop", distance: "150 m" },
  { name: "Beach", distance: "200 m" },
  { name: "Restaurant & café", distance: "250 m" },
  { name: "Entertainment", distance: "1000 m" },
  { name: "Ambulance", distance: "1700 m" },
  { name: "Pharmacy", distance: "1900 m" },
  { name: "City center", distance: "2000 m" },
  { name: "Shopping centre", distance: "2000 m" },
  { name: "Bus station", distance: "3 km" },
  { name: "Novalja", distance: "25 km" },
  { name: "Zrće Beach", distance: "23 km" },
  { name: "Zadar", distance: "55 km" },
  { name: "Airport Zemunik", distance: "60 km" },
];

export function CommunitySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="mb-12 py-8 bg-cover bg-center rounded-xl text-white text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80")'
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Community Features</h2>
          <p className="max-w-2xl mx-auto text-gray-200">
            Discover everything within reach - from essential amenities to popular attractions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <CommunityFeature
              key={index}
              name={feature.name}
              distance={feature.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
}