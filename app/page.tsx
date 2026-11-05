
const WHATSAPP = "https://wa.me/2349129534833";

const products = [
  {
    name: "Raw Luxury Straight",
    type: "Premium bone-straight wig",
    price: "Enquire for price",
    tag: "BESTSELLER",
    image: "https://wowangel.com/cdn/shop/files/wowangel-13x6-hd-lace-full-frontal-wigs-premium-raw-hair-body-wave-wowangel-1.jpg?crop=center&height=900&v=1739064089&width=900",
  },
  {
    name: "Soft Body Wave",
    type: "Luxury body-wave wig",
    price: "Enquire for price",
    tag: "CUSTOMER FAVOURITE",
    image: "https://wowangel.com/cdn/shop/files/wowangel-13x6-hd-lace-full-frontal-wigs-premium-raw-hair-body-wave-wowangel-1.jpg?crop=center&height=900&v=1739064089&width=900",
  },
  {
    name: "The Everyday Wig",
    type: "Ready-to-wear lace wig",
    price: "Enquire for price",
    tag: "EFFORTLESS GLAM",
    image: "https://cdn.shopify.com/s/files/1/0722/2122/9270/collections/HD-Lace-Wig_723e9903-be43-4868-811c-e9bd3270e4a2.png?v=1733495601",
  },
];

const services = [
  { number: "01", title: "Custom Wig Making", copy: "Beautiful custom-made wigs crafted to suit your preferred style and personality." },
  { number: "02", title: "Wig Installation", copy: "Neat, flawless installations that give you a natural and confident finish." },
  { number: "03", title: "Wig Revamp", copy: "Bring your old favourite wigs back to life with a fresh, beautiful finish." },
  { number: "04", title: "Braiding & Styling", copy: "Beautiful braids and stylish looks for every occasion." },
];

function whatsappLink(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        LUXURY HAIR · BEAUTY · CONFIDENCE — WELCOME TO HOUSE OF TIVELLA
      </div>

      <header className="header">
        <a className="logo" href="#home">
          HOUSE OF <span>TIVELLA</span>
          <small>HAIR · BEAUTY · CONFIDENCE</small>
        </a>

        <nav>
          <a href="#shop">Shop Wigs</a>
          <a href="#services">Our Services</a>
          <a href="#story">Our Story</a>
        </nav>

        <a className="nav-cta" href={whatsappLink("Hello House of Tivella, I'd love to make an enquiry.")} target="_blank" rel="noreferrer">
          WhatsApp Us ↗
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">WELCOME TO HOUSE OF TIVELLA</p>
          <h1>
            Beautiful hair.
            <br />
            <em>Beautiful you.</em>
          </h1>
          <p className="hero-intro">
            Discover luxury wigs, beautiful hair textures and professional
            beauty services designed to bring out your confidence.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#shop">
              Shop our wigs ↗
            </a>
            <a className="text-link" href="#services">
              Explore our services
            </a>
          </div>

          <div className="hero-note">
            ✳ Luxury hair, made for your beauty.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image"></div>
          <div className="image-stamp">
            <span>THE TIVELLA</span>
            <b>GLOW</b>
            <span>STARTS HERE</span>
          </div>
          <div className="vertical-note">
            YOUR BEAUTY. YOUR STYLE. YOUR TIVELLA MOMENT.
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <span>✳ LUXURY WIGS</span>
        <span>✳ BEAUTIFUL TEXTURES</span>
        <span>✳ PROFESSIONAL STYLING</span>
        <span>✳ PERSONAL SERVICE</span>
      </section>

      <section className="shop section" id="shop">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE TIVELLA COLLECTION</p>
            <h2>Find your <em>signature look.</em></h2>
          </div>
          <p>
            From sleek straight wigs to soft waves and glamorous curls,
            discover a look that makes you feel beautiful.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <a
                className="product-image"
                href={whatsappLink(`Hello House of Tivella, I'm interested in ${product.name}. Please send me pictures and prices.`)}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundImage: `url("${product.image}")` }}
              >
                <span className="product-tag">{product.tag}</span>
                <span className="quick-view">Enquire ↗</span>
              </a>

              <div className="product-meta">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.type}</p>
                </div>
                <b>{product.price}</b>
              </div>
            </article>
          ))}
        </div>

        <p className="catalog-note">
          Want a particular length, colour or texture? Contact us on WhatsApp
          for available options and prices.
        </p>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a className="button button-dark" href={whatsappLink("Hello House of Tivella, please send me your full wig catalogue.")} target="_blank" rel="noreferrer">
            Request Full Wig Catalogue ↗
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-top">
          <div>
            <p className="eyebrow light">BEAUTY MEETS ARTISTRY</p>
            <h2>
              More than hair.
              <br />
              <em>It's an experience.</em>
            </h2>
          </div>
          <p>
            From creating your dream wig to giving your favourite unit a
            beautiful new look, we're here to make you feel amazing.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href={whatsappLink(`Hello House of Tivella, I'd like to book ${service.title}. Please share details.`)} target="_blank" rel="noreferrer">
                Book / Enquire ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="story section" id="story">
        <div className="story-art">
          <div className="story-circle">
            T<span>✳</span>
          </div>
          <p>BEAUTY IS A FEELING.</p>
        </div>

        <div className="story-copy">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>
            It's not just the hair.
            <br />
            <em>It's how you feel in it.</em>
          </h2>
          <p>
            House of Tivella is a hair and beauty brand built around confidence,
            elegance and self-expression. We bring you carefully selected
            luxury hair and thoughtful styling services, with attention to
            every little detail.
          </p>
          <p className="signature">
            With love, <b>House of Tivella</b>
          </p>
          <a className="button button-outline" href={whatsappLink("Hello House of Tivella! I'd love to know more about your brand.")} target="_blank" rel="noreferrer">
            Get in touch ↗
          </a>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow light">YOUR NEXT LOOK STARTS HERE</p>
        <h2>
          Ready for your
          <br />
          <em>Tivella moment?</em>
        </h2>
        <p>Let's find the perfect hair for you.</p>
        <a className="button button-light" href={whatsappLink("Hello House of Tivella, I'm ready to place an order. Please assist me.")} target="_blank" rel="noreferrer">
          Chat With Us on WhatsApp ↗
        </a>
      </section>

      <footer className="footer">
        <a className="logo footer-logo" href="#home">
          HOUSE OF <span>TIVELLA</span>
          <small>HAIR · BEAUTY · CONFIDENCE</small>
        </a>

        <p>Luxury hair. Personal touch. All you.</p>

        <div>
          <a href="#shop">Shop Wigs</a>
          <a href="#services">Services</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <small>© {new Date().getFullYear()} House of Tivella. All rights reserved.</small>
      </footer>
    </main>
  );
}
