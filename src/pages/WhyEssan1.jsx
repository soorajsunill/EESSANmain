import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faBolt, faChartLine, faBalanceScale, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyEssan1.css'

const WhyEssan1 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const reasons = [
        {
            icon: faSackDollar,
            title: 'Affordability',
            description: 'EESSAN’s biogas purifiers are 80% more cost-effective than traditional systems, making them an affordable solution for small and medium producers, ensuring high-quality purification without breaking the budget.',
        },
        {
            icon: faBolt,
            title: 'Efficiency',
            description: 'Our purifiers produce biomethane with 95+% purity, ensuring maximum efficiency and effective resource utilization.',
        },
        {
            icon: faChartLine,
            title: 'Minimal Methane Loss',
            description: 'EESSAN’s technology reduces methane loss to just 5%, capturing more gas for energy use and supporting environmental sustainability.',
        },
        {
            icon: faBalanceScale,
            title: 'Scalability',
            description: 'EESSAN purifiers are scalable, handling biogas plants from 0.1 TPD to 500 TPD, making them flexible for any producer size, from small to large.',
        },
        {
            icon: faAward,
            title: 'Warranty',
            description: 'We offer more than a 2-year warranty on our products, ensuring quality and reliability for long-term use.',
        },
        {
            icon: faUsers,
            title: 'Focused on Small and Medium Producers',
            description: 'EESSAN focuses specifically on small and medium producers, providing scalable, affordable solutions for thriving in the circular economy.',
        },
    ];

    return (
        <section className="why-essan-section" data-aos="fade-up">
            <div className="container">
                <h2 className="oswald-600 text-center text-[42px]" style={{ color: '#6EA343' }}>
                <span style={{ color: '#6EA343' }}>Why</span> 
                <span style={{ color: '#294145' }}> EESSAN</span>
                </h2>
                <div className="reasons">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason-card" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                            <FontAwesomeIcon icon={reason.icon} className="reason-icon" style={{ color: '#6EA343' }} />
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyEssan1;
