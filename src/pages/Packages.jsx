import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

const websitePackages = [
  { name: "Starter", price: "PKR 25,000", per: "/project",
    features: ["5-Page Website", "Mobile Responsive", "Contact Form", "Basic SEO Setup", "Google Analytics", "2 Design Revisions", "2 Weeks Delivery", "1 Month Support"],
    style: "light", btn: "ghost" },
  { name: "Growth", price: "PKR 55,000", per: "/project", featured: true,
    features: ["10-Page Website", "Custom Design", "CMS (WordPress/Headless)", "SEO Optimized", "E-Commerce Ready", "Contact + Lead Forms", "3 Design Revisions", "4 Weeks Delivery", "3 Months Support"],
    style: "coral", btn: "accent" },
  { name: "Pro", price: "PKR 1,20,000", per: "/project",
    features: ["Unlimited Pages", "Custom Web Application", "API Integrations", "Performance Optimized", "Custom CMS", "Analytics Dashboard", "Priority Support", "6 Months Support", "Dedicated PM"],
    style: "dark", btn: "white-outline" },
];

const appPackages = [
  { name: "Basic App", price: "PKR 80,000",
    features: ["Single Platform (iOS or Android)", "Up to 8 Screens", "Standard Auth", "Basic Backend Integration", "1 Round of Testing", "6 Weeks Delivery", "1 Month Support"],
    style: "dark2", btn: "light-ghost" },
  { name: "Standard App", price: "PKR 1,50,000", featured: true,
    features: ["iOS + Android (Flutter)", "Up to 15 Screens", "Custom Auth + Roles", "API + Database", "Push Notifications", "App Store Submission", "8 Weeks Delivery", "3 Months Support"],
    style: "coral", btn: "accent" },
  { name: "Enterprise", price: "PKR 3,00,000",
    features: ["Cross-Platform App", "Unlimited Screens", "Custom Backend", "Admin Dashboard", "Payments Integration", "Analytics + Reporting", "Dedicated Team", "12 Weeks Delivery", "6 Months Support"],
    style: "light", btn: "primary" },
];

const features = [
  ["Responsive Design", true, true, true],
  ["Custom Design", false, true, true],
  ["CMS", false, true, true],
  ["SEO", "basic", true, true],
  ["E-Commerce", false, true, true],
  ["API Integration", false, false, true],
  ["Mobile App", false, false, true],
  ["Priority Support", false, false, true],
  ["Analytics", false, true, true],
  ["Dedicated PM", false, false, true],
];

const maintenance = [
  { name: "Basic", price: "PKR 5,000", per: "/mo", items: ["Monthly updates", "Uptime monitoring", "Email support"] },
  { name: "Standard", price: "PKR 10,000", per: "/mo", items: ["Weekly updates", "Performance audits", "Priority email", "Backups"] },
  { name: "Premium", price: "PKR 20,000", per: "/mo", items: ["Daily monitoring", "Content updates", "Dedicated manager", "Same-day fixes"] },
];

const faqs = [
  { q: "How long does a website take?", a: "Anywhere from 2 to 6 weeks depending on scope. Smaller marketing sites are quicker, custom apps take longer." },
  { q: "Do you work with international clients?", a: "Yes — we work remotely with clients worldwide. Communication is our thing." },
  { q: "Can I update my site after launch?", a: "Yes. We add a CMS so you can manage content yourself, or you can have us do it on retainer." },
  { q: "What if I need changes after launch?", a: "Every package includes a support period. Beyond that, our maintenance plans cover ongoing tweaks." },
  { q: "Do you do logo and branding too?", a: "Yes — we can include brand identity work as part of the project, or recommend partners we trust." },
];

