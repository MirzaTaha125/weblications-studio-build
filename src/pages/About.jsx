import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

const timeline = [
  { y: "2022", t: "It Began", d: "Started as a freelance operation, building small websites for local businesses in Karachi. Two people, one laptop, and a lot of coffee." },
  { y: "2023", t: "First Real Clients", d: "Landed our first serious clients — a startup and a retail business. Built custom web apps and did not sleep for three months. Worth it." },
  { y: "2024", t: "Weblications Studios", d: "Officially launched as Weblications Studios. Hired our first team members. Moved beyond just websites into full app development." },
  { y: "2025", t: "Growing Fast", d: "50+ projects completed across 12 industries. Expanded our services. And we are just getting started." },
];

const values = [
  { t: "Clean Code, Always", d: "We write code like other people will have to read it. Because they will.", c: "var(--primary)" },
  { t: "Design That Converts", d: "Good design is not just about looking nice. It is about getting results. We keep both in mind.", c: "var(--accent)" },
  { t: "Speed and Security", d: "Slow websites lose money. Insecure websites lose trust. We make sure neither happens.", c: "var(--accent-2)" },
  { t: "Clients Are Partners", d: "We do not do the work and disappear. We communicate clearly, deliver on time, and actually care.", c: "var(--bg-dark)" },
];

const team = [
  { n: "Ahmed Khan", r: "Lead Developer", b: "Turns coffee into clean code.", j: "Currently debugging something that was working five minutes ago.", g: "linear-gradient(135deg,#2D1B69,#11094C)", i: "AK" },
  { n: "Sara Malik", r: "UI/UX Designer", b: "Makes things look good and work better.", j: "Has strong opinions about button colors.", g: "linear-gradient(135deg,#1A0A0A,#3D1515)", i: "SM" },
  { n: "Usman Ali", r: "Project Manager", b: "Keeps everyone sane and on deadline.", j: "Sends the best Slack GIFs.", g: "linear-gradient(135deg,#0A1A0A,#152D15)", i: "UA" },
];

