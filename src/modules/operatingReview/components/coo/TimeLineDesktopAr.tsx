import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TimelineSvg from "../../../../assets/vectors/coo/timeline-ar.svg?react";

const TimeLineDesktopAr = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="w-full h-fit"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={isInView ? { clipPath: "inset(0 0 0 0%)" } : {}}
        transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <TimelineSvg className="w-full" style={{ height: 'auto' }} />
      </motion.div>
    </motion.div>
  );
};

export default TimeLineDesktopAr;
