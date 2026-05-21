import { useTranslation } from "../../common/hooks/useTranslation";
import ORHeader from "./ORHeader";
import aloulaBg from "../../../assets/images/operating-review/bg/aloula.jpg";
import aloulaBrand from "../../../assets/images/operating-review/brands/aloula.png";
import aloulaLogo from "../../../assets/logo/aloula.png";
import Container from "../../common/components/Container/Container";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";
import { useLocale } from "../../common/hooks/useLocale";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";

const AloulaBrandTab = () => {
  const { t, tRaw } = useTranslation("operating-review");
  const { lang } = useLocale();
  const paragraphs =
    tRaw<Array<{ title: string; desc: string }>>(
      "aloulaContent.paragraphs",
    ) ?? [];
  return (
    <div className="relative w-full">
      <ORHeader
        pageTitle={t("tabs.aloulaBrand")}
        title={t("aloulaContent.title")}
        subtitle={t("aloulaContent.subtitle")}
        desc={t("aloulaContent.desc")}
        bgImage={aloulaBg}
        brandImage={aloulaBrand}
        brandLogo={aloulaLogo}
      />
      <section className="relative py-16 isolate">
        <Container>
          <div className="text-fm-green">
            <SlideTopAnimation>
              <p className="font-bold">{t("aloulaContent.intro")}</p>
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
        className={`absolute w-fit bottom-0 -z-20 ${lang === "ar" ? "left-8" : "right-8"} pointer-events-none opacity-80`}
      >
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default AloulaBrandTab;
