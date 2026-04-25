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

// ─── Hardcoded data (charts & tables not stored in locales) ──────────────────

const TURNOVER_DATA = [
  { year: "2024", turnover: 1.5, retention: 98.5 },
  { year: "2025", turnover: 1.5, retention: 98.5 },
];

const WORKFORCE_EN = [
  { location: "Head Office",     saudi24: 63,  saudi25: 84,  expat24: 32,  expat25: 18,  total24: 95,  total25: 102 },
  { location: "Jeddah Plant",    saudi24: 82,  saudi25: 105, expat24: 79,  expat25: 74,  total24: 161, total25: 179 },
  { location: "Al-Qassim Plant", saudi24: 79,  saudi25: 144, expat24: 78,  expat25: 75,  total24: 157, total25: 219 },
  { location: "Tabuk Plant",     saudi24: 43,  saudi25: 75,  expat24: 75,  expat25: 74,  total24: 118, total25: 149 },
  { location: "Plants Total",    saudi24: 204, saudi25: 324, expat24: 232, expat25: 223, total24: 436, total25: 547 },
];

const WORKFORCE_AR = [
  { location: "المقر الرئيسي",  saudi24: 63,  saudi25: 84,  expat24: 32,  expat25: 18,  total24: 95,  total25: 102 },
  { location: "مصنع جدة",       saudi24: 82,  saudi25: 105, expat24: 79,  expat25: 74,  total24: 161, total25: 179 },
  { location: "مصنع القصيم",    saudi24: 79,  saudi25: 144, expat24: 78,  expat25: 75,  total24: 157, total25: 219 },
  { location: "مصنع تبوك",      saudi24: 43,  saudi25: 75,  expat24: 75,  expat25: 74,  total24: 118, total25: 149 },
  { location: "إجمالي المصانع", saudi24: 204, saudi25: 324, expat24: 232, expat25: 223, total24: 436, total25: 547 },
];

const SAUDIZATION_EN = [
  { category: "Head Office", cat24: "High Green", cat25: "High Green", actual24: "66.3%", actual25: "82.4%" },
  { category: "Plants",      cat24: "High Green", cat25: "High Green", actual24: "46.8%", actual25: "59.2%" },
];
const SAUDIZATION_AR = [
  { category: "المقر الرئيسي", cat24: "أخضر عالٍ", cat25: "أخضر عالٍ", actual24: "66.3%", actual25: "82.4%" },
  { category: "المصانع",       cat24: "أخضر عالٍ", cat25: "أخضر عالٍ", actual24: "46.8%", actual25: "59.2%" },
];
const SAUDIZATION_AVG = "43.7%";

const OHS_EN = [
  { metric: "Training sessions",       val24: "50",        val25: "11" },
  { metric: "Training Hours",          val24: "272",       val25: "37" },
  { metric: "Safe operating hours",    val24: "1,445,000", val25: "1,300,728" },
  { metric: "Minor incidents",         val24: "0",         val25: "0" },
  { metric: "Major quality incidents", val24: "0",         val25: "0" },
];
const OHS_AR = [
  { metric: "جلسات التدريب",         val24: "50",        val25: "11" },
  { metric: "ساعات التدريب",         val24: "272",       val25: "37" },
  { metric: "ساعات التشغيل الآمنة",  val24: "1,445,000", val25: "1,300,728" },
  { metric: "الحوادث الطفيفة",       val24: "0",         val25: "0" },
  { metric: "الحوادث الجسيمة",       val24: "0",         val25: "0" },
];

const QUALITY_EN = [
  { metric: "Daily tests", val23: "899", val24: "899", val25: "899" },
];
const QUALITY_AR = [
  { metric: "الاختبارات اليومية", val23: "899", val24: "899", val25: "899" },
];

const GENDER_DATA = { male: 86, female: 14 };

const BAKERY_IMAGES = [TraineesImg, GraduatesImg];

// ─── SectionHeader (mirrors Nature.tsx) ──────────────────────────────────────

