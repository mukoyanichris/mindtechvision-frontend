import React, { useState, useEffect } from "react";
import "./services.css";
import servicesData from "./data/services.json"; // <-- JSON import

function Services (){
  const onGlide = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.setProperty('--gx', x.toFixed(3));
    e.currentTarget.style.setProperty('--gy', y.toFixed(3));
  };
 {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // simulate fetching data (later replaced with API call)
    setServices(servicesData);
  }, []);

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          At Mind Vision Tech, we offer tailored, affordable IT solutions designed for small and medium-sized businesses.
        </p>
      </div>

      <div className="service-grid">
        {services.length === 0 ? (
          <p className="placeholder">No services available yet. Please check back later.</p>
        ) : (
          services.map((service, index) => (
            <div className="service-card" key={index}>
              {service.img && <div className="glide-wrap" onMouseMove={onGlide}><img src={service.img} alt={service.title} /></div>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.list && (
                <ul>
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}}

export default Services;
