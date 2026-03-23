import { CIRCUMFERENCE, RADIUS } from "../data";


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
  let cumulative = 0;
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
      <div className="relative w-44 h-44 shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {segments.map((seg) => {
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
                strokeDasharray={`${dashLength} ${gap}`}
                strokeDashoffset={offset}
                transform="rotate(-90 60 60)"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
          <span className="text-[14px] italic font-bold text-fm-green leading-tight">
            {totalLabel} {year}
          </span>
          <span className="text-base font-bold text-fm-yellow leading-tight">
            {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-[10px] text-fm-gray-300 leading-tight">
            ({unit})
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-1.5 text-sm text-fm-green">
        {segments.map((seg) => (
          <li key={seg.key} className="flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="font-medium">
              <span className="font-medium">
                {seg.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>{" "}
              | {labels[seg.key]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonutChart