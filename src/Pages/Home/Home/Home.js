import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FeaturedWatches from '../FeaturedWatches/FeaturedWatches';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <FeaturedWatches />
      <Reviews />
    </div>
  );
};

export default Home;
