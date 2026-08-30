import { useEffect, useRef, useState } from "react";

/**
 * Ports the original script.js navbar behaviour:
 *  - adds an "is-scrolled" state once the page scrolls past 50px
 *    (capsule nav becomes a full-width bar)
 *  - detects which section/header/footer currently sits behind the navbar
 *    and switches to a light-on-white variant when that section declares
 *    data-theme="light"
 */
// --------------------------------------------------
export function useNavbarTheme() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const detectTheme = () => {
      const nav = navRef.current;
      if (!nav) return;
      const rect = nav.getBoundingClientRect();
      const x = rect.left + Math.min(20, rect.width / 2);
      const y = rect.top + rect.height / 2;
      const elems = document.elementsFromPoint(x, y);

      const target = elems.find((el) => el !== nav && el.closest?.("section, header, footer"));
      const section = target?.closest("section, header, footer");
      if (section) setLight(section.dataset?.theme === "light");
    };

    detectTheme();
    window.addEventListener("resize", detectTheme);
    window.addEventListener("scroll", detectTheme, { passive: true });

    let observer;
    if (navRef.current) {
      observer = new MutationObserver(detectTheme);
      observer.observe(navRef.current, { attributes: true, attributeFilter: ["class", "style"] });
    }

    return () => {
      window.removeEventListener("resize", detectTheme);
      window.removeEventListener("scroll", detectTheme);
      observer?.disconnect();
    };
  }, [scrolled]);

  return { navRef, scrolled, light };
}
