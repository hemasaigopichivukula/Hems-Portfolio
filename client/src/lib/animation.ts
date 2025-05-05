// This type definition allows us to use the AOS library with TypeScript
declare global {
  interface Window {
    AOS: {
      init: (params?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        offset?: number;
        delay?: number;
        anchor?: string;
        anchorPlacement?: string;
      }) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
  }
}

export const refreshAnimations = () => {
  if (window.AOS) {
    window.AOS.refresh();
  }
};

export const ANIMATION_CONFIG = {
  duration: 800,
  once: false,
  mirror: true,
};

export default {};
