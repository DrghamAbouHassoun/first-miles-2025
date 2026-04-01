import type { ImgHTMLAttributes } from "react";
import useInView from "../../hooks/useInView";

interface ImageScaleAnimationProps extends ImgHTMLAttributes<HTMLImageElement> {}

const ImageScaleAnimation = ({ ...props }: ImageScaleAnimationProps) => {
  const { ref, inView } = useInView<HTMLImageElement>();
  return (
    <img
      {...props}
      ref={ref}
      className={`animation-image-scale ${inView ? "active" : ""}`}
    />
  );
};

export default ImageScaleAnimation;
