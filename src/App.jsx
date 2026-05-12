import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Packages from "./pages/Packages.jsx";
import Contact from "./pages/Contact.jsx";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/home' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Portfolio', ariaLabel: 'View our work', link: '/portfolio' },
  { label: 'Packages', ariaLabel: 'View our packages', link: '/packages' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Instagram', link: '#' },
  { label: 'LinkedIn', link: '#' },
  { label: 'Dribbble', link: '#' }
];

const PageWrap = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    style={{ transform: "none" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<PageWrap><Home /></PageWrap>} />
        <Route path="/about" element={<PageWrap><About /></PageWrap>} />
        <Route path="/portfolio" element={<PageWrap><Portfolio /></PageWrap>} />
        <Route path="/packages" element={<PageWrap><Packages /></PageWrap>} />
        <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <main style={{ paddingTop: 0 }}>
      <AnimatedRoutes />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
