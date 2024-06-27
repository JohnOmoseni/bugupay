export function animateFn(variants: any, custom?: number) {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    transition: { duration: 0.75 },
    custom,
    variants,
  };
}

export const pageVariant = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  enter: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  exit: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
};

export const slideupVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export const slideinVariant = {
  initial: { opacity: 0, x: "100vw" },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.8,
      type: "spring",
      mass: 0.3,
      ease: "easeIn",
      when: "beforeChildren",
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const linksAni = {
  initial: { opacity: 0, x: 100 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};
