import React from 'react';
import Hero from './Hero';
import Navigation from './Navigation';
import Gallery from './Gallery';
import Contact from './Contact';

const Installed: React.FC = () => {
  return (
    <>
      <Hero title="ISAAC ANDERSON ART" subtitle="INSTALLED" />
      <Navigation />
      <Gallery />
      <Contact />
    </>
  );
};

export default Installed;

