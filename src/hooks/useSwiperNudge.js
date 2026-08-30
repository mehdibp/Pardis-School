import { useEffect, useRef } from "react";

/**
 * Once the swiper scrolls into view, nudges every slide (a quick left/right
 * wiggle) every 8s until the user actually interacts with it — same idea as
 * the old setupSwiperInteraction() in script.js, adapted to swiper/react.
 */
// --------------------------------------------------
export function useSwiperNudge(containerRef, cardSelector) {
  const swiperRef = useRef(null);
  const interactedRef = useRef(false);
  const nudgeIntervalRef = useRef(null);

  const onSwiper = (swiper) => {
    swiperRef.current = swiper;
    const markInteracted = () => {
      interactedRef.current = true;
    };
    setTimeout(() => swiper.on("slideChange", markInteracted), 2000);
    swiper.el.addEventListener("pointerdown", markInteracted);
    swiper.el.addEventListener("touchstart", markInteracted, { passive: true });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onKeydown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") interactedRef.current = true;
    };
    document.addEventListener("keydown", onKeydown);

    const triggerNudge = () => {
      if (interactedRef.current) return;
      container.querySelectorAll(cardSelector).forEach((card) => {
        card.classList.add("is-nudging");
        setTimeout(() => card.classList.remove("is-nudging"), 2000);
      });
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerNudge();
            nudgeIntervalRef.current = setInterval(triggerNudge, 8000);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(container);

    return () => {
      document.removeEventListener("keydown", onKeydown);
      observer.disconnect();
      clearInterval(nudgeIntervalRef.current);
    };
  }, [containerRef, cardSelector]);

  return { onSwiper };
}
