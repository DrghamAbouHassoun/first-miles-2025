import { type HTMLAttributes } from "react";
import useInView from "../../hooks/useInView";

interface PopupAnimationProps extends HTMLAttributes<HTMLDivElement> {}

const PopupAnimation = ({ ...props }: PopupAnimationProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      {...props}
      ref={ref}
      className={`animation-popup ${inView ? "active" : ""} ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

export default PopupAnimation;
