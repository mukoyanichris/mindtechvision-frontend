import React from 'react';
import './Footer.css'; // optional if you're styling separately

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>About Us</h3>
        <p>
          We are a passionate team providing top-notch IT solutions, networking services, and tech support.
          Our mission is to help businesses and individuals thrive in the digital world.
        </p>
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
