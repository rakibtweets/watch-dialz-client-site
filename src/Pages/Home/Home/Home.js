import React from 'react';
import Contact from '../../Contact/Contact';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedWatches from '../FeaturedWatches/FeaturedWatches';
import HomeBanner from '../HomeBanner/HomeBanner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <HomeBanner />
      <FeaturedWatches />
      <Reviews />
      <Contact />
      
    </div>
  );
};

export default Home;
