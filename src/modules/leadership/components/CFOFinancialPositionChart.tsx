import CountUpModule, { type CountUpProps } from "react-countup";
import type React from "react";
import useInView from "../../common/hooks/useInView";
import { useLocale } from "../../common/hooks/useLocale";

const CountUp = ((CountUpModule as any).default ??
  CountUpModule) as React.FC<CountUpProps>;

/* ── Data ──────────────────────────────────────────────────────── */
const ASSETS_DATA = [
  { year: 2021, current: 298.7, nonCurrent: 857.8, total: 1156.4 },
  { year: 2022, current: 415.1, nonCurrent: 2011.2, total: 2426.4 },
  { year: 2023, current: 379.7, nonCurrent: 2091.0, total: 2470.7 },
  { year: 2024, current: 403.8, nonCurrent: 2091.8, total: 2495.5 },
  { year: 2025, current: 338.5, nonCurrent: 2260.4, total: 2598.9 },
];

const LIABILITIES_DATA = [
  { year: 2021, current: 154.3, nonCurrent: 336.9, total: 491.2 },
  { year: 2022, current: 337.4, nonCurrent: 1138.0, total: 1675.4 },
  { year: 2023, current: 289.4, nonCurrent: 1289.2, total: 1578.6 },
  { year: 2024, current: 360.7, nonCurrent: 1189.8, total: 1550.5 },
  { year: 2025, current: 397.2, nonCurrent: 1130.5, total: 1527.6 },
];

/* ── Colours ───────────────────────────────────────────────────── */
const CURRENT_COLOR = "#9a9ea0";
const NON_CURRENT_COLOR = "#fcb44a";
const TOTAL_COLOR = "#162f29";

/* ── Chart constants ───────────────────────────────────────────── */
const CHART_HEIGHT = 240;
const Y_AXIS_WIDTH = 38;

const ASSETS_Y_MAX = 3000;
const ASSETS_Y_TICKS = [3000, 2500, 2000, 1500, 1000, 500, 0];

const LIAB_Y_MAX = 2000;
const LIAB_Y_TICKS = [2000, 1500, 1000, 500, 0];

/* ── Labels interface ──────────────────────────────────────────── */
export interface CFOFPChartLabels {
  financialPositionTitle: string;
  assetsTitle: string;
  liabilitiesTitle: string;
  currentAssets: string;
  nonCurrentAssets: string;
  totalAssets: string;
  currentLiabilities: string;
  nonCurrentLiabilities: string;
  totalLiabilities: string;
  financialUnit: string;
}

