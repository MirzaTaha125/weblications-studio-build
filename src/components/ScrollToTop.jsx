import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Small timeout to ensure the scroll happens after the route change has been processed
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
