import "./About.css";

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Residential Properties",
    desc: "Flats, plots, and builder floors across Gurugram's most sought-after neighbourhoods.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: "Commercial & Institutional",
    desc: "Schools, hospitals, guest houses, and PG accommodations for smart commercial investments.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Investment Advisory",
    desc: "High-return investments, land banking, and rental yield properties for long-term wealth.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__header">
          <p className="about__label">WHAT WE ARE DOING</p>
          <h2 className="about__title">
            Committed to Your Real<br />Estate Success
          </h2>
          <p className="about__desc">
            InvestNow Estate is a professionally managed real estate consultancy based in Gurugram,
            led by a team of experienced advisors. We focus on
            transparency, trust, and long-term relationships to help you find the perfect property.
          </p>
        </div>

        <div className="about__cards">
          {features.map((f, i) => (
            <div className="about__card" key={i}>
              <div className="about__card-icon">{f.icon}</div>
              <h3 className="about__card-title">{f.title}</h3>
              <p className="about__card-desc">{f.desc}</p>
              <div className="about__card-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
