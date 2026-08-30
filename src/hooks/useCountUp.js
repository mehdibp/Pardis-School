import { useEffect, useState } from "react";


/**
 * Counts a number up from 0 to `target` once `trigger` becomes true,
 * formatted with Persian digits — same behaviour as the old
 * countUp()/animateStatsOnView() pair in script.js. The section itself
 * decides when `trigger` flips (see useInView), so every stat card in the
 * grid starts counting in sync.
 */
// --------------------------------------------------
export function useCountUp(target, trigger, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let raf;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return value.toLocaleString("fa-IR");
}
