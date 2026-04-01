import React from "react";
import CountUpModule, { type CountUpProps } from "react-countup";
import useInView from "../../hooks/useInView";

// react-countup ships as CJS; Vite may expose the module object instead of the default export
const CountUp = ((CountUpModule as any).default ?? CountUpModule) as React.FC<CountUpProps>;

interface CounterAnimationProps extends CountUpProps {
  as?: keyof React.JSX.IntrinsicElements;
}

const CounterAnimation = ({ ...props }: CounterAnimationProps) => {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <div ref={ref as any}>
      {inView && <CountUp {...props} />}
    </div>
  );
};

export default CounterAnimation;
