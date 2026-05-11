import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import { Globe } from "../components/ui/Globe.jsx";
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

import confetti from 'canvas-confetti';

const ProcessSection = ({ steps }) => {
  const sectionRef = React.useRef(null);
  const [hasLaunched, setHasLaunched] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });



  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  // Parallax for floating elements
  const float1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const float2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const float3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.99 && !hasLaunched) {
      setHasLaunched(true);
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#078af5', '#000000', '#ffffff'],
        zIndex: 9999
      });
    } else if (latest < 0.9) {
      setHasLaunched(false);
    }
  });

  const stepDetails = [
    { ...steps[0], color: "#078af5", bg: "rgba(7, 138, 245, 0.05)" },
    { ...steps[1], color: "#9c27b0", bg: "rgba(156, 39, 176, 0.05)" },
    { ...steps[2], color: "#2e7d32", bg: "rgba(46, 125, 50, 0.05)" },
    { ...steps[3], color: "#ff6f00", bg: "rgba(255, 111, 0, 0.05)" },
  ];

  return (
    <motion.div ref={sectionRef} className="journey-container" style={{ backgroundColor: "#fff" }}>
      <div className="journey-sticky-wrapper" style={{ background: "transparent" }}>

        {/* Floating Decorative Elements */}
        <motion.div style={{ y: float1, top: "20%", left: "10%" }} className="floating-blob" />
        <motion.div style={{ y: float2, bottom: "20%", right: "15%" }} className="floating-blob secondary" />
        <motion.div style={{ y: float3, top: "50%", left: "40%" }} className="floating-blob accent" />

        <motion.div style={{ x }} className="journey-content-stack">

          {/* Section Heading - Block 1 */}
          <div className="journey-item section-intro" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", height: "100%" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="overline"
              style={{ marginBottom: 16 }}
            >
              The Masterplan
            </motion.div>
            <h2 style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "var(--bg-dark)", lineHeight: 0.9, fontWeight: 900, letterSpacing: "-4px" }}>
              From idea<br />
              <span style={{
                color: "transparent",
                WebkitTextStroke: "2px var(--primary)",
                fontFamily: "Bricolage Grotesque"
              }}>to </span>
              <span style={{ color: "var(--primary)" }}>reality.</span>
            </h2>
            <p style={{ marginTop: 32, fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: 400 }}>
              Our battle-tested process for turning wild concepts into world-class products.
            </p>
          </div>

          {/* Horizontal SVG Path */}
          <svg className="journey-mobile-svg" style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", width: "5000px", height: "500px", zIndex: 0, pointerEvents: "none" }} viewBox="0 0 5000 500" fill="none">
            <path
              d="M 400 250 H 1000 Q 1225 250 1225 150 V 100 H 1850 Q 2075 100 2075 200 V 400 H 2700 Q 2925 400 2925 300 V 100 H 3550 Q 3775 100 3775 200 V 400 H 4200 Q 4600 400 4600 325 V 250 H 4500 A 100 100 0 1 1 4700 250 A 100 100 0 1 1 4500 250"
              stroke="var(--primary)" strokeWidth="1" strokeDasharray="10 10" style={{ opacity: 0.1 }}
            />
            <motion.path
              d="M 400 250 H 1000 Q 1225 250 1225 150 V 100 H 1850 Q 2075 100 2075 200 V 400 H 2700 Q 2925 400 2925 300 V 100 H 3550 Q 3775 100 3775 200 V 400 H 4200 Q 4600 400 4600 325 V 250 H 4500 A 100 100 0 1 1 4700 250 A 100 100 0 1 1 4500 250"
              stroke="var(--primary)"
              strokeWidth="4"
              style={{ pathLength, filter: "drop-shadow(0 0 10px var(--primary))" }}
            />
          </svg>

          {stepDetails.map((s, i) => (
            <div key={s.n} className="journey-item step-item" style={{ minWidth: "850px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", height: "100%", alignItems: "center", paddingTop: i % 2 === 0 ? "10vh" : 0, paddingBottom: i % 2 !== 0 ? "10vh" : 0 }}>
              <motion.div
                className="journey-step-card"
                whileHover={{ y: -10 }}
                style={{
                  width: "min(500px, 100%)",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(20px)",
                  padding: "clamp(24px, 4vw, 60px)",
                  borderRadius: 32,
                  border: `1px solid rgba(0,0,0,0.05)`,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.05)`,
                  position: "relative"
                }}
              >
                <div style={{ position: "absolute", top: -60, left: -20, fontSize: "12rem", fontWeight: 900, color: s.color, opacity: 0.1, fontFamily: "Bricolage Grotesque", pointerEvents: "none" }}>{s.n}</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ background: s.color, width: 60, height: 4, marginBottom: 32, borderRadius: 2 }} />
                  <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "var(--bg-dark)", marginBottom: 16, lineHeight: 1.1 }}>{s.t}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "clamp(1rem, 2.8vw, 1.2rem)", lineHeight: 1.6 }}>{s.d}</p>
                </div>
              </motion.div>
            </div>
          ))}

          <div className="journey-item launch-item" style={{ minWidth: "800px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                confetti({
                  particleCount: 200,
                  spread: 120,
                  origin: { y: 0.5 },
                  colors: ['#078af5', '#000000', '#ffffff'],
                  zIndex: 9999
                });
              }}
              className="launch-circle"
              style={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(0,0,0,0.1)",
                cursor: "pointer",
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "var(--primary)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
              }}
            >
              LAUNCH!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const testimonials = [
  { q: "They turned our ancient website into a lead-generating machine. Conversions are up 3x.", a: "Faisal R.", c: "RetailEdge" },
  { q: "Honest, fast, and the design is way better than what we paid bigger agencies for.", a: "Hira S.", c: "HealthSync" },
  { q: "We launched in five weeks. They actually communicated. Wild concept.", a: "Daniyal K.", c: "BrandLaunch" },
];

const techList = ["React", "Next.js", "Flutter", "Node.js", "WordPress", "Shopify", "Firebase", "Figma", "TypeScript", "Python", "PostgreSQL", "AWS"];

const projects = [
  { name: "RetailEdge", cat: "E-Commerce", tags: ["React", "Stripe"], h: 450, grad: "linear-gradient(135deg,#2D1B69 0%,#11094C 100%)", col: "span 2", row: "span 1" },
  { name: "HealthSync", cat: "Healthcare App", tags: ["Flutter", "Firebase"], h: 520, grad: "linear-gradient(135deg,#0A1628 0%,#0D2545 100%)", col: "span 1", row: "span 2" },
  { name: "BrandLaunch", cat: "Agency Site", tags: ["Next.js", "Framer"], h: 360, grad: "linear-gradient(135deg,#1A0A0A 0%,#2D0D0D 100%)", col: "span 1", row: "span 1" },
  { name: "CryptoVault", cat: "DeFi Platform", tags: ["Solidity", "Web3"], h: 420, grad: "linear-gradient(135deg,#1B2735 0%,#090A0F 100%)", col: "span 1", row: "span 1" },
];

const Home = () => {
  return (
    <>
      {/* === Hero === */}
      <section style={{ position: "relative", minHeight: "100vh", background: "var(--bg-dark)", overflow: "hidden", color: "#fff", display: "flex", alignItems: "center" }}>
        <video
          autoPlay muted loop playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.6) contrast(1)"
          }}
          src="/hero-bg-video-2021.mp4"
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,12,14,0.8)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, padding: "120px 4% 160px", maxWidth: 1400, width: "100%", textAlign: "center", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)", color: "#fff", letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 24 }}>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", maxWidth: 700, lineHeight: 1.6, marginBottom: 48, marginLeft: "auto", marginRight: "auto", fontWeight: 400 }}
          >
            Scaling a business shouldn't be a struggle. We build digital products that make growth predictable, effortless, and fun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ maxWidth: 700, margin: "0 auto 24px" }}
          >
            <div className="home-hero-form" style={{ display: "flex", background: "rgba(255,255,255,0.9)", borderRadius: "100px", padding: "6px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
              <div className="home-hero-emoji" style={{ display: "flex", alignItems: "center", paddingLeft: 24, fontSize: "1.5rem" }}>👋</div>
              <input
                type="email"
                placeholder="Enter your email here and we'll send you some 'magic'..."
                className="home-hero-input"
                style={{ background: "transparent", border: "none", color: "#333", padding: "12px 20px", flex: 1, outline: "none", fontSize: "1.1rem", minWidth: 0 }}
              />
              <button className="home-hero-cta" style={{ background: "var(--primary)", color: "#fff", border: "none", padding: "0 32px", borderRadius: "100px", fontWeight: "800", fontSize: "1rem", cursor: "pointer", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                Let's Go 🚀
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}
          >
            <span>*But it's 100% legal (pinky promise)</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</div>
              <span>4.8 stars out of 7,460 reviews</span>
            </div>
          </motion.div>
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

      {/* === The Core (MANIFESTO REDESIGN) === */}
      <section className="section" style={{ padding: "160px 8%", background: "#0D0C0E", position: "relative", overflow: "hidden" }}>
        {/* Extreme Background Visuals */}
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: 800, height: 800, background: "radial-gradient(circle, rgba(7, 138, 245, 0.15) 0%, transparent 70%)", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.5 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 100 }}>
            <Reveal>
              <div className="overline" style={{ color: "var(--primary)", letterSpacing: 6, marginBottom: 24 }}>THE MANIFESTO</div>
              <h2 style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: "#fff", lineHeight: 0.85, fontWeight: 900, letterSpacing: "-5px", textTransform: "uppercase" }}>
                WE DON'T JUST<br />
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>BUILD APPS.</span><br />
                <span style={{ color: "var(--primary)" }}>WE CRAFT</span> VIBES.
              </h2>
            </Reveal>
          </div>

          <div className="home-manifesto-grid" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 30, gridAutoRows: "minmax(200px, auto)" }}>

            {/* Card 1: Performance */}
            <motion.div
              className="home-manifesto-card home-manifesto-card-performance"
              whileHover={{ scale: 1.02 }}
              style={{
                gridColumn: "span 7", gridRow: "span 2",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 48, padding: 60,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative", overflow: "hidden"
              }}
            >
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3 style={{ fontSize: "3.5rem", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1 }}>99+ Velocity</h3>
                <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.5)", maxWidth: 400, lineHeight: 1.6 }}>
                  Our code is optimized to the bone. No bloat, no lag, just raw performance that leaves users in awe.
                </p>
              </div>

              {/* Mini version of the core visual inside the card */}
              <div style={{ position: "absolute", right: -50, top: "50%", transform: "translateY(-50%)", opacity: 0.4, pointerEvents: "none" }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: 400, height: 400, borderRadius: "50%", border: "1px dashed var(--primary)" }}
                />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "8rem", fontWeight: 900, color: "var(--primary)", opacity: 0.2 }}>99</div>
              </div>

              <div style={{ display: "flex", gap: 15, position: "relative", zIndex: 2 }}>
                {["Lighthouse", "Vitals", "Fast-Pass"].map(t => <span key={t} style={{ padding: "8px 20px", borderRadius: 100, background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "0.8rem", border: "1px solid rgba(255,255,255,0.1)" }}>{t}</span>)}
              </div>
            </motion.div>

            {/* Card 2: Design */}
            <motion.div
              className="home-manifesto-card home-manifesto-card-design"
              whileHover={{ scale: 1.02 }}
              style={{
                gridColumn: "span 5", gridRow: "span 3",
                background: "linear-gradient(135deg, var(--primary) 0%, #0056b3 100%)",
                borderRadius: 48, padding: 60,
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                boxShadow: "0 40px 80px rgba(7, 138, 245, 0.3)"
              }}
            >
              <div style={{ marginBottom: "auto" }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.1" /><path d="M40 20L20 40M20 20L40 40" stroke="white" strokeWidth="4" strokeLinecap="round" /></svg>
              </div>
              <h3 style={{ fontSize: "3rem", color: "#fff", fontWeight: 800, marginBottom: 20, lineHeight: 1 }}>Pixel<br />Absolute.</h3>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                Design isn't just how it looks. It's the feeling of every click and transition. We make it unforgettable.
              </p>
            </motion.div>

            {/* Card 3: Scale */}
            <motion.div
              className="home-manifesto-card home-manifesto-card-scale"
              whileHover={{ scale: 1.02 }}
              style={{
                gridColumn: "span 7", gridRow: "span 1",
                background: "rgba(156, 39, 176, 0.1)",
                border: "1px solid rgba(156, 39, 176, 0.2)",
                borderRadius: 48, padding: "40px 60px",
                display: "flex", alignItems: "center", gap: 40
              }}
            >
              <div style={{ fontSize: "4rem", opacity: 0.3 }}>⚡</div>
              <div>
                <h3 style={{ fontSize: "2rem", color: "#fff", fontWeight: 800, marginBottom: 8 }}>Scale Without Limits</h3>
                <p style={{ color: "rgba(255,255,255,0.5)" }}>Built on infrastructure that handles millions of users without breaking a sweat.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* === Intro Statement === */}
      <section className="section section-cream diagonal-bottom" style={{ padding: "160px 8% 200px", position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Reveal>
            <div className="overline" style={{ marginBottom: 20 }}>Why Weblications</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--bg-dark)", letterSpacing: "-2px", maxWidth: 900, margin: "0 auto 32px" }}>
              We are not just another web agency. We are your digital <span style={{ color: "var(--primary)" }}>growth partner.</span>
            </h2>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20, fontSize: "1.1rem" }}>
                Most agencies hand you a pretty file and disappear. We do not. We sit with you, understand your business, and build products that actually move the needle.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 36, fontSize: "1.1rem" }}>
                From the first call to long after launch, we treat your project like it is our own. Because honestly — that is the only way we know how to work.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Tech Transformation Section === */}

      <section className="section-dark" style={{ padding: "120px 8%", position: "relative" }}>
        <div className="container grid-responsive" style={{ gridTemplateColumns: "1fr 1.2fr", gap: "clamp(40px, 8vw, 100px)" }}>

          {/* Left: Sticky Info */}
          <div className="growth-sticky" style={{ height: "fit-content" }}>
            <div className="overline" style={{ marginBottom: 20 }}>How We Help You Grow</div>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#fff", marginBottom: 28, lineHeight: 1.05 }}>
              Solutions that <span style={{ color: "var(--primary)" }}>scale</span> with your vision.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}>
              We don't just build features; we build products. Every project is an opportunity to solve a problem and create value for your users.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["Full-stack expertise", "User-centric design", "Fast & secure delivery"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontWeight: 500, fontSize: "0.95rem" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                  {item}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48 }}>
              <Link to="/packages" className="btn btn-primary">Explore Packages →</Link>
            </div>
          </div>

          {/* Right: Scrollable Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <div
                  className="service-card"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 32,
                    padding: "60px 48px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s ease"
                  }}
                >
                  <div style={{ position: "absolute", top: 40, right: 48, fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "4rem", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize: "2rem", color: "#fff", marginBottom: 20, maxWidth: "80%" }}>{s.t}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32, maxWidth: "90%" }}>
                    {s.d}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "6px 18px", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Process Path (How It Works) === */}
      <ProcessSection steps={steps} />


      {/* === SUCCESS STORIES SECTION (NEW) === */}
      <section className="home-success-section" style={{ background: "#0D0C0E", padding: "120px 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: 80, padding: "0 4%" }}>
          <motion.h2
            className="home-success-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#fff", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-3px", textTransform: "uppercase" }}
          >
            Become our next<br />success story
          </motion.h2>
        </div>

        {/* Infinite Scroll Cards */}
        <div className="marquee home-success-marquee" style={{ marginBottom: 80 }}>
          <div className="marquee-track home-success-track" style={{ gap: "32px", animationDuration: "50s" }}>
            {[
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?w=800&q=80",
              "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
              "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
              "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
            ].map((url, i) => (
              <div
                className="home-success-card"
                key={i}
                style={{
                  width: "420px",
                  height: "580px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  flexShrink: 0
                }}
              >
                <img 
                  src={url} 
                  alt={`Success Story ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?w=800&q=80",
              "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
              "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
              "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
            ].map((url, i) => (
              <div
                className="home-success-card"
                key={`dup-${i}`}
                style={{
                  width: "420px",
                  height: "580px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  flexShrink: 0
                }}
              >
                <img 
                  src={url} 
                  alt={`Success Story Duplicate ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "0 4%" }}>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "var(--primary)",
                color: "#fff",
                padding: "18px 48px",
                borderRadius: "100px",
                fontSize: "1.2rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
                boxShadow: "0 20px 40px rgba(7, 138, 245, 0.3)"
              }}
            >
              Let's Build Your Story
            </motion.button>
          </Link>
        </div>
      </section>




      {/* === CTA === */}
      <section className="section section-coral diagonal-top" style={{ padding: "clamp(80px, 12vw, 120px) 8%" }}>
        <div className="container grid-responsive" style={{ gridTemplateColumns: "1.4fr 1fr", gap: "clamp(40px, 6vw, 60px)", alignItems: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "#fff", letterSpacing: "-1px", lineHeight: 1.05, marginBottom: 24 }}>
              Your business deserves a website that actually works.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.7 }}>
              Not a pretty brochure that nobody visits. Let us build something that brings you real results.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "clamp(24px, 5vw, 36px)", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", width: "100%", maxWidth: 440 }}>
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
