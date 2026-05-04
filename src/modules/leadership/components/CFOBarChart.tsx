import CountUpModule, { type CountUpProps } from "react-countup";
import type React from "react";
import useInView from "../../common/hooks/useInView";

const CountUp = ((CountUpModule as any).default ??
  CountUpModule) as React.FC<CountUpProps>;

const Y_MAX = 700;
const Y_TICKS = [700, 600, 500, 400, 300, 200, 100, 0];
const CHART_HEIGHT = 280;
const Y_AXIS_WIDTH = 36;

const BAR_DATA = [
  { year: 2021, flour: 494.9, feed: 222.5, bran: 83.7 },
  { year: 2022, flour: 507.4, feed: 273.7, bran: 132.6 },
  { year: 2023, flour: 552.9, feed: 271.1, bran: 140.3 },
  { year: 2024, flour: 599.1, feed: 311.1, bran: 137.8 },
  { year: 2025, flour: 651.8, feed: 351.7, bran: 142.9 },
];

const FLOUR_COLOR = "#162f29";
const FEED_COLOR = "#fcb44a";
const BRAN_COLOR = "#9a9ea0";

interface CFOBarChartLabels {
  title: string;
  unit: string;
  flour: string;
  feed: string;
  bran: string;
}

const Bar = ({
  value,
  color,
  inView,
  delay,
}: {
  value: number;
  color: string;
  inView: boolean;
  delay: string;
}) => (
  <div
    className="flex-1 relative overflow-hidden flex items-start justify-center max-w-6"
    style={{
      height: inView ? `${(value / Y_MAX) * 100}%` : "0%",
      backgroundColor: color,
      transition: `height 0.7s ease-out ${delay}`,
      minWidth: 0,
    }}
  >
    <span
      className="text-[9px] font-bold text-white pb-1.5 select-none"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.3s ease-out ${delay}`,
      }}
    >
      {inView && <CountUp end={value} decimals={1} duration={1.5} />}
    </span>
  </div>
);

const CFOBarChart = ({ labels }: { labels: CFOBarChartLabels }) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="max-w-110 bg-fm-yellow-100 p-1">
      {/* Title */}
      <p className="font-bold text-base text-fm-green mb-4">
        {labels.title}{" "}
        (<span
          className="font-normal text-sm text-fm-gray-300"
          dangerouslySetInnerHTML={{ __html: labels.unit }}
        ></span>)
      </p>
      {/* <div className="h-1 mt-1 mb-5 w-full bg-[linear-gradient(90deg,#fcb44a_0%,#FFF5CC_20%,#FFFFFF_100%)]" /> */}

      <div dir="ltr">
        {/* Chart body */}
        <div className="flex" style={{ height: CHART_HEIGHT }}>
          {/* Y-axis labels */}
          <div
            className="flex flex-col justify-between items-end pr-1.5 shrink-0 text-[10px] text-fm-gray-300"
            style={{ width: Y_AXIS_WIDTH }}
          >
            {Y_TICKS.map((t) => (
              <span key={t} className="leading-none">
                {t}
              </span>
            ))}
          </div>

          {/* Bars + grid area */}
          <div className="flex-1 relative" ref={ref}>
            {/* Horizontal grid lines */}
            {Y_TICKS.map((t) => (
              <div
                key={t}
                className="absolute left-0 right-0"
                style={{
                  top: `${((Y_MAX - t) / Y_MAX) * 100}%`,
                  borderTop:
                    t === 0
                      ? "1px solid #9a9ea0"
                      : "1px solid rgba(154,158,160,0.25)",
                }}
              />
            ))}

            {/* Bar groups */}
            <div className="absolute inset-0 flex items-end gap-1 px-1">
              {BAR_DATA.map((d, gi) => (
                <div
                  key={d.year}
                  className="flex-1 flex items-end gap-px"
                  style={{
                    height: "100%",
                    borderRight:
                      gi < BAR_DATA.length - 1
                        ? "1px solid rgba(154,158,160,0.2)"
                        : "none",
                    paddingBottom: 0,
                  }}
                >
                  <Bar
                    value={d.flour}
                    color={FLOUR_COLOR}
                    inView={inView}
                    delay="0s"
                  />
                  <Bar
                    value={d.feed}
                    color={FEED_COLOR}
                    inView={inView}
                    delay="0.1s"
                  />
                  <Bar
                    value={d.bran}
                    color={BRAN_COLOR}
                    inView={inView}
                    delay="0.2s"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* X-axis year labels */}
        <div className="flex mt-1" style={{ paddingLeft: Y_AXIS_WIDTH }}>
          {BAR_DATA.map((d) => (
            <div key={d.year} className="flex-1 text-center">
              <span className="text-[10px] sm:text-xs font-bold text-fm-green">
                {d.year}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className="flex items-center justify-center gap-5 mt-4 flex-wrap"
          style={{ paddingLeft: Y_AXIS_WIDTH }}
        >
          {[
            { color: FLOUR_COLOR, label: labels.flour },
            { color: FEED_COLOR, label: labels.feed },
            { color: BRAN_COLOR, label: labels.bran },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span
                className="inline-block w-3.5 h-3.5 shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs font-medium text-fm-green">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CFOBarChart;
