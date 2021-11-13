import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css';
import Fade from 'react-reveal/Fade';

const HomeBanner = () => {
  return (
    <>
      <Carousel loop>
        <Carousel.Item>
          <div className="slide-1 japan-tokyo  text-white d-flex justify-content-start align-items-center">
            <Fade left cascade>
              <div className=" container ps-5">
                <h2 className="fw-bold">New Arrivals</h2>
                <h1 className=" display-1 fw-bold" style={{ color: '#A99577' }}>
                  Our Best <br /> Collection
                </h1>
                <Link
                  className="btn btn-secondary px-4 py-2 mt-3"
                  to="/watches"
                >
                  Explore Our Collection
                </Link>
              </div>
            </Fade>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-2  text-dark d-flex justify-content-start justify-content-lg-center align-items-center">
            <Fade left cascade>
              <div className="slide_contenter  w-75 mx-auto text-start">
                <h3 className="text-white fw-bold mb-2">Alertzy</h3>
                <h5 className="fs-6" style={{ color: '#cca471' }}>
                  {' '}
                  Exclusive Offer -20% Off This Week
                </h5>
                <p
                  className="fs-6 small "
                  style={{ color: '#aaaaaa', width: '550px' }}
                >
                  {' '}
                  Expanding the offering is the choice between a leather strap
                  or a metal bracelet, bringing the total new look. Black-tone
                  stainless steel case with a black rubber strap. Scratch free
                  sapphire crystal.{' '}
                </p>
                <div>
                  <p className="fs-6" style={{ color: '#aaaaaa' }}>
                    Starting @<span style={{ color: '#cca471' }}>$ 250.00</span>
                  </p>
                </div>
                <Link className="btn btn-secondary slide-btn" to="/watches">
                  Explore Our Collection
                </Link>
              </div>
            </Fade>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-3  text-white  d-flex justify-content-center align-items-center">
            <Fade bottom cascade>
              <div className="slide_content container text-center">
                <h2 className="text-white fw-bold">New Release</h2>
                <h5 className="fs-4 fw-bold" style={{ color: '#cca471' }}>
                  {' '}
                  2021
                </h5>
                <p
                  className="fs-6 text-center w-75 mx-auto"
                  style={{ color: '#aaaaaa' }}
                >
                  One of the most advanced watch released during 2019. True
                  style that always remains in fashion. Timepiece is the perfect
                  complement to any outfit
                </p>
                <div>
                  <p className="fs-6" style={{ color: '#aaaaaa' }}>
                    Starting @<span style={{ color: '#cca471' }}>$ 250.00</span>
                  </p>
                </div>
                <Link className="btn btn-secondary slide-btn" to="/watches">
                  Explore Our Collection
                </Link>
              </div>
            </Fade>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeBanner;
