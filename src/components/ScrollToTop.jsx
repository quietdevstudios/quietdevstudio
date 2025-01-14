import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Access the current pathname

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run when the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
