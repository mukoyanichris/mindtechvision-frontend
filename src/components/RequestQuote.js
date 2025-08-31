import React, { useState } from "react";
import "./RequestQuote.css";

const SERVICE_OPTIONS = [
  "CCTV installation and maintenance",
  "IT support and maintenance",
  "Custom software",
  "Networking",
  "Training",
];

function RequestQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    description: "",
    responseTime: "ASAP",
  });

  const [status, setStatus] = useState({ submitting: false, success: false, error: "" });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const exists = prev.services.includes(value);
        return {
          ...prev,
          services: checked
            ? [...prev.services, value]
            : prev.services.filter((s) => s !== value),
        };
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: false, success: false, error: "" });

    if (!formData.name.trim()) return setStatus({ submitting: false, success: false, error: "Full name is required." });
    if (!isValidEmail(formData.email)) return setStatus({ submitting: false, success: false, error: "Enter a valid email." });

    try {
      setStatus({ submitting: true, success: false, error: "" });

      // Build payload for Web3Forms
      const payload = {
        access_key: process.env.REACT_APP_WEB3FORMS_KEY,
        subject: "New Quote Request — Mind Tech Vision",
        from_name: formData.name,
        from_email: formData.email,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "-"}
Company: ${formData.company || "-"}
Services: ${formData.services.length ? formData.services.join(", ") : "-"}
Preferred Response Time: ${formData.responseTime}
Description:
${formData.description || "-"}
        `.trim(),
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ submitting: false, success: true, error: "" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          description: "",
          responseTime: "ASAP",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message || "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="Request" className="request-quote">
      <div className="request-quote-header">
        <h2>Need a Custom IT Solution</h2>
        <p>
          Fill out the form below to request a free quote. Let us know what you need, and we'll get back to you with a
          solution that fits your goals and budget.
        </p>
      </div>

      {/* Collapse form if success */}
      {status.success ? (
        <div className="success-message">
          <h3>✅ Thank you!</h3>
          <p>Your request has been submitted successfully. We’ll get back to you soon.</p>
        </div>
      ) : (
        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          {status.error && <div className="form-alert form-alert-error">{status.error}</div>}

          <div className="form-group">
            <label htmlFor="rq-name">Full Name:</label>
            <input
              id="rq-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rq-email">Email address:</label>
            <input
              id="rq-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rq-phone">Phone number:</label>
            <input
              id="rq-phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rq-company">Company or Individual:</label>
            <input
              id="rq-company"
              type="text"
              name="company"
              placeholder="Company or individual"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <span className="label">Services Needed (select one or more):</span>
            <div className="checkbox-group">
              {SERVICE_OPTIONS.map((opt) => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    name="services"
                    value={opt}
                    checked={formData.services.includes(opt)}
                    onChange={handleChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rq-desc">Describe Request:</label>
            <textarea
              id="rq-desc"
              name="description"
              rows="4"
              placeholder="Brief description of request..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rq-response">Preferred response time:</label>
            <select
              id="rq-response"
              name="responseTime"
              value={formData.responseTime}
              onChange={handleChange}
            >
              <option value="ASAP">ASAP</option>
              <option value="Within 24hrs">Within 24hrs</option>
              <option value="Schedule a Call">Schedule a Call</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status.submitting || !formData.name.trim() || !isValidEmail(formData.email)}
          >
            {status.submitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      )}
    </section>
  );
}

export default RequestQuote;
