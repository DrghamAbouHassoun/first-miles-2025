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
  const max = Math.max(...rows.map((r) => r.value));
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="font-bold text-xl text-fm-green">{t(`profitCharts.${titleKey}`)}</p>
        <p className="text-md font-thin text-fm-gray-300">({unit})</p>
        <div className="h-1 mt-1 mb-3 w-full bg-[linear-gradient(90deg,#fcb44a_0%,#FFF5CC_20%,#FFFFFF_100%)]"/>
      </div>
      <div className="flex flex-col gap-2" dir="ltr" ref={ref}>
        {rows.map(({ year, value, color, textColor }) => {
          const pct = (value / max) * 82;
          return (
            <div key={year} className="flex items-center gap-2">
              <span className="w-10 text-md font-thin text-fm-gray-2f00 shrink-0 text-left">{year}</span>
              <div className="flex-1 relative h-7 flex">
                <div
                  className="h-full flex items-center justify-end pr-2 relative"
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
                    <CounterAnimation as="span" end={value} decimals={2} separator="," duration={1.5} />
                  </span>
                </div>
                <div className="h-full flex-1" style={{ backgroundColor: "#e0e2e3" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfitBarGroup;
