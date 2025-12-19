import React from 'react';
import Hero from './Hero';
import Navigation from './Navigation';
import Gallery from './Gallery';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Navigation />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;

