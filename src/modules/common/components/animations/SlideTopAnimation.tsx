import type { HTMLAttributes } from "react";
import useInView from "../../hooks/useInView";

interface SlideTopAnimationProps extends HTMLAttributes<HTMLDivElement> {
  level?: "50" | "100";
}

const SlideTopAnimation = ({ level = "50", ...props }: SlideTopAnimationProps) => {
  const { inView, ref } = useInView<HTMLDivElement>();

  return (
    <div
      {...props}
      className={`animation-slide-top-${level} ${inView ? "active" : ""} ${props.className}`}
      ref={ref}
    >
      {props.children}
    </div>
  );
};

export default SlideTopAnimation;
