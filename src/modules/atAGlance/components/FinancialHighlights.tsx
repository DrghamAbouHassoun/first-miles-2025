import { useTranslation } from "../../common/hooks/useTranslation";

const BAR_MAX = 1400;

const revenueData = [
  { year: 2025, value: 1147.78, color: "#162f29" },
  { year: 2024, value: 1048.85, color: "#fcb44a" },
];

const productRevenueData = [
  {
    year: 2025,
    total: 1147.78,
    segments: [
      { key: "flour", value: 612.52, color: "#162f29" },
      { key: "feed", value: 389.19, color: "#fcb44a" },
      { key: "bran", value: 146.16, color: "#e0e2e3" },
    ],
  },
  {
    year: 2024,
    total: 1048.85,
    segments: [
      { key: "flour", value: 599.12, color: "#162f29" },
      { key: "feed", value: 311.9, color: "#fcb44a" },
      { key: "bran", value: 137.83, color: "#e0e2e3" },
    ],
  },
];

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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

const FinancialHighlights = () => {
  const { t } = useTranslation("at-a-glance");

  const segmentLabels = {
    flour: t("financialHighlights.flour"),
    feed: t("financialHighlights.feed"),
    bran: t("financialHighlights.bran"),
  };

  return (
    <section className="py-12 text-fm-green bg-fm-yellow-100 px-4 md:px-16">
      <h2 className="text-3xl font-bold mb-8">
        {t("financialHighlights.title")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Revenue Highlights */}
        <div className="lg:rows-4">
          <h3 className="text-2xl font-bold mb-2">
            {t("financialHighlights.revenueHighlights.title")}
          </h3>
          <div className="pt-4">
            {/* Growth row */}
            <div className="flex items-start justify-between mb-6 pb-2 border-b border-fm-yellow ">
              <div>
                <p className="font-bold text-sm">
                  {t("financialHighlights.revenueHighlights.label")}
                </p>
                <p className="text-xs text-fm-gray-300">
                  ({t("financialHighlights.revenueHighlights.unit")})
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-fm-green">+9.4%</span>
                <span
                  className="w-0 h-0 inline-block"
                  style={{
                    borderLeft: "20px solid transparent",
                    borderRight: "20px solid transparent",
                    borderBottom: "36px solid #fcb44a",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Bars */}
            <div className="flex flex-col gap-3">
              {revenueData.map(({ year, value, color }) => {
                const pct = (value / BAR_MAX) * 100;
                return (
                  <div key={year} className="flex items-center gap-3">
                    <span className="w-10 font-bold text-sm shrink-0">{year}</span>
                    <div className="flex-1 flex overflow-hidden h-7">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                      <div
                        className="h-full flex-1"
                        style={{ backgroundColor: "#e0e2e3" }}
                      />
                    </div>
                    <span className="w-20 text-right font-bold text-sm shrink-0">
                      {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Revenue by Product Type */}
        <div className="lg:rows-6">
          <h3 className="text-2xl font-bold mb-4">
            {t("financialHighlights.revenueByProduct.title")}
          </h3>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 items-start">
            {productRevenueData.map((d) => (
              <DonutChart
                key={d.year}
                year={d.year}
                total={d.total}
                segments={d.segments}
                totalLabel={t("financialHighlights.revenueByProduct.total")}
                unit={t("financialHighlights.revenueHighlights.unit")}
                labels={segmentLabels}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialHighlights;
