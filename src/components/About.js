import React from 'react';
import './About.css'; // Import the CSS file

const teamMembers = [
  {
    name: 'Chris Wekesa',
    role: 'CEO & Co-founder',
    image: 'https://placehold.co/200x200?text=Chris',
  },
  {
    name: 'Peter Mwangi',
    role: 'CTO',
    image: 'https://placehold.co/200x200?text=Peter',
  },
  {
    name: 'Warren Otieno',
    role: 'Operations Lead',
    image: 'https://placehold.co/200x200?text=Warren',
  },
  {
    name: 'Sam Kiptoo',
    role: 'Software Engineer',
    image: 'https://placehold.co/200x200?text=Sam',
  },
];

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Mind Vision Tech is a technology company founded in 2024 by a team of ambitious youth,
          blending fresh energy and experience to solve real-world IT challenges.
          We provide smart, affordable solutions in CCTV installation, IT support, networking,
          custom software, and cybersecurity — all tailored for small and medium-sized businesses.
          At Mind Vision, we’re committed to building long-term relationships through reliable service,
          clear communication, and innovative thinking.
        </p>

        {/* Team Members */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div> 

        {/* Founder Message */}
        <div className="founder-message">
          <h3>A Message from the Founders</h3>
          <p>
            “At Mind Vision Tech, our journey began with a simple belief: that technology should be 
            accessible, reliable, and empowering. We founded this company not just to deliver 
            solutions, but to build lasting relationships with every client we serve.  
            Thank you for trusting us to be part of your growth story.”
          </p>
          <p className="signature">— Chris Mukoyani & Peter Mwangi</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
