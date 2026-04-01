import type { HTMLAttributes } from "react";
import useInView from "../../hooks/useInView";

interface SlideAsideAnimationProps extends HTMLAttributes<HTMLDivElement> {
  side: "left" | "right";
  level: "50" | "100";
}

const SlideAsideAnimation = ({ side, level, ...props }: SlideAsideAnimationProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const animationClass =
    side === "left" ? `animation-slide-left-${level}` : `animation-slide-right-${level}`;

  return (
    <div
      ref={ref}
      {...props}
      className={`${animationClass} ${inView ? "active" : ""} ${props.className || ""}`}
    />
  );
};

export default SlideAsideAnimation;
