import React from 'react';
import Contact from '../../Contact/Contact';
import Navigation from '../../Shared/Navigation/Navigation';
import Brands from '../Brands/Brands';
import FeaturedWatches from '../FeaturedWatches/FeaturedWatches';
import HomeBanner from '../HomeBanner/HomeBanner';
import Reviews from '../Reviews/Reviews';
import ServicePromises from '../ServicePromises/ServicePromises';

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <HomeBanner />
      <ServicePromises />
      <FeaturedWatches />
      <Reviews />
      <Brands />
      <Contact />
    </div>
  );
};

export default Home;
