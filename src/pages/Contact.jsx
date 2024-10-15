import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/font.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
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
        </div>
      </div>
    </>
  );
};

export default Contact;
