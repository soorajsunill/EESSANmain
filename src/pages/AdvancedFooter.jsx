import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdvancedFooter.css';
import '../assets/font.css';
import { Link } from 'react-router-dom';
import logo_foot from '../assets/images/logo.png'

const AdvancedFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);

    // Show Toast notification
    toast('Subscribed successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    // Reset the email input field
    setEmail('');
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    <footer className="ecf-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <div className="ecf-logo-container">
              <h2 className="ecf-logo">
                <span className="ecf-logo-icon"><img className='logo_foot' src={logo_foot} alt="" /></span>EESSAN
              </h2>
            </div>
            <p className="ecf-description">
              "Powering a greener future with nature's resources, EESSAN is dedicated to transforming waste into clean, renewable energy, fostering sustainability for future generations."
            </p>
            <p className="ecf-sub-description">
              Eco-friendly energy, sustainable solution amongst nature(EESSAN)
            </p>
            <div className="ecf-social-icons">
              <a href="https://www.facebook.com/" className="ecf-social-icon fb_logo"><FaFacebookF /></a>
              <a href="https://x.com/?lang=en" className="ecf-social-icon twt_logo"><FaTwitter /></a>
              <a href="https://in.linkedin.com/" className="ecf-social-icon link_logo"><FaLinkedinIn /></a>
              <a href="https://www.google.com/" className="ecf-social-icon goo_logo"><FaGoogle /></a>
            </div>
            <div className="ecf-contact-info">
              <p><FaMapMarkerAlt /><a href="https://maps.app.goo.gl/mPainz4r7RKsWSRy9"> Indian Institute of Technology Madras <br /> IIT P.O., Chennai 600 036 <br /> INDIA</a></p>
              <p><FaPhone /> <a href="tel:+919042032363">+91 90420 32363</a></p>
              <p><FaEnvelope /> <a href="mailto:eesan.naturalsolutions@gmail.com">eesan.naturalsolutions@gmail.com</a></p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="ecf-section-title">Quick Links</h5>
            <ul className="ecf-list">
              <li><Link to="/about" className="ecf-link">About Us</Link></li>
              <li><Link to="/" className="ecf-link">Services</Link></li>
              <li><Link to="/contact" className="ecf-link">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="ecf-section-title">Services</h5>
            <ul className="ecf-list">
              <li><a href="#" className="ecf-link">Recycling</a></li>
              <li><a href="#" className="ecf-link">Ecosystem</a></li>
              <li><a href="#" className="ecf-link">Best Organic</a></li>
              <li><a href="#" className="ecf-link">Biology System</a></li>
              <li><a href="#" className="ecf-link">Private Policy</a></li>
              <li><a href="#" className="ecf-link">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="ecf-section-title">Get Interesting News</h5>
            <p className="ecf-newsletter-description">Join our community and be the first to know about the latest innovations in sustainable energy and waste management.</p>
            <form onSubmit={handleSubmit} className="ecf-newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control ecf-input" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn ecf-btn-subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default AdvancedFooter;