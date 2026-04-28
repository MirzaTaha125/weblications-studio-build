import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import BrowserMock from "../components/BrowserMock.jsx";

const projects = [
  { name: "RetailEdge", cat: "E-Commerce Platform", tags: ["React", "Node.js", "Stripe"], grad: "linear-gradient(135deg,#1A0A2E,#2D1060)", group: "Websites", desc: "Full e-commerce platform with 3x conversion uplift." },
  { name: "HealthSync", cat: "Healthcare App", tags: ["Flutter", "Firebase"], grad: "linear-gradient(135deg,#0A1A28,#0D2D45)", group: "Mobile Apps", desc: "Patient appointment app used by 5 clinics." },
  { name: "BrandLaunch", cat: "Agency Website", tags: ["Next.js", "Framer"], grad: "linear-gradient(135deg,#1A1A0A,#2D2D10)", group: "Websites", desc: "Award-worthy creative agency site, end to end." },
  { name: "LogisticsPro", cat: "Business Automation", tags: ["React", "PostgreSQL"], grad: "linear-gradient(135deg,#0A1A0A,#0D2D1A)", group: "Custom", desc: "Internal dashboard saving 30 hours a week." },
  { name: "StyleHaus", cat: "Fashion Store", tags: ["Shopify", "Custom"], grad: "linear-gradient(135deg,#1A0A0A,#3D1515)", group: "E-Commerce", desc: "Boutique brand store with custom checkout." },
  { name: "EduPortal", cat: "Learning Platform", tags: ["Vue", "Laravel"], grad: "linear-gradient(135deg,#0A0A1A,#151530)", group: "Websites", desc: "LMS for an online tutoring company." },
  { name: "FinTrack", cat: "Finance Dashboard", tags: ["React", "Chart.js"], grad: "linear-gradient(135deg,#1A0A14,#2D1020)", group: "Custom", desc: "Real-time finance dashboard for SMEs." },
];

const tabs = ["All", "Websites", "Mobile Apps", "E-Commerce", "Custom"];
const positions = [
  { col: "span 7", row: 1 },
  { col: "span 5", row: 1 },
  { col: "span 4", row: 2 },
  { col: "span 4", row: 2 },
  { col: "span 4", row: 2 },
  { col: "span 6", row: 3 },
  { col: "span 6", row: 3 },
];

const techList = ["React", "Next.js", "Flutter", "Node.js", "WordPress", "Shopify", "Firebase", "Figma", "TypeScript", "Python", "PostgreSQL", "AWS"];
const clients = ["TechFlow", "RetailCo", "HealthSync", "BrandHouse", "EduCorp"];

