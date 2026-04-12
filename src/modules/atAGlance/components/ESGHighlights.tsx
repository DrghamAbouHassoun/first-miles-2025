import { useContext } from "react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import PopupAnimation from "../../common/components/animations/PopupAnimation";

import Icon1 from "../../../assets/icons/esg-highlights/1.svg";
import Icon2 from "../../../assets/icons/esg-highlights/2.svg";
import Icon3 from "../../../assets/icons/esg-highlights/3.svg";
import Icon4 from "../../../assets/icons/esg-highlights/4.svg";

const ESG_ITEMS = [
  { key: "pestControl", icon: Icon1 },
  { key: "solarProject", icon: Icon2 },
  { key: "communityInvestment", icon: Icon3 },
  { key: "employeeAwards", icon: Icon4 },
] as const;

const ESGHighlights = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  return (
    <section className="bg-fm-green text-white" dir={isRtl ? "rtl" : "ltr"}>
      <Container>
        <div className="px-4 md:px-16 py-12">
          <div className="w-fit overflow-y-hidden">
            <SlideTopAnimation level="50" className="mb-8">
              <h2 className="text-3xl font-bold mb-8 text-white">
                {t("esgHighlights.title")}
              </h2>
            </SlideTopAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ESG_ITEMS.map(({ key, icon }, index) => (
              <div
                key={key}
                className={`flex flex-col gap-4 ${
                  index < ESG_ITEMS.length - 1
                    ? "lg:border-e border-fm-yellow lg:pe-8"
                    : ""
                }`}
              >
                <PopupAnimation className="w-fit">
                  <img src={icon} alt="" className="w-14 h-14 object-contain" />
                </PopupAnimation>
                <SlideTopAnimation level="50">
                  <p
                    className="text-sm text-fm-gray-100 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: t(`esgHighlights.items.${key}`),
                    }}
                  />
                </SlideTopAnimation>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ESGHighlights;
