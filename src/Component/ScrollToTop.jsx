import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn bg-green dark:text-black cursor-pointer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        borderRadius: "80px",
        padding: "2px 5px",
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
