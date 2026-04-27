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
  QUALITY_AR,
  QUALITY_EN,
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
  const qualityData = isAr ? QUALITY_AR : QUALITY_EN;
  const qualityTitle = isAr
    ? "ضمان الجودة بالأرقام (في جميع المصانع)"
    : "Quality Assurance in Numbers (across all plants)";

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
                className={`w-90 h-5 object-contain object-right ${lang === "ar" ? "rotate-y-180" : ""}`}
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
                  {TURNOVER_DATA.map((row, i) => (
                    <PopupAnimation
                      key={row.year}
                      style={{
                        animationDelay: `${i * 120}ms`,
                        transitionDelay: `${i * 120}ms`,
                      }}
                    >
                      <div className="flex w-full items-center">
                        <p className="font-bold text-sm p-2 w-14 shrink-0 text-center">
                          {row.year}
                        </p>
                        <div className={`w-full ${lang === "ar" ? "border-right" : "border-l"} border-gray-300`}>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-5 relative">
                              <div
                                className="bg-fm-green h-5"
                                style={{ width: `${row.turnover + 5}%` }}
                              />
                              <span
                                className="text-xs font-bold w-12 shrink-0 absolute top-0.5 text-gray-600"
                                style={{
                                  left: lang === "ar" ? "" : `${row.turnover + 6}%`,
                                  right: lang === "ar" ? `${row.turnover + 6}%` : ""
                                }}
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
                                style={{
                                  left: lang === "ar" ? "" : `${row.retention + 1}%`,
                                  right: lang === "ar" ? `${row.retention + 1}%` : ""
                                }}
                              >
                                {row.retention.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopupAnimation>
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
                            left: lang === "ar" ? "" : `${tick}%`,
                            right: lang === "ar" ? `${tick}%` : "",
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
                            <th
                              rowSpan={2}
                              className="border-b border-fm-yellow"
                            ></th>
                            <th
                              colSpan={3}
                              className="border-b border-b-gray-400"
                            >
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
                            <td className="font-bold border-b border-gray-400">
                              {lang === "ar"
                                ? "المركز الرئيسي للشركة الإجمالي"
                                : "Head Office Total"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              49
                            </td>
                            <td className="text-end border-b border-gray-400">
                              19
                            </td>
                            <td className="text-end border-b border-gray-400">
                              68
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              53
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              20
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              73
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">
                              {lang === "ar" ? "مصنع جدة*" : "Jeddah Plant"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              62
                            </td>
                            <td className="text-end border-b border-gray-400">
                              164
                            </td>
                            <td className="text-end border-b border-gray-400">
                              226
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              59
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              145
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              204
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">
                              {lang === "ar"
                                ? "مصنع القصيم"
                                : "Al-Qassim Plant"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              44
                            </td>
                            <td className="text-end border-b border-gray-400">
                              73
                            </td>
                            <td className="text-end border-b border-gray-400">
                              117
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              46
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              75
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              121
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">
                              {lang === "ar" ? "مصنع تبوك" : "Tabuk Plant"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              30
                            </td>
                            <td className="text-end border-b border-gray-400">
                              59
                            </td>
                            <td className="text-end border-b border-gray-400">
                              89
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              26
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              50
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              76
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">
                              {lang === "ar" ? "مصنع الأحساء" : "Al-Asha Plant"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              34
                            </td>
                            <td className="text-end border-b border-gray-400">
                              67
                            </td>
                            <td className="text-end border-b border-gray-400">
                              101
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              29
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              58
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              87
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400">
                              {lang === "ar"
                                ? "المصنع الإجمالي"
                                : "Plants total"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              170
                            </td>
                            <td className="text-end border-b border-gray-400">
                              363
                            </td>
                            <td className="text-end border-b border-gray-400">
                              533
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              160
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              328
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              488
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-b border-gray-400 font-bold">
                              {lang === "ar" ? "الإجمالي" : "Total"}
                            </td>
                            <td className="text-end border-b border-gray-400">
                              219
                            </td>
                            <td className="text-end border-b border-gray-400">
                              382
                            </td>
                            <td className="text-end border-b border-gray-400">
                              601
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              213
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              348
                            </td>
                            <td className="bg-fm-yellow-100 font-bold text-black text-end border-b border-gray-400">
                              561
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-white">
                        {t("social.diversity.table.note")}
                      </p>
                    </div>
                  </div>
                  <div dir={isAr ? "rtl" : "ltr"} className="flex-1 w-full">
                    {/* Gender ratio */}
                    <p className="font-bold text-fm-yellow mb-4">
                      {t("social.diversity.chart.title")}
                    </p>

                    {/* Bar rows */}
                    <div className="mb-1 w-full">
                      {GENDER_DATA.map(({ year, male, female }, i) => (
                        <PopupAnimation
                          key={year}
                          style={{
                            animationDelay: `${i * 120}ms`,
                            transitionDelay: `${i * 120}ms`,
                          }}
                        >
                        <div
                          className="flex items-stretch gap-2 mb-2"
                        >
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
                        </PopupAnimation>
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
                                <span className="text-xs text-gray-400">
                                  {tick}
                                </span>
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
                        <span className="text-sm">
                          {t("social.diversity.chart.male")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 bg-fm-yellow shrink-0" />
                        <span className="text-sm">
                          {t("social.diversity.chart.female")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 4. Nationalization ────────────────────────────────────────── */}
          <div className="mb-8">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "30" : "30"}
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

              <p className="font-bold text-fm-yellow mb-3">
                {t("social.nationalization.table.title")}
              </p>
              <div className="overflow-auto max-w-220">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-b-fm-yellow">
                      <th></th>
                      <th
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? (
                          <>
                            فئة نطاقات
                            <br />
                            2024م
                          </>
                        ) : (
                          <>
                            Nitaqat
                            <br />
                            Category 2024
                          </>
                        )}
                      </th>
                      <th
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? (
                          <>
                            التوطين
                            <br />
                            2024م
                          </>
                        ) : (
                          <>
                            Saudization
                            <br />
                            2024
                          </>
                        )}
                      </th>
                      <th
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? (
                          <>
                            فئة نطاقات
                            <br />
                            2025م
                          </>
                        ) : (
                          <>
                            Nitaqat
                            <br />
                            Category 2025
                          </>
                        )}
                      </th>
                      <th
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? (
                          <>
                            نسبة التوطين
                            <br />
                            2025م
                          </>
                        ) : (
                          <>
                            Saudization
                            <br />
                            2025
                          </>
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" border-b border-b-gray-400">
                        {lang === "ar"
                          ? "المركز الرئيسي للشركة"
                          : "Head Office"}
                      </td>
                      <td
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "بلاتيني" : "Platinum"}
                      </td>
                      <td
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "%42" : "42%"}
                      </td>
                      <td
                        className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "بلاتيني" : "Platinum"}
                      </td>
                      <td
                        className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "%50" : "50%"}
                      </td>
                    </tr>
                    <tr>
                      <td className=" border-b border-b-gray-400">
                        {lang === "ar" ? "المصانع" : "Plants"}
                      </td>
                      <td
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                      </td>
                      <td
                        className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "%37" : "37%"}
                      </td>
                      <td
                        className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                      </td>
                      <td
                        className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "%38" : "38%"}
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold border-b border-b-gray-400">
                        {lang === "ar"
                          ? "متوسط نسبة التوطين"
                          : "Average Saudization Percentage"}
                      </td>
                      <td
                        className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                      </td>
                      <td
                        className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "%39.5" : "39.5%"}
                      </td>
                      <td
                        className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                      </td>
                      <td
                        className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                      >
                        {lang === "ar" ? "%43.7" : "43.7%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 5. Occupational Health and Safety ────────────────────────── */}
          <div className="mb-8">
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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="overflow-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-fm-yellow">
                        <th className="text-bold p-2 text-fm-yellow text-start">
                          {lang === "ar" ? "التدريب" : "Training"}
                        </th>
                        <th
                          className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2`}
                        >
                          {lang === "ar" ? "2024م" : "2024"}
                        </th>
                        <th
                          className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2`}
                        >
                          {lang === "ar" ? "2025م" : "2025"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className=" p-2">
                          {lang === "ar"
                            ? "الدورات التدريبية"
                            : "Training sessions"}
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                        >
                          68
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                        >
                          11
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className=" p-2">
                          {lang === "ar" ? "ساعات التدريب" : "Training hours"}
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                        >
                          37
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                        >
                          272
                        </td>
                      </tr>
                      <tr>
                        <td className=" p-2">
                          {lang === "ar"
                            ? "ساعات التشغيل الآمنة"
                            : "Safe operation hours"}
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                        >
                          1,440,000
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                        >
                          1,200,278
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-fm-yellow">
                        <th className="text-bold p-2 text-fm-yellow text-start"></th>
                        <th
                          className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2`}
                        >
                          {lang === "ar" ? "2024م" : "2024"}
                        </th>
                        <th
                          className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2`}
                        >
                          {lang === "ar" ? "2025م" : "2025"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className=" p-2">
                          {lang === "ar"
                            ? "الحوادث البسيطة"
                            : "Minor incidents"}
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                        >
                          9
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                        >
                          6
                        </td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className=" p-2">
                          {lang === "ar"
                            ? "الإصابات البسيطة"
                            : "Major quality incidents"}
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                        >
                          0
                        </td>
                        <td
                          className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                        >
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
          <div className="mb-8">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "40" : "120"}
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
          <FadeInAnimation className="mb-8">
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-3xl mb-4">
                {t("social.communities.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <h3 className=" font-bold mb-3">
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
          <div className="mb-8">
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
          <div className="mb-8">
            <SlideTopAnimation>
              <h3 className="font-bold text-lg mb-1 text-fm-yellow">
                {t("social.communities.food.title")}
              </h3>
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("social.communities.food.desc"),
                }}
              />
              {/* Quality assurance table */}
              <div className="overflow-auto max-w-220">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-fm-yellow">
                      <th className="p-2 text-start font-bold">
                        {qualityTitle}
                      </th>
                      <th
                        className={`p-2 font-bold ${isAr ? "text-start" : "text-end"}`}
                      >
                        {isAr ? "2023م" : "2023"}
                      </th>
                      <th
                        className={`p-2 font-bold ${isAr ? "text-start" : "text-end"}`}
                      >
                        {isAr ? "2024م" : "2024"}
                      </th>
                      <th
                        className={`p-2 font-bold ${isAr ? "text-start" : "text-end"}`}
                      >
                        {isAr ? "2025م" : "2025"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityData.map((row, i) =>
                      row.isHeader ? (
                        <tr key={i} className="border-b border-gray-200">
                          <td
                            colSpan={4}
                            className="p-2 font-bold text-fm-green"
                          >
                            {row.metric}
                          </td>
                        </tr>
                      ) : (
                        <tr key={i} className="border-b border-gray-200">
                          <td className="p-2">{row.metric}</td>
                          <td
                            className={`p-2 ${isAr ? "text-start" : "text-end"}`}
                          >
                            {row.val23}
                          </td>
                          <td
                            className={`p-2 ${isAr ? "text-start" : "text-end"}`}
                          >
                            {row.val24}
                          </td>
                          <td
                            className={`p-2 font-bold bg-fm-yellow-100 ${isAr ? "text-start" : "text-end"}`}
                          >
                            {row.val25}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </FadeInAnimation>
            {/* Quality note callout */}
            <PopupAnimation>
              <div className="w-full max-w-240 mx-auto py-10 p-4 bg-fm-green text-fm-yellow my-16">
                <p
                  className="text-fm-yellow text-lg max-w-2/3"
                  dangerouslySetInnerHTML={{
                    __html: t("social.communities.note"),
                  }}
                />
              </div>
            </PopupAnimation>
          </div>

          {/* ── 6d. Nutrition and Health ──────────────────────────────────── */}
          <div className="mb-8">
            <SlideTopAnimation>
              <h3 className="text-fm-yellow font-bold">
                {t("social.communities.nutrition.title")}
              </h3>
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
          <div className="mb-8">
            <SlideTopAnimation>
              <h3 className="font-bold">
                {t("social.communities.communitySupport.title")}
              </h3>
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
          <div className="mb-8">
            <SlideTopAnimation>
              <h3 className="text-fm-yellow font-bold">
                {t("social.communities.saudiBakery.title")}
              </h3>
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
                  <div className=" text-white overflow-hidden">
                    <div className="w-full h-full absolute top-0 left-0 -z-10">
                      <img
                        src={BAKERY_IMAGES[i]}
                        alt={card.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`p-5 py-16 ${i === 0 ? "text-end bg-linear-to-l" : "text-start bg-linear-to-r"} from-fm-green to-fm-green/0`}
                    >
                      <p className="text-4xl font-bold">{card.value}</p>
                      <p className="text-sm mt-1">{card.label}</p>
                    </div>
                  </div>
                </PopupAnimation>
              ))}
            </div>
          </div>

          {/* ── 6g. Partnerships and Community Outreach ───────────────────── */}
          <div className="mb-8">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-yellow">
                {t("social.communities.partnerships.title")}
              </h3>
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
          <div className="mb-8">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-yellow mb-4">
                {t("social.communities.communityContributions.title")}
              </h3>
            </SlideTopAnimation>
            <FadeInAnimation>
              <div className="space-y-4 mb-6">
                {contributions.map((item, i) => (
                  <PopupAnimation
                    key={i}
                    style={{
                      animationDelay: `${i * 120}ms`,
                      transitionDelay: `${i * 120}ms`,
                    }}
                  >
                  <div className=" flex items-end gap-2">
                    <p className="font-bold">{item.text}</p>
                    <div className="flex items-baseline gap-2">
                      {i === 2 ? (
                        <>
                          <span
                            className="text-4xl text-fm-yellow font-bold"
                            dangerouslySetInnerHTML={{
                              __html: String(item.label),
                            }}
                          />
                          <span className="text-4xl font-bold text-fm-yellow">
                            {item.value}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-fm-yellow">
                            {item.value}
                          </span>
                          <span
                            className="text-sm font-bold"
                            dangerouslySetInnerHTML={{
                              __html: String(item.label),
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  </PopupAnimation>
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
