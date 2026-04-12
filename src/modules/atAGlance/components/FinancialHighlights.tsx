import { useContext } from "react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import ProfitBarGroup from "./ProfitBarGroup";
import {
  BAR_MAX,
  geoData,
  productRevenueData,
  profitData,
  revenueData,
} from "../data";
import GeoRevenueColumn from "./GeoRevenueColumn";
import DonutChart from "./DonutChart";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import CounterAnimation from "../../common/components/animations/CounterAnimation";
import useInView from "../../common/hooks/useInView";

const FinancialHighlights = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useContext(LangContext);

  const segmentLabels = {
    flour: t("financialHighlights.flour"),
    feed: t("financialHighlights.feed"),
    bran: t("financialHighlights.bran"),
  };

  const profitUnit = t("financialHighlights.profitCharts.unit");
  const geoUnit = t("financialHighlights.geoRevenue.unit");

  const { ref: revenueBarsRef, inView: revenueBarsInView } =
    useInView<HTMLDivElement>();

  const tProfit = (key: string) => t(`financialHighlights.${key}`);
  const tGeo = (key: string) => t(`financialHighlights.${key}`);

  return (
    <section className="">
      <div className="py-12 text-fm-green bg-fm-yellow-100 px-4 md:px-16">
        <SlideTopAnimation level="50">
          <h2 className="text-3xl font-bold mb-8">
            {t("financialHighlights.title")}
          </h2>
        </SlideTopAnimation>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Revenue Highlights */}
          <div className="lg:flex-1">
            <SlideTopAnimation level="50">
              <h3 className="text-2xl font-bold mb-2">
                {t("financialHighlights.revenueHighlights.title")}
              </h3>
            </SlideTopAnimation>
            <div className="pt-4">
              {/* Growth row */}
              <div className="flex items-start justify-between mb-6 pb-2 border-b border-fm-yellow ">
                <div>
                  <p className="font-bold text-sm">
                    {t("financialHighlights.revenueHighlights.label")}
                  </p>
                  <p
                    className="text-xs text-fm-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: `(${t("financialHighlights.revenueHighlights.unit")})`,
                    }}
                  ></p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-5xl font-bold text-fm-green flex">
                    {lang === "ar" ? "+" : ""}

                    <CounterAnimation
                      as="span"
                      end={9.3}
                      decimals={1}
                      duration={2}
                      suffix={lang === "ar" ? "" : "%"}
                      prefix={lang === "ar" ? "%" : "+"}
                    />
                  </div>
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
              <div
                className="flex flex-col gap-3"
                dir="ltr"
                ref={revenueBarsRef}
              >
                {revenueData.map(({ year, value, color }) => {
                  const pct = (value / BAR_MAX) * 100;
                  const isRtl = lang === "ar";
                  return (
                    <div
                      key={year}
                      className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
                    >
                      <span
                        className={`w-10 font-bold text-sm shrink-0 ${isRtl ? "text-right" : "text-left"}`}
                      >
                        {year}
                      </span>
                      <div
                        className={`flex-1 flex overflow-hidden h-7 ${isRtl ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className="h-full transition-all duration-700"
                          style={{
                            width: revenueBarsInView ? `${pct}%` : "0%",
                            backgroundColor: color,
                          }}
                        />
                        <div
                          className="h-full flex-1"
                          style={{ backgroundColor: "#e0e2e3" }}
                        />
                      </div>
                      <span
                        className={`w-20 font-bold text-sm shrink-0 ${isRtl ? "text-left" : "text-right"}`}
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
                  );
                })}
              </div>
            </div>
          </div>

          {/* Revenue by Product Type */}
          <div className="lg:flex-1 lg:min-w-152.5">
            <h3 className="text-2xl font-bold mb-4">
              {t("financialHighlights.revenueByProduct.title")}
            </h3>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-6 items-start wl-full">
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
      </div>

      {/* Profit Charts */}
      <div className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {profitData.map((chart) => (
            <ProfitBarGroup
              key={chart.key}
              titleKey={chart.key}
              rows={chart.rows}
              unit={profitUnit}
              t={tProfit}
            />
          ))}
        </div>
      </div>

      {/* Revenue by Geographical Regions */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold mb-1">
          {t("financialHighlights.geoRevenue.title")}
        </h3>
        <p
          className="text-md font-thin text-fm-gray-300 mb-6"
          dangerouslySetInnerHTML={{ __html: `(${geoUnit})` }}
        ></p>
        <div
          className={`flex flex-col sm:flex-row gap-10 sm:gap-12 ${lang === "ar" ? "sm:flex-row-reverse" : ""}`}
        >
          {geoData.years.map((year) => (
            <GeoRevenueColumn
              key={year}
              year={year}
              regions={geoData.regions}
              total={geoData.totals[year as keyof typeof geoData.totals]}
              t={tGeo}
            />
          ))}
        </div>
        <p className="text-xs font-thin text-fm-gray-300 mt-4">
          {t("financialHighlights.geoRevenue.jeddahFootnote")}
        </p>
      </div>
    </section>
  );
};

export default FinancialHighlights;
