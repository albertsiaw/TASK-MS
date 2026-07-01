import { useEffect, useRef } from "react";

export function useScrollReveal(selector: string) {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!rootRef.current) return;
    const targets = rootRef.current.querySelectorAll(selector);
    targets.forEach((el, i) => {
      el.classList.add("cdc-reveal");
      (el as HTMLElement).style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    });
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("cdc-in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      targets.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      targets.forEach((el) => el.classList.add("cdc-in-view"));
    }
  }, [selector]);
  return rootRef;
}
