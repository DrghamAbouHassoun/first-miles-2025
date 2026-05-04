import Container from "../common/components/Container/Container";
import { useTranslation } from "../common/hooks/useTranslation";
import TopicChartEn from "../../assets/vectors/sustainability/topics/chart-en.svg";
import TopicChartAr from "../../assets/vectors/sustainability/topics/chart-ar.svg";
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

// Vision 2030 Icons
import VibrantIcon from "../../assets/icons/sustainability/topics/vision/vibrant.svg";
import ThrivingIcon from "../../assets/icons/sustainability/topics/vision/thriving.svg";
import AmbitiousIcon from "../../assets/icons/sustainability/topics/vision/ambitious.svg";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";

const indexIconsArray = [
  IndexIcon1, IndexIcon2, IndexIcon3, IndexIcon4,
  IndexIcon5, IndexIcon6, IndexIcon7, IndexIcon8,
  IndexIcon9, IndexIcon10, IndexIcon11, IndexIcon12,
  IndexIcon13, IndexIcon14, IndexIcon15, IndexIcon16,
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

  return (
    <div>
      <section className="py-16">
        <Container>
          <div className="max-w-220">
            <SlideTopAnimation>
              <h1 className="text-3xl font-bold text-fm-green mb-4">{t("tabs.topics")}</h1>
            </SlideTopAnimation>
            <p className="font-bold mb-4">{t("topics.desc")}</p>
            <h3 className="font-bold text-fm-yellow">{t("topics.h2")}</h3>
            <p className="mb-4">{t("topics.p1")}</p>
            <p className="">{t("topics.p2")}</p>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 ">
            {/* Chart */}
            <div className="flex-1">
              <img
                src={lang === "ar" ? TopicChartAr : TopicChartEn}
                alt="First Mills"
                className="w-full h-auto object-contain max-w-120 lg:max-w-none"
              />
            </div>

            {/* Priority Table */}
            <div className="flex-1 overflow-auto">
              {tableData.table.map((group, groupIndex) => {
                const color = priorityColors[group.priority];
                return (
                  <div
                    key={group.priority}
                    className={`flex gap-3 py-5 flex-col md:flex-row ${groupIndex < tableData.table.length - 1 ? "border-b border-fm-gray-100" : ""}`}
                  >
                    {/* Priority label */}
                    <div className="w-14 shrink-0 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-fm-gray-200 font-medium uppercase tracking-wide">
                        {t("topics.priority")}
                      </span>
                      <span className="text-3xl font-bold leading-none" style={{ color }}>
                        {group.priority}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-100 lg:min-w-auto">
                      {/* Column headers */}
                      <div className="flex items-center mb-1">
                        <div className="flex-1 pr-3">
                          <span className="text-sm font-semibold" >
                            {group.importance.level}
                          </span>
                        </div>
                        <div className={`w-24 text-center ${lang === "ar" ? "border-r" : "border-l"} border-fm-gray-100 px-2`}>
                          <span className="text-xs font-bold text-fm-gray-400">{t("topics.unsdgs")}</span>
                        </div>
                        <div className={`w-24 text-center ${lang === "ar" ? "border-r" : "border-l"} border-fm-gray-100 px-2`}>
                          <span className="text-xs font-bold text-fm-gray-400">{t("topics.vision2030")}</span>
                        </div>
                      </div>

                      {/* Item rows */}
                      {group.importance.list.map((item, i) => (
                        <div key={item.index} className="flex items-center py-1.5">
                          {/* Number + Title */}
                          <div className={`flex-1 flex items-center gap-2 pr-3 ${lang === "ar" ? "border-l" : "border-r"} border-fm-gray-100`}>
                            <img
                              src={indexIconsArray[item.index - 1]}
                              alt={String(item.index)}
                              className="w-7 h-7 object-contain shrink-0"
                            />
                            <span className="text-xs font-bold leading-tight text-fm-blue" >
                              {item.title}
                            </span>
                          </div>

                          {/* UNSDGs icons */}
                          <div className={`w-24 flex flex-wrap gap-0.5 items-center justify-start px-2 ${lang === "ar" ? "border-l" : "border-r"} border-fm-gray-100`}>
                            {group.unsdgs[i]?.map((num) => {
                              const icon = unsdgsIcons.find((u) => u.index === num)?.icon;
                              return icon ? (
                                <img key={num} src={icon} alt={`UNSDG ${num}`} className="w-6 h-6" />
                              ) : null;
                            })}
                          </div>

                          {/* Vision 2030 icon */}
                          <div className="w-24 flex items-center justify-center px-2">
                            {group.vision[i] && visionIconsMap[group.vision[i]] && (
                              <img
                                src={visionIconsMap[group.vision[i]]}
                                alt="Vision 2030"
                                className="w-6 h-6"
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Legend */}
              <div className="flex items-center flex-wrap lg:flex-nowrap gap-6 mt-4 pt-4 border-t border-fm-gray-100">
                <div className="flex items-center gap-1.5">
                  <img src={VibrantIcon} alt="Vibrant" className="w-9 h-9" />
                  <span className=" text-fm-gray-300">{t("topics.aVibrantSociety")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={ThrivingIcon} alt="Thriving" className="w-9 h-9" />
                  <span className=" text-fm-gray-300">{t("topics.aThrivingEconomy")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={AmbitiousIcon} alt="Ambitious" className="w-9 h-9" />
                  <span className=" text-fm-gray-300">{t("topics.anAmbitiousNation")}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Topics;