const About = () => (
  <>
    {/* Hero */}
    <section style={{ background: "var(--bg-dark)", padding: "160px 8% 120px", color: "#fff" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div className="overline" style={{ marginBottom: 16 }}>Our Story</div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#fff", letterSpacing: "-1.5px", marginBottom: 28 }}>
            Small team. Massive ambition.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: 18 }}>
            We started in Karachi with one stubborn belief — that businesses deserve digital products built with care, not factories that crank out templates and call it a day.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: 28 }}>
            Today, Weblications Studios is a small but mighty team. We build websites and apps for businesses that want real results — not just nice-looking deliverables.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[{ n: "50+", l: "Projects" }, { n: "12", l: "Industries" }].map(s => (
              <div key={s.n} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "10px 24px", display: "flex", gap: 10, alignItems: "baseline" }}>
                <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "#fff" }}>{s.n}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--bg-dark-2)", borderRadius: 24, border: "1px solid var(--border-dark)", overflow: "hidden", height: 480, transform: "rotate(1.5deg)" }}>
          <div style={{ background: "var(--primary)", height: "33%", padding: 32, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: 30, bottom: 0, fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "5rem", color: "rgba(255,255,255,0.18)" }}>WS</div>
          </div>
          <div style={{ padding: 32 }}>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", marginBottom: 6 }}>Weblications Studios</h3>
            <p style={{ color: "var(--accent)", fontSize: "0.85rem", marginBottom: 20 }}>Karachi, Pakistan</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Design", "Development", "Delivery"].map(t => (
                <span key={t} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "5px 14px", fontSize: "0.78rem", color: "#fff" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section section-cream" style={{ padding: "120px 8%", position: "relative" }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position: "absolute", top: -1, left: 0, width: "100%", height: 80, display: "block" }}>
        <path d="M0,40 C360,90 720,-10 1080,40 C1260,65 1380,30 1440,40 L1440,0 L0,0 Z" fill="var(--bg-dark)" />
      </svg>
      <div className="container">
        <Reveal>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: 60, paddingTop: 40 }}>How We Got Here.</h2>
        </Reveal>
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto" }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "var(--bg-2)", transform: "translateX(-50%)" }} />
          {timeline.map((t, i) => (
            <Reveal key={t.y}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", alignItems: "center", marginBottom: 60, gap: 24 }}>
                <div style={{ visibility: i % 2 === 0 ? "visible" : "hidden", textAlign: "right" }}>
                  {i % 2 === 0 && <Card y={t.y} t={t.t} d={t.d} />}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--primary)", border: "3px solid #fff", boxShadow: "0 0 0 4px var(--primary)" }} />
                </div>
                <div>
                  {i % 2 !== 0 && <Card y={t.y} t={t.t} d={t.d} />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section style={{ background: "var(--bg-dark)", padding: "100px 8%", color: "#fff" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 24, padding: 60 }}>
          <div style={{ color: "var(--primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, fontSize: "0.78rem", marginBottom: 24 }}>Our Mission</div>
          <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "#fff", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.4, letterSpacing: "-0.5px" }}>
            To empower businesses with digital tools that actually grow their revenue — not just their Instagram following.
          </h3>
        </div>
        <div style={{ background: "var(--primary)", borderRadius: 24, padding: 60, position: "relative", overflow: "hidden" }}>
          <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, fontSize: "0.78rem", marginBottom: 24 }}>Our Vision</div>
          <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "#fff", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.4, letterSpacing: "-0.5px" }}>
            To become the most trusted digital studio in Pakistan — and then some.
          </h3>
          <div style={{ position: "absolute", right: 24, bottom: -10, fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "5rem", color: "rgba(255,255,255,0.18)" }}>→</div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section section-cream diagonal-top" style={{ padding: "140px 8% 100px" }}>
      <div className="container">
        <Reveal>
          <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", marginBottom: 56 }}>What We Stand For.</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div style={{ background: "#fff", borderRadius: 20, padding: 40, boxShadow: "0 2px 16px rgba(0,0,0,0.05)", borderLeft: `4px solid ${v.c}` }}>
                <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1.2rem", marginBottom: 12 }}>{v.t}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section style={{ background: "var(--bg-dark)", padding: "100px 8%", color: "#fff" }}>
      <div className="container">
        <Reveal>
          <h2 style={{ color: "#fff", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", marginBottom: 56 }}>The People Behind the Pixels.</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {team.map((m, i) => (
            <Reveal key={m.n} delay={i * 100}>
              <div style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ height: 200, background: m.g, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "3rem", color: "rgba(255,255,255,0.15)" }}>{m.i}</span>
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "#fff", fontSize: "1.1rem" }}>{m.n}</h3>
                  <div style={{ color: "var(--primary)", fontWeight: 500, fontSize: "0.85rem", marginBottom: 10 }}>{m.r}</div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 12 }}>{m.b}</p>
                  <p style={{ color: "rgba(255,255,255,0.25)", fontStyle: "italic", fontSize: "0.8rem" }}>{m.j}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="section section-cream" style={{ padding: "100px 8%" }}>
      <div className="container" style={{ background: "var(--bg-dark)", borderRadius: 32, padding: "80px 60px", color: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", maxWidth: 440 }}>
          Why businesses choose us over bigger agencies.
        </h2>
        <div>
          {[
            "Direct access to the team — no middlemen",
            "Transparent pricing, no hidden costs",
            "We communicate in your time zone",
            "We care about results, not just deliverables",
            "Post-launch support included in every plan",
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <span style={{ width: 28, height: 28, background: "rgba(255,59,92,0.15)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ color: "#fff", fontWeight: 500, fontSize: "0.95rem" }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section section-coral diagonal-top" style={{ padding: "100px 8%", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-1px", marginBottom: 20 }}>Ready to build something great?</h2>
        <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
          We are always taking on a few new projects. If you have an idea — even a half-baked one — we would love to hear it.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn-white">Start a Project</Link>
          <Link to="/portfolio" className="btn btn-light-ghost">View Our Work</Link>
        </div>
      </div>
    </section>
  </>
);

const Card = ({ y, t, d }) => (
  <div style={{ background: "#fff", borderRadius: 16, padding: "32px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", maxWidth: 420, display: "inline-block", textAlign: "left" }}>
    <div style={{ color: "var(--primary)", fontWeight: 700, marginBottom: 8, fontFamily: "Bricolage Grotesque", fontSize: "1.4rem" }}>{y}</div>
    <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10 }}>{t}</h3>
    <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.92rem" }}>{d}</p>
  </div>
);

export default About;
