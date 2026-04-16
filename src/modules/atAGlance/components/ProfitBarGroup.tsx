import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import useInView from "../../common/hooks/useInView";
import CounterAnimation from "../../common/components/animations/CounterAnimation";

const ProfitBarGroup = ({
  titleKey,
  rows,
  unit,
  t,
}: {
  titleKey: string;
  rows: { year: number; value: number; color: string; textColor: string }[];
  unit: string;
  t: (key: string) => string;
}) => {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";
  const max = Math.max(...rows.map((r) => r.value));
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="font-bold text-xl text-fm-green">
          {t(`profitCharts.${titleKey}`)}
        </p>
        <p
          className="text-md font-thin text-fm-gray-300"
          dangerouslySetInnerHTML={{ __html: `(${unit})` }}
        ></p>
        <div className={`h-1 mt-1 mb-3 w-full bg-[linear-gradient(90deg,#fcb44a_0%,#FFF5CC_20%,#FFFFFF_100%)] ${lang === "ar" ? "rotate-y-180" : ""}`} />
      </div>
      <div className="flex flex-col gap-2" dir="ltr" ref={ref}>
        {rows.map(({ year, value, color, textColor }) => {
          const pct = (value / max) * 82;
          return (
            <div
              key={year}
              className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}
            >
              <span
                className={`w-10 text-md font-thin text-fm-gray-2f00 shrink-0 ${isRtl ? "text-right" : "text-left"}`}
              >
                {year}
              </span>
              <div
                className={`flex-1 relative h-7 flex ${isRtl ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`h-full flex items-center relative ${isRtl ? "justify-start pl-2" : "justify-end pr-2"}`}
                  style={{
                    width: inView ? `${pct}%` : "0%",
                    minWidth: inView ? "3rem" : "0",
                    backgroundColor: color,
                    transition: "width 0.7s ease-out, min-width 0.7s ease-out",
                  }}
                >
                  <span
                    className="text-xs font-bold whitespace-nowrap"
                    style={{ color: textColor }}
                  >
                    <CounterAnimation
                      as="span"
                      end={value}
                      decimals={2}
                      separator=","
                      duration={1.5}
                    />
                  </span>
                </div>
                <div
                  className="h-full flex-1"
                  style={{ backgroundColor: "#e0e2e3" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfitBarGroup;
