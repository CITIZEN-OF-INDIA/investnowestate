import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <p className="hero__tagline">WELCOME TO INVESTNOW ESTATE</p>
        <h1 className="hero__heading">
          Your Trusted Property Advisor<br />in Gurugram
        </h1>
        <p className="hero__subheading">
          Smart. Secure. Profitable Real Estate Investments
        </p>
        <button className="hero__cta" onClick={() => scrollTo("properties")}>
          Explore Properties
        </button>
      </div>

      <div className="hero__search">
        <div className="hero__search-inner">
          <div className="hero__search-field">
            <label>Property Type</label>
            <select value={propertyType} onChange={e => setPropertyType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="plot">Plot / Land</option>
              <option value="institutional">Institutional</option>
            </select>
          </div>
          <div className="hero__search-divider"></div>
          <div className="hero__search-field">
            <label>Location</label>
            <select value={location} onChange={e => setLocation(e.target.value)}>
              <option value="">Select Location</option>
              <option value="golf-course">Golf Course Road</option>
              <option value="cyber-city">Cyber City</option>
              <option value="sohna-road">Sohna Road</option>
              <option value="dwarka-exp">Dwarka Expressway</option>
              <option value="mg-road">MG Road</option>
              <option value="new-gurgaon">New Gurgaon</option>
            </select>
          </div>
          <div className="hero__search-divider"></div>
          <div className="hero__search-field">
            <label>Budget</label>
            <select value={budget} onChange={e => setBudget(e.target.value)}>
              <option value="">Select Budget</option>
              <option value="under-1cr">Under ₹1 Cr</option>
              <option value="1-2cr">₹1 Cr – ₹2 Cr</option>
              <option value="2-3cr">₹2 Cr – ₹3 Cr</option>
              <option value="above-3cr">Above ₹3 Cr</option>
            </select>
          </div>
          <button className="hero__search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
