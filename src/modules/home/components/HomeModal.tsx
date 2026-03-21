import { useTranslation } from "../../common/hooks/useTranslation";
import ThemeOfTheYearImage from "../../../assets/images/home/theme-of-the-year.png";
import { SITE_NAME } from "../../../config/constants";
import { X } from "lucide-react";
import { useContext } from "react";
import { HomeModalContext } from "../contexts/HomeModalProvider";
import { useLocale } from "../../common/hooks/useLocale";

const HomeModal = () => {
  const { isOpen, toggleModel } = useContext(HomeModalContext);
  const { t } = useTranslation("home");
  const { lang } = useLocale();
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-black/25 z-40 flex justify-end ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-500`}
    >
      <button
        type="button"
        className={`absolute top-4 lg:top-16 ${lang === "ar" ? "left-4 lg:left-16" : "right-4 lg:right-16"} text-fm-yellow z-50 hover:scale-110 duration-300`}
        onClick={() => toggleModel(false)}
      >
        <X size={32} />
      </button>
      <div
        className={`w-full max-w-335 h-full bg-fm-green ${isOpen ? "translate-x-0" : lang === "ar" ? "-translate-x-full" : "translate-x-full"} transition-transform duration-700`}
      >
        <div className="flex flex-col lg:flex-row h-full w-full overflow-y-auto lg:overflow-y-hidden">
          <div className="py-16 px-4 lg:px-16 flex-1 lg:h-full lg:overflow-y-auto hidden-scrollbar">
            <h3 className={`text-2xl text-fm-yellow font-bold animate-fade-in animate-delay-1s ${isOpen ? "block" : "hidden"}`}>
              {t("theme.theme-of-the-year")}
            </h3>
            <h4 className={`text-4xl text-white font-bold mt-4 animate-fade-in animate-delay-1s ${isOpen ? "block" : "hidden"}`}>
              {t("theme.subtitle1")} <br /> {t("theme.subtitle2")}
            </h4>
            <div className="mt-8 text-white text-lg font-semibold space-y-4">
              <p className={`animate-fade-in animate-duration-1_4s animate-delay-1_4s ${isOpen ? "block" : "hidden"}`}>{t("theme.p1")}</p>
              <p className={`animate-fade-in animate-duration-1_4s animate-delay-1_8s ${isOpen ? "block" : "hidden"}`}>{t("theme.p2")}</p>
              <p className={`animate-fade-in animate-duration-1_4s animate-delay-2_2s ${isOpen ? "block" : "hidden"}`}>{t("theme.p3")}</p>
              <p className={`animate-fade-in animate-duration-1_4s animate-delay-2_6s ${isOpen ? "block" : "hidden"}`}>{t("theme.p4")}</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-end h-full pt-10">
            <img
              src={ThemeOfTheYearImage}
              alt={`Theme of the Year ${SITE_NAME}`}
              className={`w-full h-auto object-contain max-w-100 lg:max-w-auto animate-fade-in animate-delay-1s ${isOpen ? "block" : "hidden"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
