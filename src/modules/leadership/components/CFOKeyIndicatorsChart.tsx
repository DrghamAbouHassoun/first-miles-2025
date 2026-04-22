import CountUpModule, { type CountUpProps } from "react-countup";
import type React from "react";
import useInView from "../../common/hooks/useInView";
import { LangContext } from "../../common/contexts/LangProvider";
import { useContext } from "react";

const CountUp = ((CountUpModule as any).default ??
  CountUpModule) as React.FC<CountUpProps>;

const CASH_DATA = [
  { year: 2021, value: 88.5 },
  { year: 2022, value: 261.8 },
  { year: 2023, value: 268.3 },
  { year: 2024, value: 338.8 },
  { year: 2025, value: 431.5 },
];

const LOANS_DATA = [
  { year: 2021, value: 120.7 },
  { year: 2022, value: 1207.5 },
  { year: 2023, value: 1262.5 },
  { year: 2024, value: 1288.3 },
  { year: 2025, value: 1388.8 },
];

// const CASH_COLOR = "#162f29";
const LOANS_COLOR = "#fcb44a";

interface CFOKeyIndicatorsLabels {
  keyIndicatorsTitle: string;
  cashTitle: string;
  loansTitle: string;
  financialUnit: string;
}

const HorizontalBarPanel = ({
  data,
  color,
  title,
  inView,
}: {
  data: typeof CASH_DATA;
  color: string;
  title: string;
  inView: boolean;
}) => {
  const { lang } = useContext(LangContext);
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div  className="flex-1 min-w-0" dir={lang === "ar" ? "rtl" : "ltr"}>
      <p className="font-bold text-fm-green mb-3">{title}</p>
      <div className="space-y-2">
        {data.map((d) => (
          <div key={d.year} className="flex items-center gap-0">
            <span className="font-bold text-fm-green w-12 shrink-0 text-start">
              {d.year}
            </span>
            <div className="flex-1 h-6 flex items-center ">
              <div
                className="h-full flex items-center justify-end overflow-hidden"
                style={{
                  width: inView ? `${(d.value / maxVal) * 100}%` : "0%",
                  backgroundColor: color,
                  transition: "width 0.7s ease-out 0s",
                  minWidth: 42,
                }}
              >
                <span className="text-[14px] font-bold text-white px-1 whitespace-nowrap select-none">
                  {inView && (
                    <CountUp end={d.value} decimals={1} duration={1.5} />
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CFOKeyIndicatorsChart = ({
  labels,
}: {
  labels: CFOKeyIndicatorsLabels;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="max-w-150 bg-fm-yellow-100 p-4">
      <p className="font-bold text-base text-fm-green mb-1">
        {labels.keyIndicatorsTitle}{" "}
        <span
          className="font-normal text-sm text-fm-gray-300"
          dangerouslySetInnerHTML={{ __html: `(${labels.financialUnit})` }}
        ></span>
      </p>
      <div ref={ref} dir="ltr" className="flex gap-6 mt-4">
        <HorizontalBarPanel
          data={CASH_DATA}
          color={LOANS_COLOR}
          title={labels.cashTitle}
          inView={inView}
        />
        <HorizontalBarPanel
          data={LOANS_DATA}
          color={LOANS_COLOR}
          title={labels.loansTitle}
          inView={inView}
        />
      </div>
    </div>
  );
};

export default CFOKeyIndicatorsChart;
