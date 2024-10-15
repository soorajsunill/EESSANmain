import './Homepage.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDroplet, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../assets/font.css';

const bg_1 = "https://lh3.googleusercontent.com/pw/AP1GczOeS1R8veCFTLgHW0f_FwDwgywb6YTWFtgsLo__6SM6-yNKFxDwL3j3z1rovlxz_WLUckuZvmkxkcxvnXHXbqBY855QyXS2e_AuKd5FpAnx_AOfnyqO87YjByTO6G6n-ZJi9NvKvCii0YfYg0zRPtFc=w1705-h945-s-no-gm?authuser=0";

const Homepage = () => {
  return (
    <>
      <div className="container-fluid p-0 homepage-container">
        <div className="hero-section text-center text-white position-relative">
          <img src={bg_1} alt="Hero" className="hero-img" />
          <div className="hero-content">
            <h3 className="oswald-600">Engineers 4 Environment</h3>
            <h1 className="display-4 fw-bold mb-4 oswald-600">Solutions that work<span className='green'> for the people and the planet</span></h1>
            <p className="lead mb-4 poppins-regular">
              A journey with <span className="font-bold">EESSAN</span> for an economic prosperity in harmony with nature’s balance.<br />
            </p>
            <a href="tel:+919042032363"><button className='btng poppins-regular'>Start Today</button></a>



            <div className="cardss">
              <div className="container content-section">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card text-center p-4 icon-card">
                      <div className="icon-wrapper">
                        <div className="bg-icon"><FontAwesomeIcon className="hm-icons" icon={faFire} /></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Energy</h5>
                        <p className="card-text">Affordable and clean energy</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card text-center p-4 icon-card">
                      <div className="icon-wrapper">
                        <div className="bg-icon"><FontAwesomeIcon className="hm-icons" icon={faHandHoldingDroplet} /></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <p className="card-text">Clean water and sanitation</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card text-center p-4 icon-card">
                      <div className="icon-wrapper">
                        <div className="bg-icon"><FontAwesomeIcon className="hm-icons" icon={faUsers} /></div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Community</h5>
                        <p className="card-text">Sustainable cities and communities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
