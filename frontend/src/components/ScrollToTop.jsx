import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const check = () => setVisible(window.scrollY > 700); window.addEventListener("scroll", check, { passive: true }); return () => window.removeEventListener("scroll", check); }, []);
  return <button type="button" className={`scroll-top ${visible ? "is-visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"><FiArrowUp /></button>;
};
export default ScrollToTop;
