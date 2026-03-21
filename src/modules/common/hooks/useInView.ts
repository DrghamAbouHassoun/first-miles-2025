import { useState, useEffect, useRef, type RefObject } from "react";

type InViewMode = "partial" | "full";

interface UseInViewOptions {
  mode?: InViewMode;
  rootMargin?: string;
  root?: Element | null;
}

interface UseInViewResult<T extends Element> {
  ref: RefObject<T | null>;
  inView: boolean;
}

function useInView<T extends Element = Element>(
  options: UseInViewOptions = {}
): UseInViewResult<T> {
  const { mode = "partial", rootMargin = "0px", root = null } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const threshold = mode === "full" ? 1.0 : 0.0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [mode, rootMargin, root]);

  return { ref, inView };
}

export default useInView;
