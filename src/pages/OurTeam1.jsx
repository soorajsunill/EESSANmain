import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurTeam1.css'
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHandshake } from '@fortawesome/free-regular-svg-icons'; // Import the handshake icon

import '../assets/font.css';

const praveen="https://lh3.googleusercontent.com/pw/AP1GczMNnf9uvT7YL7g6BYAygZJAQEib69SUPJpp0vdzfCXsVx4gGRJGR8yeWDbtsfNX7-tGVUPcVddV-kGD_Mp8EINxNbe_j7B0N1EdejAGPsCUFHkS98n-w3wD5YMqwHkxZrVMeSBqTXWfl4lZGCDmP4Nz=w539-h694-s-no-gm?authuser=0"
const Shreyas="https://lh3.googleusercontent.com/pw/AP1GczMCaEjKufJZ2PGuwihz5GSfEd3Qgcde2HZ4mhawYCIDzgRq9MLV9TbtOlPL6cOajHSFtvZPba_fWWNHTRiX3mkSDYKSX6VnDMmCkHjJdvhXFfbz8WHWBrQBE53LK5h2qZKLthMUB_qIL8-IELXUIF3E=w247-h322-s-no-gm?authuser=0"
const manjusha="https://lh3.googleusercontent.com/pw/AP1GczORyxTPnCPDRUrvpQWlUmYHbyrDWb-xhmemx2P2YhdyRB6DnL92h6sD6YuRtYAZl8BxowOUePruKXtALrm3oHsM-cektS2cW0PNiatT9tlAV_HMpsnXeYb_VQaDUcONt4-tBljj_AKz-XmTIRgGg0z0=w366-h484-s-no-gm?authuser=0"
const Tejashwi="https://lh3.googleusercontent.com/pw/AP1GczO-20ScJU-mGTczr1SPS8CWNLMGu4pEosvN9tujVzwPzIG7QCNm-E5LI3YJOuezlfuh1qr7Ni52lF_WUwq7KjifyK6cj0g0fdjZzYF9zdvaPuJYS4yvcSye56OEIwFeZeAYMVAFfoavIAdS9olcTUkR=w385-h476-s-no-gm?authuser=0"
const Mohanakrishnan="https://lh3.googleusercontent.com/pw/AP1GczPAlXWGAGKnvENt6lC7fitd8QQXNEplHssCBk9-49Vpq_D9t5Dzklg__dwhl9ZstKBWNcOll_rnqaxXru9hsPJbjn3KbEwM6OIVGJAZGdRIewoY5LdYggGZX-81X2v0DHxUVXcTTrcOTwaKG2CHsg9W=w236-h305-s-no-gm?authuser=0"

const teamMembers = [
  {
    name: 'Praveen Venkatesh C',
    position: "MTech'25, IIT Madras (Production and Management)",
    qualifications: "MTech'25, IIT Madras, Environmental Engineering",
    image: praveen,
    description: "As a Production and Management lead, Praveen focuses on developing sustainable solutions and optimizing production processes that align with EESSAN's mission for cleaner energy.",
  },
  {
    name: 'Shreyas S',
    position: "MTech'25, IIT Madras (Technical and Design Lead)",
    qualifications: "MTech'25, IIT Madras, Environmental Engineering",
    image: Shreyas,
    description: "Shreyas plays a pivotal role in designing innovative technologies that empower businesses to implement renewable energy practices effectively.",
  },
  {
    name: 'Manjusha B K',
    position: "MTech'25, IIT Madras (Marketing and Outreach Lead)",
    qualifications: "MTech'25, IIT Madras, Environmental Engineering",
    image: manjusha,
    description: "With a passion for sustainability, Manjusha leads marketing efforts to raise awareness about EESSAN's solutions, ensuring that communities understand the benefits of renewable energy.",
  },
  {
    name: 'Tejashwi L',
    position: "MTech'25, IIT Madras (IT & Financials Lead)",
    qualifications: "MTech'25, IIT Madras, Environmental Engineering",
    image: Tejashwi,
    description: "Tejashwi manages the IT and financial aspects, ensuring that EESSAN operates efficiently and remains committed to its mission of resource optimization and cost-effective solutions.",
  },
  {
    name: 'Prof. Mohanakrishnan Logan',
    position: 'Assistant Professor, IIT Madras',
    qualifications: 'Expert in sustainable energy systems',
    image: Mohanakrishnan,
    description: "Prof. Logan provides academic insights and guidance to EESSAN, supporting the team's mission to deliver innovative and affordable technologies for a sustainable future.",
  },
];

const OurTeam1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      delay: 200, // Delay before the animation starts
  });
}, []);

  return (
    <section className="team-section py-16 bg-grey">
      <div className="container mx-auto px-6">
        <h5 className="oswald-600 text-center mb-6 text-[20px]">
        <span style={{ color: '#294145' }}> <FontAwesomeIcon icon={faHandshake} />   </span>
        
          <span style={{ color: '#6EA343' }}>Our</span> 
          <span style={{ color: '#294145' }}> Team</span>
        </h5>
        <h2 className="oswald-600 text-center mb-12 text-[42px]">
  <span style={{ color: '#294145' }}>Meet Our Creative </span>
  <span style={{ color: '#6EA343' }}>Team</span>
</h2>


        <div className="team-inner space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Side: Image */}
              <div
                className="lg:col-span-4"
                data-aos="fade-right"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="w-full h-auto rounded-lg shadow-lg bg-gray-200 flex items-center justify-center">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Right Side: Name, Qualifications, and Description */}
              <div
                className="lg:col-span-8"
                data-aos="fade-left"
              >
                <h3 className="text-[20px] oswald-600 mb-4" style={{ color: '#6EA343' }}>{member.name}</h3>
                <h4 className="text-[20px] oswald-600 mb-4" >{member.position}</h4>
                {member.qualifications && (
                  <>
                    <h4 className="text-[20px] font-bold mb-4" style={{ color: '#6EA343' }}>Qualifications</h4>
                    <p className="oswald-600 text-[20px] text-gray-700 mb-6 leading-relaxed">
                      {member.qualifications.split(', ').map((qual, idx) => (
                        <span key={idx}>
                          {qual.includes('MTech') ? (
                            <span style={{ color: '#6EA343' }}>{qual}</span>
                          ) : (
                            qual
                          )}
                          {idx < member.qualifications.split(', ').length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  </>
                )}
                <h4 className="text-[20px] font-bold mb-4" style={{ color: '#6EA343' }}>About</h4>
                <p className="oswald-600 text-[20px] text-gray-700 leading-relaxed">
                  {member.description.split(' ').map((word, idx) => (
                    <span key={idx} style={{ color: word.includes('sustainable') || word.includes('energy') ? '#6EA343' : 'inherit' }}>
                      {word}{' '}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam1;
