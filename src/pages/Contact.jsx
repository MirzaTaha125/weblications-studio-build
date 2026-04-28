import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); };

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bg-dark)", padding: "160px 8% 100px", color: "#fff" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#fff", letterSpacing: "-1.5px", marginBottom: 24, maxWidth: 900 }}>
            Let us build something great together.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 480, lineHeight: 1.7, marginBottom: 36 }}>
            Drop us a message, send a WhatsApp, or book a call. We are friendly people who reply fast.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["EMAIL", "hello@weblications.studio"],
              ["WHATSAPP", "+92 300 0000000"],
              ["LOCATION", "Karachi, PK"],
            ].map(([m, v]) => (
              <span key={m} style={{ background: "var(--bg-dark-2)", border: "1px solid var(--border-dark)", borderRadius: 100, padding: "10px 24px", display: "flex", gap: 10 }}>
                <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>{m}</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>{v}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section section-cream" style={{ padding: "100px 8%" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80 }}>
          <div>
            <h2 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1.5rem", marginBottom: 6 }}>Send us a message.</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 32 }}>We will get back to you within 24 hours. Promise.</p>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Field label="Name"><input required value={form.name} onChange={onChange("name")} placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" value={form.email} onChange={onChange("email")} placeholder="you@email.com" /></Field>
              </div>
              <Field label="Phone"><input value={form.phone} onChange={onChange("phone")} placeholder="+92 300 0000000" /></Field>
              <Field label="Service">
                <select required value={form.service} onChange={onChange("service")}>
                  <option value="">Select a service</option>
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Custom Software</option>
                  <option>Not Sure Yet</option>
                </select>
              </Field>
              <Field label="Budget">
                <select required value={form.budget} onChange={onChange("budget")}>
                  <option value="">Select your budget</option>
                  <option>Under PKR 30,000</option>
                  <option>PKR 30,000 - 80,000</option>
                  <option>PKR 80,000 - 200,000</option>
                  <option>Above PKR 200,000</option>
                </select>
              </Field>
              <Field label="Message"><textarea required value={form.message} onChange={onChange("message")} placeholder="Tell us about your project..." style={{ height: 140, resize: "vertical" }} /></Field>
              <button className="btn btn-primary" type="submit" style={{ width: "100%", padding: 16 }}>{sent ? "Message Sent ✓" : "Send Message"}</button>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                We typically reply within a few hours. Unless something catastrophically dramatic is happening.
              </p>
            </form>
          </div>

          <div>
            <div style={{ background: "#fff", borderRadius: 20, padding: 32, border: "1px solid var(--bg-2)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
              {[
                ["EMAIL", "hello@weblications.studio"],
                ["PHONE", "+92 300 0000000"],
                ["LOCATION", "Karachi, Pakistan"],
                ["RESPONSE TIME", "Within 24 Hours", "(we are very punctual about this)"],
              ].map(([l, v, sub], i) => (
                <div key={l} style={{ padding: "18px 0", borderBottom: i < 3 ? "1px solid var(--bg-2)" : "none" }}>
                  <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 600, fontSize: "0.75rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>{l}</div>
                  <div style={{ fontWeight: 500, fontSize: "0.95rem", color: "var(--bg-dark)" }}>{v}</div>
                  {sub && <div style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.8rem", marginTop: 4 }}>{sub}</div>}
                </div>
              ))}
            </div>

            <div style={{ background: "var(--primary)", borderRadius: 20, padding: 28, marginTop: 16, color: "#fff" }}>
              <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Currently available for new projects.</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", marginBottom: 14 }}>Slots fill up fast.</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem" }}>
                <span className="pulse-dot" /> Open for work
              </div>
            </div>

            <div style={{ background: "var(--bg-dark)", borderRadius: 20, padding: 28, marginTop: 16, color: "#fff" }}>
              <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Quick links</div>
              {[
                ["View Packages", "/packages"],
                ["See Portfolio", "/portfolio"],
                ["About Us", "/about"],
              ].map(([t, to]) => (
                <Link key={to} to={to} style={{ display: "block", padding: "10px 0", color: "#fff", fontWeight: 500, fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{t} →</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--bg-dark)", padding: "80px 8%", color: "#fff" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: 48 }}>What happens after you reach out.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              ["01", "You send a message", "Through the form, email, or WhatsApp. Whatever works for you."],
              ["02", "We schedule a call", "A quick 30-minute discovery call to understand your project. No pressure."],
              ["03", "You get a proposal", "A clear, honest proposal with scope, timeline, and pricing. No vague estimates."],
            ].map(([n, t, d]) => (
              <div key={n} style={{ background: "var(--bg-dark-2)", borderRadius: 16, padding: 32 }}>
                <div style={{ fontFamily: "Bricolage Grotesque", fontWeight: 800, fontSize: "2rem", color: "var(--primary)", marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: 10 }}>{t}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: "var(--bg)", padding: "60px 8%" }}>
        <div className="container">
          <div style={{
            background: "#fff", borderRadius: 24, border: "1px solid var(--bg-2)", overflow: "hidden",
            height: 280, position: "relative",
            backgroundImage: "repeating-linear-gradient(0deg, rgba(13,12,14,0.04) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(13,12,14,0.04) 0 1px, transparent 1px 40px), radial-gradient(ellipse at center, #fff 0%, var(--bg-2) 100%)",
          }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div style={{ position: "relative", width: 24, height: 24 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--primary)", border: "3px solid #fff", boxShadow: "0 6px 20px rgba(255,59,92,0.4)" }} />
                <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid var(--primary)", animation: "pulse-ring 2s ease-out infinite", opacity: 0.5 }} />
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid var(--bg-2)", borderRadius: 100, padding: "8px 20px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
              <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: "0.95rem" }}>Karachi, Pakistan</span>
            </div>
          </div>
          <style>{`@keyframes pulse-ring { 0% { transform: scale(0.7); opacity: 0.7; } 100% { transform: scale(2.6); opacity: 0; } }`}</style>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-coral diagonal-top" style={{ padding: "100px 8%", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "#fff", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-1px", marginBottom: 20 }}>Still on the fence?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            We get it. Big decisions need careful thought. But here is the thing — a free conversation costs you nothing.
          </p>
          <Link to="/contact" className="btn btn-white">Book a Free Call</Link>
        </div>
      </section>

      <style>{`
        .field-label { font-family: 'DM Sans'; font-weight: 600; font-size: 0.85rem; color: var(--bg-dark); margin-bottom: 6px; display: block; }
        form input, form select, form textarea {
          width: 100%; background: #fff; border: 1.5px solid var(--border-light);
          border-radius: 10px; padding: 14px 18px; font-size: 0.95rem;
          color: var(--bg-dark); transition: border-color 0.2s, box-shadow 0.2s; outline: none;
          font-family: 'DM Sans', sans-serif;
        }
        form input:focus, form select:focus, form textarea:focus {
          border-color: var(--primary); box-shadow: 0 0 0 3px rgba(255,59,92,0.12);
        }
      `}</style>
    </>
  );
};

const Field = ({ label, children }) => (
  <div>
    <label className="field-label">{label}</label>
    {children}
  </div>
);

export default Contact;
