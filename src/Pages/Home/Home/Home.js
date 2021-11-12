import React from 'react';
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
    </div>
  );
};

export default Home;
