import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineGalleryItemProps {
  image?: string;
  imageAlt?: string;
  offsetX: number;
  isRtl: boolean;
  children: React.ReactNode;
}

const TimelineGalleryItem = ({
  image,
  imageAlt,
  offsetX,
  isRtl,
  children,
}: TimelineGalleryItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sign = isRtl ? -1 : 1;
  const travelX = `${sign * offsetX}%`;
  const easingX = `${sign * offsetX * 0.35}%`;

  const clipInset = useTransform(
    scrollYProgress,
    [0, 0.22, 0.38, 0.62, 0.78, 1],
    [24, 24, 0, 0, 24, 24],
  );
  const clipPath = useTransform(clipInset, (v) => `inset(-1px ${v}%)`);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.65, 0.8, 1],
    [0.4, 0.4, 1, 1, 0.4, 0.4],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.38, 0.62, 0.78, 1],
    [0.96, 1, 1.08, 1.08, 1, 0.96],
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.22, 0.38, 0.62, 0.78, 1],
    [travelX, easingX, "0%", "0%", easingX, travelX],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [1.28, 1.15, 1.15, 1.28],
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    ["-6%", "0%", "0%", "6%"],
  );

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden will-change-transform w-[90%] md:w-[65%] max-w-200 lg:max-w-250 mx-auto my-20 max-md:max-w-85"
      style={{ clipPath, opacity, scale, x }}
    >
      <div className="px-2 md:px-6">{children}</div>
      {image && (
        <div className="relative w-full max-w-72 md:max-w-96 lg:max-w-110 aspect-video overflow-hidden mt-6 mx-4">
          <motion.img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 w-full h-full object-cover origin-center"
            style={{ scale: imageScale, y: imageY }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default TimelineGalleryItem;
