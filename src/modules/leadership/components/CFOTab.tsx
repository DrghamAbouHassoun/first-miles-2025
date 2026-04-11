import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import CFOImage from "../../../assets/images/leadership-people/cfo.png";
import LeadershipHeader from "./LeadershipHeader";
import GroupOfSpikes from "./GroupOfSpikes";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import CFOBarChart from "./CFOBarChart";

const PL_YEARS = [2021, 2022, 2023, 2024, 2025, 2026];
const PL_HIGHLIGHT_COL = 4; // 2025 column index

const PL_DATA = [
  { key: "revenue",         values: ["801.01", "913.65", "964.26", "1,048.85", "XX", ""], bold: true  },
  { key: "costOfRevenue",   values: ["-469.54", "-515.72", "-551.12", "-591.77", "XX", ""], bold: false },
  { key: "grossProfit",     values: ["331.47", "397.93", "413.14", "457.09", "XX", ""], bold: true  },
  { key: "gaExpenses",      values: ["-17.76", "-39.30", "-47.76", "-55.57", "XX", ""], bold: false },
  { key: "operatingProfit", values: ["213.30", "255.61", "286.96", "318.48", "XX", ""], bold: true  },
  { key: "ebitda",          values: ["XX", "XX", "XX", "XX", "XX", ""], bold: false },
  { key: "netProfit",       values: ["198.48", "217.48", "220.21", "250.90", "XX", ""], bold: false },
] as const;


const CFOTab = () => {
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (translations as any)[lang]?.leadership?.cfo;

  if (!data) return null;

  const sections: { heading: string; paragraphs: string[] }[] =
    data.sections ?? [];

  const table = data.table ?? {};
  const charts = data.charts ?? {};

  const tableRows = PL_DATA.map((row) => ({
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

      <div className="relative  overflow-hidden">
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
              <p className="font-bold text-base leading-relaxed mb-10 max-w-4xl">
                {data.opening}
              </p>
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
                    <p className="text-sm leading-relaxed mb-3 last:mb-0">{p}</p>
                  </SlideTopAnimation>
                ))}
              </div>
            )}

            {/* Statement of Profit or Loss table */}
            <SlideTopAnimation>
              <div className="mb-10">
                <h3 className="font-bold text-base mb-1">{table.title}</h3>
                <p className="text-xs text-fm-gray-300 mb-4">({table.unit})</p>
                <div className="overflow-x-auto">
                  <table
                    className="w-full min-w-150 text-sm border-collapse"
                    dir="ltr"
                  >
                    <thead>
                      <tr className="border-b-2 border-fm-green">
                        <th className="text-left py-2 pr-4 font-bold text-fm-green w-56">
                          {table.unit ?? "SAR"}
                        </th>
                        {PL_YEARS.map((y, yi) => (
                          <th
                            key={y}
                            className={`text-right py-2 px-3 font-bold text-fm-green whitespace-nowrap ${yi === PL_HIGHLIGHT_COL ? "bg-fm-yellow-100" : ""}`}
                          >
                            {y}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((row) => (
                        <tr
                          key={row.key}
                          className="border-b border-fm-green/20"
                        >
                          <td
                            className={`py-2 pr-4 text-left ${row.bold ? "font-bold text-fm-green" : "text-fm-green/80"}`}
                          >
                            {row.label}
                          </td>
                          {row.values.map((val, vi) => (
                            <td
                              key={vi}
                              className={`py-2 px-3 text-right whitespace-nowrap ${
                                vi === PL_HIGHLIGHT_COL ? "bg-fm-yellow-100" : ""
                              } ${
                                vi === PL_HIGHLIGHT_COL && val === "XX"
                                  ? "font-bold text-fm-green"
                                  : val === "XX"
                                  ? "text-fm-gray-300"
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
            </SlideTopAnimation>

            {/* Bar Chart – Revenue */}
            <SlideTopAnimation>
              <div className="mb-14">
                <CFOBarChart
                  labels={{
                    title: charts.revenue ?? "Revenues",
                    unit: charts.unit ?? "SAR millions",
                    flour: charts.flour ?? "Flour",
                    feed: charts.feed ?? "Feed",
                    bran: charts.bran ?? "Bran",
                  }}
                />
              </div>
            </SlideTopAnimation>

            {/* Remaining sections (Revenue drivers, Cash flow, …) */}
            <div className="max-w-4xl space-y-8">
              {sections.slice(1).map(
                (section: { heading: string; paragraphs: string[] }, i: number) => (
                  <div key={i + 1}>
                    <SlideTopAnimation>
                      <h3 className="font-bold text-base mb-3">
                        {section.heading}
                      </h3>
                    </SlideTopAnimation>
                    {section.paragraphs.map((p: string, j: number) => (
                      <SlideTopAnimation key={j}>
                        <p className="text-sm leading-relaxed mb-3 last:mb-0">
                          {p}
                        </p>
                      </SlideTopAnimation>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </Container>

        <div
          className={`absolute bottom-0 z-0 ${isRtl ? "left-8" : "right-8"} pointer-events-none opacity-80`}
        >
          <GroupOfSpikes />
        </div>
      </div>
    </div>
  );
};

export default CFOTab;
