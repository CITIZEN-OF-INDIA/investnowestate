import "./Services.css";

const whyUs = [
  { num: "01", title: "Strong Local Expertise", desc: "Deep knowledge of Gurugram's micro-markets, pricing trends, and upcoming developments." },
  { num: "02", title: "Verified Property Deals", desc: "Every listing is thoroughly verified for legal clarity and market-accurate pricing." },
  { num: "03", title: "End-to-End Assistance", desc: "From property search to registration, we guide you at every step of the journey." },
  { num: "04", title: "Personalized Investment Advice", desc: "Tailored strategies based on your financial goals, risk appetite, and timeline." },
  { num: "05", title: "Transparent Transactions", desc: "No hidden fees, no surprises. Complete transparency throughout the process." },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__left">
          <p className="services__label">WHY CHOOSE US</p>
          <h2 className="services__title">
            Your Trusted Partner<br />in Real Estate
          </h2>
          <p className="services__desc">
            With years of dedicated experience in Gurugram's dynamic real estate market,
            InvestNow Estate delivers results-driven consultancy backed by integrity and expertise.
          </p>
          <button className="services__cta" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch
          </button>
        </div>
        <div className="services__right">
          {whyUs.map((item, i) => (
            <div className="services__item" key={i}>
              <span className="services__item-num">{item.num}</span>
              <div className="services__item-body">
                <h3 className="services__item-title">{item.title}</h3>
                <p className="services__item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
