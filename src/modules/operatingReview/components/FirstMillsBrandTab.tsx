import { useTranslation } from "../../common/hooks/useTranslation";
import ORHeader from "./ORHeader";
import FirstMillsBg from "../../../assets/images/operating-review/bg/first-mills.jpg";
import FirstMillsBrand from "../../../assets/images/operating-review/brands/first-mills.png";
import FirstMillsLogo from "../../../assets/logo/first-mills-brand.svg";
import Container from "../../common/components/Container/Container";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";
import { useLocale } from "../../common/hooks/useLocale";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";

const FirstMillsBrandTab = () => {
  const { t, tRaw } = useTranslation("operating-review");
  const { lang } = useLocale();
  const paragraphs =
    tRaw<Array<{ title: string; desc: string }>>(
      "firstMillsContent.paragraphs",
    ) ?? [];
  return (
    <div className="relative">
      <ORHeader
        pageTitle={t("tabs.firstMillsBrand")}
        title={t("firstMillsContent.title")}
        subtitle={t("firstMillsContent.subtitle")}
        desc={t("firstMillsContent.desc")}
        bgImage={FirstMillsBg}
        brandImage={FirstMillsBrand}
        brandLogo={FirstMillsLogo}
      />
      <section className="py-16">
        <Container>
          <div className="text-fm-green">
            <SlideTopAnimation>
              <p className="font-bold">{t("firstMillsContent.intro")}</p>
            </SlideTopAnimation>
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="mt-8">
                <SlideTopAnimation>
                  <h4 className="font-bold  mb-2">{paragraph.title}</h4>
                </SlideTopAnimation>
                <SlideTopAnimation>
                  <p className="text-sm">{paragraph.desc}</p>
                </SlideTopAnimation>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <div
        className={`absolute bottom-0 z-0 ${lang === "ar" ? "left-8" : "right-8"} pointer-events-none opacity-80`}
      >
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default FirstMillsBrandTab;
