import { useState } from "react";
import SaudiVisionBg from "../../../../assets/images/backgrounds/saudi-vision.jpg";
import { SITE_NAME } from "../../../../config/constants";
import Container from "../../../common/components/Container/Container";

// Tabs icons
import TabIcon1 from "../../../../assets/icons/saudi-vision/icon-1.png";
import TabIcon2 from "../../../../assets/icons/saudi-vision/icon-2.png";
import TabIcon3 from "../../../../assets/icons/saudi-vision/icon-3.png";
import { useTranslation } from "../../../common/hooks/useTranslation";
import GroupOfSpikes from "../../../leadership/components/GroupOfSpikes";
import SlideTopAnimation from "../../../common/components/animations/SlideTopAnimation";

const SaudiVision2030Tab = () => {
  const { t, tArray } = useTranslation("strategic-review");
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="relative w-full">
      <div
        className="sticky top-0 left-0 h-screen w-full -z-10"
        style={{ marginBottom: "-100vh" }}
      >
        <img
          src={SaudiVisionBg}
          alt={`Saudi Vision 2030 | ${SITE_NAME}`}
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />
      </div>
      <div className="py-16">
        <Container>
          <SlideTopAnimation>
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("tabs.saudiVision2030")}
            </h2>
          </SlideTopAnimation>
          <h2 className="text-2xl font-bold text-fm-yellow mb-4">
            {t("saudiVisionContent.title")}
          </h2>
          <p className="text-white font-bold">
            {t("saudiVisionContent.description")}
          </p>
        </Container>
      </div>
      <div className="">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 min-h-screen py-24">
            <div className="flex-1 w-full lg:max-w-75 flex flex-col gap-4">
              <button
                key={t("saudiVisionContent.tabs.0.id")}
                type="button"
                className={`flex items-center justify-between px-4 text-white ${activeTab === 0 ? "bg-linear-90 from-fm-yellow to-fm-yellow/0" : "bg-transparent border border-fm-yellow"}`}
                onClick={() => setActiveTab(0)}
              >
                <span>{t("saudiVisionContent.tabs.0.title")}</span>
                <img
                  src={TabIcon1}
                  alt={`${t("saudiVisionContent.tabs.0.title")} | ${SITE_NAME}`}
                  className="w-14 h-14"
                />
              </button>
              <button
                key={t("saudiVisionContent.tabs.1.id")}
                type="button"
                className={`flex items-center justify-between px-4 text-white ${activeTab === 1 ? "bg-linear-90 from-fm-yellow to-fm-yellow/0" : "bg-transparent border border-fm-yellow"}`}
                onClick={() => setActiveTab(1)}
              >
                <span>{t("saudiVisionContent.tabs.1.title")}</span>
                <img
                  src={TabIcon2}
                  alt={`${t("saudiVisionContent.tabs.1.title")} | ${SITE_NAME}`}
                  className="w-14 h-14"
                />
              </button>
              <button
                key={t("saudiVisionContent.tabs.2.id")}
                type="button"
                className={`flex items-center justify-between px-4 text-white ${activeTab === 2 ? "bg-linear-90 from-fm-yellow to-fm-yellow/0" : "bg-transparent border border-fm-yellow"}`}
                onClick={() => setActiveTab(2)}
              >
                <span>{t("saudiVisionContent.tabs.2.title")}</span>
                <img
                  src={TabIcon3}
                  alt={`${t("saudiVisionContent.tabs.2.title")} | ${SITE_NAME}`}
                  className="w-14 h-14"
                />
              </button>
            </div>
            <div
              key={activeTab}
              className="flex-1 animation-slide-top-50 active"
            >
              <div className="bg-fm-yellow-200 p-6">
                <h3 className="text-lg font-bold text-fm-yellow">
                  {t(`saudiVisionContent.tabs.${activeTab}.content.title`)}
                </h3>
                {tArray(
                  `saudiVisionContent.tabs.${activeTab}.content.paragrphs`,
                ).map((paragraph: string, index: number) => (
                  <p key={index} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end absolute w-full h-auto bottom-0 right-0 z-10">
            <GroupOfSpikes />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SaudiVision2030Tab;
