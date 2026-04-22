import { useTranslation } from "../../common/hooks/useTranslation";
import { SITE_NAME } from "../../../config/constants";
import YellowSpike from "../../../assets/icons/spike-yellow.svg";
// import GrayGroupOfSpikes from "../../../assets/icons/gray-group-of-spikes.svg";
// import MainButton from "../../common/components/buttons/MainButton";
import HomeHeader from "../../../assets/images/headers/home.jpg";
import HomeMobileHeader from "../../../assets/images/headers/home-mobile.jpg";
import HandImage from "../../../assets/images/home/hand.png";
import GrainOneImage from "../../../assets/images/home/grain-1.png";
import GrainTwoImage from "../../../assets/images/home/grain-2.png";
import GrainThreeImage from "../../../assets/images/home/grain-3.png";
import { useLocale } from "../../common/hooks/useLocale";

const Hero = () => {
  const { t } = useTranslation("home");
  const { lang } = useLocale();
  return (
    <>
      {/* Desktop Hero - Hidden on small screens */}
      <div className={`bg-fm-green w-full h-screen overflow-hidden hidden lg:flex ${lang === "ar" ? "flex-row" : ""} justify-center items-center relative px-4 lg:px-16 `}>
        <div className="absolute top-0 left-0 w-full h-full animate-fade-in animate-delay-4s">
          <img
            src={HomeHeader}
            alt={SITE_NAME}
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90vh] animate-fade-left animate-duration animate-duration-1_6s animate-delay-5s">
          <img
            src={HandImage}
            alt={SITE_NAME}
            className="w-full object-contain animate-bounce-up-down"
          />
          <div className="absolute left-1/2 top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2">
            <img
              src={GrainOneImage}
              alt={`Grain ${SITE_NAME}`}
              className="w-full h-full object-contain animate-fall-down"
            />
          </div>
          <div className="absolute left-1/3 top-[48%] w-10 h-10 -translate-x-1/2 -translate-y-1/2">
            <img
              src={GrainTwoImage}
              alt={`Grain ${SITE_NAME}`}
              className="w-full h-full object-contain animate-fall-down animate-delay-1s"
            />
          </div>
          <div className="absolute left-[65%] top-[60%] w-8 h-8 -translate-x-1/2 -translate-y-1/2">
            <img
              src={GrainThreeImage}
              alt={`Grain ${SITE_NAME}`}
              className="w-full h-full object-contain animate-fall-down animate-delay-2s"
            />
          </div>
        </div>
        <div className={` w-full h-full mx-auto max-w-337.5 min-h-screen flex ${lang === "ar" ? "flex-row-reverse" : ""} justify-center items-center animate-move-left-40 animate-delay-4s z-10`}>
          <div className="text-white flex-1 flex flex-col max-w-90">
            <div className="overflow-hidden">
              <h1 className="text-2xl font-thin animate-move-up animate-delay-3s">
                {t("hero.title")}
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className={`text-5xl font-bold mt-4 animate-move-up animate-delay-3s py-2 ${lang === "ar" ? "py-2" : ""}`}>
                {t("hero.subtitle1")}
              </p>
            </div>
            <div className="overflow-hidden">
              <p className={`text-5xl font-bold animate-move-up animate-delay-3s  ${lang === "ar" ? "py-2" : ""}`}>
                {t("hero.subtitle2")}
              </p>
            </div>
            {/* <div className="animate-fade-in animate-delay-5s">
              <MainButton onClick={() => toggleModel(true)} className="mt-12">
                {t("hero.modalButton")}
              </MainButton>
            </div> */}
          </div>
          <div className="flex-1 flex justify-end items-center h-full pt-10 translate-y-[3vh]">
            {/* <div className="rounded-3xl overflow-hidden w-fit h-[80vh] hover:scale-105 duration-500">
              <img
                src={HomeHero}
                alt={SITE_NAME}
                className="w-auto h-full object-cover animate-fade-in animate-delay-5s"
              />
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end">
          <div className="animate-fade-top animate-delay-1s">
            <div className="w-11.25 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="animate-fade-top">
            <div className="w-21.25 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="animate-fade-top animate-delay-2s">
            <div className="w-11.25 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-4 right-4 z-0">
          <img
            src={GrayGroupOfSpikes}
            alt={`Group of Spikes ${SITE_NAME}`}
            className="w-auto h-full"
          />
        </div> */}
      </div>

      {/* Mobile Hero - Hidden on md and above */}
      <div className="relative w-full h-screen overflow-hidden bg-fm-green flex lg:hidden justify-center items-center pt-42">
        <div className="absolute top-0 left-0 w-full h-full animate-fade-in animate-delay-4s">
          <img
            src={HomeMobileHeader}
            alt={SITE_NAME}
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="w-full  mx-auto max-w-337.5 max-h-screen flex flex-col items-center z-10 mb-4">
          <div className="text-white flex flex-col w-full h-[50%] flex-1 px-4">
            <div className="overflow-hidden">
              <h1 className="text-lg font-thin animate-move-up animate-delay-3s">
                {t("hero.title")}
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-3xl font-bold animate-move-up animate-delay-3s">
                {t("hero.subtitle1")}
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="text-3xl font-bold animate-move-up animate-delay-3s">
                {t("hero.subtitle2")}
              </p>
            </div>
            {/* <div className="animate-fade-in animate-delay-5s">
              <button
                onClick={() => toggleModel(true)}
                className="bg-linear-to-r from-fm-yellow to-fm-green hover:to-fm-yellow transition-colors duration-500 text-white w-fit px-4 py-1 text-lg font-bold rounded-tl-md mt-6"
              >
                {t("hero.modalButton")}
              </button>
            </div> */}
          </div>
          <div className="flex-1 flex w-full justify-end pb-24 pt-14 relative animate-fade-in animate-delay-5s">
            {/* <div className="rounded-3xl overflow-hidden w-full h-auto duration-500 max-w-125">
              <img
                src={HomeHero}
                alt={SITE_NAME}
                className="w-full h-auto object-cover animate-fade-in animate-delay-5s"
              />
            </div> */}
            <img
              src={HandImage}
              alt={SITE_NAME}
              className="w-full object-contain animate-bounce-up-down"
            />
            <div className="absolute left-1/2 top-[30%] w-5 sm:w-8 h-5 sm:h-8 -translate-x-1/2 -translate-y-1/2">
              <img
                src={GrainOneImage}
                alt={`Grain ${SITE_NAME}`}
                className="w-full h-full object-contain animate-fall-down"
              />
            </div>
            <div className="absolute left-[25%] top-[45%] w-5 sm:w-8 h-5 sm:h-8 -translate-x-1/2 -translate-y-1/2">
              <img
                src={GrainTwoImage}
                alt={`Grain ${SITE_NAME}`}
                className="w-full h-full object-contain animate-fall-down animate-delay-1s"
              />
            </div>
            <div className="absolute left-[65%] top-[60%] w-4 sm:w-8 h-4 sm:h-8 -translate-x-1/2 -translate-y-1/2">
              <img
                src={GrainThreeImage}
                alt={`Grain ${SITE_NAME}`}
                className="w-full h-full object-contain animate-fall-down animate-delay-2s"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end z-10">
          <div className="animate-fade-top animate-delay-1s">
            <div className="w-7.5 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="animate-fade-top">
            <div className="w-15 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="animate-fade-top animate-delay-2s">
            <div className="w-7.5 h-auto animate-spike-wave animate-delay-5s">
              <img
                src={YellowSpike}
                alt={`Spike ${SITE_NAME}`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
