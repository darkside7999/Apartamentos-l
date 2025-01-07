import React from 'react';
import { Home, Tv, Waves, Wind, Car, Utensils } from 'lucide-react';
import { ServiceItem } from './ServiceItem';

export function ServicesSection() {
  const services = [
    {
      icon: <Home className="w-16 h-16" />,
      title: "Exclusive Full Equipped Interior",
      description: "Experience luxury living with our fully furnished apartments featuring premium appliances and elegant décor."
    },
    {
      icon: <Tv className="w-16 h-16" />,
      title: "Free Sat TV & Wi-Fi",
      description: "Stay connected with high-speed internet and enjoy international channels on satellite TV at no extra cost."
    },
    {
      icon: <Waves className="w-16 h-16" />,
      title: "Distance from 3 Beaches 200m",
      description: "Just steps away from three stunning beaches, offering perfect spots for swimming and sunbathing."
    },
    {
      icon: <Wind className="w-16 h-16" />,
      title: "Air Condition",
      description: "Modern climate control systems ensure your comfort throughout all seasons."
    },
    {
      icon: <Car className="w-16 h-16" />,
      title: "Free Parking",
      description: "Secure, designated parking spaces available for all our residents at no additional charge."
    },
    {
      icon: <Utensils className="w-16 h-16" />,
      title: "Grill",
      description: "Enjoy outdoor cooking with our premium grilling facilities perfect for family gatherings."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="mb-12 py-8 bg-cover bg-center rounded-xl text-white text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80")'
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Services & Standards</h2>
          <p className="max-w-2xl mx-auto text-gray-200">
            Experience the perfect blend of comfort and luxury with our comprehensive amenities designed to make your stay exceptional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}