const WHATSAPP = "https://wa.me/2349129534833";
const products = [
  { name: "Raw Luxury Straight", type: "Premium bundles", price: "Enquire for price", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85", tag: "BESTSELLER" },
  { name: "Soft Body Wave", type: "Luxury bundles", price: "Enquire for price", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85", tag: "CUSTOMER LOVE" },
  { name: "The Everyday Wig", type: "Ready-to-wear unit", price: "Enquire for price", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85", tag: "EFFORTLESS GLAM" },
];

const services = [
  { number: "01", title: "Wig Making", copy: "A custom unit made with care, precision and your preferred finish." },
  { number: "02", title: "Wig Installation", copy: "A neat, confidence-boosting install tailored to your look." },
  { number: "03", title: "Wig Revamp", copy: "Give your favourite unit a fresh start with a thoughtful refresh." },
  { number: "04", title: "Braiding & Styling", copy: "Beautiful protective styles and polished finishing touches." },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">A LITTLE LUXURY, A LOT OF CONFIDENCE · WELCOME TO TIVELLA</div>
      <header className="header">
        <a className="logo" href="#home">HOUSE OF <span>TIVELLA</span><small>HAIR · BEAUTY · CONFIDENCE</small></a>
        <nav>
          <a href="#shop">Shop</a><a href="#services">Services</a><a href="#story">Our story</a>
        </nav>
        <a className="nav-cta" href={`${WHATSAPP}?text=Hello%20House%20of%20Tivella%2C%20I%27d%20love%20to%20make%20an%20enquiry.`} target="_blank" rel="noreferrer">Let's talk <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">YOUR BEAUTY, BEAUTIFULLY EXPRESSED</p>
          <h1>Good hair.<br/><em>Great energy.</em><br/>That’s Tivella.</h1>
          <p className="hero-intro">Luxury hair pieces and beauty services designed to help you show up feeling like your most confident self.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#shop">Explore the collection <span>↗</span></a>
            <a className="text-link" href="#services">Discover our services</a>
          </div>
          <div className="hero-note"><span className="sparkle">✳</span><span>Made for your moments.<br/><b>Styled for your story.</b></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image"></div>
          <div className="image-stamp"><span>THE TIVELLA</span><b>GLOW</b><span>STARTS HERE</span></div>
          <div className="vertical-note">A NEW KIND OF HAIR LOVE — EST. WITH YOU IN MIND</div>
        </div>
      </section>

      <section className="trust-strip">
        <span>✳ LUXURY HAIR</span><span>✳ PERSONAL SERVICE</span><span>✳ YOUR SIGNATURE LOOK</span><span>✳ CONFIDENCE, ALWAYS</span>
      </section>

      <section className="shop section" id="shop">
        <div className="section-heading">
          <div><p className="eyebrow">THE TIVELLA EDIT</p><h2>Find your <em>next look.</em></h2></div>
          <p>From everyday elegance to full-on main character energy, find the hair that feels like you.</p>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <article className="product-card" key={p.name}>
              <a className="product-image" href={`${WHATSAPP}?text=${encodeURIComponent(`Hello House of Tivella, I'm interested in ${p.name}. Please share available options and prices.`)}`} target="_blank" rel="noreferrer" style={{ backgroundImage: `url("${p.image}")` }}>
                <span className="product-tag">{p.tag}</span><span className="quick-view">Enquire ↗</span>
              </a>
              <div className="product-meta"><div><h3>{p.name}</h3><p>{p.type}</p></div><b>{p.price}</b></div>
            </article>
          ))}
        </div>
        <p className="catalog-note">Our collection is growing. Message us for current textures, lengths, availability and prices.</p>
      </section>

      <section className="services" id="services">
        <div className="services-top">
          <div><p className="eyebrow light">MORE THAN JUST HAIR</p><h2>Your look.<br/><em>Our artistry.</em></h2></div>
          <p>Whether you’re refreshing a favourite or creating a whole new look, we’re here to make the experience feel special from start to finish.</p>
        </div>
        <div className="service-grid">
          {services.map((s) => <article className="service-card" key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.copy}</p><a href={`${WHATSAPP}?text=${encodeURIComponent(`Hello House of Tivella, I'd like to enquire about ${s.title}.` )}`} target="_blank" rel="noreferrer">Book / enquire ↗</a></article>)}
        </div>
      </section>

      <section className="story section" id="story">
        <div className="story-art"><div className="story-circle">T<span>✳</span></div><p>BEAUTY IS A FEELING.</p></div>
        <div className="story-copy"><p className="eyebrow">A NOTE FROM TIVELLA</p><h2>It’s not just the hair.<br/><em>It’s how you feel in it.</em></h2><p>House of Tivella is about helping you express your beauty with ease. We bring together carefully selected hair and thoughtful styling services, with attention to the little details that make a big difference.</p><p className="signature">With love, <b>House of Tivella</b></p><a className="button button-outline" href={`${WHATSAPP}?text=Hello%20House%20of%20Tivella!`} target="_blank" rel="noreferrer">Get to know us <span>↗</span></a></div>
      </section>

      <section className="closing">
        <p className="eyebrow light">READY FOR YOUR TIVELLA MOMENT?</p><h2>Let’s make your<br/><em>next look unforgettable.</em></h2>
        <a className="button button-light" href={`${WHATSAPP}?text=Hello%20House%20of%20Tivella%2C%20I%27m%20ready%20to%20place%20an%20order.`} target="_blank" rel="noreferrer">Chat with us on WhatsApp ↗</a>
      </section>

      <footer className="footer"><a className="logo footer-logo" href="#home">HOUSE OF <span>TIVELLA</span><small>HAIR · BEAUTY · CONFIDENCE</small></a><p>Luxury hair. Personal touch. All you.</p><div><a href="#shop">Shop</a><a href="#services">Services</a><a href={`${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a></div><small>© {new Date().getFullYear()} House of Tivella. All rights reserved.</small></footer>
    </main>
  );
}
