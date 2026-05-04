import LeadershipHeader from "../../../leadership/components/LeadershipHeader";
import COOImage from "../../../../assets/images/leadership-people/new-coo.png";
import { useTranslation } from "../../../common/hooks/useTranslation";
import Container from "../../../common/components/Container/Container";
import SlideTopAnimation from "../../../common/components/animations/SlideTopAnimation";
import ServiceBg from "../../../../assets/images/operating-review/coo/service-bg.jpg";

// Services Icons
import Service1Icon from "../../../../assets/icons/coo/services/grinding.svg";
import Service2Icon from "../../../../assets/icons/coo/services/manufacturing.svg";
import Service3Icon from "../../../../assets/icons/coo/services/storage.svg";
import Service4Icon from "../../../../assets/icons/coo/services/retail.svg";
import PopupAnimation from "../../../common/components/animations/PopupAnimation";
import Timeline from "./Timeline";
import ProductsSection from "./ProductsSection";
import MillingSnapshotSection from "./MillingSnapshotSection";
import ProductRevnewSection from "./ProductRevnewSection";
import CFOQualitySection from "../../../leadership/components/CFOQualitySection";
import { useContext } from "react";
import { LangContext } from "../../../common/contexts/LangProvider";
import TimelineDesktopEn from "./TimelineDesktopEn";
import TimeLineDesktopAr from "./TimeLineDesktopAr";

const services = [
  {
    title: "cooContent.services.0.title",
    subtitle: "cooContent.services.0.subtitle",
    icon: Service1Icon,
  },
  {
    title: "cooContent.services.1.title",
    subtitle: "cooContent.services.1.subtitle",
    icon: Service2Icon,
  },
  {
    title: "cooContent.services.2.title",
    subtitle: "cooContent.services.2.subtitle",
    icon: Service3Icon,
  },
  {
    title: "cooContent.services.3.title",
    subtitle: "cooContent.services.3.subtitle",
    icon: Service4Icon,
  },
];

const COOTab = () => {
  const { t } = useTranslation("operating-review");
  const { lang, translations } = useContext(LangContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const qualityData = (translations as any)[lang]?.["operating-review"]
    ?.cooContent?.qualitySection;
  return (
    <>
      <Container>
        <SlideTopAnimation>
          <h1 className="text-3xl font-bold text-fm-green py-16">
            {t("tabs.coo")}
          </h1>
        </SlideTopAnimation>
      </Container>
      <div className="pt-44">
        <Container>
          <LeadershipHeader
            imageUrl={COOImage}
            imageWidth={250}
            imageScale={1.8}
            imageTranslateX={52.5}
            imageTranslateY={-31}
            title={t("cooContent.name")}
            subtitle={t("cooContent.title")}
            quotation={t("cooContent.quote")}
          />
        </Container>
        <section className="py-16">
          <Container>
            <div className="w-full max-w-250">
              <SlideTopAnimation>
                <h3 className="text-3xl text-fm-yellow font-bold max-w-120 mb-6">
                  {t("cooContent.opening.title")}
                </h3>
              </SlideTopAnimation>
              <SlideTopAnimation>
                <h4 className="text-lg font-bold mb-6">
                  {t("cooContent.opening.subtitle")}
                </h4>
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("cooContent.opening.p1"),
                  }}
                />
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("cooContent.opening.p2"),
                  }}
                />
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("cooContent.opening.p3"),
                  }}
                />
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("cooContent.opening.p4"),
                  }}
                />
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("cooContent.opening.p5"),
                  }}
                />
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("cooContent.opening.p6"),
                  }}
                />
              </SlideTopAnimation>
            </div>
          </Container>
        </section>
        <section className="w-full relative">
          <div className="absolute w-full h-full top-0 left-0 -z-10">
            <img
              src={ServiceBg}
              alt={`COO`}
              className="w-full h-full object-cover"
            />
          </div>
          <Container>
            <SlideTopAnimation>
              <h3 className="text-xl font-bold text-fm-yellow mb-4 pt-16">
                {t("cooContent.servicesTitle")}
              </h3>
            </SlideTopAnimation>
          </Container>
          <div className="pb-32 pt-16">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-220 mx-auto">
                {services.map((item, index) => (
                  <PopupAnimation
                    key={index}
                    className="flex justify-start items-center flex-col gap-2 p-6 bg-fm-green/80 text-white text-center"
                  >
                    <img
                      src={item.icon}
                      alt={t(item.title)}
                      className="w-20 h-20 object-contain"
                    />
                    <h5 className="text-lg text-fm-yellow">{t(item.title)}</h5>
                    <p>{t(item.subtitle)}</p>
                  </PopupAnimation>
                ))}
              </div>
            </Container>
          </div>
        </section>
        <section className="bg-fm-yellow-200">
          <div className="w-full hidden md:block">
            {lang === "ar" ? <TimeLineDesktopAr /> : <TimelineDesktopEn />}
          </div>
          <div className="w-full block md:hidden">
            <Timeline />
          </div>
        </section>
        <ProductsSection />
        <MillingSnapshotSection />
        <ProductRevnewSection />
        {qualityData && <CFOQualitySection data={qualityData} />}
      </div>
    </>
  );
};

export default COOTab;