const SectionHeader = ({ title, maxWidth }: { title: string; maxWidth: string }) => {
  const { lang } = useLocale();
  const { ref, inView } = useInView<HTMLDivElement>({ triggerOnce: false });
  return (
    <div className="w-fit relative">
      <h3 className="text-fm-green font-bold text-lg w-fit">{title}</h3>
      <div ref={ref} className={`overflow-hidden w-full pt-1 max-w-${maxWidth} ${lang === "ar" ? "rotate-y-180" : ""}`}>
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

interface BakeryCard { value: number; label: string; }
interface Contribution { text: string; value: string | number; label: string; }

// ─── Component ────────────────────────────────────────────────────────────────

const Social = () => {
  const { t, tRaw } = useTranslation("sustainability-review");
  const { lang } = useLocale();

  const isAr = lang === "ar";
  const workforce = isAr ? WORKFORCE_AR : WORKFORCE_EN;
  const saudization = isAr ? SAUDIZATION_AR : SAUDIZATION_EN;
  const ohsData = isAr ? OHS_AR : OHS_EN;
  const qualityData = isAr ? QUALITY_AR : QUALITY_EN;
  const qualityTitle = isAr
    ? "ضمان الجودة بالأرقام (في جميع المصانع)"
    : "Quality Assurance in Numbers (across all plants)";
  const saudizationAvgLabel = isAr ? "متوسط نسبة التوطين" : "Average Saudization Percentage";

  const bakeryCards = tRaw<BakeryCard[]>("social.communities.saudiBakery2025.cards") ?? [];
  const contributions = tRaw<Contribution[]>("social.communities.communityContributions.contributions") ?? [];

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
              <p className="font-bold mb-4">{t("social.subtitle")}</p>
            </SlideTopAnimation>
            <FadeInAnimation>
              <p dangerouslySetInnerHTML={{ __html: t("social.desc") }} />
            </FadeInAnimation>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>

          {/* ── 2a. Talent Management intro ──────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "60" : "100"}
                title={t("social.talentManagement.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.talentManagement.p1") }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.talentManagement.p2") }} />
              <p dangerouslySetInnerHTML={{ __html: t("social.talentManagement.p3") }} />
            </FadeInAnimation>
          </div>

          {/* ── 2b. Development Program dark block ───────────────────────── */}
          <FadeInAnimation className="bg-fm-green text-white rounded-lg px-8 py-8 mb-8">
            <SlideTopAnimation>
              <h2
                className="text-fm-yellow font-bold text-2xl mb-4"
                dangerouslySetInnerHTML={{ __html: t("social.talentManagement.developementProgram.title") }}
              />
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="font-semibold mb-4">
                {t("social.talentManagement.developementProgram.subtitle")}
              </p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p dangerouslySetInnerHTML={{ __html: t("social.talentManagement.developementProgram.desc") }} />
            </SlideTopAnimation>
          </FadeInAnimation>

          {/* ── 2c. Workforce Development ────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "50" : "80"}
                title={t("social.talentManagement.workforce.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.talentManagement.workforce.p1") }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.talentManagement.workforce.p2") }} />
              <p dangerouslySetInnerHTML={{ __html: t("social.talentManagement.workforce.p3") }} />
            </FadeInAnimation>
          </div>

          {/* ── 2d. Turnover & Retention ─────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "50" : "70"}
                title={t("social.talentManagement.turnover.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t("social.talentManagement.turnover.p1") }} />

              {/* Horizontal bar chart */}
              <div className="border border-fm-gray-100 rounded-lg p-6">
                <p className="font-bold text-fm-green mb-4">
                  {t("social.talentManagement.turnover.chart.title")}
                </p>
                <div className="flex gap-6 mb-6 text-sm flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-sm bg-fm-green shrink-0" />
                    <span>{t("social.talentManagement.turnover.chart.turnover")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-sm bg-fm-yellow shrink-0" />
                    <span>{t("social.talentManagement.turnover.chart.retention")}</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {TURNOVER_DATA.map((row) => (
                    <div key={row.year}>
                      <p className="font-bold text-sm mb-2">{row.year}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-fm-gray-300 w-36 shrink-0 text-end">
                            {t("social.talentManagement.turnover.chart.turnover")}
                          </span>
                          <div className="flex-1 bg-fm-gray-100 rounded-full h-5">
                            <div
                              className="bg-fm-green h-5 rounded-full"
                              style={{ width: `${row.turnover}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold w-12 shrink-0">{row.turnover}%</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-fm-gray-300 w-36 shrink-0 text-end">
                            {t("social.talentManagement.turnover.chart.retention")}
                          </span>
                          <div className="flex-1 bg-fm-gray-100 rounded-full h-5">
                            <div
                              className="bg-fm-yellow h-5 rounded-full"
                              style={{ width: `${row.retention}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold w-12 shrink-0">{row.retention}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInAnimation>
          </div>

          {/* ── 3. Diversity, Equity, and Inclusion ──────────────────────── */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={isAr ? "60" : "80"}
                title={t("social.diversity.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t("social.diversity.p1") }} />

              {/* Workforce table */}
              <p className="font-bold text-fm-green mb-3">{t("social.diversity.table.title")}</p>
              <div className="overflow-auto mb-6">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10" rowSpan={2}>
                        {isAr ? "الموقع" : "Location"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10" colSpan={2}>
                        {isAr ? "سعودي" : "Saudi"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10" colSpan={2}>
                        {isAr ? "وافد" : "Expat"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10" colSpan={2}>
                        {isAr ? "الإجمالي" : "Total"}
                      </th>
                    </tr>
                    <tr className="bg-fm-green text-white border-t border-white/20">
                      <th className="p-3 text-center font-medium border border-white/10">2024</th>
                      <th className="p-3 text-center font-medium border border-white/10">2025</th>
                      <th className="p-3 text-center font-medium border border-white/10">2024</th>
                      <th className="p-3 text-center font-medium border border-white/10">2025</th>
                      <th className="p-3 text-center font-medium border border-white/10">2024</th>
                      <th className="p-3 text-center font-medium border border-white/10">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workforce.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"}>
                        <td className="p-3 font-medium border border-fm-gray-100">{row.location}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.saudi24}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.saudi25}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.expat24}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.expat25}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.total24}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.total25}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Diversity image */}
              <img src={DiversityImg} alt="" className="w-full rounded-lg mb-8 object-cover max-h-80" />

              {/* Gender ratio */}
              <p className="font-bold text-fm-green mb-4">{t("social.diversity.chart.title")}</p>
              <div className="space-y-3 max-w-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-fm-gray-300 w-20 shrink-0 text-end">
                    {t("social.diversity.chart.male")}
                  </span>
                  <div className="flex-1 bg-fm-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-fm-green h-6 rounded-full flex items-center justify-end pe-2"
                      style={{ width: `${GENDER_DATA.male}%` }}
                    >
                      <span className="text-white text-xs font-bold">{GENDER_DATA.male}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-fm-gray-300 w-20 shrink-0 text-end">
                    {t("social.diversity.chart.female")}
                  </span>
                  <div className="flex-1 bg-fm-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-fm-yellow h-6 rounded-full flex items-center justify-end pe-2"
                      style={{ width: `${GENDER_DATA.female}%` }}
                    >
                      <span className="text-fm-green text-xs font-bold">{GENDER_DATA.female}%</span>
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.nationalization.p1") }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.nationalization.p2") }} />
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t("social.nationalization.p3") }} />

              <p className="font-bold text-fm-green mb-3">{t("social.nationalization.table.title")}</p>
              <div className="overflow-auto">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10">
                        {isAr ? "الفئة" : "Category"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr ? "فئة التوطين 2024" : "Saudization Category 2024"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr ? "فئة التوطين 2025" : "Saudization Category 2025"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr ? "نسبة التوطين الفعلية 2024" : "Actual Saudization 2024"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">
                        {isAr ? "نسبة التوطين الفعلية 2025" : "Actual Saudization 2025"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {saudization.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"}>
                        <td className="p-3 font-medium border border-fm-gray-100">{row.category}</td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">{row.cat24}</span>
                        </td>
                        <td className="p-3 text-center border border-fm-gray-100">
                          <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">{row.cat25}</span>
                        </td>
                        <td className="p-3 text-center font-bold border border-fm-gray-100">{row.actual24}</td>
                        <td className="p-3 text-center font-bold border border-fm-gray-100">{row.actual25}</td>
                      </tr>
                    ))}
                    <tr className="bg-fm-green/10 font-bold">
                      <td className="p-3 border border-fm-gray-100" colSpan={3}>{saudizationAvgLabel}</td>
                      <td className="p-3 border border-fm-gray-100" />
                      <td className="p-3 text-center text-fm-green border border-fm-gray-100">{SAUDIZATION_AVG}</td>
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.occupational.p1") }} />
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t("social.occupational.p2") }} />

              <p className="font-bold text-fm-green mb-3">{t("social.occupational.table.title")}</p>
              <div className="overflow-auto mb-6">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10">
                        {isAr ? "المؤشر" : "Metric"}
                      </th>
                      <th className="p-3 text-center font-medium border border-white/10">2024</th>
                      <th className="p-3 text-center font-medium border border-white/10">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ohsData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"}>
                        <td className="p-3 font-medium border border-fm-gray-100">{row.metric}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.val24}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.val25}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mb-1" dangerouslySetInnerHTML={{ __html: t("social.occupational.p3") }} />
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.occupational.wellBeing.p1") }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.occupational.wellBeing.p2") }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.occupational.wellBeing.p3") }} />
              <p dangerouslySetInnerHTML={{ __html: t("social.occupational.wellBeing.p4") }} />
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
              <p dangerouslySetInnerHTML={{ __html: t("social.communities.support.desc") }} />
            </SlideTopAnimation>
          </FadeInAnimation>

          {/* ── 6b. Ensuring Excellence ───────────────────────────────────── */}
          <div className="mb-8 max-w-220">
            <FadeInAnimation>
              <h3 className="font-bold text-lg mb-3">{t("social.communities.ensuring.title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("social.communities.ensuring.desc") }} />
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
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t("social.communities.food.desc") }} />

              {/* Quality note callout */}
              <div className="border border-fm-yellow rounded-lg p-5 bg-fm-yellow-100 mb-6 text-center">
                <p
                  className="text-fm-green font-semibold"
                  dangerouslySetInnerHTML={{ __html: t("social.communities.note") }}
                />
              </div>

              {/* Quality assurance table */}
              <div className="overflow-auto">
                <table className="w-full text-sm border-collapse border border-fm-gray-100">
                  <thead>
                    <tr className="bg-fm-green text-white">
                      <th className="p-3 text-start font-medium border border-white/10">{qualityTitle}</th>
                      <th className="p-3 text-center font-medium border border-white/10">2023</th>
                      <th className="p-3 text-center font-medium border border-white/10">2024</th>
                      <th className="p-3 text-center font-medium border border-white/10">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-fm-gray-100/40"}>
                        <td className="p-3 font-medium border border-fm-gray-100">{row.metric}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.val23}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.val24}</td>
                        <td className="p-3 text-center border border-fm-gray-100">{row.val25}</td>
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.communities.nutrition.p1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("social.communities.nutrition.p2") }} />
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.communities.communitySupport.p1") }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.communities.communitySupport.p2") }} />
              <p dangerouslySetInnerHTML={{ __html: t("social.communities.communitySupport.p3") }} />
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.communities.saudiBakery.p1") }} />
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t("social.communities.saudiBakery.p2") }} />
            </FadeInAnimation>

            <SlideTopAnimation>
              <p className="font-bold text-fm-green mb-4">{t("social.communities.saudiBakery2025.title")}</p>
            </SlideTopAnimation>
            <div className="grid grid-cols-2 gap-4">
              {bakeryCards.map((card, i) => (
                <PopupAnimation
                  key={i}
                  style={{ animationDelay: `${i * 100}ms`, transitionDelay: `${i * 100}ms` }}
                >
                  <div className="bg-fm-green text-white rounded-lg overflow-hidden">
                    <img
                      src={BAKERY_IMAGES[i]}
                      alt={card.label}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5 text-center">
                      <p className="text-4xl font-bold text-fm-yellow">{card.value}</p>
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
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("social.communities.partnerships.p1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("social.communities.partnerships.p2") }} />
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
                  <div key={i} className="flex items-center gap-4 border border-fm-gray-100 rounded-lg p-4">
                    <p className="text-sm text-fm-gray-300 flex-1">{item.text}</p>
                    <div className="flex items-baseline gap-2 shrink-0">
                      <span className="text-2xl font-bold text-fm-yellow">{item.value}</span>
                      <span
                        className="text-sm text-fm-gray-300"
                        dangerouslySetInnerHTML={{ __html: String(item.label) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p dangerouslySetInnerHTML={{ __html: t("social.communities.communityContributions.finialP") }} />
            </FadeInAnimation>
          </div>

        </Container>
      </section>
    </div>
  );
};

export default Social;
