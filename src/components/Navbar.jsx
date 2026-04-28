import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

const Logo = () => (
  <Link to="/home" className="logo" aria-label="Weblications Studios">
    <span className="logo-main">Weblications</span>
    <span className="logo-dot" />
    <span className="logo-sub">Studios</span>
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Logo />
          <div className="nav-links">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`nav-link${pathname === l.to ? " active" : ""}`}>{l.label}</Link>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary btn-sm">Start a Project</Link>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`nav-link${pathname === l.to ? " active" : ""}`}>{l.label}</Link>
          ))}
          <Link to="/contact" className="btn btn-primary">Start a Project</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
