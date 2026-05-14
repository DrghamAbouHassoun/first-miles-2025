import { SITE_NAME } from "../../../config/constants";
import VerticalSpike from "../../../assets/icons/vertical-spike.svg";
import QuotationIcon from "../../../assets/icons/quotation.svg";
// import useWindowDimensions from "../../common/hooks/useWindowDimensions";
import FlowerOneIcon from "../../../assets/vectors/flower-1.svg";
import FlowerTwoIcon from "../../../assets/vectors/flower-2.svg";
import { useLocale } from "../../common/hooks/useLocale";
import useInView from "../../common/hooks/useInView";

interface LeadershipHeaderProps {
  imageUrl: string;
  imageWidth?: number;
  imageScale?: number;
  imageTranslateX?: number;
  imageTranslateY?: number;
  title: string;
  subtitle?: string;
  quotation?: string;
  isCEOorChairman?: boolean;
  isCEO?: boolean;
}

const LeadershipHeader = ({
  imageUrl,
  // imageWidth = 250,
  // imageScale = 1,
  // imageTranslateX = 0,
  // imageTranslateY = 0,
  title,
  subtitle,
  quotation,
  isCEOorChairman = false,
  isCEO = false,
}: LeadershipHeaderProps) => {
  // const { width: screenWidth } = useWindowDimensions();
  const { lang } = useLocale();

  const { ref: flowerOneRef, inView: isFlowerOneInView } =
    useInView<HTMLImageElement>({});
  const { ref: flowerTwoRef, inView: isFlowerTwoInView } =
    useInView<HTMLImageElement>({});
  const { ref: imageRef, inView: isImageInView } = useInView<HTMLDivElement>(
    {},
  );
  const { ref: infoRef, inView: isInfoInView } = useInView<HTMLDivElement>({});
  const { ref: quotationRef, inView: isQuotationInView } =
    useInView<HTMLDivElement>({});

  return (
    <div className="w-full bg-fm-green text-white flex flex-col-reverse lg:items-center lg:flex-row overflow-x-clip relative min-h-100 lg:max-h-40">
      {/* <img
        src={TwoLeavesVector}
        alt={SITE_NAME}
        className="absolute bottom-0 right-0 w-52 h-auto pointer-events-none select-none"
      /> */}
      <div className={`absolute w-62 h-full ${lang === "ar" ? "left-0" : "right-0"} bottom-0 overflow-hidden`}>
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
        ref={imageRef}
        className={` flex relative max-w-90 lg:max-w-none justify-center lg:justify-start lg:w-110 ${lang === "ar" ? "animation-slide-left-50" : "animation-slide-right-50"} ${isImageInView ? "active" : ""}`}
      >
        <div className={`${lang === "en" ? "rotate-y-180" : ""}`}>
          <img
            src={imageUrl}
            alt={`${title} | ${SITE_NAME}`}
            className={`w-full h-auto object-contain object-bottom ${isCEOorChairman ? isCEO ? "lg:-translate-y-24.5" : "lg:-translate-y-25.5" : "lg:-translate-y-23"} lg:translate-x-1`}
          />
        </div>
      </div>
      <div className="flex-1 flex w-full flex-col lg:items-center gap-4 xl:gap-0 xl:flex-row lg:px-16 pt-16 xl:pt-0 px-4 ">
        <div
          ref={infoRef}
          className="xl:flex-1 flex flex-col justify-center lg:items-center lg:text-center max-w-150"
        >
          <h2
            className={`text-lg font-bold text-fm-yellow animation-slide-top-50 animate-delay-1s ${isInfoInView ? "active" : ""}`}
          >
            {title}
          </h2>
          <p
            className={`animation-slide-top-50 animate-delay-1s ${isInfoInView ? "active" : ""}`}
          >
            {subtitle}
          </p>
          <div className={`w-full overflow-hidden ${lang === "ar" ? "rotate-y-180" : ""}`}>
            <img
              src={VerticalSpike}
              alt={SITE_NAME}
              className={`w-full object-contain ${lang === "ar" ? "animation-slide-right-100": "animation-slide-right-100"} ${isInfoInView ? "active" : ""}`}
            />
          </div>
        </div>
        <div className="flex-1 flex lg:justify-center items-center pr-4 text-lg">
          <div ref={quotationRef} className="flex items-start gap-2 max-w-150">
            <div className={`w-55 xl:mb-4 ${lang === "ar" ? "rotate-y-180" : ""}`}>
              <img
                src={QuotationIcon}
                alt={SITE_NAME}
                className={`w-full h-auto  animation-popup ${isQuotationInView ? "active" : ""}`}
              />
            </div>
            <p
              className={`font-bold animation-slide-top-50 ${isQuotationInView ? "active" : ""}`}
            >
              {quotation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipHeader;
