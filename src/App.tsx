import React from 'react';
import { Navigation } from './components/Navigation';
import { ApartmentCard } from './components/ApartmentCard';
import { ServicesSection } from './components/ServicesSection';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { CommunitySection } from './components/CommunitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { apartments } from './data/apartments';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Navigation />
        </div>
      </header>

      <main className="flex-grow">
        <div id="home">
          <HeroSection />
        </div>

        <div id="about">
          <IntroSection />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} {...apartment} />
            ))}
          </div>
        </div>

        <ServicesSection />
        <CommunitySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}