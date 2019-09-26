import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../../public/assets/images/error.jpg';
import './notFound.scss';


const NotFound = () => (
  <>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-sm-6">
          <h3 style={{ color: 'navy' }}>Did you just freeze? Like an antelope in headlights </h3>
          <Link to="/" className="hide-lg">
            <a className=" hero-button event-btn err">Return to Home</a>
          </Link>
        </div>
      </div>
      <div className="col-12 col-sm-5 error">
        <img className="err-img" src={notFoundImage} alt="illustration of error 404 message" />
      </div>
    </div>
  </>

);

export default NotFound;
