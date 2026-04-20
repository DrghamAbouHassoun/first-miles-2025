import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import CFOImage from "../../../assets/images/leadership-people/cfo.png";
import LeadershipHeader from "./LeadershipHeader";
import GroupOfSpikes from "./GroupOfSpikes";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import CFOBarChart from "./CFOBarChart";
import CFOFinancialPositionChart from "./CFOFinancialPositionChart";
import CFOTotalLEChart from "./CFOTotalLEChart";
import CFOKeyIndicatorsChart from "./CFOKeyIndicatorsChart";
import CFOQualitySection from "./CFOQualitySection";

const PL_YEARS: (number | string)[] = [2021, 2022, 2023, 2024, 2025, "YoY %"];
const PL_HIGHLIGHT_COL = 4; // 2025 column index
const PL_YOY_COL = 5; // YoY % column index

const PL_DATA = (lang: string) => {
  return ([
  {
    key: "revenue",
    values: ["801.0", "913.7", "964.3", "1,048.9", "1,146.4", lang === "en" ? "9.3%" : "%9.3"],
    bold: true,
  },
  {
    key: "costOfRevenue",
    values: ["(469.5)", "(515.7)", "(551.1)", "(591.8)", "(684.2)", lang === "en" ? "12.2%" : "%12.2"],
    bold: false,
  },
  {
    key: "grossProfit",
    values: ["331.5", "397.9", "413.1", "457.1", "462.2", lang === "en" ? "5.5%" : "%5.5"],
    bold: true,
  },
  {
    key: "generalAdminExpenses",
    values: ["(33.9)", "(102.3)", "(78.1)", "(81.9)", "(75.0)", lang === "en" ? "8.4%" : "%8.4"],
    bold: false,
  },
  {
    key: "gaExpenses",
    values: ["(17.8)", "(39.3)", "(47.8)", "(55.6)", "(63.8)", lang === "en" ? "22.1%" : "%22.1"],
    bold: false,
  },
  {
    key: "operatingProfit",
    values: ["213.3", "255.6", "287.0", "318.5", "339.7", lang === "en" ? "6.7%" : "%6.7"],
    bold: true,
  },
  {
    key: "ebitda",
    values: ["—", "—", "—", "—", "402.2", lang === "en" ? "7.5%" : "%7.5"],
    bold: false,
  },
  {
    key: "netProfit",
    values: ["198.5", "217.5", "220.2", "250.9", "277.4", lang === "en" ? "10.6%" : "%10.6"],
    bold: false,
  },
]) as const; };

