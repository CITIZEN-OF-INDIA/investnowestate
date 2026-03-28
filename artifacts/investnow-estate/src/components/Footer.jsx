import "./Footer.css";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>InvestNow</span>
              <span className="footer__logo-accent"> Estate</span>
            </div>
            <p className="footer__tagline">
              Your Trusted Property Advisor in Gurugram.<br />
              Smart. Secure. Profitable Real Estate Investments.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollTo("home")}>Home</button></li>
              <li><button onClick={() => scrollTo("about")}>About Us</button></li>
              <li><button onClick={() => scrollTo("services")}>Why Choose Us</button></li>
              <li><button onClick={() => scrollTo("properties")}>Properties</button></li>
              <li><button onClick={() => scrollTo("testimonials")}>Testimonials</button></li>
              <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Property Types</h4>
            <ul>
              <li><button>Residential Properties</button></li>
              <li><button>Commercial Spaces</button></li>
              <li><button>Builder Floors</button></li>
              <li><button>Investment Plots</button></li>
              <li><button>Institutional Deals</button></li>
              <li><button>Land Banking</button></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                NS10, Espace, Nirvana Country, Gurugram
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 15z"/>
                </svg>
                <a href="tel:8929800801">+91 8929800801</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:mihirgaba19@gmail.com">mihirgaba19@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p>© {new Date().getFullYear()} InvestNow Estate. All rights reserved.</p>
          <p>Designed with ♥ for smart investors in Gurugram</p>
        </div>
      </div>
    </footer>
  );
}
