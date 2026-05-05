import { useState } from "react";
import Container from "../common/components/Container/Container";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import FadeInAnimation from "../common/components/animations/FadeInAnimation";
import PopupAnimation from "../common/components/animations/PopupAnimation";
import { useTranslation } from "../common/hooks/useTranslation";
import RawMaterialIcon from "../../assets/icons/sustainability/nature/raw-material.svg";
import DistributionIcon from "../../assets/icons/sustainability/nature/distribution.svg";
import ProductionIcon from "../../assets/icons/sustainability/nature/production.svg";
import UsageIcon from "../../assets/icons/sustainability/nature/usage.svg";
import EndOfLifeIcon from "../../assets/icons/sustainability/nature/end-of-life.svg";
import SpikeArrow from "../../assets/vectors/coo/spike.svg";
import { useLocale } from "../common/hooks/useLocale";

// Section Bgs
import S1bg from "../../assets/images/sustainability/nature/org-1.jpg";
import S2bg from "../../assets/images/sustainability/nature/org-2.jpg";
import S3bg from "../../assets/images/sustainability/nature/org-3.jpg";
import S4bg from "../../assets/images/sustainability/nature/org-4.jpg";
import S5bg from "../../assets/images/sustainability/nature/org-5.jpg";
import GroupOfSpikes from "../leadership/components/GroupOfSpikes";

const LIFECYCLE_ICONS = [
  RawMaterialIcon,
  DistributionIcon,
  ProductionIcon,
  UsageIcon,
  EndOfLifeIcon,
];

interface Division {
  title: string;
  desc: string;
}

type TabId =
  | "climateChange"
  | "sustainablePackaging"
  | "wasteManagement"
  | "waterManagement"
  | "sustainableAgriculture";

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

interface TabHeaderProps {
  desc: string;
  image: string;
}

