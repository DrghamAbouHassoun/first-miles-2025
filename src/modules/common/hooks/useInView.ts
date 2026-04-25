import { useState, useEffect, useRef, type RefObject } from "react";

interface UseInViewOptions {
  partial?: boolean;
  rootMargin?: string;
  root?: Element | null;
  triggerOnce?: boolean;
}

interface UseInViewResult<T extends Element> {
  ref: RefObject<T | null>;
  inView: boolean;
}

function useInView<T extends Element = Element>(
  options: UseInViewOptions = {}
): UseInViewResult<T> {
  const { partial = true, rootMargin = "0px", root = null, triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const threshold = partial ? 0.0 : 1.0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        } else {
          setInView(entry.isIntersecting);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [partial, rootMargin, root, triggerOnce]);

  return { ref, inView };
}

export default useInView;
