import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutEessan1.css';
import OurTeam1 from './OurTeam1'


const AboutEessan1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            delay: 200, // Delay before the animation starts
        });
    }, []);

    return (
        <>
        

        <div className="about-section-wrapper">
            
            <div className="unique-card-container" data-aos="fade-up">
                {/* Image on the left */}
                
                <div className="unique-card-image-wrapper" data-aos="fade-right">
                   
                    <img 
                        src='https://lh3.googleusercontent.com/pw/AP1GczNO-af_nG1vcUHNWt1GSQQF080TvlG7WAt130nIWS5ARQtIS2zrVXEUi0zKbHixvS_yT4_qHGBfKfUNm2r5_kni64HSy9oDiCWDz3mOiZtJ82GbUneTtjTTT8-Yd4ppW1tVSzU2W5cT80yac2Xosg1x=w863-h939-s-no-gm?authuser=0' // Use your imported image here
                        alt="A sustainable energy solution" 
                        className="unique-card-image"
                    />
                </div>

                {/* Text on the right */}
                <div className="unique-card-text-wrapper" data-aos="fade-left">
                    <h5 className="unique-card-title">
                        About <span className="highlight-us">Us</span>
                    </h5>
                    <h2 className="unique-card-heading">
                        <span className="highlight-join">Join the race</span> 
                        <span className="highlight-world"> <span className="highlight-make">to make the world</span> a better place   </span>
                    </h2>
                    <p className="unique-card-description">
                        <span className="text-highlight-green">At EESSAN, we are committed</span> to delivering <span className="text-highlight-dark">sustainable solutions</span> that drive the transition toward <span className="text-highlight-green">cleaner and greener energy</span>.
                        <br/><br/>
                        Our focus lies in providing <span className="text-highlight-green">innovative and affordable technologies</span> that empower businesses and communities to adopt renewable energy practices with ease. From <span className="text-highlight-dark">biogas production and purification</span> to <span className="text-highlight-dark">incineration technologies</span> and <span className="text-highlight-dark">sustainable construction</span>, we offer comprehensive solutions for effective <span className="text-highlight-green">resource management</span>.
                        <br/><br/>
                        With a mission to create a <span className="text-highlight-dark">climate-resilient future</span>, EESSAN is dedicated to <span className="text-highlight-green">optimizing resources</span> and offering <span className="text-highlight-green">cost-effective solutions</span> that align with India’s <span className="text-highlight-green">green energy goals</span>. 
                        <br/><br/>
                        Together, we strive to build a world where <span className="text-highlight-green">sustainable energy is accessible</span> to all, fostering a <span className="text-highlight-green">healthier planet</span> for generations to come."
                    </p>
                </div>
            </div>
        </div>


        <OurTeam1/>
        </>
    );
};

export default AboutEessan1;
