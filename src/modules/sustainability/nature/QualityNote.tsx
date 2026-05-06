import FadeInAnimation from "../../common/components/animations/FadeInAnimation";
import { useTranslation } from "../../common/hooks/useTranslation";
import FlowerOneIcon from "../../../assets/vectors/flower-1.svg";
import FlowerTwoIcon from "../../../assets/vectors/flower-2.svg";
import { useLocale } from "../../common/hooks/useLocale";
import useInView from "../../common/hooks/useInView";
import { SITE_NAME } from "../../../config/constants";
import YellowSpike from "../../../assets/icons/spike-yellow.svg";

const QualityNote = () => {
  const { lang } = useLocale();
  const { t } = useTranslation("sustainability-review");

  const { ref: flowerOneRef, inView: isFlowerOneInView } =
    useInView<HTMLImageElement>({});
  const { ref: flowerTwoRef, inView: isFlowerTwoInView } =
    useInView<HTMLImageElement>({});
  return (
    <FadeInAnimation>
      <div className="relative w-full max-w-240 py-10 p-4 mx-auto bg-fm-green text-fm-yellow my-16 min-h-64 flex items-center">
        <p
          className="text-fm-yellow text-xl font-bold md:max-w-2/4 z-20 mb-20 md:mb-0"
          dangerouslySetInnerHTML={{
            __html: t("social.communities.note"),
          }}
        />
        <div
          className={`absolute w-62 h-full z-0 rotate-x-180 ${lang === "ar" ? "left-0" : "right-0"} bottom-0 overflow-hidden`}
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
        <div
          className={`absolute bottom-0 ${lang === "ar" ? "left-[20%]" : "right-[20%]"} flex items-end z-0`}
        >
          <img
            src={YellowSpike}
            className="w-6 h-auto object-contain animate-spike-wave"
          />
          <img
            src={YellowSpike}
            className="w-12 h-auto object-contain animate-spike-wave"
          />
          <img
            src={YellowSpike}
            className="w-6 h-auto object-contain animate-spike-wave"
          />
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default QualityNote;
