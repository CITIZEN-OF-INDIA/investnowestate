import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rajiv Sharma",
    role: "Senior IT Professional",
    location: "Golf Course Road, Gurugram",
    text: "InvestNow Estate helped me find my dream home on Golf Course Road within my budget. Mihir Gaba's knowledge of the local market is exceptional — he guided me through every step, from property search to final registration. Truly a trustworthy partner.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Business Owner",
    location: "Cyber City, Gurugram",
    text: "I was looking for premium office space in Cyber City and InvestNow Estate delivered beyond expectations. Their transparency in dealings and personalized approach made the entire process smooth and stress-free. I highly recommend their services.",
    rating: 5,
    avatar: "PM",
  },
  {
    id: 3,
    name: "Anil Kapoor",
    role: "NRI Investor",
    location: "Dwarka Expressway, Gurugram",
    text: "As an NRI investor, I was apprehensive about buying property in India remotely. InvestNow Estate made the entire process seamless. Their end-to-end support, verified listings, and honest advice gave me complete confidence in my investment.",
    rating: 5,
    avatar: "AK",
  },
  {
    id: 4,
    name: "Sunita Verma",
    role: "Healthcare Professional",
    location: "Nirvana Country, Gurugram",
    text: "Found a beautiful builder floor in Nirvana Country through InvestNow Estate. The team was professional, prompt, and incredibly knowledgeable. They helped me negotiate a fair price and handled all the paperwork efficiently. Five stars!",
    rating: 5,
    avatar: "SV",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <p className="testimonials__label">TESTIMONIALS</p>
          <h2 className="testimonials__title">
            What Our Clients Say
          </h2>
        </div>

        <div className="testimonials__slider">
          <div className={`testimonials__card ${animating ? "testimonials__card--fade" : ""}`}>
            <div className="testimonials__quote-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="testimonials__text">{t.text}</p>
            <div className="testimonials__stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="testimonials__star">★</span>
              ))}
            </div>
            <div className="testimonials__author">
              <div className="testimonials__avatar">{t.avatar}</div>
              <div className="testimonials__author-info">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
                <span className="testimonials__location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {t.location}
                </span>
              </div>
            </div>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? "testimonials__dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="testimonials__nav">
            <button
              className="testimonials__nav-btn"
              onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              className="testimonials__nav-btn"
              onClick={() => goTo((current + 1) % testimonials.length)}
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
