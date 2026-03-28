import { useState } from "react";
import "./Properties.css";

const properties = [
  {
    id: 1,
    title: "Luxury 3BHK in Golf Course Road",
    price: "₹2.5 Cr",
    type: "Residential",
    location: "Golf Course Road, Gurugram",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    badge: "Premium",
  },
  {
    id: 2,
    title: "Premium Office Space in Cyber City",
    price: "₹1.2 Cr",
    type: "Commercial",
    location: "Cyber City, Gurugram",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    badge: "Hot Deal",
  },
  {
    id: 3,
    title: "Builder Floor in Nirvana Country",
    price: "₹1.8 Cr",
    type: "Residential",
    location: "Nirvana Country, Gurugram",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    badge: "New",
  },
  {
    id: 4,
    title: "Investment Plot in Sohna Road",
    price: "₹90 Lakh",
    type: "Residential",
    location: "Sohna Road, Gurugram",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    badge: "Investment",
  },
  {
    id: 5,
    title: "Commercial Shops Sector 67",
    price: "₹75 Lakh",
    type: "Commercial",
    location: "Sector 67, Gurugram",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    badge: "Ready to Move",
  },
  {
    id: 6,
    title: "Apartments in New Gurgaon",
    price: "₹2.2 Cr",
    type: "Residential",
    location: "New Gurgaon",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    badge: "New Launch",
  },
  {
    id: 7,
    title: "Retail Space MG Road",
    price: "₹1.5 Cr",
    type: "Commercial",
    location: "MG Road, Gurugram",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80",
    badge: "Prime Location",
  },
  {
    id: 8,
    title: "High Rise Dwarka Expressway",
    price: "₹2.8 Cr",
    type: "Residential",
    location: "Dwarka Expressway, Gurugram",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    badge: "Luxury",
  },
];

export default function Properties() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? properties : properties.filter(p => p.type === filter);

  return (
    <section className="properties" id="properties">
      <div className="properties__container">
        <div className="properties__header">
          <p className="properties__label">GURGAON PROPERTIES</p>
          <h2 className="properties__title">
            Explore Our Premium<br />Property Listings
          </h2>
        </div>

        <div className="properties__filters">
          {["All", "Residential", "Commercial"].map(f => (
            <button
              key={f}
              className={`properties__filter-btn ${filter === f ? "properties__filter-btn--active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="properties__grid">
          {filtered.map((prop) => (
            <div className="property-card" key={prop.id}>
              <div className="property-card__image-wrap">
                <img src={prop.image} alt={prop.title} className="property-card__image" loading="lazy" />
                <span className="property-card__badge">{prop.badge}</span>
                <span className={`property-card__type property-card__type--${prop.type.toLowerCase()}`}>
                  {prop.type}
                </span>
              </div>
              <div className="property-card__body">
                <h3 className="property-card__title">{prop.title}</h3>
                <div className="property-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {prop.location}
                </div>
                <div className="property-card__footer">
                  <span className="property-card__price">{prop.price}</span>
                  <button className="property-card__btn">Know More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
