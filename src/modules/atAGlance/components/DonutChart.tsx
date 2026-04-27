import { CIRCUMFERENCE, RADIUS } from "../data";
import useInView from "../../common/hooks/useInView";
import CounterAnimation from "../../common/components/animations/CounterAnimation";
import { useLocale } from "../../common/hooks/useLocale";


type Segment = { key: string; value: number; color: string };


const DonutChart = ({
  year,
  total,
  segments,
  totalLabel,
  unit,
  labels,
}: {
  year: number;
  total: number;
  segments: Segment[];
  totalLabel: string;
  unit: string;
  labels: Record<string, string>;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  let cumulative = 0;
  const { lang } = useLocale();

  return (
    <div className="flex flex-row lg:flex-col items-center gap-3 xl:flex-row sm:items-center sm:gap-2 w-full" ref={ref}>
      <div className="relative w-44 h-44 shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {segments.map((seg, i) => {
            const dashLength = (seg.value / total) * CIRCUMFERENCE;
            const gap = CIRCUMFERENCE - dashLength;
            const offset = -cumulative;
            cumulative += dashLength;
            return (
              <circle
                key={seg.key}
                cx="60"
                cy="60"
                r={RADIUS}
                fill="none"
                stroke={seg.color}
                strokeWidth="14"
                strokeDashoffset={offset}
                transform="rotate(-90 60 60)"
                style={{
                  strokeDasharray: inView ? `${dashLength} ${gap}` : `0 ${CIRCUMFERENCE}`,
                  transition: `stroke-dasharray 0.8s ease-out ${i * 0.15}s`,
                }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
          <span className="text-[14px] font-bold text-fm-green leading-tight">
            {totalLabel} {year}{lang === "ar" ? "م" : ""}
          </span>
          <span className="text-base font-bold text-fm-yellow leading-tight">
            <CounterAnimation as="span" end={total} decimals={1} separator="," duration={1.5} />
          </span>
          <span className="text-[10px] text-fm-gray-300 leading-tight" dangerouslySetInnerHTML={{ __html: `(${unit})`}}>
            
          </span>
        </div>
      </div>
      <ul className="flex flex-col h-44 flex-1 justify-end gap-1.5 text-xs text-fm-green">
        {segments.map((seg) => (
          <li key={seg.key} className="flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="font-medium flex gap-1">
              <span className="font-medium">
                <CounterAnimation as="span" end={seg.value} decimals={1} separator="," duration={1.5} />
              </span>{" "}
              | {labels[seg.key]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonutChart;