const CFOTab = () => {
  const { lang, translations } = useContext(LangContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (translations as any)[lang]?.leadership?.cfo;

  if (!data) return null;

  const sections: { heading: string; paragraphs: string[] }[] =
    data.sections ?? [];

  const table = data.table ?? {};
  const charts = data.charts ?? {};

  const tableRows = PL_DATA(lang).map((row) => ({
    ...row,
    label: table[row.key] ?? row.key,
  }));

  return (
    <div className="pt-64">
      <Container>
        <LeadershipHeader
          imageUrl={CFOImage}
          imageScale={1.6}
          imageTranslateX={27}
          imageTranslateY={-50}
          title={data.name}
          subtitle={data.title}
          quotation={data.quote}
        />
      </Container>

      <div className="relative overflow-hidden">
        <Container>
          <div className="py-16">
            {/* Tagline */}
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-3xl md:text-4xl leading-snug mb-10 whitespace-pre-line">
                {data.tagline}
              </h2>
            </SlideTopAnimation>

            {/* Opening bold paragraph */}
            <SlideTopAnimation>
              <p
                className="font-bold text-base leading-relaxed mb-10 max-w-4xl"
                dangerouslySetInnerHTML={{ __html: data.opening }}
              ></p>
            </SlideTopAnimation>

            {/* Section 0 – Financial performance and profitability */}
            {sections[0] && (
              <div className="max-w-4xl mb-10">
                <SlideTopAnimation>
                  <h3 className="font-bold text-base mb-3">
                    {sections[0].heading}
                  </h3>
                </SlideTopAnimation>
                {sections[0].paragraphs.map((p: string, j: number) => (
                  <SlideTopAnimation key={j}>
                    <p
                      className="text-sm leading-relaxed mb-3 last:mb-0"
                      dangerouslySetInnerHTML={{ __html: p }}
                    ></p>
                  </SlideTopAnimation>
                ))}
              </div>
            )}

            {/* Statement of Profit or Loss table */}
            <div className="mb-10">
              <h3 className="font-bold text-base mb-1">{table.title}</h3>
              <p
                className="text-xs text-fm-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: `${table.unit}` }}
              ></p>
              <div className="overflow-x-auto">
                <table
                  className="w-full min-w-150 text-sm border-collapse"
                  dir={lang === "ar" ? "rtl" : "ltr"}
                >
                  <thead>
                    <tr className="border-b-2 border-fm-green">
                      <th
                        className={`${lang === "ar" ? "text-right pl-4" : "text-left pr-4"} py-2 font-bold text-fm-green w-56`}
                        dangerouslySetInnerHTML={{
                          __html: table.unit ?? "SAR",
                        }}
                      ></th>
                      {PL_YEARS.map((y, yi) => (
                        <th
                          key={String(y)}
                          className={`text-right py-2 px-3 font-bold whitespace-nowrap ${
                            yi === PL_YOY_COL
                              ? "text-fm-gray-300"
                              : yi === PL_HIGHLIGHT_COL
                                ? "bg-fm-yellow-100 text-fm-green"
                                : "text-fm-green"
                          }`}
                        >
                          {y}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.key} className="border-b border-fm-green/20">
                        <td
                          className={`py-2 ${lang === "ar" ? "pl-4 text-right" : "pr-4 text-left"} ${row.bold ? "font-bold text-fm-green" : "text-fm-green/80"}`}
                        >
                          {row.label}
                        </td>
                        {row.values.map((val, vi) => (
                          <td
                            key={vi}
                            className={`py-2 px-3 text-right whitespace-nowrap ${
                              vi === PL_YOY_COL
                                ? "text-fm-gray-300 font-medium"
                                : vi === PL_HIGHLIGHT_COL
                                  ? "bg-fm-yellow-100 font-bold text-fm-green"
                                  : row.bold
                                    ? "font-bold text-fm-green"
                                    : "text-fm-green/80"
                            }`}
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bar Chart – Revenue */}
            <div className="mb-14">
              <CFOBarChart
                labels={{
                  title: charts.revenue ?? "Revenues",
                  unit: charts.unit ?? "<i class='riyal-icon'></i> million",
                  flour: charts.flour ?? "Flour",
                  feed: charts.feed ?? "Feed",
                  bran: charts.bran ?? "Bran",
                }}
              />
            </div>

            {/* Sections 1 & 2 – Revenue drivers + Cash flow */}
            <div className="max-w-4xl space-y-8 mb-14">
              {sections
                .slice(1, 3)
                .map(
                  (
                    section: { heading: string; paragraphs: string[] },
                    i: number,
                  ) => (
                    <div key={i + 1}>
                      <SlideTopAnimation>
                        <h3 className="font-bold text-base mb-3">
                          {section.heading}
                        </h3>
                      </SlideTopAnimation>
                      {section.paragraphs.map((p: string, j: number) => (
                        <SlideTopAnimation key={j}>
                          <p
                            className="text-sm leading-relaxed mb-3 last:mb-0"
                            dangerouslySetInnerHTML={{ __html: p }}
                          ></p>
                        </SlideTopAnimation>
                      ))}
                    </div>
                  ),
                )}
            </div>

            {/* Statement of Financial Position – Assets & Liabilities charts */}
            <div className="mb-8">
              <CFOFinancialPositionChart
                labels={{
                  financialPositionTitle:
                    charts.financialPositionTitle ??
                    "Statement of Financial Position",
                  assetsTitle: charts.assetsTitle ?? "Assets",
                  currentAssets: charts.currentAssets ?? "Current Assets",
                  nonCurrentAssets:
                    charts.nonCurrentAssets ?? "Non-Current Assets",
                  totalAssets: charts.totalAssets ?? "Total Assets",
                  liabilitiesTitle: charts.liabilitiesTitle ?? "Liabilities",
                  currentLiabilities:
                    charts.currentLiabilities ?? "Current Liabilities",
                  nonCurrentLiabilities:
                    charts.nonCurrentLiabilities ?? "Non-Current Liabilities",
                  totalLiabilities:
                    charts.totalLiabilities ?? "Total Liabilities",
                  financialUnit: charts.financialUnit ?? "SAR mn",
                }}
              />
            </div>

            {/* Total Liabilities and Equity chart */}
            <div className="mb-8">
              <CFOTotalLEChart
                labels={{
                  totalLETitle:
                    charts.totalLETitle ?? "Total Liabilities and Equity",
                  totalLiabilities:
                    charts.totalLiabilities ?? "Total Liabilities",
                  totalEquity: charts.totalEquity ?? "Total Equity",
                  financialUnit: charts.financialUnit ?? "SAR mn",
                }}
              />
            </div>

            {/* Key Balance Sheet Indicators chart */}
            <div className="mb-14">
              <CFOKeyIndicatorsChart
                labels={{
                  keyIndicatorsTitle:
                    charts.keyIndicatorsTitle ?? "Key Balance Sheet Indicators",
                  cashTitle: charts.cashTitle ?? "Cash & Cash Equivalents",
                  loansTitle: charts.loansTitle ?? "Total Loans",
                  financialUnit: charts.financialUnit ?? "SAR mn",
                }}
              />
            </div>

            {/* Sections 3–6 – Capital allocation, Shareholder returns, etc. */}
            <div className="max-w-4xl space-y-8 mb-14">
              {sections
                .slice(3)
                .map(
                  (
                    section: { heading: string; paragraphs: string[] },
                    i: number,
                  ) =>
                    section.paragraphs.length > 0 ? (
                      <div key={i + 3}>
                        <SlideTopAnimation>
                          <h3 className="font-bold text-base mb-3">
                            {section.heading}
                          </h3>
                        </SlideTopAnimation>
                        {section.paragraphs.map((p: string, j: number) => (
                          <SlideTopAnimation key={j}>
                            <p className="text-sm leading-relaxed mb-3 last:mb-0" dangerouslySetInnerHTML={{ __html: p }}>
                            </p>
                          </SlideTopAnimation>
                        ))}
                      </div>
                    ) : null,
                )}
            </div>

            {/* Closing tagline */}
            {data.closingTagline && (
              <SlideTopAnimation>
                <p
                  className={`font-bold text-xl md:text-2xl leading-snug text-fm-yellow max-w-3xl ${lang === "ar" ? "text-right" : ""}`}
                >
                  {data.closingTagline}
                </p>
              </SlideTopAnimation>
            )}
          </div>
        </Container>

        <div
          className={`absolute bottom-0 z-0 ${lang === "ar" ? "left-8" : "right-8"} pointer-events-none opacity-80`}
        >
          <GroupOfSpikes />
        </div>
      </div>

      {data.qualitySection && <CFOQualitySection data={data.qualitySection} />}
    </div>
  );
};

export default CFOTab;
