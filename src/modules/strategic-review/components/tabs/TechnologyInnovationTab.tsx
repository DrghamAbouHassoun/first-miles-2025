import { useTranslation } from "../../../common/hooks/useTranslation";
import Container from "../../../common/components/Container/Container";
import TechInnovationBg from "../../../../assets/images/backgrounds/technology-renovation.jpg";
import { SITE_NAME } from "../../../../config/constants";
import TechnologyPrint from "../prints/TechnologyPrint";
import { useEffect, useRef, useState } from "react";
import SlideTopAnimation from "../../../common/components/animations/SlideTopAnimation";
import ImageScaleAnimation from "../../../common/components/animations/ImageScaleAnimation";
import GroupOfSpikes from "../../../leadership/components/GroupOfSpikes";
import { useLocale } from "../../../common/hooks/useLocale";
import PageTitle from "../../../common/components/typography/PageTitle";

const PILLAR_ORDER = [0, 1, 2, 3];
const AUTO_INTERVAL = 4500;

const TechnologyInnovationTab = () => {
  const { t } = useTranslation("strategic-review");
  const { lang } = useLocale();
  const [activePillar, setActivePillar] = useState<number | null>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeItem =
    activePillar !== null ? activePillar : PILLAR_ORDER[stepIndex];

  const handlePillarHover = (pillarIndex: number) => {
    setActivePillar(pillarIndex);
    setIsHovering(true);
  };

  const handlePillarLeave = () => {
    setActivePillar((prev) => {
      if (prev !== null) {
        const idx = PILLAR_ORDER.indexOf(prev);
        if (idx !== -1) setStepIndex(idx);
      }
      return null;
    });
    setIsHovering(false);
  };

  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % PILLAR_ORDER.length);
    }, AUTO_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  return (
    <div>
      <Container>
        <div className=" py-24">
          <PageTitle className="mb-6">
            {t("tabs.technologyInnovation")}
          </PageTitle>
          <SlideTopAnimation>
            <h2 className="text-fm-yellow mb-4 font-bold text-2xl">
              {t("technologyInnovationContent.title")}
            </h2>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="mb-4 font-semibold">
              {t("technologyInnovationContent.description")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <h3 className="text-fm-yellow mb-2 font-bold text-2xl">
              {t("technologyInnovationContent.subtitle")}
            </h3>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="mb-4 font-semibold">
              {t("technologyInnovationContent.p1")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="mb-4 font-semibold">
              {t("technologyInnovationContent.p2")}
            </p>
          </SlideTopAnimation>
        </div>
      </Container>
      <div className="relative w-full">
        <div
          className="sticky top-0 left-0 h-screen w-full -z-10 overflow-hidden"
          style={{ marginBottom: "-100vh" }}
        >
          <ImageScaleAnimation
            src={TechInnovationBg}
            alt={`Technology Innovation | ${SITE_NAME}`}
            className="h-full w-full object-cover"
          />
          {/* <img
            
          /> */}
        </div>
        <Container className="py-24">
          <h3 className="text-fm-yellow mb-2 font-bold text-2xl max-w-120">
            {t("technologyInnovationContent.pillarsSectionTitle")}
          </h3>
          <p className="mb-4 font-semibold text-white">
            {t("technologyInnovationContent.pillarsSectionDescription")}
          </p>
          <h4 className="text-fm-yellow mb-2 font-bold text-2xl ">
            {t("technologyInnovationContent.pillarsSectionSubtitle")}
          </h4>
        </Container>
        <Container
          className={`flex flex-col ${lang === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-2 min-h-screen lg:min-h-180 h-fit mt-16`}
        >
          <div className="flex-1 hidden lg:block">
            <div
              className={`bg-fm-green text-white w-full max-w-100 p-4 translate-y-24 transition-all duration-700 ${activeItem === 2 ? "opacity-100" : "opacity-0"}`}
            >
              <p>{t("technologyInnovationContent.pillars.2.content")}</p>
            </div>
            <div
              className={`bg-fm-green text-white w-full max-w-100 p-4 -translate-y-4 transition-all duration-700 ${activeItem === 3 ? "opacity-100" : "opacity-0"}`}
            >
              <p>{t("technologyInnovationContent.pillars.3.content")}</p>
            </div>
          </div>
          <div className="flex-1">
            <TechnologyPrint
              activePillar={activeItem}
              handlePillarHover={handlePillarHover}
              handlePillarLeave={handlePillarLeave}
              className="w-full h-fit lg:h-auto"
            />
          </div>
          <div className="flex-1 hidden lg:block">
            <div
              className={`bg-fm-green text-white w-full max-w-100 p-4 translate-y-8 transition-all duration-700 ${activeItem === 0 ? "opacity-100" : "opacity-0"}`}
            >
              <p>{t("technologyInnovationContent.pillars.0.content")}</p>
            </div>
            <div
              className={`bg-fm-green text-white w-full max-w-100 p-4 -translate-y-34 transition-all duration-700 ${activeItem === 1 ? "opacity-100" : "opacity-0"}`}
            >
              <p>{t("technologyInnovationContent.pillars.1.content")}</p>
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="w-full flex-1 lg:hidden py-4">
            {activeItem === 0 && (
              <div
                className={`bg-fm-green text-white w-full p-4 transition-all duration-700 animation-slide-top-50 active`}
              >
                <p>{t("technologyInnovationContent.pillars.0.content")}</p>
              </div>
            )}
            {activeItem === 1 && (
              <div
                className={`bg-fm-green text-white w-full p-4 transition-all duration-700 animation-slide-top-50 active `}
              >
                <p>{t("technologyInnovationContent.pillars.1.content")}</p>
              </div>
            )}
            {activeItem === 2 && (
              <div
                className={`bg-fm-green text-white w-full p-4 transition-all duration-700 animation-slide-top-50 active `}
              >
                <p>{t("technologyInnovationContent.pillars.2.content")}</p>
              </div>
            )}
            {activeItem === 3 && (
              <div
                className={`bg-fm-green text-white w-full p-4 transition-all duration-700 animation-slide-top-50 active`}
              >
                <p>{t("technologyInnovationContent.pillars.3.content")}</p>
              </div>
            )}
          </div>
          <div className="flex justify-end absolute w-full h-auto bottom-0 right-0 z-10">
            <GroupOfSpikes />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TechnologyInnovationTab;
