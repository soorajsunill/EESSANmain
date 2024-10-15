import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHandshake } from '@fortawesome/free-regular-svg-icons'; 
import './VisionAndMission.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const VisionAndMission = () => {
    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
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
                            <FontAwesomeIcon icon={faHandshake} className="icon" /> Vision & Mission
                        </h5>
                        <div className="image-container" data-aos="zoom-in">
                            <img src='https://lh3.googleusercontent.com/pw/AP1GczPjftrPg91mdXdAMGcmamgqH5WlFZ5Rq0BPVR-hlhQx4wl0p7ZI2hhEzk_O3y6PdiW6ypz3J58hqgi78QVuspT2CTKHCh_pTgs_Vaw-fU11Ch_I9RXkiQoy4iFpfYMBDENuvuw0TFXBBzFUqLpvtrg3=w601-h280-s-no-gm?authuser=0' alt="Vision" className="vision-image" />
                        </div>

                        {/* Quote Section as h2 */}
                        <h2 className="nature-quote" data-aos="fade-left">
                            <span className="highlight-green">Love</span> Nature, <span className="highlight-green">Save</span> Nature, And Stay
                            <br />
                            Close To Nature
                        </h2>

                        {/* Additional Text */}
                        <p className="additional-text" data-aos="fade-up">
                            Aligning green energy innovations with the rhythm of circular economies. We are committed to transforming waste into sustainable energy solutions that drive circular economies. Our goal is to reduce environmental impact and create lasting value from resources. Through continuous innovation, we strive to foster a cleaner and greener future. Together, we can revolutionize resource management, ensuring that every action we take contributes to a resilient planet. <span className="highlight-green">Our vision is clear: a world where energy is clean, abundant, and accessible for all, paving the way for a sustainable legacy for generations to come.</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMission;
