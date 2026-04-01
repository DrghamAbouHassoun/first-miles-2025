import React from "react";
import useInView from "../../hooks/useInView";

interface SlideBottomAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: "50" | "100";
}

const SlideBottomAnimation = ({
  level = "50",
  ...props
}: SlideBottomAnimationProps) => {
  const { inView, ref } = useInView<HTMLDivElement>();
  return (
    <div
      {...props}
      ref={ref}
      className={`animation-slide-bottom-${level} ${inView ? "active" : ""} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default SlideBottomAnimation;
