import { useTranslation } from "../../common/hooks/useTranslation";
import { SITE_NAME } from "../../../config/constants";
import ThemeOfTheYearBg from "../../../assets/images/backgrounds/theme-of-the-year.jpg";
import FadeInAnimation from "../../common/components/animations/FadeInAnimation";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";

const ThemeOfTheYear = () => {
  const { t } = useTranslation("home");

  return (
    <div className="relative">
      <div className="w-full bg-linear-90 from-fm-green to-fm-green/80">
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          <div className="py-16 px-6 md:px-12 lg:px-16 xl:px-24 flex-1 flex flex-col justify-center">
            <FadeInAnimation>
              <h3 className="text-5xl text-fm-yellow font-bold animate-fade-in">
                {t("theme.theme-of-the-year")}
              </h3>
            </FadeInAnimation>
            <FadeInAnimation>
              <h4 className="text-4xl text-white font-bold mt-4 animate-fade-in">
                {t("theme.subtitle1")} <br /> {t("theme.subtitle2")}
              </h4>
            </FadeInAnimation>
            <div className="mt-8 text-white text-md font-semibold space-y-4 max-w-2xl">
              <FadeInAnimation>
                <p className="animate-fade-in">{t("theme.p1")}</p>
              </FadeInAnimation>
              <FadeInAnimation>
                <p className="animate-fade-in">{t("theme.p2")}</p>
              </FadeInAnimation>
              <FadeInAnimation>
                <p className="animate-fade-in">{t("theme.p3")}</p>
              </FadeInAnimation>
              <FadeInAnimation>
                <p className="animate-fade-in">{t("theme.p4")}</p>
              </FadeInAnimation>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-end pt-10 lg:pt-0">
            {/* <img
            src={ThemeOfTheYearImage}
            alt={`Theme of the Year ${SITE_NAME}`}
            className="w-full h-auto object-contain max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          /> */}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={ThemeOfTheYearBg}
          alt={SITE_NAME}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-end w-full h-auto absolute bottom-0 right-0 z-0 pointer-events-none">
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default ThemeOfTheYear;
