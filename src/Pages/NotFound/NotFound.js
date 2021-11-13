import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <div className="container-404 d-flex justify-content-center align-items-center p-5"></div>
      <div className=" d-flex justify-content-center align-items-center w-75 mx-auto">
        <div className="error-msg text-center my-3">
          <h1 className="display-1 text-danger fw-bold">404</h1>
          <h2 className="text-danger">Looks Like You're Lost</h2>
          <p>The page you are looking for not available</p>
          <Link className="btn btn btn-primary" to="/home">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
