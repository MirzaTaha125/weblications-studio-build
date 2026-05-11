import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div>
        <div className="logo">
          <span className="logo-main" style={{ color: "#fff" }}>Weblications</span>
          <span className="logo-dot" />
          <span className="logo-sub" style={{ color: "rgba(255,255,255,0.5)" }}>Studios</span>
        </div>
        <p className="footer-desc">We design and build digital products that help businesses grow online.</p>
        <div className="footer-socials">
          <a href="#" className="footer-social">Instagram</a>
          <a href="#" className="footer-social">LinkedIn</a>
          <a href="#" className="footer-social">Dribbble</a>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <Link to="/home">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/portfolio">Portfolio</Link><br />
        <Link to="/packages">Packages</Link><br />
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <h4>Services</h4>
        <a href="#">Web Development</a><br />
        <a href="#">App Development</a><br />
        <a href="#">UI/UX Design</a><br />
        <a href="#">E-Commerce</a><br />
        <a href="#">Maintenance</a>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <a className="footer-coral" href="mailto:hello@weblications.studio">hello@weblications.studio</a><br />
        <p>+92 300 0000000</p>
        <p>Available Worldwide</p>
      </div>
    </div>

    <div className="footer-brand-wrap">
      {"WEBLICATIONS".split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </div>

    <div className="footer-bottom">
      <span className="footer-copy">© {new Date().getFullYear()} Weblications Studios. All rights reserved.</span>
      <span className="footer-craft">Crafted with obsession.</span>
    </div>
  </footer>
);

export default Footer;
