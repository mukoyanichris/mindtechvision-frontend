import React from 'react';
import './RequestQuote.css'; // We'll add custom styling here

function RequestQuote() {
  return (
    <section id="Request" className="request-quote">
      <div className="request-quote-header">
        <h2>Need a Custom IT Solution</h2>
        <p>Fill out the form below to request a free quote. Let us know what you need, and we'll get back to you with a solution that fits your goals and budget.</p>
          
      </div>
      <form className="quote-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email address:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Phone number:</label>
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Company or Individual:</label>
          <input type="text" placeholder="Company or individual" />
        </div>

        <div className="form-group">
          <label>Services Needed (select one or more):</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> CCTV installation and maintenance</label>
            <label><input type="checkbox" /> IT support and maintenance</label>
            <label><input type="checkbox" /> Custom software</label>
            <label><input type="checkbox" /> Networking</label>
            <label><input type="checkbox" /> Training</label>
          </div>
        </div>

        <div className="form-group">
          <label>Describe Request:</label>
          <textarea rows="4" placeholder="Brief description of request..." />
        </div>

        <div className="form-group">
          <label>Preferred response time:</label>
          <select>
            <option>ASAP</option>
            <option>Within 24hrs</option>
            <option>Schedule a Call</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </section>
  );
}

export default RequestQuote;
