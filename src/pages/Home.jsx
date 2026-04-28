import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import BrowserMock from "../components/BrowserMock.jsx";

const services = [
  { n: "01", t: "Website Development", d: "From landing pages to complex platforms. We build websites that look great and convert visitors into customers.", tags: ["React", "Next.js", "WordPress"] },
  { n: "02", t: "Mobile App Development", d: "Native and cross-platform mobile apps for iOS and Android. Built with Flutter for performance that feels effortless.", tags: ["Flutter", "iOS", "Android"] },
  { n: "03", t: "UI/UX Design", d: "Interfaces users actually enjoy using. We design with purpose — every click, every scroll, every screen.", tags: ["Figma", "Prototyping"] },
  { n: "04", t: "E-Commerce Stores", d: "Shopify, WooCommerce, or fully custom — your online store, built to sell and scale.", tags: ["Shopify", "WooCommerce"] },
  { n: "05", t: "API & Integrations", d: "Connect your tools, automate your workflow. We integrate third-party APIs so your systems work as one.", tags: ["REST", "GraphQL"] },
  { n: "06", t: "Maintenance & Support", d: "We do not disappear after launch. Monthly support plans to keep your site fast, secure, and up to date.", tags: ["Ongoing", "Priority"] },
];

const steps = [
  { n: "01", t: "Discovery Call", d: "We sit down (virtually) and understand your goals, audience, timeline, and budget. No hard sells." },
  { n: "02", t: "Strategy and Design", d: "We map out the structure, design the experience, and get your approval before writing a single line of code." },
  { n: "03", t: "Development", d: "Our developers build your product using clean, scalable code. You get regular progress updates." },
  { n: "04", t: "Launch and Support", d: "We test everything, launch your product, and stick around for support. You are not left alone." },
];

const testimonials = [
  { q: "They turned our ancient website into a lead-generating machine. Conversions are up 3x.", a: "Faisal R.", c: "RetailEdge" },
  { q: "Honest, fast, and the design is way better than what we paid bigger agencies for.", a: "Hira S.", c: "HealthSync" },
  { q: "We launched in five weeks. They actually communicated. Wild concept.", a: "Daniyal K.", c: "BrandLaunch" },
];

const techList = ["React", "Next.js", "Flutter", "Node.js", "WordPress", "Shopify", "Firebase", "Figma", "TypeScript", "Python", "PostgreSQL", "AWS"];

const projects = [
  { name: "RetailEdge", cat: "E-Commerce", tags: ["React", "Stripe"], h: 400, grad: "linear-gradient(135deg,#2D1B69 0%,#11094C 100%)" },
  { name: "HealthSync", cat: "Healthcare App", tags: ["Flutter", "Firebase"], h: 480, grad: "linear-gradient(135deg,#0A1628 0%,#0D2545 100%)" },
  { name: "BrandLaunch", cat: "Agency Site", tags: ["Next.js", "Framer"], h: 360, grad: "linear-gradient(135deg,#1A0A0A 0%,#2D0D0D 100%)" },
];

