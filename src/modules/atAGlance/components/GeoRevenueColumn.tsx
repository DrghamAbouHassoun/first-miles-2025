import { GEO_BAR_MAX, type geoData } from "../data";

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
  return (
    <div className="flex-1 min-w-0">
      <div className="w-fit mb-3">
        <p className="text-xl font-bold text-fm-yellow ">{year}</p>
        <div className="h-1 mt-1 mb-3 w-full bg-[linear-gradient(90deg,#fcb44a_0%,#FFF5CC_70%,#FFFFFF_100%)]" />
      </div>
      <div className="flex flex-col gap-2" dir="ltr">
        {regions.map((region) => {
          const value = region.values[year as keyof typeof region.values];
          const pct = (value / GEO_BAR_MAX) * 100;
          return (
            <div key={region.key} className="flex items-center gap-2">
              <span className="w-16 text-md font-bold text-fm-green shrink-0 text-left">
                {t(`geoRevenue.${region.key}`)}
              </span>
              <div className="flex-1 relative h-6 flex">
                <div
                  className="h-full"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: region.color,
                    minWidth: "0.5rem",
                  }}
                />
                <div
                  className="h-full flex-1"
                  style={{ backgroundColor: "#e0e2e3" }}
                />
              </div>
              <span className="w-16 text-md font-bold text-fm-green shrink-0 text-right">
                {value.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                {region.hasFootnote ? t("geoRevenue.jeddahMark") : ""}
              </span>
            </div>
          );
        })}
        <div className="mt-2 pt-2 flex justify-between items-center">
          <span className="text-sm font-bold text-fm-yellow">
            {t("geoRevenue.total")}
          </span>
          <span className="text-sm font-bold text-fm-green">
            {total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeoRevenueColumn;
