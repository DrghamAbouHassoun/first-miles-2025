import Container from "../common/components/Container/Container";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import FadeInAnimation from "../common/components/animations/FadeInAnimation";
import PopupAnimation from "../common/components/animations/PopupAnimation";
import { useTranslation } from "../common/hooks/useTranslation";
import { useLocale } from "../common/hooks/useLocale";
import useInView from "../common/hooks/useInView";
import SpikeArrow from "../../assets/vectors/coo/spike.svg";
import DiversityImg from "../../assets/images/sustainability/diversity.jpg";
import TraineesImg from "../../assets/images/sustainability/trainees.jpg";
import GraduatesImg from "../../assets/images/sustainability/graduates.jpg";
import VerticalSpikeYellow from "../../assets/icons/vertical-spike-yellow.svg";
import {
  GENDER_DATA,
  OHS_AR,
  OHS_EN,
  QUALITY_AR,
  QUALITY_EN,
  SAUDIZATION_AR,
  SAUDIZATION_AVG,
  SAUDIZATION_EN,
  TURNOVER_DATA,
} from "./data/social.data";

const BAKERY_IMAGES = [TraineesImg, GraduatesImg];

// ─── SectionHeader (mirrors Nature.tsx) ──────────────────────────────────────

const SectionHeader = ({
  title,
  maxWidth,
}: {
  title: string;
  maxWidth: string;
}) => {
  const { lang } = useLocale();
  const { ref, inView } = useInView<HTMLDivElement>({ triggerOnce: false });
  return (
    <div className="w-fit relative">
      <h3 className="text-fm-green font-bold text-lg w-fit">{title}</h3>
      <div
        ref={ref}
        className={`overflow-hidden w-full pt-1 max-w-${maxWidth} ${lang === "ar" ? "rotate-y-180" : ""}`}
      >
        <img
          src={SpikeArrow}
          alt=""
          className={`w-auto h-3 object-cover object-right animation-slide-right-100 ${inView && "active"}`}
        />
      </div>
    </div>
  );
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface BakeryCard {
  value: number;
  label: string;
}
interface Contribution {
  text: string;
  value: string | number;
  label: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const Social = () => {
  const { t, tRaw } = useTranslation("sustainability-review");
  const { lang } = useLocale();

  const isAr = lang === "ar";
  const saudization = isAr ? SAUDIZATION_AR : SAUDIZATION_EN;
  const ohsData = isAr ? OHS_AR : OHS_EN;
  const qualityData = isAr ? QUALITY_AR : QUALITY_EN;
  const qualityTitle = isAr
    ? "ضمان الجودة بالأرقام (في جميع المصانع)"
    : "Quality Assurance in Numbers (across all plants)";
  const saudizationAvgLabel = isAr
    ? "متوسط نسبة التوطين"
    : "Average Saudization Percentage";

  const bakeryCards =
    tRaw<BakeryCard[]>("social.communities.saudiBakery2025.cards") ?? [];
  const contributions =
    tRaw<Contribution[]>(
      "social.communities.communityContributions.contributions",
    ) ?? [];

  return (
    <div>
      {/* ── 1. Opening ────────────────────────────────────────────────────── */}
      <section className="py-16">
        <Container>
          <div className="max-w-220">
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-2xl mb-2">
                {t("social.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="font-bold mb-4 text-fm-yellow">
                {t("social.subtitle")}
              </p>
            </SlideTopAnimation>
            <FadeInAnimation>
              <p
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: t("social.desc") }}
              />
            </FadeInAnimation>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          {/* ── 2a. Talent Management intro ──────────────────────────────── */}
          <div className="mb-8 ">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "60" : "100"}
                title={t("social.talentManagement.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.p1"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.p2"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.p3"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 2b. Development Program dark block ───────────────────────── */}
          <FadeInAnimation className="bg-fm-green text-white px-8 py-8 mb-8">
            <SlideTopAnimation>
              <h2
                className="text-fm-yellow font-bold text-2xl mb-4"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "social.talentManagement.developementProgram.title",
                  ),
                }}
              />
            </SlideTopAnimation>
            <div className="w-full h-4 max-w-90 ">
              <img
                src={VerticalSpikeYellow}
                alt="First Mills"
                className="w-90 h-5 object-contain object-right"
              />
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex-1">
                <SlideTopAnimation>
                  <p className="font-semibold mb-4">
                    {t("social.talentManagement.developementProgram.subtitle")}
                  </p>
                </SlideTopAnimation>
              </div>
              <div className="flex-1">
                <SlideTopAnimation>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "social.talentManagement.developementProgram.desc",
                      ),
                    }}
                  />
                </SlideTopAnimation>
              </div>
            </div>
          </FadeInAnimation>

          {/* ── 2c. Workforce Development ────────────────────────────────── */}
          <div className="mb-8">
            <SlideTopAnimation>
              <h4 className="text-fm-yellow font-bold ">
                {t("social.talentManagement.workforce.title")}
              </h4>
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.workforce.p1"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.workforce.p2"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.workforce.p3"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 2d. Turnover & Retention ─────────────────────────────────── */}
          <div className="mb-8">
            <SlideTopAnimation>
              <h4 className="font-bold text-fm-yellow">
                {t("social.talentManagement.turnover.title")}
              </h4>
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("social.talentManagement.turnover.p1"),
                }}
              />

              {/* Horizontal bar chart */}
              <div className="max-w-140 pr-8">
                <p className="font-bold text-fm-green mb-4">
                  {t("social.talentManagement.turnover.chart.title")}
                </p>

                <div className="mb-6">
                  {TURNOVER_DATA.map((row) => (
                    <div key={row.year} className="flex w-full items-center">
                      <p className="font-bold text-sm p-2 w-14 shrink-0 text-center">
                        {row.year}
                      </p>
                      <div className="w-full border-l border-gray-300">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-5 relative">
                            <div
                              className="bg-fm-green h-5"
                              style={{ width: `${row.turnover + 5}%` }}
                            />
                            <span
                              className="text-xs font-bold w-12 shrink-0 absolute top-0.5 text-gray-600"
                              style={{ left: `${row.turnover + 6}%` }}
                            >
                              {row.turnover}%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-5 relative">
                            <div
                              className="bg-fm-yellow h-5"
                              style={{ width: `${row.retention}%` }}
                            />
                            <span
                              className="text-xs font-bold w-12 shrink-0 text-gray-600 absolute top-0.5"
                              style={{ left: `${row.retention + 1}%` }}
                            >
                              {row.retention}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* X-axis */}
                  <div className="flex w-full mt-1">
                    <div className="w-14 shrink-0" />
                    <div className="flex-1 border-t border-gray-300 relative h-5">
                      {[0, 20, 40, 60, 80, 100].map((tick) => (
                        <div
                          key={tick}
                          className="absolute flex flex-col items-center"
                          style={{
                            left: `${tick}%`,
                            transform:
                              tick === 100
                                ? "translateX(-100%)"
                                : tick === 0
                                  ? "none"
                                  : "translateX(-50%)",
                          }}
                        >
                          <div className="w-px h-1.5 bg-gray-300" />
                          <span className="text-xs text-gray-500">{tick}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 mb-6 text-sm flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-fm-green shrink-0" />
                    <span>
                      {t("social.talentManagement.turnover.chart.turnover")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-fm-yellow shrink-0" />
                    <span>
                      {t("social.talentManagement.turnover.chart.retention")}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 3. Diversity, Equity and Inclusion ──────────────────────── */}
          <div className="mb-8">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "60" : "80"}
                title={t("social.diversity.title")}
              />
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: t("social.diversity.p1") }}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <div className="relative flex w-full text-white">
                {/* Diversity image */}
                <div className="w-full h-full absolute top-0 left-0 -z-10">
                  <img
                    src={DiversityImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex w-full h-auto bg-fm-green/80 p-8 gap-9">
                  {/* Workforce table */}
                  <div>
                    <p className="font-bold text-fm-yellow mb-3">
                      {t("social.diversity.table.title")}
                    </p>
                    <div className="overflow-auto mb-6">
                      <table className="workforce-table text-sm">
                        <thead>
                          <tr>
                            <th rowSpan={2} className="border-b border-fm-yellow"></th>
                            <th colSpan={3} className="border-b border-b-gray-400">
                              {lang === "ar" ? "2024م" : "2024"}
                            </th>
                            <th
                              colSpan={3}
                              className="text-fm-yellow border-b border-fm-yellow"
                            >
                              {lang === "ar" ? "2025م" : "2025"}
                            </th>
                          </tr>
                          <tr>
                            <th className="text-end font-bold border-b border-fm-yellow">
                              {lang === "ar" ? (
                                <>
                                  الموظفون <br /> السعوديون
                                </>
                              ) : (
                                <>
                                  Saudi <br /> Employees
                                </>
                              )}
                            </th>
                            <th className="text-end font-bold border-b border-fm-yellow">
                              {lang === "ar" ? (
                                <>
                                  الموظفون غير <br />
                                  السعوديون
                                </>
                              ) : (
                                <>
                                  Non-Saudi <br />
                                  Employees
                                </>
                              )}
                            </th>
                            <th className="text-end font-bold border-b border-fm-yellow">
                              {lang === "ar" ? "الإجمالي" : "Totoal"}
                            </th>
                            <th className="text-end font-bold text-fm-yellow border-b border-fm-yellow">
                              {lang === "ar" ? (
                                <>
                                  الموظفون <br /> السعوديون
                                </>
                              ) : (
                                <>
                                  Saudi <br /> Employees
                                </>
                              )}
                            </th>
                            <th className="text-end font-bold text-fm-yellow border-b border-fm-yellow">
                              {lang === "ar" ? (
                                <>
                                  الموظفون غير <br />
                                  السعوديون
                                </>
                              ) : (
                                <>
                                  Non-Saudi <br />
                                  Employees
                                </>
                              )}
                            </th>
                            <th className="text-end font-bold text-fm-yellow border-b border-fm-yellow">
                              {lang === "ar" ? "الإجمالي" : "Totoal"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="font-bold border-b border-gray-400">{lang === "ar" ? "المركز الرئيسي للشركة الإجمالي" : "Head Office Total"}</td>
                            <td className="text-end border-b border-gray-400">49</td>
                            <td className="text-end border-b border-gray-400">19</td>
                            <td className="text-end border-b border-gray-400">68</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">53</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">20</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">73</td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">{lang === "ar" ? "مصنع جدة*" : "Jeddah Plant"}</td>
                            <td className="text-end border-b border-gray-400">62</td>
                            <td className="text-end border-b border-gray-400">164</td>
                            <td className="text-end border-b border-gray-400">226</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">59</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">145</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">204</td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">{lang === "ar" ? "مصنع القصيم" : "Al-Qassim Plant"}</td>
                            <td className="text-end border-b border-gray-400">44</td>
                            <td className="text-end border-b border-gray-400">73</td>
                            <td className="text-end border-b border-gray-400">117</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">46</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">75</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">121</td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">{lang === "ar" ? "مصنع تبوك" : "Tabuk Plant"}</td>
                            <td className="text-end border-b border-gray-400">30</td>
                            <td className="text-end border-b border-gray-400">59</td>
                            <td className="text-end border-b border-gray-400">89</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">26</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">50</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">76</td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">{lang === "ar" ? "مصنع الأحساء" : "Al-Asha Plant"}</td>
                            <td className="text-end border-b border-gray-400">34</td>
                            <td className="text-end border-b border-gray-400">67</td>
                            <td className="text-end border-b border-gray-400">101</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">29</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">58</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">87</td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">{lang === "ar" ? "المصنع الإجمالي" : "Plants total"}</td>
                            <td className="text-end border-b border-gray-400">170</td>
                            <td className="text-end border-b border-gray-400">363</td>
                            <td className="text-end border-b border-gray-400">533</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">160</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">328</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">488</td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400 font-bold">{lang === "ar" ? "الإجمالي" : "Total"}</td>
                            <td className="text-end border-b border-gray-400">219</td>
                            <td className="text-end border-b border-gray-400">382</td>
                            <td className="text-end border-b border-gray-400">601</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">213</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">348</td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">561</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div dir={isAr ? "rtl" : "ltr"} className="flex-1 w-full">
                    {/* Gender ratio */}
                    <p className="font-bold text-fm-yellow mb-4">
                      {t("social.diversity.chart.title")}
                    </p>

                    {/* Bar rows */}
                    <div className="mb-1 w-full">
                      {GENDER_DATA.map(({ year, male, female }) => (
                        <div key={year} className="flex items-stretch gap-2 mb-2">
                          {/* Year label */}
                          <div className="w-10 shrink-0 flex items-center justify-center">
                            <span
                              className="text-xs font-bold text-white"
                              style={{
                                writingMode: "vertical-lr",
                                transform: "rotate(180deg)",
                              }}
                            >
                              {isAr ? `م${year}` : year}
                            </span>
                          </div>

                          {/* Bars */}
                          <div className="flex-1 border-s border-gray-500 ps-0 space-y-1">
                            {/* Male bar */}
                            <div className="h-7 flex items-center">
                              <div
                                className="h-full bg-fm-yellow-200 flex items-center"
                                style={{ width: `${male}%` }}
                              >
                                <span className="ms-auto me-1.5 text-xs font-bold text-fm-green whitespace-nowrap">
                                  {male}%
                                </span>
                              </div>
                            </div>
                            {/* Female bar */}
                            <div className="h-7 flex items-center gap-1.5">
                              <div
                                className="h-full bg-fm-yellow shrink-0"
                                style={{ width: `${female}%` }}
                              />
                              <span className="text-xs font-bold text-white whitespace-nowrap">
                                {female}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* X-axis */}
                      <div className="flex gap-2 mt-1">
                        <div className="w-10 shrink-0" />
                        <div className="flex-1 relative h-5 border-t border-gray-500">
                          {[0, 20, 40, 60, 80, 100].map((tick) => {
                            const isFirst = tick === 0;
                            const isLast = tick === 100;
                            const pos = isAr ? "right" : "left";
                            const tf = isAr
                              ? isFirst
                                ? "none"
                                : isLast
                                  ? "translateX(100%)"
                                  : "translateX(50%)"
                              : isFirst
                                ? "none"
                                : isLast
                                  ? "translateX(-100%)"
                                  : "translateX(-50%)";
                            return (
                              <div
                                key={tick}
                                className="absolute flex flex-col items-center"
                                style={{ [pos]: `${tick}%`, transform: tf }}
                              >
                                <div className="w-px h-1.5 bg-gray-500" />
                                <span className="text-xs text-gray-400">{tick}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-6 mt-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 bg-fm-yellow-100 shrink-0" />
                        <span className="text-sm">{t("social.diversity.chart.male")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 bg-fm-yellow shrink-0" />
                        <span className="text-sm">{t("social.diversity.chart.female")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 4. Nationalization ────────────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "40" : "60"}
                title={t("social.nationalization.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.nationalization.p1"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.nationalization.p2"),
                }}
              />
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("social.nationalization.p3"),
                }}
              />

              <p className="font-bold text-fm-green mb-3">
                {t("social.nationalization.table.title")}
              </p>
              <div className="overflow-auto">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10">
                        {isAr ? "الفئة" : "Category"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr
                          ? "فئة التوطين 2024"
                          : "Saudization Category 2024"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr
                          ? "فئة التوطين 2025"
                          : "Saudization Category 2025"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr
                          ? "نسبة التوطين الفعلية 2024"
                          : "Actual Saudization 2024"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr
                          ? "نسبة التوطين الفعلية 2025"
                          : "Actual Saudization 2025"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {saudization.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"
                        }
                      >
                        <td className="p-3 font-medium border border-fm-gray-100">
                          {row.category}
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">
                            {row.cat24}
                          </span>
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">
                            {row.cat25}
                          </span>
                        </td>
                        <td className="p-3 text-center font-bold border border-fm-gray-100">
                          {row.actual24}
                        </td>
                        <td className="p-3 text-center font-bold border border-fm-gray-100">
                          {row.actual25}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-fm-green/10 font-bold">
                      <td className="p-3 border border-fm-gray-100" colSpan={3}>
                        {saudizationAvgLabel}
                      </td>
                      <td className="p-3 border border-fm-gray-100" />
                      <td className="p-3 text-center text-fm-green border border-fm-gray-100">
                        {SAUDIZATION_AVG}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 5. Occupational Health and Safety ────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "60" : "100"}
                title={t("social.occupational.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.p1"),
                }}
              />
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.p2"),
                }}
              />

              <p className="font-bold text-fm-green mb-3">
                {t("social.occupational.table.title")}
              </p>
              <div className="overflow-auto mb-6">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10">
                        {isAr ? "المؤشر" : "Metric"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        2024
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        2025
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ohsData.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"
                        }
                      >
                        <td className="p-3 font-medium border border-fm-gray-100">
                          {row.metric}
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          {row.val24}
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          {row.val25}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p
                className="mb-1"
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.p3"),
                }}
              />
              <a
                href={t("social.occupational.link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fm-yellow underline break-all"
              >
                {t("social.occupational.link")}
              </a>
            </FadeInAnimation>
          </div>

          {/* ── 5b. Well-being and Employee Experience ────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "40" : "80"}
                title={t("social.occupational.wellBeing.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.wellBeing.p1"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.wellBeing.p2"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.wellBeing.p3"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.occupational.wellBeing.p4"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 6a. Communities dark block ────────────────────────────────── */}
          <FadeInAnimation className="bg-fm-green text-white rounded-lg px-8 py-8 mb-8">
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-2xl mb-4">
                {t("social.communities.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <h3 className="text-fm-yellow font-bold mb-3">
                {t("social.communities.support.title")}
              </h3>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.support.desc"),
                }}
              />
            </SlideTopAnimation>
          </FadeInAnimation>

          {/* ── 6b. Ensuring Excellence ───────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <FadeInAnimation>
              <h3 className="font-bold text-lg mb-3">
                {t("social.communities.ensuring.title")}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.ensuring.desc"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 6c. Food Quality & Safety ─────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "30" : "50"}
                title={t("social.communities.food.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.food.desc"),
                }}
              />

              {/* Quality note callout */}
              <div className="border border-fm-yellow rounded-lg p-5 bg-fm-yellow-100 mb-6 text-center">
                <p
                  className="text-fm-green font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: t("social.communities.note"),
                  }}
                />
              </div>

              {/* Quality assurance table */}
              <div className="overflow-auto">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10">
                        {qualityTitle}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        2023
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        2024
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        2025
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityData.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"
                        }
                      >
                        <td className="p-3 font-medium border border-fm-gray-100">
                          {row.metric}
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          {row.val23}
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          {row.val24}
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          {row.val25}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 6d. Nutrition and Health ──────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "40" : "60"}
                title={t("social.communities.nutrition.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.nutrition.p1"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.nutrition.p2"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 6e. Community Support ─────────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "30" : "50"}
                title={t("social.communities.communitySupport.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.communitySupport.p1"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.communitySupport.p2"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.communitySupport.p3"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 6f. Saudi Bakery Initiative ───────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "50" : "70"}
                title={t("social.communities.saudiBakery.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.saudiBakery.p1"),
                }}
              />
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.saudiBakery.p2"),
                }}
              />
            </FadeInAnimation>

            <SlideTopAnimation>
              <p className="font-bold text-fm-green mb-4">
                {t("social.communities.saudiBakery2025.title")}
              </p>
            </SlideTopAnimation>
            <div className="grid grid-cols-2 gap-4">
              {bakeryCards.map((card, i) => (
                <PopupAnimation
                  key={i}
                  style={{
                    animationDelay: `${i * 100}ms`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="bg-fm-green text-white rounded-lg overflow-hidden">
                    <img
                      src={BAKERY_IMAGES[i]}
                      alt={card.label}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5 text-center">
                      <p className="text-4xl font-bold text-fm-yellow">
                        {card.value}
                      </p>
                      <p className="text-sm mt-1">{card.label}</p>
                    </div>
                  </div>
                </PopupAnimation>
              ))}
            </div>
          </div>

          {/* ── 6g. Partnerships and Community Outreach ───────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "50" : "80"}
                title={t("social.communities.partnerships.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.partnerships.p1"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.partnerships.p2"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* ── 6h. Community Contributions ───────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-green text-lg mb-4">
                {t("social.communities.communityContributions.title")}
              </h3>
            </SlideTopAnimation>
            <FadeInAnimation>
              <div className="space-y-4 mb-6">
                {contributions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 border border-fm-gray-100 rounded-lg p-4"
                  >
                    <p className="text-sm text-fm-gray-300 flex-1">
                      {item.text}
                    </p>
                    <div className="flex items-baseline gap-2 shrink-0">
                      <span className="text-2xl font-bold text-fm-yellow">
                        {item.value}
                      </span>
                      <span
                        className="text-sm text-fm-gray-300"
                        dangerouslySetInnerHTML={{ __html: String(item.label) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(
                    "social.communities.communityContributions.finialP",
                  ),
                }}
              />
            </FadeInAnimation>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Social;
