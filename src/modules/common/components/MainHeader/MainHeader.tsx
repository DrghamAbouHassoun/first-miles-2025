import { useLocale } from "../../hooks/useLocale";
import YellowSpike from "../../../../assets/icons/spike-yellow.svg";
import GraySpike from "../../../../assets/icons/spike-gray.svg";
// import GrayGroupOfSpikes from "../../../../assets/icons/gray-group-of-spikes.svg";
import VerticalSpike from "../../../../assets/icons/vertical-spike.svg";
import { SITE_NAME } from "../../../../config/constants";
import Container from "../Container/Container";
import SlideTopAnimation from "../animations/SlideTopAnimation";
import SlideAsideAnimation from "../animations/SlideAsideAnimation";
import SlideBottomAnimation from "../animations/SlideBottomAnimation";
import FlowerOne from "../../../../assets/vectors/flower-1.svg";
import FlowerTwo from "../../../../assets/vectors/flower-2.svg";
import useInView from "../../hooks/useInView";

interface MainHeaderProps {
  image: string;
  title: string;
  subtitle: string;
}

const MainHeader = ({ image, title, subtitle }: MainHeaderProps) => {
  const { lang } = useLocale();
  const { ref: flowerOneRef, inView: flowerOneInView } =
    useInView<HTMLImageElement>();
  const { ref: flowerTwoRef, inView: flowerTwoInView } =
    useInView<HTMLImageElement>();
  return (
    <div className="w-full h-screen relative overflow-y-hidden z-10">
      <div
        className={`absolute w-100 h-auto bottom-0 z-30 ${lang === "ar" ? "right-0" : "left-0"}`}
      >
        <div
          className={`w-50 h-auto object-contain absolute bottom-0 ${lang === "ar" ? "rotate-y-180" : ""}`}
        >
          <img
            src={FlowerOne}
            alt={`Flower ${SITE_NAME}`}
            className={` ${flowerOneInView ? "animate-flower-one-rotate active" : ""}`}
            ref={flowerOneRef}
          />
        </div>
        <div className={`w-32 h-auto object-contain absolute bottom-0 ${lang === "ar" ? "rotate-y-180" : ""}`}>
          <img
            src={FlowerTwo}
            alt={`Flower ${SITE_NAME}`}
            className={`w-full ${flowerTwoInView ? "animate-flower-two-rotate active" : ""}`}
            ref={flowerTwoRef}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <div className="absolute w-full h-full"></div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div
        className={`absolute h-full bottom-0 flex items-center  ${lang === "ar" ? "bg-linear-270 right-0 rounded-tl-2xl" : "bg-linear-90 left-0 rounded-tr-2xl"} z-20  from-fm-green/60 to-fm-green/0 gap-8 w-full max-w-200 pt-8`}
      >
        <div className="w-full sm:w-full sm:max-w-140  h-fit ">
          <Container>
            <SlideTopAnimation className="animate-delay-1s">
              <h1 className="text-[30px] md:text-[38px] font-bold text-white lg:px-6">
                {title}
              </h1>
            </SlideTopAnimation>
          </Container>
          <SlideAsideAnimation
            side={lang === "ar" ? "left" : "right"}
            level="100"
            className="w-full"
          >
            <div className="max-w-[90%] md:max-w-130 my-2 ">
              <img
                src={VerticalSpike}
                className={`w-full h-auto object-contain ${lang === "ar" ? "rotate-y-180" : ""}`}
              />
            </div>
          </SlideAsideAnimation>
          <Container>
            <SlideBottomAnimation className="animate-delay-1s" level="50">
              <p className="text-fm-yellow max-w-100 min-h-12.5 lg:px-6">
                {subtitle}
              </p>
            </SlideBottomAnimation>
          </Container>
        </div>
      </div>
      <div
        className={`absolute bottom-0 ${lang === "ar" ? "left-5" : "right-5"} flex items-end sm:w-auto justify-center sm:justify-center z-20 `}
      >
        {/* <div className="absolute">
          <img
            src={GrayGroupOfSpikes}
            alt={`Group of Spikes ${SITE_NAME}`}
            className="w-25 h-full translate-y-[76%]"
          />
        </div> */}
        <div
          className={`${lang === "ar" ? "-translate-x-6" : "translate-x-6"} w-10 h-auto animate-spike-wave animate-delay-5s`}
        >
          <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={GraySpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute -translate-x-5">
          <div className="w-20 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={GraySpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div
          className={`${lang === "ar" ? "translate-x-4" : "translate-x-20"}`}
        >
          <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={GraySpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div
          className={`${lang === "ar" ? "-translate-x-4" : "translate-x-4"} w-10 h-auto animate-spike-wave animate-delay-5s`}
        >
          <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={YellowSpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="">
          <div className="w-20 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={YellowSpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div
          className={`${lang === "ar" ? "translate-x-4" : "-translate-x-4"}`}
        >
          <div className="w-10 h-auto animate-spike-wave animate-delay-5s">
            <img
              src={YellowSpike}
              alt={`Spike ${SITE_NAME}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
