import React from "react";
import "./Contact.css";
import { FaTwitter, FaFacebookF, FaTiktok, FaWhatsapp, FaPhoneAlt, FaSms } from "react-icons/fa";

export default function Contact() {
  // TODO: replace with your real numbers
  const phoneNumber = "+254712345678";
  const smsNumber = "+254712345678";
  const whatsappNumber = "254712345678"; // wa.me requires NO '+' sign

  return (
      <section className="contact-page" id="contact">
  <div className="contact-card">
    {/* Header: title + tiny breadcrumb */}
    <p style={{margin:0, color:"#708099", fontSize:"0.9rem"}}>
      <a href="/" style={{textDecoration:"none", color:"#708099"}}>Home</a> · Contact
    </p>
    <h1 style={{marginTop:6}}>Contact Us</h1>
    <p className="subtitle">We’d love to hear from you. Call, text, WhatsApp, or ping us on socials.</p>

    {/* Lively small stats */}
    <div className="contact-stats">
      <div className="stat">
        <div className="kpi">5 min</div>
        <div className="label">Avg. response (WhatsApp)</div>
      </div>
      <div className="stat">
        <div className="kpi">Mon–Sat</div>
        <div className="label">Business days</div>
      </div>
      <div className="stat">
        <div className="kpi">24/7</div>
        <div className="label">Emergency support</div>
      </div>
    </div>

    {/* Actions row */}
    <div className="contact-actions">
      <a className="btn btn-primary" href={`tel:${phoneNumber}`} aria-label="Call us">
        <FaPhoneAlt aria-hidden="true" /> Call us
      </a>
      <a className="btn btn-secondary" href={`sms:${smsNumber}`} aria-label="Text us">
        <FaSms aria-hidden="true" /> Text us
      </a>
      <a className="btn btn-secondary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us">
        <FaWhatsapp aria-hidden="true" /> WhatsApp
      </a>
    </div>

    {/* Social icons centered */}
    <div className="contact-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
    </div>

    {/* Two-column: office hours + mini FAQ (and optional map) */}
    <div className="contact-grid">
      <div className="card">
        <h3 style={{marginTop:0}}>Office hours</h3>
        <ul style={{listStyle:"none", padding:0, margin:0, color:"#334"}}>
          <li>Mon–Fri: 8:30am – 6:00pm</li>
          <li>Sat: 9:00am – 2:00pm</li>
          <li>Emergency: 24/7 on call</li>
        </ul>
        <div style={{marginTop:10, color:"#556"}}>
          <strong>Address:</strong> 3rd Floor, Tech Park, Nairobi, Kenya
        </div>
        {/* Optional map: replace q= with your real address */}
        <div style={{marginTop:10}}>
          <iframe
            className="map-embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Tech%20Park%20Nairobi&output=embed">
          </iframe>
        </div>
      </div>

      <div className="card">
        <h3 style={{marginTop:0}}>Quick FAQ</h3>
        <div className="faq">
          <div className="faq-item" onClick={(e)=>e.currentTarget.classList.toggle('open')}>
            <div className="faq-q">Do you offer on-site support?<span>+</span></div>
            <div className="faq-a">Yes, within Nairobi and surrounding areas. Remote support nationwide.</div>
          </div>
          <div className="faq-item" onClick={(e)=>e.currentTarget.classList.toggle('open')}>
            <div className="faq-q">How fast can you respond?<span>+</span></div>
            <div className="faq-a">Urgent requests get a response within minutes via WhatsApp; standard within business hours.</div>
          </div>
          <div className="faq-item" onClick={(e)=>e.currentTarget.classList.toggle('open')}>
            <div className="faq-q">Payment options?<span>+</span></div>
            <div className="faq-a">M-Pesa, bank transfer, and cards for projects and support retainers.</div>
          </div>
        </div>
      </div>
    </div>

    <p className="contact-help" style={{marginTop:12}}>
      Prefer email? <a href="mailto:hello@mindvisiontech.example">hello@mindvisiontech.example</a>
    </p>
  </div>
</section>

  );
}