/* ── Single animated bar ───────────────────────────────────────── */
const Bar = ({
  value,
  color,
  yMax,
  inView,
  delay,
}: {
  value: number;
  color: string;
  yMax: number;
  inView: boolean;
  delay: string;
}) => (
  <div
    className="flex-1 relative flex items-start justify-center max-w-6"
    style={{
      height: inView ? `${(value / yMax) * 100}%` : "0%",
      backgroundColor: color,
      transition: `height 0.7s ease-out ${delay}`,
      minWidth: 0,
    }}
  >
    <span
      className="text-[8px] font-bold pb-1 select-none"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        color: color === TOTAL_COLOR ? "#fff" : "#162f29",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.3s ease-out ${delay}`,
      }}
    >
      {inView && (
        <div
          className={
            color === CURRENT_COLOR ? "translate-y-[calc(100%+8px)]" : ""
          }
        >
          <CountUp end={value} decimals={1} duration={1.5} />
        </div>
      )}
    </span>
  </div>
);

/* ── Generic grouped-bar chart ─────────────────────────────────── */
const GroupedBarChart = ({
  data,
  yMax,
  yTicks,
  title,
  legend,
  inView,
  unit,
  isRTL = false,
}: {
  data: typeof ASSETS_DATA;
  yMax: number;
  yTicks: number[];
  title: string;
  unit: string;
  legend: { color: string; label: string }[];
  inView: boolean;
  isRTL?: boolean;
}) => {
  const { lang } = useLocale();
  const barData = isRTL ? [...data].reverse() : data;

  return (
    <div className="flex-1 min-w-0">
      <p className="font-bold text-sm text-fm-green mb-2" dir={lang === 'ar' ? "rtl" : "ltr"}>
        {title}{" "}
        <span
          className="font-normal text-sm text-fm-gray-300"
          dangerouslySetInnerHTML={{ __html: `(${unit})` }}
        ></span>
      </p>

      {/* Chart body */}
      <div
        className="flex"
        style={{
          height: CHART_HEIGHT,
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        {/* Y-axis */}
        <div
          className={`flex flex-col justify-between items-end shrink-0 text-[9px] text-fm-gray-300 ${isRTL ? "pl-1.5" : "pr-1.5"}`}
          style={{ width: Y_AXIS_WIDTH }}
        >
          {yTicks.map((t) => (
            <span key={t} className="leading-none">
              {t}
            </span>
          ))}
        </div>

        {/* Bars + grid */}
        <div className="flex-1 relative">
          {/* Grid lines */}
          {yTicks.map((t) => (
            <div
              key={t}
              className="absolute left-0 right-0"
              style={{
                top: `${((yMax - t) / yMax) * 100}%`,
                borderTop:
                  t === 0
                    ? "1px solid #9a9ea0"
                    : "1px solid rgba(154,158,160,0.25)",
              }}
            />
          ))}

          {/* Bar groups */}
          <div className="absolute inset-0 flex items-end gap-1 px-1">
            {barData.map((d, gi) => (
              <div
                key={d.year}
                className={`flex-1 flex items-end gap-px ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}
                style={{
                  height: "100%",
                  borderRight:
                    gi < barData.length - 1
                      ? "1px solid rgba(154,158,160,0.2)"
                      : "none",
                }}
              >
                <Bar
                  value={d.current}
                  color={CURRENT_COLOR}
                  yMax={yMax}
                  inView={inView}
                  delay="0s"
                />
                <Bar
                  value={d.nonCurrent}
                  color={NON_CURRENT_COLOR}
                  yMax={yMax}
                  inView={inView}
                  delay="0.1s"
                />
                <Bar
                  value={d.total}
                  color={TOTAL_COLOR}
                  yMax={yMax}
                  inView={inView}
                  delay="0.2s"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* X-axis year labels */}
      <div
        className="flex mt-1 w-full"
        style={{
          paddingLeft: isRTL ? 0 : Y_AXIS_WIDTH,
          paddingRight: isRTL ? Y_AXIS_WIDTH : 0,
        }}
      >
        {barData.map((d) => (
          <div
            key={d.year}
            className={` text-start flex justify-start flex-1 w-full `}
            dir="rtl"
          >
            <div className="w-full max-w-20 text-center ">
              <span className="text-[9px] sm:text-[10px] font-bold text-fm-green text-center">
                {`${d.year}`}
              </span>
              {lang === "ar" ? (
                <span className="text-[9px] sm:text-[10px] font-bold text-fm-green">
                  م
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        className="flex items-center justify-center gap-3 mt-3 flex-wrap"
        style={{
          // paddingLeft: isRTL ? 0 : Y_AXIS_WIDTH,
          // paddingRight: isRTL ? Y_AXIS_WIDTH : 0,
        }}
         dir={lang === 'ar' ? "rtl" : "ltr"}
      >
        {legend.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="text-[10px] font-medium text-fm-green">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Main component ────────────────────────────────────────────── */
const CFOFinancialPositionChart = ({
  labels,
  isRTL = false,
}: {
  labels: CFOFPChartLabels;
  isRTL?: boolean;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="bg-fm-yellow-100 p-4">
      <p className="font-bold text-base text-fm-green mb-1">
        {labels.financialPositionTitle}{" "}
      </p>

      <div ref={ref} dir="ltr" className="flex flex-col sm:flex-row gap-8 mt-4">
        <GroupedBarChart
          data={ASSETS_DATA}
          yMax={ASSETS_Y_MAX}
          yTicks={ASSETS_Y_TICKS}
          title={labels.assetsTitle}
          unit={labels.financialUnit}
          inView={inView}
          isRTL={isRTL}
          legend={[
            { color: CURRENT_COLOR, label: labels.currentAssets },
            { color: NON_CURRENT_COLOR, label: labels.nonCurrentAssets },
            { color: TOTAL_COLOR, label: labels.totalAssets },
          ]}
        />
        <GroupedBarChart
          data={LIABILITIES_DATA}
          yMax={LIAB_Y_MAX}
          yTicks={LIAB_Y_TICKS}
          title={labels.liabilitiesTitle}
          unit={labels.financialUnit}
          inView={inView}
          isRTL={isRTL}
          legend={[
            { color: CURRENT_COLOR, label: labels.currentLiabilities },
            { color: NON_CURRENT_COLOR, label: labels.nonCurrentLiabilities },
            { color: TOTAL_COLOR, label: labels.totalLiabilities },
          ]}
        />
      </div>
    </div>
  );
};

export default CFOFinancialPositionChart;
