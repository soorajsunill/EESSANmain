import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/font.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      delay: 200, // Delay before the animation starts
  });
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, subject, message } = formData;
    const mailtoLink = `mailto:eesan.naturalsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`)}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Show success toast
    toast.success("Redirecting to your email client...");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="cp-contact-page" data-aos="fade-up">
        <div className="container cp-content-container">
          <h2 className="cp-title text-center oswald-600" data-aos="fade-up">
            <span className="cp-icon-hd"><FontAwesomeIcon icon={faHandshake} /></span> Keep In Touch With Us
          </h2>
          <h3 className="cp-subtitle text-center oswald-600" data-aos="fade-up" data-aos-delay="100">
            How Can We <span className="cp-highlight">Help?</span>
          </h3>
          <p className="cp-description text-center poppins-regular" data-aos="fade-up" data-aos-delay="200">
            Your feedback is important to us. Please reach out with any questions or concerns, and we'll do our best to assist you promptly.
          </p>

          <form className="cp-contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
            <div className="row cp-form-row">
              <div className="col-md-6 name_input">
                <div className="form-floating">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    id="floatingName"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  />
                  <label htmlFor="floatingName">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    id="floatingEmail"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  />
                  <label htmlFor="floatingEmail">Your Email</label>
                </div>
              </div>
            </div>
            <div className="row cp-form-row">
              <div className="col-md-6 phone_no_input">
                <div className="form-floating">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    id="floatingPhone"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  />
                  <label htmlFor="floatingPhone">Phone No.</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    id="floatingSubject"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  />
                  <label htmlFor="floatingSubject">Subject</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                id="floatingMessage"
                style={{ height: '150px' }}
                data-aos="fade-up"
                data-aos-delay="400"
              ></textarea>
              <label htmlFor="floatingMessage">Your Message</label>
            </div>
            <button type="submit" className="cp-submit-btn" data-aos="fade-up" data-aos-delay="500">
              Send Message
            </button>
          </form>

          <div className="row cp-contact-info justify-content-center">
            <div className="col-lg-4 col-md-6 cp-info-item d-flex align-items-start" data-aos="fade-up" data-aos-delay="200">
              <span className="cp-icon">
                <div className="cp-bg-icon">
                  <FontAwesomeIcon className="cp-icons" icon={faLocationDot} />
                </div>
              </span>
              <div className="cp-info-content">
                <h4 className="oswald-600">Location</h4>
                <p className="poppins-regular"><a href="https://maps.app.goo.gl/mPainz4r7RKsWSRy9">
                  Indian Institute of Technology Madras
                  <br /> IIT P.O., Chennai 600 036
                  <br /> INDIA</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 cp-info-item d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
              <span className="cp-icon">
                <div className="cp-bg-icon">
                  <FontAwesomeIcon className="cp-icons" icon={faEnvelope} />
                </div>
              </span>
              <div className="cp-info-content">
                <h4 className="oswald-600">Email Address</h4>
                <p className="poppins-regular">
                  <a href="mailto:eesan.naturalsolutions@gmail.com">eesan.naturalsolutions@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 cp-info-item d-flex align-items-start" data-aos="fade-up" data-aos-delay="400">
              <span className="cp-icon">
                <div className="cp-bg-icon">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon cp-icons" />
                </div>
              </span>
              <div className="cp-info-content">
                <h4 className="oswald-600">Contact No.</h4>
                <p className="poppins-regular">
                  <a href="tel:9042032363">+91 9042032363</a>
                  <br />
                  <a href="tel:8277070407">+91 8277070407</a>
                </p>
              </div>
            </div>
          </div>

          <div className="cp-map-container" data-aos="fade-up" data-aos-delay="600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79128.94826811152!2d80.22227193009414!3d12.991969374550445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526781f3ce0c6b%3A0x41368df84c6db350!2sIndian%20Institute%20Of%20Technology%20Madras!5e0!3m2!1sen!2sin!4v1694002637923!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
