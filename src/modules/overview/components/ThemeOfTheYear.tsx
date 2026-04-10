import { useTranslation } from "../../common/hooks/useTranslation";
import ThemeOfTheYearImage from "../../../assets/images/home/theme-of-the-year.png";
import { SITE_NAME } from "../../../config/constants";

const ThemeOfTheYear = () => {
  const { t } = useTranslation("home");

  return (
    <div className="w-full bg-fm-green">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="py-16 px-6 md:px-12 lg:px-16 xl:px-24 flex-1 flex flex-col justify-center">
          <h3 className="text-2xl text-fm-yellow font-bold animate-fade-in">
            {t("theme.theme-of-the-year")}
          </h3>
          <h4 className="text-4xl text-white font-bold mt-4 animate-fade-in">
            {t("theme.subtitle1")} <br /> {t("theme.subtitle2")}
          </h4>
          <div className="mt-8 text-white text-md font-semibold space-y-4 max-w-2xl">
            <p className="animate-fade-in">{t("theme.p1")}</p>
            <p className="animate-fade-in">{t("theme.p2")}</p>
            <p className="animate-fade-in">{t("theme.p3")}</p>
            <p className="animate-fade-in">{t("theme.p4")}</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-end pt-10 lg:pt-0">
          <img
            src={ThemeOfTheYearImage}
            alt={`Theme of the Year ${SITE_NAME}`}
            className="w-full h-auto object-contain max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeOfTheYear;
