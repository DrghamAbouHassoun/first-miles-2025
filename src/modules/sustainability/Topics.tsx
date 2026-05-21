import { useState } from "react";
import Container from "../common/components/Container/Container";
import { useTranslation } from "../common/hooks/useTranslation";
// import TopicChartEn from "../../assets/vectors/sustainability/topics/chart-en.svg";
// import TopicChartAr from "../../assets/vectors/sustainability/topics/chart-ar.svg";
import { topicsTableEn, topicsTableAr } from "./data/topics";
import { useLocale } from "../common/hooks/useLocale";

// Index Icons
import IndexIcon1 from "../../assets/icons/sustainability/topics/numbers/1.png";
import IndexIcon2 from "../../assets/icons/sustainability/topics/numbers/2.png";
import IndexIcon3 from "../../assets/icons/sustainability/topics/numbers/3.png";
import IndexIcon4 from "../../assets/icons/sustainability/topics/numbers/4.png";
import IndexIcon5 from "../../assets/icons/sustainability/topics/numbers/5.png";
import IndexIcon6 from "../../assets/icons/sustainability/topics/numbers/6.png";
import IndexIcon7 from "../../assets/icons/sustainability/topics/numbers/7.png";
import IndexIcon8 from "../../assets/icons/sustainability/topics/numbers/8.png";
import IndexIcon9 from "../../assets/icons/sustainability/topics/numbers/9.png";
import IndexIcon10 from "../../assets/icons/sustainability/topics/numbers/10.png";
import IndexIcon11 from "../../assets/icons/sustainability/topics/numbers/11.png";
import IndexIcon12 from "../../assets/icons/sustainability/topics/numbers/12.png";
import IndexIcon13 from "../../assets/icons/sustainability/topics/numbers/13.png";
import IndexIcon14 from "../../assets/icons/sustainability/topics/numbers/14.png";
import IndexIcon15 from "../../assets/icons/sustainability/topics/numbers/15.png";
import IndexIcon16 from "../../assets/icons/sustainability/topics/numbers/16.png";

// UNSDGs Icons
import UNSDGSIcon2 from "../../assets/icons/sustainability/topics/unsdgs/2.svg";
import UNSDGSIcon3 from "../../assets/icons/sustainability/topics/unsdgs/3.svg";
import UNSDGSIcon4 from "../../assets/icons/sustainability/topics/unsdgs/4.svg";
import UNSDGSIcon5 from "../../assets/icons/sustainability/topics/unsdgs/5.svg";
import UNSDGSIcon6 from "../../assets/icons/sustainability/topics/unsdgs/6.svg";
import UNSDGSIcon7 from "../../assets/icons/sustainability/topics/unsdgs/7.svg";
import UNSDGSIcon8 from "../../assets/icons/sustainability/topics/unsdgs/8.svg";
import UNSDGSIcon10 from "../../assets/icons/sustainability/topics/unsdgs/10.svg";
import UNSDGSIcon12 from "../../assets/icons/sustainability/topics/unsdgs/12.svg";
import UNSDGSIcon13 from "../../assets/icons/sustainability/topics/unsdgs/13.svg";
import UNSDGSIcon15 from "../../assets/icons/sustainability/topics/unsdgs/15.svg";
import UNSDGSIcon16 from "../../assets/icons/sustainability/topics/unsdgs/16.svg";

// UNSDGs Icons Arabic
import UNSDGSIcon2Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/2.svg";
import UNSDGSIcon3Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/3.svg";
import UNSDGSIcon4Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/4.svg";
import UNSDGSIcon5Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/5.svg";
import UNSDGSIcon6Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/6.svg";
import UNSDGSIcon7Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/7.svg";
import UNSDGSIcon8Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/8.svg";
import UNSDGSIcon10Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/10.svg";
import UNSDGSIcon12Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/12.svg";
import UNSDGSIcon13Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/13.svg";
import UNSDGSIcon15Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/15.svg";
import UNSDGSIcon16Ar from "../../assets/icons/sustainability/topics/unsdgs/ar/16.svg";

