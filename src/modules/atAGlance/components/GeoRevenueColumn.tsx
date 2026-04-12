import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import { GEO_BAR_MAX, type geoData } from "../data";
import useInView from "../../common/hooks/useInView";
import CounterAnimation from "../../common/components/animations/CounterAnimation";

const GeoRevenueColumn = ({
  year,
  regions,
  total,
  t,
}: {
  year: number;
  regions: typeof geoData.regions;
  total: number;
  t: (key: string) => string;
}) => {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="flex-1 min-w-0">
      <div className="w-fit mb-3">
        <p className="text-xl font-bold text-fm-yellow ">{year}</p>
        <div className="h-1 mt-1 mb-3 w-full bg-[linear-gradient(90deg,#fcb44a_0%,#FFF5CC_70%,#FFFFFF_100%)]" />
      </div>
      <div className="flex flex-col gap-2" dir="ltr" ref={ref}>
        {regions.map((region) => {
          const value = region.values[year as keyof typeof region.values];
          const pct = (value / GEO_BAR_MAX) * 100;
          return (
            <div
              key={region.key}
              className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}
            >
              <span
                className={`w-16 text-md font-bold text-fm-green shrink-0 ${isRtl ? "text-right" : "text-left"}`}
              >
                {t(`geoRevenue.${region.key}`)}
              </span>
              <div
                className={`flex-1 relative h-6 flex ${isRtl ? "flex-row-reverse" : ""}`}
              >
                <div
                  className="h-full"
                  style={{
                    width: inView ? `${pct}%` : "0%",
                    minWidth: inView ? "0.5rem" : "0",
                    backgroundColor: region.color,
                    transition: "width 0.7s ease-out, min-width 0.7s ease-out",
                  }}
                />
                <div
                  className="h-full flex-1"
                  style={{ backgroundColor: "#e0e2e3" }}
                />
              </div>
              <span
                className={`w-16 text-md font-bold text-fm-green shrink-0 flex gap-1 ${isRtl ? "text-left" : "text-right"}`}
              >
                <CounterAnimation as="span" end={value} decimals={2} separator="," duration={1.5} />
                {region.hasFootnote ? t("geoRevenue.jeddahMark") : ""}
              </span>
            </div>
          );
        })}
        <div
          className={`mt-2 pt-2 flex justify-between items-center ${isRtl ? "flex-row-reverse" : ""}`}
        >
          <span className="text-sm font-bold text-fm-yellow">
            {t("geoRevenue.total")}
          </span>
          <span className="text-sm font-bold text-fm-green">
            <CounterAnimation as="span" end={total} decimals={2} separator="," duration={1.5} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeoRevenueColumn;
