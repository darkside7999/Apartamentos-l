import React from 'react';

export function HeroSection() {
  return (
    <div 
      className="relative text-white py-20 md:py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./img/general/Home.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="text-xl md:text-2xl text-yellow-400">★★★</div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Find Your Perfect Home</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the beauty of Pag Island in our premium three-star apartments
          </p>
        </div>
      </div>
    </div>
  );
}