import './Homepage.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmericas, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../assets/font.css';
import VisionAndMission from '../pages/VisionAndMission'
import WhyEssan1 from '../pages/WhyEssan1'
import Contact from '../pages/Contact'
import Product from '../pages/Product'

const bg_1 = "https://lh3.googleusercontent.com/pw/AP1GczOeS1R8veCFTLgHW0f_FwDwgywb6YTWFtgsLo__6SM6-yNKFxDwL3j3z1rovlxz_WLUckuZvmkxkcxvnXHXbqBY855QyXS2e_AuKd5FpAnx_AOfnyqO87YjByTO6G6n-ZJi9NvKvCii0YfYg0zRPtFc=w1705-h945-s-no-gm?authuser=0";

const Homepage = () => {
  return (
    <>
      <div className="container-fluid p-0 homepage-container">
        <div className="hero-section text-center text-white position-relative">
          <img src={bg_1} alt="Hero" className="hero-img" />
          <div className="hero-content">
            <h3 className="oswald-600 ">Utilize Organic Waste</h3>
            <h1 className="display-4 fw-bold mb-4 oswald-600">Cleaner Energy, <span className='green'>Greener World</span></h1>
            <p className="lead mb-4 poppins-regular">
    Embrace Organic Waste with <span className="font-bold">EESSAN</span>. Let’s take action to create a sustainable future.<br />
    Together, we can convert waste into renewable energy,<br />
    ensuring a cleaner and healthier planet for generations to come.
</p>

            <button className='btng poppins-regular'>Start Today</button>
          </div>
        </div>

        <div className="cardss">
          <div className="container content-section">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center p-4 icon-card">
                  <div className="icon-wrapper">
                    <div className="bg-icon"><FontAwesomeIcon className="hm-icons" icon={faAddressBook} /></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Become a Volunteer</h5>
                    <p className="card-text">Join our community and make a difference.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center p-4 icon-card">
                  <div className="icon-wrapper">
                    <div className="bg-icon"><FontAwesomeIcon className="hm-icons" icon={faEarthAmericas} /></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Global Movement</h5>
                    <p className="card-text">Be part of a worldwide environmental initiative.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center p-4 icon-card">
                  <div className="icon-wrapper">
                    <div className="bg-icon"><FontAwesomeIcon className="hm-icons" icon={faUsers} /></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Donation</h5>
                    <p className="card-text">Support our cause with your contribution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <WhyEssan1/>
      <VisionAndMission/>
      <Product/>
      <Contact/>
    </>
  );
};

export default Homepage;
