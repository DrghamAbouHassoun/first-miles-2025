import { useState, useRef } from "react";
import Container from "../common/components/Container/Container";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import FadeInAnimation from "../common/components/animations/FadeInAnimation";
import PopupAnimation from "../common/components/animations/PopupAnimation";
import CounterAnimation from "../common/components/animations/CounterAnimation";
import { useTranslation } from "../common/hooks/useTranslation";
import { useLocale } from "../common/hooks/useLocale";
import useInView from "../common/hooks/useInView";
import SpikeArrow from "../../assets/vectors/coo/spike.svg";
import DiversityImg from "../../assets/images/sustainability/diversity.jpg";
import TraineesImg from "../../assets/images/sustainability/trainees.jpg";
import GraduatesImg from "../../assets/images/sustainability/graduates.jpg";
import OurPeopleImg from "../../assets/images/sustainability/our-people.jpg";
import OurCommunitiesImg from "../../assets/images/sustainability/our-communities.png";
import {
  GENDER_DATA,
  QUALITY_AR,
  QUALITY_EN,
  TURNOVER_DATA,
} from "./data/social.data";
import DevelopmentProgram from "./nature/DevelopmentProgram";
import QualityNote from "./nature/QualityNote";
import GroupOfSpikes from "../leadership/components/GroupOfSpikes";
// import Social1Image from "../../assets/images/sustainability/social/1.jpeg";
import Social2Image from "../../assets/images/sustainability/social/2.jpeg";
import PageTitle from "../common/components/typography/PageTitle";
import ImageScaleAnimation from "../common/components/animations/ImageScaleAnimation";

const BAKERY_IMAGES = [TraineesImg, GraduatesImg];

// ─── Tab types ────────────────────────────────────────────────────────────────

type TabId = "ourPeople" | "ourCommunities";

// ─── TabButton (mirrors Nature.tsx) ───────────────────────────────────────────

const TabButton = ({
  title,
  isActive,
  onClick,
  lang,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
  lang: string;
}) => (
  <button
    onClick={onClick}
    className="shrink-0 lg:shrink text-start cursor-pointer px-4 lg:px-0 lg:w-full py-3 lg:py-4 lg:pe-6"
  >
    <span
      className={`font-bold text-sm lg:text-base leading-tight transition-colors ${
        isActive ? "text-fm-green" : "text-fm-gray-400 hover:text-fm-green"
      }`}
    >
      {title}
    </span>
    <div
      className={`overflow-hidden w-full pt-1.5 transition-all duration-300 ${
        isActive ? "max-h-6 opacity-100" : "max-h-0 opacity-0"
      } ${lang === "ar" ? "rotate-y-180" : ""}`}
    >
      <img
        src={SpikeArrow}
        alt=""
        className="w-full h-3 object-cover object-right"
      />
    </div>
  </button>
);

// ─── TabHeader (mirrors Nature.tsx) ───────────────────────────────────────────

interface TabHeaderProps {
  title: string;
  desc: string;
  image: string;
  title2?: string;
  desc2?: string;
}