const Packages = () => {
  return (
    <>
      <section style={{ background: "var(--bg-dark)", padding: "160px 8% 100px", color: "#fff" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#fff", letterSpacing: "-1.5px", marginBottom: 24 }}>Honest pricing. No surprises.</h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, lineHeight: 1.7 }}>
            Whether you are a startup or an established business — we have a package that fits. And if you do not see what you need, we will build one for you.
          </p>
        </div>
      </section>

      {/* Website Packages */}
      <section className="section section-cream" style={{ padding: "100px 8%" }}>
        <div className="container">
          <Reveal>
            <div className="overline" style={{ marginBottom: 12 }}>Website Packages</div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 60 }}>Get Online, Look Great, Grow Fast.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
            {websitePackages.map(p => <PriceCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* App Packages */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 8%", color: "#fff" }}>
        <div className="container">
          <Reveal>
            <div className="overline" style={{ marginBottom: 12 }}>App Packages</div>
            <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 60 }}>Apps that feel as good as they look.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
            {appPackages.map(p => <PriceCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section section-cream" style={{ padding: "100px 8%" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 40 }}>What is included — at a glance.</h2>
          </Reveal>
          <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid var(--bg-2)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: "var(--bg-dark)", color: "#fff", fontFamily: "Bricolage Grotesque", fontWeight: 600 }}>
              {["Feature", "Starter", "Growth", "Pro"].map(h => (
                <div key={h} style={{ padding: "20px 24px" }}>{h}</div>
              ))}
            </div>
            {features.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: i % 2 ? "var(--bg)" : "#fff", borderTop: "1px solid var(--bg-2)" }}>
                {row.map((cell, j) => (
                  <div key={j} style={{ padding: "16px 24px", color: j === 0 ? "var(--text)" : "var(--text-muted)", fontWeight: j === 0 ? 500 : 400 }}>
                    {j === 0 ? cell : (cell === true ? <span style={{ display: "inline-block", width: 18, height: 18, borderRadius: "50%", background: "var(--primary)" }} /> : cell === "basic" ? <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>basic</span> : <span style={{ color: "var(--border-light)" }}>—</span>)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 8%", color: "#fff" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 12 }}>Keep it running perfectly.</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
              Monthly maintenance plans for sites that need to stay sharp.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {maintenance.map(m => (
              <div key={m.name} style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 16, padding: 32 }}>
                <h3 style={{ fontFamily: "Bricolage Grotesque", color: "#fff", fontSize: "1.1rem", marginBottom: 8 }}>{m.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, color: "var(--primary)", fontSize: "2rem" }}>{m.price}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>{m.per}</span>
                </div>
                <ul style={{ listStyle: "none" }}>
                  {m.items.map(it => (
                    <li key={it} style={{ padding: "8px 0", color: "rgba(255,255,255,0.6)", display: "flex", gap: 10, alignItems: "center", fontSize: "0.9rem" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="section section-accent diagonal-top" style={{ padding: "100px 8%" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <h2 style={{ color: "var(--bg-dark)", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-1px", marginBottom: 16 }}>Need something different? Good.</h2>
            <p style={{ color: "rgba(13,12,14,0.6)", lineHeight: 1.7, maxWidth: 540 }}>
              Custom projects are what we live for. Tell us what you need — budget, scope, timeline — and we will come back with a plan.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link to="/contact" className="btn btn-primary">Build Something Custom</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-cream" style={{ padding: "100px 8%" }}>
        <div className="container" style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 48 }}>Questions people actually ask.</h2>
          </Reveal>
          {faqs.map((f, i) => <Faq key={i} {...f} />)}
        </div>
      </section>
    </>
  );
};

const Faq = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--bg-2)", padding: "24px 0" }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}>
        <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 600, fontSize: "1.05rem" }}>{q}</span>
        <span style={{ color: "var(--primary)", fontSize: "1.5rem", lineHeight: 1, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 240 : 0, transition: "max-height 0.4s ease" }}>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.8, paddingTop: 16, fontSize: "0.95rem" }}>{a}</p>
      </div>
    </div>
  );
};

const PriceCard = ({ p }) => {
  const styles = {
    light: { background: "#fff", border: "1px solid var(--border-light)", color: "var(--text)", priceColor: "var(--bg-dark)", muted: "var(--text-muted)" },
    coral: { background: "var(--primary)", border: "none", color: "#fff", priceColor: "#fff", muted: "rgba(255,255,255,0.7)" },
    dark: { background: "var(--bg-dark)", border: "none", color: "#fff", priceColor: "#fff", muted: "rgba(255,255,255,0.55)" },
    dark2: { background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", color: "#fff", priceColor: "#fff", muted: "rgba(255,255,255,0.5)" },
  }[p.style];
  const btnClass = {
    "ghost": "btn btn-ghost",
    "primary": "btn btn-primary",
    "accent": "btn btn-accent",
    "white-outline": "btn btn-light-ghost",
    "light-ghost": "btn btn-light-ghost",
  }[p.btn];

  return (
    <div style={{
      ...styles,
      borderRadius: 24, padding: 40, position: "relative",
      transform: p.featured ? "translateY(-20px)" : "none",
      boxShadow: p.featured ? "0 24px 60px rgba(7,138,245,0.25)" : "0 2px 20px rgba(0,0,0,0.06)",
      display: "flex", flexDirection: "column",
    }}>
      {p.featured && (
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "var(--bg-dark)", borderRadius: 100, padding: "5px 18px", fontWeight: 800, fontSize: "0.7rem", letterSpacing: 1 }}>
          MOST POPULAR
        </div>
      )}
      <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: styles.muted, marginBottom: 16 }}>{p.name}</div>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, color: styles.priceColor, fontSize: "2.8rem", letterSpacing: "-1px" }}>{p.price}</span>
        {p.per && <span style={{ color: styles.muted, marginLeft: 6, fontSize: "0.9rem" }}>{p.per}</span>}
      </div>
      <div style={{ height: 1, background: p.style === "light" ? "var(--bg-2)" : "rgba(255,255,255,0.15)", marginBottom: 24 }} />
      <ul style={{ listStyle: "none", flex: 1, marginBottom: 28 }}>
        {p.features.map(f => (
          <li key={f} style={{ padding: "8px 0", color: styles.color, opacity: p.style === "light" ? 0.85 : 1, display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}>
            <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: "50%", background: p.style === "coral" ? "#fff" : "var(--primary)", flexShrink: 0 }} />{f}
          </li>
        ))}
      </ul>
      <Link to="/contact" className={btnClass} style={{ width: "100%" }}>Get Started</Link>
    </div>
  );
};

export default Packages;
