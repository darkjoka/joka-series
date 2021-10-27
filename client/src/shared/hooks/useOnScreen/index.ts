import React from "react";
import { ObserverOptions } from "../../types/types";

export const useOnScreen = (options: ObserverOptions): [{ current: null | HTMLElement }, boolean] => {
  const ref: { current: null | HTMLElement } = React.useRef(null);
  const [onScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    }, options);

    const elem = ref.current;

    if (elem) {
      observer.observe(elem);
    }
    return () => {
      if (elem) {
        observer.unobserve(elem);
      }
    };
  }, [options]);
  return [ref, onScreen];
};
