import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import Container from "../common/components/Container/Container";
import PageTitle from "../common/components/typography/PageTitle";
import { useLocale } from "../common/hooks/useLocale";
import { useTranslation } from "../common/hooks/useTranslation";
import GroupOfSpikes from "../leadership/components/GroupOfSpikes";

const Approach = () => {
  const { t } = useTranslation("sustainability-review");
  const { lang } = useLocale();
  return (
    <div className="relative">
      <div className="relative py-16 isolate">
        <Container>
          <div className="">
            <PageTitle className="mb-4">
              {t("tabs.approach")}
            </PageTitle>
            <SlideTopAnimation>
              <h2
                className="text-2xl font-bold text-fm-yellow mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("sustainabilityApproach.title"),
                }}
              ></h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p
                className="text-lg font-bold mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("sustainabilityApproach.desc"),
                }}
              />
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="mb-4">{t("sustainabilityApproach.p1")}</p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="mb-4">{t("sustainabilityApproach.p2")}</p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="mb-4">{t("sustainabilityApproach.p3")}</p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="mb-4">{t("sustainabilityApproach.p4")}</p>
            </SlideTopAnimation>
          </div>
        </Container>
      </div>
      <div
        className={`absolute w-fit bottom-0 -z-20 ${lang === "ar" ? "left-8" : "right-8"} pointer-events-none opacity-80`}
      >
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default Approach;
