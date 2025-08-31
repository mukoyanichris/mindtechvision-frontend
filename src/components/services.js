import React from 'react';
import './services.css';

import img1 from './Assets/cctv.jpg';
import img2 from './Assets/softwares.jpg';
import img3 from './Assets/software.jpg';
import img4 from './Assets/training.jpg';
import img5 from './Assets/computer.png';
import img6 from './Assets/networking.jpg';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our services</h2>
        <p>
          At Mind Vision Tech, we offer tailored, affordable IT solutions designed for small and medium-sized businesses.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <img src={img3} alt="Custom Software Development" />
          <h3>Custom Software Development</h3>
          <p>Build tools that work exactly how your business needs them to.</p>
          <ul>
            <li>Web Applications</li>
            <li>Desktop Tools</li>
            <li>Internal Systems</li>
          </ul>
        </div>

        <div className="service-card">
          <img src={img2} alt="IT Support" />
          <h3>IT support</h3>
          <p>Reliable tech support to keep your business running smoothly.</p>
          <ul>
            <li>Troubleshooting & Repairs</li>
            <li>Software Installation</li>
            <li>Hardware Upgrades</li>
          </ul>
        </div>

        <div className="service-card">
          <img src={img3} alt="Computer Support and Maintenance" />
          <h3>Computer Support and Maintenance</h3>
          <p>Fast help with password resets, repairs, software issues, and system maintenance.</p>
        </div>

        <div className="service-card">
          <img src={img4} alt="CCTV Installation" />
          <h3>CCTV Installation and Maintenance</h3>
          <p>Secure your premises with high-quality camera systems and remote monitoring.</p>
        </div>

        <div className="service-card">
          <img src={img5} alt="IT Training" />
          <h3>IT Training</h3>
          <p>
            Hands-on training for teams and individuals on basic IT skills, cybersecurity, and system usage.
          </p>
        </div>

        <div className="service-card">
          <img src={img6} alt="Networking Solutions" />
          <h3>Networking Solutions</h3>
          <p>
            Setup and configuration of routers, switches, and Wi-Fi for reliable, secure connectivity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