// Vision 2030 Icons
import VibrantIcon from "../../assets/icons/sustainability/topics/vision/vibrant.svg";
import ThrivingIcon from "../../assets/icons/sustainability/topics/vision/thriving.svg";
import AmbitiousIcon from "../../assets/icons/sustainability/topics/vision/ambitious.svg";
import GroupOfSpikes from "../leadership/components/GroupOfSpikes";
import PageTitle from "../common/components/typography/PageTitle";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import TopicsChartEn from "./Charts/TopicsChartEn";
import TopicsChartAr from "./Charts/TopicsChartAr";

const indexIconsArray = [
  IndexIcon1,
  IndexIcon2,
  IndexIcon3,
  IndexIcon4,
  IndexIcon5,
  IndexIcon6,
  IndexIcon7,
  IndexIcon8,
  IndexIcon9,
  IndexIcon10,
  IndexIcon11,
  IndexIcon12,
  IndexIcon13,
  IndexIcon14,
  IndexIcon15,
  IndexIcon16,
];

const unsdgsIcons = [
  { index: 2, icon: UNSDGSIcon2 },
  { index: 3, icon: UNSDGSIcon3 },
  { index: 4, icon: UNSDGSIcon4 },
  { index: 5, icon: UNSDGSIcon5 },
  { index: 6, icon: UNSDGSIcon6 },
  { index: 7, icon: UNSDGSIcon7 },
  { index: 8, icon: UNSDGSIcon8 },
  { index: 10, icon: UNSDGSIcon10 },
  { index: 12, icon: UNSDGSIcon12 },
  { index: 13, icon: UNSDGSIcon13 },
  { index: 15, icon: UNSDGSIcon15 },
  { index: 16, icon: UNSDGSIcon16 },
];

const unsdgsIconsAr = [
  { index: 2, icon: UNSDGSIcon2Ar },
  { index: 3, icon: UNSDGSIcon3Ar },
  { index: 4, icon: UNSDGSIcon4Ar },
  { index: 5, icon: UNSDGSIcon5Ar },
  { index: 6, icon: UNSDGSIcon6Ar },
  { index: 7, icon: UNSDGSIcon7Ar },
  { index: 8, icon: UNSDGSIcon8Ar },
  { index: 10, icon: UNSDGSIcon10Ar },
  { index: 12, icon: UNSDGSIcon12Ar },
  { index: 13, icon: UNSDGSIcon13Ar },
  { index: 15, icon: UNSDGSIcon15Ar },
  { index: 16, icon: UNSDGSIcon16Ar },
];

const visionIconsMap: Record<string, string> = {
  v: VibrantIcon,
  t: ThrivingIcon,
  a: AmbitiousIcon,
};

const priorityColors: Record<string, string> = {
  "01": "#2a6b5c",
  "02": "#5a9a2d",
  "03": "#9a9ea0",
};

