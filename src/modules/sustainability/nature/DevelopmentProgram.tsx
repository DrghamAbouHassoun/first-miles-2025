import { SITE_NAME } from "../../../config/constants";
import FadeInAnimation from "../../common/components/animations/FadeInAnimation";
import useInView from "../../common/hooks/useInView";
import { useLocale } from "../../common/hooks/useLocale";
import FlowerOneIcon from "../../../assets/vectors/flower-1.svg";
import FlowerTwoIcon from "../../../assets/vectors/flower-2.svg";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import VerticalSpikeYellow from "../../../assets/icons/vertical-spike-yellow.svg";
import { useTranslation } from "../../common/hooks/useTranslation";

const DevelopmentProgram = () => {
  const { lang } = useLocale();
  const { t } = useTranslation("sustainability-review");

  const { ref: flowerOneRef, inView: isFlowerOneInView } =
    useInView<HTMLImageElement>({});
  const { ref: flowerTwoRef, inView: isFlowerTwoInView } =
    useInView<HTMLImageElement>({});

  return (
    <FadeInAnimation className="bg-fm-green text-white px-8 py-8 mb-8 relative">
      <div
        className={`absolute w-62 h-full ${lang === "ar" ? "left-0" : "right-0"} bottom-0 overflow-hidden`}
      >
        <div
          className={`w-50 h-auto absolute bottom-0 ${lang === "ar" ? "left-0" : " right-0 rotate-y-180"}`}
        >
          <img
            ref={flowerOneRef}
            src={FlowerOneIcon}
            alt={SITE_NAME}
            className={`w-full h-auto object-contain animate-flower-one-rotate ${isFlowerOneInView ? "active" : ""} `}
          />
        </div>
        <div
          className={`w-30 h-auto absolute bottom-0 ${lang === "ar" ? "left-0" : " right-0 rotate-y-180"}`}
        >
          <img
            ref={flowerTwoRef}
            src={FlowerTwoIcon}
            alt={SITE_NAME}
            className={`w-full h-auto object-contain animate-flower-two-rotate ${isFlowerTwoInView ? "active" : ""}`}
          />
        </div>
      </div>
      <SlideTopAnimation>
        <h2
          className="text-fm-yellow font-bold text-2xl mb-4"
          dangerouslySetInnerHTML={{
            __html: t("social.talentManagement.developementProgram.title"),
          }}
        />
      </SlideTopAnimation>
      <div className="w-full h-4 max-w-90 ">
        <img
          src={VerticalSpikeYellow}
          alt="First Mills"
          className={`w-90 h-5 object-contain object-right ${lang === "ar" ? "rotate-y-180" : ""}`}
        />
      </div>
      <div className="flex gap-4 flex-col">
        <div className="flex-1">
          <SlideTopAnimation>
            <p className="font-semibold mb-4">
              {t("social.talentManagement.developementProgram.subtitle")}
            </p>
          </SlideTopAnimation>
        </div>
        <div className="flex-1">
          <SlideTopAnimation>
            <p
              dangerouslySetInnerHTML={{
                __html: t("social.talentManagement.developementProgram.desc"),
              }}
            />
          </SlideTopAnimation>
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default DevelopmentProgram;
