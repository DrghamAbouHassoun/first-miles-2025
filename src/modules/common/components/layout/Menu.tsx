import { useContext, useEffect } from "react";
import { pages } from "../../../../router/Router";
import { RouterContext } from "../../contexts/RouterProvider";
import { useTranslation } from "../../hooks/useTranslation";
import { MenuContext } from "../../contexts/MenuProvider";
import { X } from "lucide-react";
import { socialLinksData } from "./SocialLinks";

const Menu = () => {
  const { navigate, currentRoute } = useContext(RouterContext);
  const { t } = useTranslation("common");
  const { isOpen, toggleMenu } = useContext(MenuContext);

  useEffect(() => {
    toggleMenu(false);
  }, [currentRoute])

  return (
    <div className={`w-full h-screen overflow-y-auto fixed z-50 top-0 left-0 bg-fm-green flex flex-col justify-center items-center gap-8 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} transition-all duration-700`}>
      <button type="button" className="absolute top-4 right-4 text-white hover:text-fm-yellow transition-all duration-500 text-2xl" onClick={() => toggleMenu(false)}>
        <X size={32} />
      </button>
      <div className="flex justify-center items-center flex-col gap-6">
        {pages.map((pge) => (
          <button
            key={pge.path}
            className={`${currentRoute === pge.path ? "text-fm-yellow" : "text-white hover:text-fm-yellow"} transition-all duration-500 text-2xl`}
            onClick={() => navigate(pge.path)}
          >
            {t(`nav.${pge.path}`)}
          </button>
        ))}
      </div>
      <div className={`flex bg-fm-yellow rounded-md `}>
        {socialLinksData.map((link) => (
          <a
            href={link.href}
            target="_blank"
            key={link.name}
            className="flex items-center p-2 w-9.5 h-9.5"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
