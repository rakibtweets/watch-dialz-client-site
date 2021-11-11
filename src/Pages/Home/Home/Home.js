import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <Reviews />
    </div>
  );
};

export default Home;
