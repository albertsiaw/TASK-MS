import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const smoothProgress = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
    resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const y = useTransform(smoothProgress, (value) => `-${value}px`);

  return (
    <>
      <div style={{ height: pageHeight }} />
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="w-full fixed top-0 left-0 flex flex-col will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
