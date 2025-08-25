const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

export const fadeInUp = isMobile()
  ? {}
  : {
      hidden: { opacity: 0, y: 100 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, ease: "easeOut" },
      },
    };

export const fadeInDown = isMobile()
  ? {}
  : {
      hidden: { opacity: 0, y: -100 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, ease: "easeOut" },
      },
    };

export const leftVariant = isMobile()
  ? {}
  : {
      hidden: { opacity: 0, x: -100 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.25, ease: "easeOut" },
      },
    };

export const rightVariant = isMobile()
  ? {}
  : {
      hidden: { opacity: 0, x: 100 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.25, ease: "easeOut" },
      },
    };

export const fadeInPlace = isMobile()
  ? {}
  : {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 1.25, ease: "easeOut" },
      },
    };

export const zoomIn = isMobile()
  ? {}
  : {
      hidden: { opacity: 0, scaleY: 0.5 },
      show: {
        opacity: 1,
        scaleY: 1,
        transition: { duration: 1.25, ease: "easeOut" },
      },
    };

// Main Slider
export const variantsRight = {
  hidden: { opacity: 0, x: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      ease: "easeOut",
    },
  },
};

export const variantsLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      ease: "easeOut",
    },
  },
};

export const variantsCenter = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
export const variantsTop = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};
export const variantsDown = {
  hidden: { opacity: 0, y: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};