const Home = () => {
  return (
    <>
      {/* === Hero === */}
      <section style={{ position: "relative", minHeight: "100vh", background: "var(--bg-dark)", overflow: "hidden", color: "#fff", display: "flex", alignItems: "center" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-laptop-keyboard-1838-large.mp4"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,12,14,0.85) 0%, rgba(13,12,14,0.65) 100%)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, padding: "120px 4% 160px 8%", maxWidth: 1400, width: "100%" }}>
          <motion.div
            className="pill"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ marginBottom: 32 }}
          >
            <span className="pulse-dot" /> Digital Studio — Karachi, Pakistan
          </motion.div>

          <h1 style={{ fontSize: "clamp(4rem, 8vw, 7.5rem)", color: "#fff", letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 32 }}>
            {["We Design.", "We Develop.", "We Deliver."].map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {line}
              </motion.div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: 440, lineHeight: 1.7, marginBottom: 36 }}
          >
            From idea to live product — websites, apps, and everything your business needs to win online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
            <Link to="/portfolio" className="btn btn-light-ghost">See Our Work</Link>
          </motion.div>
        </div>

        {/* Bottom-left stack */}
        <div style={{ position: "absolute", bottom: 48, left: "8%", zIndex: 2, display: "flex", flexDirection: "column", gap: 14 }}>
          {[{ n: "50+", l: "Projects shipped" }, { n: "100%", l: "Live & performing" }, { n: "24hr", l: "Reply time" }].map((s, i) => (
            <div key={i} style={{ paddingTop: i ? 14 : 0, borderTop: i ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "var(--accent)", fontSize: "1.3rem" }}>{s.n}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Bottom-right floating card */}
        <div style={{ position: "absolute", bottom: 48, right: "8%", zIndex: 2, maxWidth: 240, padding: "20px 24px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", borderRadius: 16 }}>
          <div style={{ fontWeight: 500, color: "#fff", fontSize: "0.9rem", marginBottom: 10 }}>Currently available for new projects</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>
            <span style={{ width: 8, height: 8, background: "var(--primary)", borderRadius: "50%" }} /> Open for work
          </div>
        </div>
      </section>

      {/* === Marquee === */}
      <section style={{ background: "var(--primary)", padding: "18px 0", overflow: "hidden" }}>
        {[false, true].map((rev, idx) => (
          <div className="marquee" key={idx} style={{ marginTop: idx ? 12 : 0 }}>
            <div className={`marquee-track${rev ? " reverse" : ""}`}>
              {Array.from({ length: 4 }).flatMap((_, k) =>
                ["WEB DESIGN", "APP DEVELOPMENT", "UI/UX", "E-COMMERCE", "AUTOMATION", "FLUTTER", "WORDPRESS"].map((w, i) => (
                  <span key={`${k}-${i}`} style={{ display: "flex", alignItems: "center", gap: 48, fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "1.5px", color: "#fff" }}>
                    {w} <span style={{ color: "var(--accent)", fontSize: "0.6rem" }}>●</span>
                  </span>
                ))
              )}
            </div>
            <div className={`marquee-track${rev ? " reverse" : ""}`} aria-hidden="true">
              {Array.from({ length: 4 }).flatMap((_, k) =>
                ["WEB DESIGN", "APP DEVELOPMENT", "UI/UX", "E-COMMERCE", "AUTOMATION", "FLUTTER", "WORDPRESS"].map((w, i) => (
                  <span key={`b-${k}-${i}`} style={{ display: "flex", alignItems: "center", gap: 48, fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "1.5px", color: "#fff" }}>
                    {w} <span style={{ color: "var(--accent)", fontSize: "0.6rem" }}>●</span>
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </section>

      {/* === Intro Statement === */}
      <section className="section section-cream diagonal-bottom" style={{ padding: "120px 8% 160px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Reveal>
            <div className="overline" style={{ marginBottom: 16 }}>Why Weblications</div>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", color: "var(--bg-dark)", letterSpacing: "-1px", maxWidth: 560, marginBottom: 28 }}>
              We are not just another web agency. We are your digital growth partner.
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
              Most agencies hand you a pretty file and disappear. We do not. We sit with you, understand your business, and build products that actually move the needle.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 28 }}>
              From the first call to long after launch, we treat your project like it is our own. Because honestly — that is the only way we know how to work.
            </p>
            <Link to="/about" className="btn btn-ghost">Learn More About Us</Link>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ background: "var(--bg-dark-2)", borderRadius: 24, padding: 40, color: "#fff" }}>
              {[{ n: "50+", l: "Projects" }, { n: "3+", l: "Years" }, { n: "100%", l: "Live Sites" }].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "24px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "3rem", color: "var(--primary)", letterSpacing: "-1px" }}>{s.n}</div>
                  <div style={{ color: "var(--accent)", fontSize: "1.5rem" }}>/</div>
                  <div style={{ fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Services Horizontal Scroll === */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 0 100px 8%", color: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 60, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 120 }}>
            <div className="overline" style={{ marginBottom: 16 }}>What We Do</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#fff", marginBottom: 20 }}>Our Services.</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 28 }}>
              Everything you need to build, launch, and grow your digital product — under one roof.
            </p>
            <Link to="/packages" className="btn btn-primary">See All Packages</Link>
          </div>
          <div style={{ display: "flex", gap: 20, overflowX: "auto", paddingRight: "8%", paddingBottom: 24, scrollSnapType: "x mandatory" }}>
            {services.map(s => (
              <article
                key={s.n}
                className="card-hover"
                style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 20, padding: "40px 36px", minWidth: 320, flexShrink: 0, position: "relative", scrollSnapAlign: "start" }}
              >
                <div style={{ position: "absolute", top: 28, right: 32, fontFamily: "Bricolage Grotesque", fontWeight: 800, color: "rgba(255,255,255,0.1)" }}>{s.n}</div>
                <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "#fff", fontSize: "1.3rem", marginBottom: 14, marginRight: 30 }}>{s.t}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24, fontSize: "0.95rem" }}>{s.d}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Process === */}
      <section className="section section-cream diagonal-top" style={{ padding: "140px 8% 120px" }}>
        <div className="container">
          <Reveal>
            <div className="overline" style={{ marginBottom: 16 }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", color: "var(--bg-dark)", maxWidth: 720, marginBottom: 60 }}>
              From first call to final launch — here is how we work.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "36px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", height: "100%" }}>
                  <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "3.5rem", color: "var(--bg-2)", lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
                  <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1.1rem", color: "var(--bg-dark)", marginBottom: 12 }}>{s.t}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Stats / Social Proof === */}
      <section style={{ background: "var(--bg-dark)", padding: "100px 8%", color: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { to: 50, suffix: "+", color: "var(--primary)", label: "Projects shipped across 12 industries" },
              { to: 100, suffix: "%", color: "var(--accent)", label: "Client websites still live and performing" },
              { to: 3, suffix: "+", color: "var(--accent-2)", label: "Years of building for startups and enterprises" },
            ].map((s, i) => (
              <Reveal key={i}>
                <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "clamp(3.5rem, 7vw, 6rem)", color: s.color, letterSpacing: "-2px", lineHeight: 1, marginBottom: 16 }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 280 }}>{s.label}</p>
              </Reveal>
            ))}
          </div>
          <div style={{ background: "var(--bg-dark-2)", borderRadius: 20, padding: "48px", marginTop: 60, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {testimonials.map((t, i) => (
              <div key={i}>
                <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "4rem", color: "rgba(255,59,92,0.2)", lineHeight: 0.6, marginBottom: 12 }}>"</div>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 18 }}>{t.q}</p>
                <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 600, color: "#fff" }}>{t.a}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem" }}>{t.c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Mini Portfolio === */}
      <section className="section section-cream" style={{ padding: "120px 8%" }}>
        <div className="container">
          <Reveal>
            <div className="overline" style={{ marginBottom: 16 }}>Selected Work</div>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", marginBottom: 16 }}>A Taste of Our Work.</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: 540, marginBottom: 56, lineHeight: 1.7 }}>
              We have built for startups, SMEs, and growing enterprises. Here is a small slice of what we do.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className="card-hover" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", height: p.h, display: "flex", flexDirection: "column" }}>
                  <div style={{ background: p.grad, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                    <BrowserMock />
                  </div>
                  <div style={{ background: "#fff", padding: "24px 28px" }}>
                    <div style={{ fontFamily: "DM Sans", fontWeight: 600, fontSize: "0.75rem", color: "var(--primary)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{p.cat}</div>
                    <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10 }}>{p.name}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {p.tags.map(t => <span key={t} className="tag tag-light">{t}</span>)}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <Link to="/portfolio" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="section section-coral diagonal-top" style={{ padding: "120px 8%" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", color: "#fff", letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 24 }}>
              Your business deserves a website that actually works.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.7 }}>
              Not a pretty brochure that nobody visits. Let us build something that brings you real results.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
              <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1.2rem", color: "var(--bg-dark)", marginBottom: 6 }}>Start your project today</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 24 }}>Free consultation call</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: "100%" }}>Get a Free Consultation</Link>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", textAlign: "center", marginTop: 16 }}>No commitment, no hard sell. Just a conversation.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Tech Stack Strip === */}
      <section style={{ background: "var(--bg-dark)", padding: "60px 0", color: "#fff" }}>
        <div style={{ padding: "0 8%", marginBottom: 32 }}>
          <div style={{ color: "rgba(255,255,255,0.35)", fontWeight: 500, fontSize: "0.78rem", letterSpacing: 2, textTransform: "uppercase" }}>Technologies We Use</div>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 3 }).flatMap((_, k) => techList.map((t, i) => (
              <span key={`${k}-${i}`} style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 100, padding: "8px 20px", fontWeight: 600, fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>{t}</span>
            )))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {Array.from({ length: 3 }).flatMap((_, k) => techList.map((t, i) => (
              <span key={`b-${k}-${i}`} style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 100, padding: "8px 20px", fontWeight: 600, fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>{t}</span>
            )))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