const Topics = () => {
  const { t } = useTranslation("sustainability-review");
  const { lang } = useLocale();
  const tableData = lang === "ar" ? topicsTableAr : topicsTableEn;
  const [activeTab, setActiveTab] = useState("01");

  const activeGroup = tableData.table.find((g) => g.priority === activeTab)!;

  return (
    <div>
      <section className="py-16">
        <Container>
          <div className="">
            <PageTitle className="mb-4">{t("tabs.topics")}</PageTitle>
            <SlideTopAnimation>
              <p className="font-bold mb-4">{t("topics.desc")}</p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-yellow">{t("topics.h2")}</h3>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="mb-4">{t("topics.p1")}</p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="">{t("topics.p2")}</p>
            </SlideTopAnimation>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          {/* Chart */}
          <div className="mb-16 w-full max-w-180">
            {/* <img
              src={lang === "ar" ? TopicChartAr : TopicChartEn}
              alt="First Mills"
              className="w-full h-auto object-contain max-w-120"
            /> */}
            {lang === "ar" ? <TopicsChartAr /> : <TopicsChartEn />}
          </div>

          {/* Tabbed Priority Tables */}

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tab buttons — vertical on the side */}
            <div className="flex flex-col gap-3 md:w-64 shrink-0">
              {tableData.table.map((group) => {
                const color = priorityColors[group.priority];
                const isActive = activeTab === group.priority;
                return (
                  <button
                    key={group.priority}
                    onClick={() => setActiveTab(group.priority)}
                    className={`flex items-center justify-between px-4 py-3 bg-linear-to-r rounded-2xl text-start text-xl transition-colors cursor-pointer text-white ${
                      group.priority === "01" ?
                      "bg-[#173029]" :
                      group.priority === "02" ?
                      "bg-[#326C5E]" :
                      "bg-[#9FC7BB]"
                    } ${
                      isActive ? "border-2 border-fm-green" : "border-2 border-transparent"  
                    }`}
                    style={{ borderColor: isActive ? color : "transparent" }}
                  >
                    <span>{t("topics.priority")}</span>{" "}
                    <span>{group.priority}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="overflow-x-auto pb-4 flex-1">
              <div className="flex-1 min-w-130">
                {/* Column headers */}
                <div
                  className={`flex  ${activeGroup.importance.level === "Very Important" ? "text-[#326C5E]" : activeGroup.importance.level === "Important" ? "text-[#9FC7BB]" : "text-black"}`}
                >
                  <div className="flex-1 pr-3">
                    <span className="text-lg font-semibold ">
                      {activeGroup.importance.level}
                    </span>
                  </div>
                  <div
                    className={`w-full max-w-48 text-center px-2 border-l border-r border-gray-700 `}
                  >
                    <span className="text-lg font-bold ">
                      {t("topics.unsdgs")}
                    </span>
                  </div>
                  <div className={`w-full max-w-48 text-center px-2`}>
                    <span className="text-lg font-bold">
                      {t("topics.vision2030")}
                    </span>
                  </div>
                </div>

                {/* Item rows */}
                {activeGroup.importance.list.map((item, i) => (
                  <div key={item.index} className="flex">
                    {/* Number + Title */}
                    <div className={`flex-1 flex  gap-2 pr-3 py-2`}>
                      <img
                        src={indexIconsArray[item.index - 1]}
                        alt={String(item.index)}
                        className="w-7 h-7 object-contain shrink-0"
                      />
                      <span className={` leading-tight`}>{item.title}</span>
                    </div>

                    {/* UNSDGs icons */}
                    <div
                      className={`w-full max-w-48 flex flex-wrap gap-1 justify-start px-2 py-2 h-full min-h-12 border-l border-r border-gray-700 `}
                    >
                      {activeGroup.unsdgs[i]?.map((num) => {
                        const icon = (
                          lang === "ar" ? unsdgsIconsAr : unsdgsIcons
                        ).find((u) => u.index === num)?.icon;
                        return icon ? (
                          <img
                            key={num}
                            src={icon}
                            alt={`UNSDG ${num}`}
                            className="w-10 h-10"
                          />
                        ) : null;
                      })}
                    </div>

                    {/* Vision 2030 icon */}
                    <div className="w-full max-w-48 flex items-center justify-center px-2 py-2 h-full">
                      {activeGroup.vision[i] &&
                        visionIconsMap[activeGroup.vision[i]] && (
                          <img
                            src={visionIconsMap[activeGroup.vision[i]]}
                            alt="Vision 2030"
                            className="w-8 h-8"
                          />
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Legend — under chart, above tabs */}
          <div className="flex items-center justify-center py-16 flex-wrap gap-6">
            <div className="flex items-center gap-1.5">
              <img src={VibrantIcon} alt="Vibrant" className="w-9 h-9" />
              <span className="text-fm-gray-300">
                {t("topics.aVibrantSociety")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <img src={ThrivingIcon} alt="Thriving" className="w-9 h-9" />
              <span className="text-fm-gray-300">
                {t("topics.aThrivingEconomy")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <img src={AmbitiousIcon} alt="Ambitious" className="w-9 h-9" />
              <span className="text-fm-gray-300">
                {t("topics.anAmbitiousNation")}
              </span>
            </div>
          </div>
        </Container>
      </section>
      <div className="flex justify-end items-end  w-full h-auto absolute bottom-0 right-0 z-0">
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default Topics;
