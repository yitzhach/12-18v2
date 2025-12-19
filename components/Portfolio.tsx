import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-900 mb-8 uppercase text-center">
          Portfolio
        </h1>
        <p className="text-gray-600 font-light text-center max-w-2xl mx-auto mb-12">
          A curated collection of selected works showcasing the breadth and depth of my artistic practice.
        </p>
        
        {/* Portfolio content will go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Placeholder for portfolio items */}
          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <p className="text-gray-400 font-light">Portfolio Item</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

