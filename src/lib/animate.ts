export const tabContentVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export const animateMenu = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
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
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};
