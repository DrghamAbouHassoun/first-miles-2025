import { useInView } from "framer-motion";
import { useRef } from "react";
import TimelineSvg from "../../../../assets/vectors/coo/timeline-ar.svg?react";

const TimeLineDesktopAr = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className={`w-full h-fit transition-opacity duration-700 ${isInView ? "opacity-100 tl-in-view" : "opacity-0"}`}
    >
      <TimelineSvg className="w-full" style={{ height: "auto" }} />
    </div>
  );
};

export default TimeLineDesktopAr;
