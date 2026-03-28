import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__left">
          <p className="contact__label">GET IN TOUCH</p>
          <h2 className="contact__title">
            Let's Find Your<br />Perfect Property
          </h2>
          <p className="contact__desc">
            Ready to invest in Gurugram's thriving real estate market? Our expert team is here to guide you.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <strong>Address</strong>
                <p>NS10, Espace, Nirvana Country,<br />Gurugram, Haryana</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 15z"/>
                </svg>
              </div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:8929800801">+91 8929800801</a></p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:mihirgaba19@gmail.com">mihirgaba19@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact__success">
                ✓ Thank you! We'll reach out to you shortly.
              </div>
            )}
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajiv Sharma"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>
            <div className="contact__form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div className="contact__form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about the property you're looking for..."
                rows={5}
              />
            </div>
            <button type="submit" className="contact__submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
