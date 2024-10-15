import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHandshake } from '@fortawesome/free-regular-svg-icons'; 
import './VisionAndMission.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import visionimg from '../assets/images/website.jpg'

const VisionAndMission = () => {
    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            delay: 200, // Delay before the animation starts
        });
    }, []); // Empty dependency array to run this effect only once when the component mounts

    return (
        <div className="vision-mission-wrapper" data-aos="fade-up">
            <div className="container vision-mission-container">
                {/* Image Section */}
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        {/* Vision & Mission Title with Icon */}
                        <h5 className="vision-mission-title" data-aos="fade-down">
                            <FontAwesomeIcon icon={faHandshake} className="icon" /> Vision 
                        </h5>
                        <div className="image-container" data-aos="zoom-in">
                            <img src={visionimg} alt="Vision" className="vision-image" />
                        </div>

                        {/* Quote Section as h2 */}
                        <h2 className="nature-quote" data-aos="fade-left">
                            <span className="highlight-green">Love</span> Nature, <span className="highlight-green">Save</span> Nature, And Stay
                            <br />
                            Close To Nature
                        </h2>

                        {/* Additional Text */}
                        <p className="additional-text" data-aos="fade-up">
                        <span className="highlight-green"><strong>Vision:</strong></span> Aligning green energy innovations with the rhythm of circular economies <br />
                        <span className="highlight-green"><strong>Mission:</strong></span> We are committed to make you meet your needs with sustainable solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;
