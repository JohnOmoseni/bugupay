"use client";

import React, { useRef } from "react";
import {
  animate,
  useInView,
  KeyframeOptions,
  useIsomorphicLayoutEffect,
} from "framer-motion";

type AnimatedCounterProps = {
  from: number;
  to: number;
  showDecimal?: boolean;
  animationProps?: KeyframeOptions;
};

function AnimatedCounter({
  from,
  to,
  showDecimal,
  animationProps,
}: AnimatedCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { amount: 0.1, once: true });

  useIsomorphicLayoutEffect(() => {
    const element = spanRef.current;

    if (!element) return;
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion").matches) {
      // disable the animation
      element.textContent = String(to);
      return;
    }

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationProps,
      onUpdate(value) {
        element.textContent = showDecimal ? value.toFixed(1) : value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [from, to, inView, spanRef]);

  return <span ref={spanRef} />;
}

export default AnimatedCounter;