const TabHeader = ({ title, desc, image, title2, desc2 }: TabHeaderProps) => {
  const { lang } = useLocale();
  return (
    <div className="w-full">
      <div className="w-full relative flex bg-fm-green/60 md:bg-auto">
        <div className="flex-1 md:bg-fm-green p-4 py-12">
          <h3 className="text-2xl font-bold text-fm-yellow mb-2">{title}</h3>
          <p className="text-white font-bold">{desc}</p>
          {title2 && desc2 && (
            <>
              <h3 className="text-2xl font-bold text-fm-yellow mt-8 mb-2">
                {title2}
              </h3>
              <p className="text-white font-bold">{desc2}</p>
            </>
          )}
        </div>
        <div className="flex-1 absolute top-0 left-0 w-full h-full md:w-auto md:h-auto md:relative -z-10 md:z-auto">
          <div
            className={`absolute top-0 left-0 w-full h-full ${lang === "ar" ? "bg-linear-to-l" : "bg-linear-to-r"} from-fm-green to-fm-green/0`}
          />
          <div className="w-full h-full absolute top-0 left-0 -z-10">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── SectionHeader ────────────────────────────────────────────────────────────

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
  const { ref: chartRef, inView: chartInView } = useInView<HTMLDivElement>({
    triggerOnce: true,
  });
  const { ref: genderChartRef, inView: genderChartInView } =
    useInView<HTMLDivElement>({ triggerOnce: true });

  const [activeTab, setActiveTab] = useState<TabId>("ourPeople");
  const tabSectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    tabSectionRef.current?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  };

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

  const tabs: { id: TabId; label: string }[] = [
    { id: "ourPeople", label: isAr ? "موظفونا" : "Our People" },
    { id: "ourCommunities", label: isAr ? "مجتمعاتنا" : "Our Communities" },
  ];

  return (
    <div className="relative">
      {/* ── Tabbed sections ───────────────────────────────────────────────── */}
      <section className="relative pb-16 isolate" ref={tabSectionRef}>
        <Container>
          <PageTitle className="mb-16">{t("tabs.social")}</PageTitle>
        </Container>
        <Container>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
            {/* Tab list */}
            <div className="flex flex-col lg:w-56 shrink-0 mb-6 lg:mb-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  title={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  lang={lang}
                />
              ))}
            </div>

            {/* Tab content */}
            <div className="flex-1 min-w-0">
              {/* ── Our People ────────────────────────────────────────────── */}
              {activeTab === "ourPeople" && (
                <div>
                  <TabHeader
                    desc={t("social.desc")}
                    title={t("social.subtitle")}
                    image={OurPeopleImg}
                  />

                  {/* 2a. Talent Management */}
                  <div className="mb-8 mt-6">
                    <SlideTopAnimation>
                      <SectionHeader
                        maxWidth={isAr ? "60" : "100"}
                        title={t("social.talentManagement.title")}
                      />
                    </SlideTopAnimation>
                    <div className="mt-4 flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
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
                      {/* <div className="flex-1">
                        <div className="w-full h-full">
                          <img
                            src={Social1Image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* 2b. Development Program */}
                  <DevelopmentProgram />

                  {/* 2c. Workforce Development */}
                  <div className="mb-8">
                    <SlideTopAnimation>
                      <h4 className="text-fm-yellow font-bold">
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

                  {/* 2d. Turnover & Retention */}
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

                      <div className="max-w-full sm:max-w-140 sm:pr-8">
                        <p className="font-bold text-fm-green mb-4">
                          {t("social.talentManagement.turnover.chart.title")}
                        </p>

                        <div className="mb-6" ref={chartRef}>
                          {TURNOVER_DATA.map((row, i) => (
                            <div
                              key={row.year}
                              className="flex w-full items-center"
                            >
                              <p className="font-bold text-sm p-2 w-14 shrink-0 text-center">
                                {row.year}
                                {lang === "ar" ? "م" : ""}
                              </p>
                              <div
                                className={`flex-1 min-w-0 ${lang === "ar" ? "border-r" : "border-l"} border-gray-300`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex-1 h-5 relative">
                                    <div
                                      className="bg-fm-green h-5"
                                      style={{
                                        width: chartInView
                                          ? `${row.turnover + 5}%`
                                          : "0%",
                                        transition: `width 0.7s ease-out ${i * 120}ms`,
                                      }}
                                    />
                                    <span
                                      className="text-xs font-bold w-12 shrink-0 absolute top-0.5 text-gray-600"
                                      style={{
                                        left:
                                          lang === "ar"
                                            ? ""
                                            : `${row.turnover + 6}%`,
                                        right:
                                          lang === "ar"
                                            ? `${row.turnover + 6}%`
                                            : "",
                                      }}
                                    >
                                      {chartInView && (
                                        <CounterAnimation
                                          end={row.turnover}
                                          decimals={0}
                                          suffix={lang === "ar" ? "" : "%"}
                                          prefix={lang === "ar" ? "%" : ""}
                                          duration={1.2}
                                          delay={i * 0.12}
                                        />
                                      )}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="flex-1 h-5 relative">
                                    <div
                                      className="bg-fm-yellow h-5"
                                      style={{
                                        width: chartInView
                                          ? `${row.retention}%`
                                          : "0%",
                                        transition: `width 0.7s ease-out ${i * 120}ms`,
                                      }}
                                    />
                                    <span
                                      className="text-xs font-bold w-12 shrink-0 text-gray-600 absolute top-0.5"
                                      style={{
                                        left:
                                          lang === "ar"
                                            ? ""
                                            : `${row.retention + 1}%`,
                                        right:
                                          lang === "ar"
                                            ? `${row.retention + 1}%`
                                            : "",
                                      }}
                                    >
                                      {chartInView && (
                                        <CounterAnimation
                                          end={row.retention}
                                          decimals={1}
                                          suffix={lang === "ar" ? "" : "%"}
                                          prefix={lang === "ar" ? "%" : ""}
                                          duration={1.2}
                                          delay={i * 0.12}
                                        />
                                      )}
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
                                    left: lang === "ar" ? "" : `${tick}%`,
                                    right: lang === "ar" ? `${tick}%` : "",
                                    transform:
                                      tick === 100
                                        ? lang === "ar"
                                          ? "translateX(80%)"
                                          : "translateX(-80%)"
                                        : tick === 0
                                          ? "none"
                                          : "translateX(-50%)",
                                  }}
                                >
                                  <div className="w-px h-1.5 bg-gray-300" />
                                  <span className="text-xs text-gray-500">
                                    {tick}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-6 mb-6 text-sm flex-wrap justify-center">
                          <div className="flex items-center gap-2">
                            <span className="inline-block w-3 h-3 bg-fm-green shrink-0" />
                            <span>
                              {t(
                                "social.talentManagement.turnover.chart.turnover",
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block w-3 h-3 bg-fm-yellow shrink-0" />
                            <span>
                              {t(
                                "social.talentManagement.turnover.chart.retention",
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </FadeInAnimation>
                  </div>

                  {/* 3. Diversity, Equity and Inclusion */}
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
                        dangerouslySetInnerHTML={{
                          __html: t("social.diversity.p1"),
                        }}
                      />
                    </SlideTopAnimation>
                    <FadeInAnimation className="mt-4">
                      <div className="relative flex w-full text-white">
                        <div className="w-full h-full absolute top-0 left-0 -z-10">
                          <img
                            src={DiversityImg}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col w-full h-auto bg-fm-green/80 p-8 gap-9">
                          {/* Workforce table */}
                          <div className="w-full ">
                            <p className="font-bold text-fm-yellow mb-3 w-full">
                              {t("social.diversity.table.title")}
                            </p>
                            <div className="overflow-auto mb-6 w-full">
                              <table className="workforce-table text-sm w-full">
                                <thead>
                                  <tr>
                                    <th
                                      rowSpan={2}
                                      className="border-b border-fm-yellow"
                                    >
                                      <SlideTopAnimation />
                                    </th>
                                    <th
                                      colSpan={3}
                                      className="border-b border-b-gray-400"
                                    >
                                      <SlideTopAnimation>
                                        {lang === "ar" ? "2024م" : "2024"}
                                      </SlideTopAnimation>
                                    </th>
                                    <th
                                      colSpan={3}
                                      className="text-fm-yellow border-b border-fm-yellow"
                                    >
                                      <SlideTopAnimation>
                                        {lang === "ar" ? "2025م" : "2025"}
                                      </SlideTopAnimation>
                                    </th>
                                  </tr>
                                  <tr>
                                    <th className={`${lang === "ar" ? "text-start" : "text-end"} font-bold border-b border-fm-yellow`}>
                                      <SlideTopAnimation>
                                        {lang === "ar" ? (
                                          <>
                                            الموظفون <br /> السعوديون
                                          </>
                                        ) : (
                                          <>
                                            Saudi <br /> Employees
                                          </>
                                        )}
                                      </SlideTopAnimation>
                                    </th>
                                    <th className={`${lang === "ar" ? "text-start" : "text-end"} font-bold border-b border-fm-yellow`}>
                                      <SlideTopAnimation>
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
                                      </SlideTopAnimation>
                                    </th>
                                    <th className={`${lang === "ar" ? "text-start" : "text-end"} font-bold border-b border-fm-yellow`}>
                                      <SlideTopAnimation>
                                        {lang === "ar" ? "الإجمالي" : "Totoal"}
                                      </SlideTopAnimation>
                                    </th>
                                    <th className={`${lang === "ar" ? "text-start" : "text-end"} font-bold text-fm-yellow border-b border-fm-yellow`}>
                                      <SlideTopAnimation>
                                        {lang === "ar" ? (
                                          <>
                                            الموظفون <br /> السعوديون
                                          </>
                                        ) : (
                                          <>
                                            Saudi <br /> Employees
                                          </>
                                        )}
                                      </SlideTopAnimation>
                                    </th>
                                    <th className={`${lang === "ar" ? "text-start" : "text-end"} font-bold text-fm-yellow border-b border-fm-yellow`}>
                                      <SlideTopAnimation>
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
                                      </SlideTopAnimation>
                                    </th>
                                    <th className={`${lang === "ar" ? "text-start" : "text-end"} font-bold text-fm-yellow border-b border-fm-yellow`}>
                                      <SlideTopAnimation>
                                        {lang === "ar" ? "الإجمالي" : "Totoal"}
                                      </SlideTopAnimation>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="font-bold border-b border-gray-400">
                                      <SlideTopAnimation>
                                        {lang === "ar"
                                          ? "المركز الرئيسي للشركة الإجمالي"
                                          : "Head Office Total"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>49</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>19</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>68</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>53</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>20</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>73</SlideTopAnimation>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-b border-gray-400">
                                      <SlideTopAnimation>
                                        {lang === "ar"
                                          ? "مصنع جدة*"
                                          : "Jeddah Plant"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>62</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>164</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>226</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>59</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>145</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>204</SlideTopAnimation>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-b border-gray-400">
                                      <SlideTopAnimation>
                                        {lang === "ar"
                                          ? "مصنع القصيم"
                                          : "Al-Qassim Plant"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>44</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>73</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>117</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>46</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>75</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>121</SlideTopAnimation>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-b border-gray-400">
                                      <SlideTopAnimation>
                                        {lang === "ar"
                                          ? "مصنع تبوك"
                                          : "Tabuk Plant"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start": "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>30</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start": "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>59</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start": "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>89</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>26</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>50</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>76</SlideTopAnimation>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-b border-gray-400">
                                      <SlideTopAnimation>
                                        {lang === "ar"
                                          ? "مصنع الأحساء"
                                          : "Al-Asha Plant"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>34</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>67</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>101</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>29</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>58</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>87</SlideTopAnimation>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-b border-gray-400">
                                      <SlideTopAnimation>
                                        {lang === "ar"
                                          ? "المصنع الإجمالي"
                                          : "Plants total"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>170</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>363</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>533</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>160</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>328</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>488</SlideTopAnimation>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-b border-gray-400 font-bold">
                                      <SlideTopAnimation>
                                        {lang === "ar" ? "الإجمالي" : "Total"}
                                      </SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>219</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>382</SlideTopAnimation>
                                    </td>
                                    <td className={`${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>601</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>213</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>348</SlideTopAnimation>
                                    </td>
                                    <td className={`bg-fm-yellow-100 font-bold text-black ${lang === "ar" ? "text-start" : "text-end"} border-b border-gray-400`}>
                                      <SlideTopAnimation>561</SlideTopAnimation>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="text-xs text-white">
                                {t("social.diversity.table.note")}
                              </p>
                            </div>
                          </div>
                          <div
                            dir={isAr ? "rtl" : "ltr"}
                            className="flex-1 w-full max-w-140 mx-auto"
                          >
                            <p className="font-bold text-fm-yellow mb-4">
                              {t("social.diversity.chart.title")}
                            </p>
                            <div className="mb-1 w-full" ref={genderChartRef}>
                              {GENDER_DATA.map(({ year, male, female }, i) => (
                                <PopupAnimation
                                  key={year}
                                  style={{
                                    animationDelay: `${i * 120}ms`,
                                    transitionDelay: `${i * 120}ms`,
                                  }}
                                >
                                  <div className="flex items-stretch gap-2 mb-2">
                                    <div className="w-10 shrink-0 flex items-center justify-center">
                                      <span
                                        className="text-xs font-bold text-white"
                                        style={{
                                          writingMode: "vertical-lr",
                                          transform: "rotate(180deg)",
                                        }}
                                      >
                                        {isAr ? `${year}م` : year}
                                      </span>
                                    </div>
                                    <div className="flex-1 border-s border-gray-500 ps-0 space-y-1">
                                      <div className="h-7 flex items-center">
                                        <div
                                          className="h-full bg-fm-yellow-200 flex items-center"
                                          style={{
                                            width: genderChartInView
                                              ? `${male}%`
                                              : "0%",
                                            transition: `width 0.7s ease-out ${i * 120}ms`,
                                          }}
                                        >
                                          <span className="ms-auto me-1.5 text-xs font-bold text-fm-green whitespace-nowrap">
                                            {genderChartInView && (
                                              <CounterAnimation
                                                end={male}
                                                decimals={2}
                                                suffix={isAr ? "" : "%"}
                                                prefix={isAr ? "%" : ""}
                                                duration={1.2}
                                                delay={i * 0.12}
                                              />
                                            )}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="h-7 flex items-center gap-1.5">
                                        <div
                                          className="h-full bg-fm-yellow shrink-0"
                                          style={{
                                            width: genderChartInView
                                              ? `${female}%`
                                              : "0%",
                                            transition: `width 0.7s ease-out ${i * 120}ms`,
                                          }}
                                        />
                                        <span className="text-xs font-bold text-white whitespace-nowrap">
                                          {genderChartInView && (
                                            <CounterAnimation
                                              end={female}
                                              decimals={2}
                                              suffix={isAr ? "" : "%"}
                                              prefix={isAr ? "%" : ""}
                                              duration={1.2}
                                              delay={i * 0.12}
                                            />
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </PopupAnimation>
                              ))}
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
                                        style={{
                                          [pos]: `${tick}%`,
                                          transform: tf,
                                        }}
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
                            <div className="flex items-center justify-center gap-6 mt-3">
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

                  {/* 4. Nationalization */}
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
                      <div className="overflow-auto ">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-b-fm-yellow">
                              <th>
                                <SlideTopAnimation />
                              </th>
                              <th
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-fm-yellow`}
                              >
                                <SlideTopAnimation>
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
                                </SlideTopAnimation>
                              </th>
                              <th
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-fm-yellow`}
                              >
                                <SlideTopAnimation>
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
                                </SlideTopAnimation>
                              </th>
                              <th
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-fm-yellow`}
                              >
                                <SlideTopAnimation>
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
                                </SlideTopAnimation>
                              </th>
                              <th
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-fm-yellow`}
                              >
                                <SlideTopAnimation>
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
                                </SlideTopAnimation>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border-b border-b-gray-400">
                                <SlideTopAnimation>
                                  {lang === "ar"
                                    ? "المركز الرئيسي للشركة"
                                    : "Head Office"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "بلاتيني" : "Platinum"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "%42" : "42%"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "بلاتيني" : "Platinum"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "%50" : "50%"}
                                </SlideTopAnimation>
                              </td>
                            </tr>
                            <tr>
                              <td className="border-b border-b-gray-400">
                                <SlideTopAnimation>
                                  {lang === "ar" ? "المصانع" : "Plants"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "%37" : "37%"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "%38" : "38%"}
                                </SlideTopAnimation>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-bold border-b border-b-gray-400">
                                <SlideTopAnimation>
                                  {lang === "ar"
                                    ? "متوسط نسبة التوطين"
                                    : "Average Saudization Percentage"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "%39.5" : "39.5%"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "أخضر مرتفع" : "High Green"}
                                </SlideTopAnimation>
                              </td>
                              <td
                                className={`font-bold bg-fm-yellow-100 ${lang === "ar" ? "text-start" : "text-end"} p-1 border-b border-b-gray-400`}
                              >
                                <SlideTopAnimation>
                                  {lang === "ar" ? "%43.7" : "43.7%"}
                                </SlideTopAnimation>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </FadeInAnimation>
                  </div>

                  {/* 5. Occupational Health and Safety */}
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
                      <div className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-fm-yellow font-bold">
                            {lang === "ar" ? "التدريب" : "Training"}
                          </h3>
                          <div className="overflow-auto mb-6">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-fm-yellow">
                                  <th className="text-bold p-2 text-fm-yellow text-start">
                                    <SlideTopAnimation />
                                  </th>
                                  <th
                                    className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2`}
                                  >
                                    <SlideTopAnimation>
                                      {lang === "ar" ? "2024م" : "2024"}
                                    </SlideTopAnimation>
                                  </th>
                                  <th
                                    className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2 w-40`}
                                  >
                                    <SlideTopAnimation>
                                      {lang === "ar" ? "2025م" : "2025"}
                                    </SlideTopAnimation>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-300">
                                  <td className="p-2">
                                    <SlideTopAnimation>
                                      {lang === "ar"
                                        ? "الدورات التدريبية"
                                        : "Training sessions"}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                                  >
                                    <SlideTopAnimation>68</SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                                  >
                                    <SlideTopAnimation>11</SlideTopAnimation>
                                  </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                  <td className="p-2">
                                    <SlideTopAnimation>
                                      {lang === "ar"
                                        ? "ساعات التدريب"
                                        : "Training hours"}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                                  >
                                    <SlideTopAnimation>37</SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                                  >
                                    <SlideTopAnimation>272</SlideTopAnimation>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-2">
                                    <SlideTopAnimation>
                                      {lang === "ar"
                                        ? "ساعات التشغيل الآمنة"
                                        : "Safe operation hours"}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                                  >
                                    <SlideTopAnimation>1,440,000</SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                                  >
                                    <SlideTopAnimation>1,200,278</SlideTopAnimation>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-fm-yellow font-bold">
                            {lang === "ar"
                              ? "رصد الحوادث والإصابات"
                              : "Incedents and Accidents"}
                          </h3>
                          <div className="overflow-auto mb-6">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-fm-yellow">
                                  <th className="text-bold p-2 text-fm-yellow text-start">
                                    <SlideTopAnimation />
                                  </th>
                                  <th
                                    className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2`}
                                  >
                                    <SlideTopAnimation>
                                      {lang === "ar" ? "2024م" : "2024"}
                                    </SlideTopAnimation>
                                  </th>
                                  <th
                                    className={`${lang === "ar" ? "text-start" : "text-end"} font-bold p-2 w-40`}
                                  >
                                    <SlideTopAnimation>
                                      {lang === "ar" ? "2025م" : "2025"}
                                    </SlideTopAnimation>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-300">
                                  <td className="p-2">
                                    <SlideTopAnimation>
                                      {lang === "ar"
                                        ? "الحوادث البسيطة"
                                        : "Minor incidents"}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                                  >
                                    <SlideTopAnimation>9</SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                                  >
                                    <SlideTopAnimation>6</SlideTopAnimation>
                                  </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                  <td className="p-2">
                                    <SlideTopAnimation>
                                      {lang === "ar"
                                        ? "الإصابات البسيطة"
                                        : "Major quality incidents"}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2`}
                                  >
                                    <SlideTopAnimation>0</SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`${lang === "ar" ? "text-start" : "text-end"} p-2 font-bold bg-fm-yellow-100`}
                                  >
                                    <SlideTopAnimation>0</SlideTopAnimation>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <p className="mb-1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: t("social.occupational.p3"),
                          }}
                        />{" "}
                        <a
                          href={t("social.occupational.link")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fm-yellow underline break-all"
                        >
                          {t("social.occupational.link")}
                        </a>
                      </p>
                    </FadeInAnimation>
                  </div>

                  <div className="w-full my-8 h-120 overflow-hidden">
                    <ImageScaleAnimation
                      src={Social2Image}
                      alt=""
                      className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  {/* 5b. Well-being and Employee Experience */}
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
                </div>
              )}

              {/* ── Our Communities ───────────────────────────────────────── */}
              {activeTab === "ourCommunities" && (
                <div>
                  <TabHeader
                    desc={t("social.communities.support.desc")}
                    image={OurCommunitiesImg}
                    title={t("social.communities.support.title")}
                    title2={t("social.communities.ensuring.title")}
                    desc2={t("social.communities.ensuring.desc")}
                  />

                  {/* 6c. Food Quality & Safety */}
                  <div className="mb-8 mt-8">
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
                      <div className="overflow-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-fm-yellow">
                              <th className="p-2 text-start font-bold">
                                <SlideTopAnimation>
                                  {qualityTitle}
                                </SlideTopAnimation>
                              </th>
                              <th
                                className={`p-2 font-bold ${isAr ? "text-start" : "text-end"}`}
                              >
                                <SlideTopAnimation>
                                  {isAr ? "2023م" : "2023"}
                                </SlideTopAnimation>
                              </th>
                              <th
                                className={`p-2 font-bold ${isAr ? "text-start" : "text-end"}`}
                              >
                                <SlideTopAnimation>
                                  {isAr ? "2024م" : "2024"}
                                </SlideTopAnimation>
                              </th>
                              <th
                                className={`p-2 font-bold ${isAr ? "text-start" : "text-end"}`}
                              >
                                <SlideTopAnimation>
                                  {isAr ? "2025م" : "2025"}
                                </SlideTopAnimation>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {qualityData.map((row, i) =>
                              row.isHeader ? (
                                <tr
                                  key={i}
                                  className="border-b border-gray-200"
                                >
                                  <td
                                    colSpan={4}
                                    className="p-2 font-bold text-fm-green"
                                  >
                                    <SlideTopAnimation>
                                      {row.metric}
                                    </SlideTopAnimation>
                                  </td>
                                </tr>
                              ) : (
                                <tr
                                  key={i}
                                  className="border-b border-gray-200"
                                >
                                  <td className="p-2">
                                    <SlideTopAnimation>
                                      {row.metric}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`p-2 ${isAr ? "text-start" : "text-end"}`}
                                  >
                                    <SlideTopAnimation>
                                      {row.val23}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`p-2 ${isAr ? "text-start" : "text-end"}`}
                                  >
                                    <SlideTopAnimation>
                                      {row.val24}
                                    </SlideTopAnimation>
                                  </td>
                                  <td
                                    className={`p-2 font-bold bg-fm-yellow-100 ${isAr ? "text-start" : "text-end"}`}
                                  >
                                    <SlideTopAnimation>
                                      {row.val25}
                                    </SlideTopAnimation>
                                  </td>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    </FadeInAnimation>
                    <QualityNote />
                  </div>

                  {/* 6d. Nutrition and Health */}
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

                  {/* 6e. Community Support */}
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

                  {/* 6f. Saudi Bakery Initiative */}
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
                    <div className="grid grid-cols-2 gap-4 max-w-220 mx-auto">
                      {bakeryCards.map((card, i) => (
                        <PopupAnimation
                          key={i}
                          style={{
                            animationDelay: `${i * 100}ms`,
                            transitionDelay: `${i * 100}ms`,
                          }}
                        >
                          <div className="text-white overflow-hidden group">
                            <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
                              <img
                                src={BAKERY_IMAGES[i]}
                                alt={card.label}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                              />
                            </div>
                            <div
                              className={`p-5 py-22 from-fm-green to-fm-green/0 h-full w-full ${i === 0 ? (lang === "ar" ? "text-end bg-linear-to-r" : "text-end bg-linear-to-l") : lang === "ar" ? "text-start bg-linear-to-l" : "text-start bg-linear-to-r"}`}
                            >
                              <p className="text-5xl font-bold">{card.value}</p>
                              <p className="text-3xl mt-1">{card.label}</p>
                            </div>
                          </div>
                        </PopupAnimation>
                      ))}
                    </div>
                  </div>

                  {/* 6g. Partnerships and Community Outreach */}
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

                  {/* 6h. Community Contributions */}
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
                            <div className="flex items-end gap-2">
                              <p className="font-bold">{item.text}</p>
                              <div
                                className={`flex items-baseline gap-2 ${lang === "ar" && i === 2 && "flex-row-reverse"}`}
                              >
                                {i === 2 ? (
                                  <>
                                    <span
                                      className="text-4xl text-fm-yellow font-bold"
                                      dangerouslySetInnerHTML={{
                                        __html: String(item.label),
                                      }}
                                    />
                                    <span className="text-4xl font-bold text-fm-yellow">
                                      <CounterAnimation
                                        end={parseInt(item.value as string)}
                                        separator=","
                                      />
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span className="text-4xl font-bold text-fm-yellow">
                                      <CounterAnimation
                                        end={parseInt(item.value as string)}
                                        separator=","
                                      />
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
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      <div className="flex justify-end items-end w-full h-auto absolute bottom-0 right-0 -z-20">
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default Social;
