import React, { useState, useEffect } from "react";
import "./services.css";
import servicesData from "./data/services.json"; // <-- JSON import

function Services() {
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
              {service.img && <img src={service.img} alt={service.title} />}
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
}

export default Services;
