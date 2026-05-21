import CountUpModule, { type CountUpProps } from "react-countup";
import type React from "react";
import useInView from "../../common/hooks/useInView";
import { LangContext } from "../../common/contexts/LangProvider";
import { useContext } from "react";

const CountUp = ((CountUpModule as any).default ??
  CountUpModule) as React.FC<CountUpProps>;

const LE_DATA = [
  { year: 2021, liabilities: 491.2, equity: 655.2, total: 1156.4 },
  { year: 2022, liabilities: 1675.4, equity: 751.0, total: 2426.4 },
  { year: 2023, liabilities: 1578.6, equity: 892.1, total: 2470.7 },
  { year: 2024, liabilities: 1550.5, equity: 945.1, total: 2495.5 },
  { year: 2025, liabilities: 1527.6, equity: 1071.3, total: 2598.9 },
];

const MAX_TOTAL = Math.max(...LE_DATA.map((d) => d.total));

const LIAB_COLOR = "#162f29";
const EQUITY_COLOR = "#fcb44a";

interface CFOTotalLELabels {
  totalLETitle: string;
  totalLiabilities: string;
  totalEquity: string;
  financialUnit: string;
}

const CFOTotalLEChart = ({ labels }: { labels: CFOTotalLELabels }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { lang } = useContext(LangContext);

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-fm-yellow-100 p-4"
    >
      <p className="font-bold text-base text-fm-green mb-1">
        {labels.totalLETitle}{" "}
        <span
          className="font-normal text-sm text-fm-gray-300"
          dangerouslySetInnerHTML={{ __html: `(${labels.financialUnit})` }}
        ></span>
      </p>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-2 mb-4 flex-wrap">
        {[
          { color: LIAB_COLOR, label: labels.totalLiabilities },
          { color: EQUITY_COLOR, label: labels.totalEquity },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3.5 h-3.5 shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm font-medium text-fm-green">{label}</span>
          </div>
        ))}
      </div>

      {/* Stacked horizontal bars */}
      <div ref={ref} dir="ltr" className="space-y-2">
        {LE_DATA.map((d) => {
          const liabPct = (d.liabilities / d.total) * 100;
          const equityPct = (d.equity / d.total) * 100;
          const barWidthPct = (d.total / MAX_TOTAL) * 100;

          return (
            <div
              dir={lang === "ar" ? "rtl" : "ltr"}
              key={d.year}
              className="flex items-center gap-2"
            >
              {/* Year label */}
              <span className={` font-bold text-fm-green ${lang === "ar" ? "w-11" : "w-10"} shrink-0 text-right`}>
                {lang === "ar" ? `${d.year}م` : d.year}
              </span>

              {/* Bar container */}
              <div className="flex-1 h-7 flex items-center">
                <div
                  className={`h-full flex overflow-hidden ${lang === "ar" ? "pl-14" : "pr-14"}`}
                  style={{
                    width: inView ? `${barWidthPct}%` : "0%",
                    transition: "width 0.8s ease-out 0s",
                  }}
                >
                  {/* Liabilities segment */}
                  <div
                    className="h-full flex items-center justify-end overflow-hidden"
                    style={{
                      width: `${liabPct}%`,
                      backgroundColor: LIAB_COLOR,
                      minWidth: "50px",
                    }}
                  >
                    <span className="text-[14px] font-bold text-white px-1 whitespace-nowrap">
                      {inView && (
                        <CountUp
                          end={d.liabilities}
                          decimals={1}
                          duration={1.5}
                        />
                      )}
                    </span>
                  </div>
                  {/* Equity segment */}
                  <div
                    className="h-full flex items-center justify-end relative"
                    style={{
                      width: `${equityPct}%`,
                      backgroundColor: EQUITY_COLOR,
                      minWidth: "45px",
                    }}
                  >
                    <span className="text-[14px] font-bold text-white px-1 whitespace-nowrap">
                      {inView && (
                        <CountUp end={d.equity} decimals={1} duration={1.5} />
                      )}
                    </span>
                    <span
                      className={`text-[14px] font-bold text-black absolute ${lang === "ar" ? "-left-15" : "-right-15"} px-1 whitespace-nowrap`}
                    >
                      {inView && (
                        <CountUp end={d.total} decimals={1} duration={1.5} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CFOTotalLEChart;
