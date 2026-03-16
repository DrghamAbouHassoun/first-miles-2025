import { useContext } from "react";
import MainLogo from "../../assets/logo/main-logo.svg";
import SecondaryLogo from "../../assets/logo/secondary-logo.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import { pages } from "../../router/Router";
import { RouterContext } from "../../contexts/RouterProvider";
import { SITE_NAME } from "../../config/constants";
import { useTranslation } from "../../hooks/useTranslation";
import { useLocale } from "../../hooks/useLocale";
import { Download, Grip } from "lucide-react";
import { MenuContext } from "../../contexts/MenuProvider";

const Navbar = () => {
  const { currentRoute, navigate } = useContext(RouterContext);
  const { lang, setLang } = useLocale();
  const { t } = useTranslation("common");
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="w-full absolute top-0">
      <nav className="mx-auto w-full max-w-337.5 flex justify-between p-4">
        <button className="w-32 lg:w-24" onClick={() => navigate("Home")}>
          <img src={MainLogo} alt={SITE_NAME} className="hidden lg:block" />
          <img src={SecondaryLogo} alt={SITE_NAME} className="block lg:hidden" />
        </button>
        <div className="hidden lg:flex items-center gap-6">
          {pages.map((pge) => (
            <button
              key={pge.path}
              className={`text-sm hover:text-fm-yellow transition-all duration-500 ${currentRoute === pge.path ? "text-fm-yellow" : "text-white"}`}
              onClick={() => navigate(`${pge.path}`)}
            >
              {t(`nav.${pge.path}`)}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          <button
            className="text-white hover:text-fm-yellow transition-all duration-500 font-sans"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          >
            {lang === "ar" ? "English" : "العربية"}
          </button>
          <button className="text-white hover:text-fm-yellow transition-all duration-500">
            <Download />
          </button>
          <button className="text-white hover:text-fm-yellow transition-all duration-500 lg:hidden" onClick={() => toggleMenu(true)}>
            <Grip size={32} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
