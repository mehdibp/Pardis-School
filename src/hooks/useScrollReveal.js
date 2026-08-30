import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view. Mirrors the old
 * `.hidden` / `.show` IntersectionObserver from script.js, but scoped
 * per-element so it works cleanly as a React hook.
 */
// --------------------------------------------------
export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