const Portfolio = () => {
  const [tab, setTab] = useState("All");
  const filtered = projects.map((p, idx) => ({ ...p, _i: idx })).filter(p => tab === "All" || p.group === tab);

  return (
    <>
      <section style={{ background: "var(--bg-dark)", padding: "160px 8% 100px", color: "#fff" }}>
        <div className="container">
          <div className="overline" style={{ marginBottom: 16 }}>Portfolio</div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#fff", letterSpacing: "-1.5px", marginBottom: 24 }}>Work we are proud to show.</h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>
            Every project here was built with care, tested thoroughly, and launched with pride.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["50+ Projects", "12 Industries", "100% Live"].map(s => (
              <span key={s} style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 100, padding: "8px 20px", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "80px 8%" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                border: t === tab ? "1px solid var(--bg-dark)" : "1px solid var(--border-light)",
                background: t === tab ? "var(--bg-dark)" : "#fff",
                color: t === tab ? "#fff" : "var(--text-muted)",
                borderRadius: 100, padding: "8px 22px", fontWeight: 600, fontSize: "0.85rem",
                transition: "all 0.2s",
              }}>{t}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 20, gridAutoRows: 360 }}>
            {filtered.map((p) => {
              const pos = positions[p._i] || { col: "span 4", row: "auto" };
              return (
                <ProjectCard key={p.name} p={p} colSpan={pos.col} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 8%", color: "#fff" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 40 }}>Featured Project.</h2>
          </Reveal>
          <div style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 24, padding: 60, display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 60, alignItems: "center" }}>
            <div>
              <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, color: "var(--primary)", fontSize: "2rem", marginBottom: 6 }}>RetailEdge</h3>
              <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>E-Commerce Platform</div>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 16 }}>
                A homegrown retail brand wanted to scale online — but their old site was barely functional.
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 28 }}>
                We rebuilt everything: custom storefront, Stripe checkout, inventory dashboard, and a content system the team can actually use.
              </p>
              <div style={{ marginBottom: 28 }}>
                {[
                  ["3x", "increase in conversions"],
                  ["2s", "load time across pages"],
                  ["6", "weeks from kickoff to launch"],
                ].map(([n, l]) => (
                  <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 14, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, color: "var(--accent)", fontSize: "1.4rem" }}>{n}</span>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>{l}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-accent">View Case Study</button>
            </div>
            <div style={{ background: "linear-gradient(135deg,#1A0A2E,#2D1060)", borderRadius: 16, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BrowserMock />
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div style={{ padding: "0 8%", marginBottom: 32 }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>Built With the Best Tools.</h2>
        </div>
        {[false, true].map((r, k) => (
          <div className="marquee" key={k} style={{ marginBottom: k ? 0 : 16 }}>
            <div className={`marquee-track${r ? " reverse" : ""}`}>
              {Array.from({ length: 3 }).flatMap((_, kk) => techList.map((t, i) => (
                <span key={`${kk}-${i}`} style={{ background: "#fff", border: "1px solid var(--border-light)", borderRadius: 100, padding: "8px 20px", color: "var(--text-muted)", fontWeight: 600, fontSize: "0.85rem" }}>{t}</span>
              )))}
            </div>
            <div className={`marquee-track${r ? " reverse" : ""}`} aria-hidden="true">
              {Array.from({ length: 3 }).flatMap((_, kk) => techList.map((t, i) => (
                <span key={`b-${kk}-${i}`} style={{ background: "#fff", border: "1px solid var(--border-light)", borderRadius: 100, padding: "8px 20px", color: "var(--text-muted)", fontWeight: 600, fontSize: "0.85rem" }}>{t}</span>
              )))}
            </div>
          </div>
        ))}
      </section>

      {/* Client logos */}
      <section style={{ background: "var(--bg)", padding: "60px 8%", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 2, fontWeight: 500, fontSize: "0.75rem", marginBottom: 32 }}>Trusted By Growing Businesses</div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {clients.map(c => (
              <div key={c} style={{ background: "#fff", border: "1px solid var(--border-light)", borderRadius: 10, padding: "18px 40px", fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1rem", color: "var(--border-light)" }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-coral diagonal-top" style={{ padding: "100px 8%", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-1px", marginBottom: 20 }}>Got a project in mind?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            We would love to hear about it. Let us build something together.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-white">Start a Project</Link>
            <Link to="/packages" className="btn btn-light-ghost">See Our Packages</Link>
          </div>
        </div>
      </section>
    </>
  );
};

const ProjectCard = ({ p, colSpan }) => {
  const [hover, setHover] = useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ gridColumn: colSpan, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", position: "relative", transition: "transform 0.3s, box-shadow 0.3s", transform: hover ? "translateY(-6px)" : "none" }}
    >
      <div style={{ background: p.grad, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 32, position: "relative" }}>
        <BrowserMock />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,12,14,0.92)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: 40, opacity: hover ? 1 : 0, transition: "opacity 0.3s" }}>
          <h3 style={{ color: "#fff", fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "1.3rem", marginBottom: 10 }}>{p.name}</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 18, maxWidth: 360 }}>{p.desc}</p>
          <button className="btn btn-primary btn-sm">View Project</button>
        </div>
      </div>
      <div style={{ background: "#fff", padding: "20px 24px" }}>
        <div style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{p.cat}</div>
        <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{p.name}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {p.tags.map(t => <span key={t} className="tag tag-light">{t}</span>)}
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