const TabHeader = ({ desc, image }: TabHeaderProps) => {
  const { lang } = useLocale();
  return (
    <div className="w-full ">
      <div className="w-full relative flex bg-fm-green/60 md:bg-auto">
        <div className="flex-1 md:bg-fm-green">
          <p className="text-white font-bold p-4 py-12">{desc}</p>
        </div>
        <div className="flex-1 absolute top-0 left-0 w-full h-full md:w-auto md:h-auto md:relative -z-10 md:z-auto">
          <div
            className={`absolute top-0 left-0 w-full h-full ${lang === "ar" ? "bg-linear-to-l" : "bg-linear-to-r"} from-fm-green to-fm-green/0`}
          ></div>
          <div className="w-full h-full absolute top-0 left-0 -z-10">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Nature = () => {
  const { t, tRaw } = useTranslation("sustainability-review");
  const { lang } = useLocale();
  const [activeTab, setActiveTab] = useState<TabId>("climateChange");

  const lifecycleDivisions =
    tRaw<Division[]>("protectingNature.wastManagement.ourProduct.divsions") ??
    [];

  const tabs: { id: TabId; label: string }[] = [
    { id: "climateChange", label: t("protectingNature.climateChange.title") },
    {
      id: "sustainablePackaging",
      label: t("protectingNature.sustainablePackaging.title"),
    },
    {
      id: "wasteManagement",
      label: t("protectingNature.wastManagement.title"),
    },
    {
      id: "waterManagement",
      label: t("protectingNature.waterManagement.title"),
    },
    {
      id: "sustainableAgriculture",
      label: t("protectingNature.sustainableAgriculture.title"),
    },
  ];

  return (
    <div>
      {/* Opening */}
      <section className="py-16">
        <Container>
          <div className="">
            <SlideTopAnimation>
              <h1 className="text-3xl font-bold text-fm-green mb-4">
                {t("tabs.nature")}
              </h1>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-2xl mb-6">
                {t("protectingNature.opening.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p
                className="font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.opening.desc"),
                }}
              />
            </SlideTopAnimation>
          </div>
        </Container>
      </section>

      {/* Tabbed sections */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
            {/* Tab list */}
            <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible lg:w-82 shrink-0 mb-6 lg:mb-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  title={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  lang={lang}
                />
              ))}
            </div>

            {/* Tab content */}
            <div className="flex-1 min-w-0">
              {activeTab === "climateChange" && (
                <div>
                  <TabHeader
                    desc={t("protectingNature.climateChange.desc")}
                    image={S1bg}
                  />
                  <FadeInAnimation>
                    <h3 className="font-bold mb-2">
                      {t("protectingNature.climateChange.t1")}
                    </h3>
                    <p
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p1"),
                      }}
                    />
                    <p
                      className="mb-6"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p2"),
                      }}
                    />
                    <p
                      className="text-fm-yellow font-bold mb-2"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.y1"),
                      }}
                    />
                    <p
                      className="mb-6"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p3"),
                      }}
                    />
                    <h3 className="font-bold mb-2">
                      {t("protectingNature.climateChange.t2")}
                    </h3>
                    <p
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p4"),
                      }}
                    />
                    <p
                      className="text-fm-yellow font-bold mb-2"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.y2"),
                      }}
                    />
                    <p
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p5"),
                      }}
                    />
                    <p
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p6"),
                      }}
                    />
                    <p
                      className="mb-8"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.climateChange.p7"),
                      }}
                    />
                  </FadeInAnimation>

                  {/* Powering Efficiency case study block */}
                  <FadeInAnimation className="bg-fm-green text-white rounded-lg px-8 py-8">
                    <SlideTopAnimation>
                      <h4
                        className={`from-fm-yellow w-fit p-2 font-bold mb-4 text-xl ${lang === "ar" ? "rounded-bl-lg bg-linear-to-r" : "rounded-br-lg bg-linear-to-l"}`}
                      >
                        {t("protectingNature.poweringEfficiency.caseStudy")}
                      </h4>
                    </SlideTopAnimation>
                    <SlideTopAnimation>
                      <h2 className="text-fm-yellow font-bold text-2xl mb-4">
                        {t("protectingNature.poweringEfficiency.title")}
                      </h2>
                    </SlideTopAnimation>
                    <SlideTopAnimation>
                      <p
                        className="mb-8 font-semibold"
                        dangerouslySetInnerHTML={{
                          __html: t(
                            "protectingNature.poweringEfficiency.subtitle",
                          ),
                        }}
                      />
                    </SlideTopAnimation>
                    <SlideTopAnimation className="mb-3">
                      <h3 className="font-bold mb-3 text-fm-yellow">
                        {t(
                          "protectingNature.poweringEfficiency.division1.title",
                        )}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: t(
                            "protectingNature.poweringEfficiency.division1.desc",
                          ),
                        }}
                      />
                    </SlideTopAnimation>
                    <SlideTopAnimation>
                      <h3 className="font-bold mb-3 text-fm-yellow">
                        {t(
                          "protectingNature.poweringEfficiency.division2.title",
                        )}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: t(
                            "protectingNature.poweringEfficiency.division2.desc",
                          ),
                        }}
                      />
                    </SlideTopAnimation>
                  </FadeInAnimation>
                </div>
              )}

              {activeTab === "sustainablePackaging" && (
                <FadeInAnimation>
                  <TabHeader
                    desc={t("protectingNature.sustainablePackaging.desc")}
                    image={S2bg}
                  />
                  {/* <p
                    className="mb-6 font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t("protectingNature.sustainablePackaging.desc"),
                    }}
                  /> */}
                  <p
                    className="font-bold mb-3 mt-6"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "protectingNature.sustainablePackaging.sutitle",
                      ),
                    }}
                  />
                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{
                      __html: t("protectingNature.sustainablePackaging.p1"),
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("protectingNature.sustainablePackaging.p2"),
                    }}
                  />
                </FadeInAnimation>
              )}

              {activeTab === "wasteManagement" && (
                <div>
                  <FadeInAnimation>
                    <TabHeader
                      desc={t("protectingNature.wastManagement.desc")}
                      image={S3bg}
                    />
                    {/* <p
                      className="mb-6"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.wastManagement.desc"),
                      }}
                    /> */}
                    <h3 className="font-bold text-lg mb-3 mt-6">
                      {t("protectingNature.wastManagement.ourProduct.title")}
                    </h3>
                    <p
                      className="mb-6"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "protectingNature.wastManagement.ourProduct.desc",
                        ),
                      }}
                    />
                  </FadeInAnimation>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {lifecycleDivisions.map((div, i) => (
                      <PopupAnimation
                        key={i}
                        style={{
                          animationDelay: `${i * 100}ms`,
                          transitionDelay: `${i * 100}ms`,
                        }}
                      >
                        <div className="flex flex-col border-gradient rounded-lg p-5 gap-3 h-full">
                          <div className="flex gap-2">
                            <img
                              src={LIFECYCLE_ICONS[i]}
                              alt=""
                              className={`w-12 h-12 ${lang === "ar" ? "rotate-y-180" : ""}`}
                            />
                            <h4 className="font-bold text-lg text-fm-yellow">
                              {div.title}
                            </h4>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: div.desc }}
                          />
                        </div>
                      </PopupAnimation>
                    ))}
                  </div>

                  <FadeInAnimation>
                    <h3 className="font-bold text-fm-yellow mb-3">
                      {t("protectingNature.wastManagement.minimizeWaste.title")}
                    </h3>
                    <p
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "protectingNature.wastManagement.minimizeWaste.p1",
                        ),
                      }}
                    />
                    <p
                      className="mb-4"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "protectingNature.wastManagement.minimizeWaste.p2",
                        ),
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "protectingNature.wastManagement.minimizeWaste.p3",
                        ),
                      }}
                    />
                  </FadeInAnimation>
                </div>
              )}

              {activeTab === "waterManagement" && (
                <FadeInAnimation>
                  <TabHeader
                    desc={t("protectingNature.waterManagement.desc")}
                    image={S4bg}
                  />
                  {/* <p
                    className="mb-4 font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t("protectingNature.waterManagement.desc"),
                    }}
                  /> */}
                  <p
                    className="mb-4 mt-6"
                    dangerouslySetInnerHTML={{
                      __html: t("protectingNature.waterManagement.p1"),
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("protectingNature.waterManagement.p2"),
                    }}
                  />
                </FadeInAnimation>
              )}

              {activeTab === "sustainableAgriculture" && (
                <div>
                  <FadeInAnimation>
                    <TabHeader
                      desc={t("protectingNature.sustainableAgriculture.desc")}
                      image={S5bg}
                    />
                    {/* <p
                      className="mb-2 font-bold"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "protectingNature.sustainableAgriculture.desc",
                        ),
                      }}
                    /> */}
                    <p
                      className="mb-4 mt-6"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.sustainableAgriculture.p1"),
                      }}
                    />
                    <p
                      className="mb-8"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.sustainableAgriculture.p2"),
                      }}
                    />
                  </FadeInAnimation>
                  <div className="p-4 bg-fm-green text-white">
                    <p
                      className="mb-2"
                      dangerouslySetInnerHTML={{
                        __html: t("protectingNature.sustainableAgriculture.p3"),
                      }}
                    />
                    <a
                      href={t("protectingNature.sustainableAgriculture.link")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fm-yellow hover:text-fm-yellow/60 transition-colors duration-300 underline break-all"
                    >
                      {t("protectingNature.sustainableAgriculture.link")}
                    </a>
                  </div>
                </div>
              )}
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

export default Nature;
