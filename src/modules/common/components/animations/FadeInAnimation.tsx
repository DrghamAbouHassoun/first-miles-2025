import type { HTMLAttributes } from "react";
import useInView from "../../hooks/useInView";

interface FadeInAnimationProps extends HTMLAttributes<HTMLDivElement> {
}

const FadeInAnimation = ({ ...props }: FadeInAnimationProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...props}
      className={`animation-fade-in ${inView ? "active" : ""} ${props.className || ""}`}
    />
  );
};

export default FadeInAnimation;