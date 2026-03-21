import { useContext } from "react";
import { pages } from "../../../../router/Router";
import { RouterContext } from "../../contexts/RouterProvider";
import { useTranslation } from "../../hooks/useTranslation";
import { MenuContext } from "../../contexts/MenuProvider";
import { X } from "lucide-react";

const Menu = () => {
  const { navigate } = useContext(RouterContext);
  const { t } = useTranslation("common");
  const { isOpen, toggleMenu } = useContext(MenuContext);
  return (
    <div className={`w-full h-screen overflow-y-auto fixed z-50 top-0 left-0 bg-fm-green flex justify-center items-center ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-700`}>
      <button type="button" className="absolute top-4 right-4 text-white hover:text-fm-yellow transition-all duration-500 text-2xl" onClick={() => toggleMenu(false)}>
        <X size={32} />
      </button>
      <div className="flex justify-center items-center flex-col gap-6">
        {pages.map((pge) => (
          <button
            key={pge.path}
            className="text-white hover:text-fm-yellow transition-all duration-500 text-2xl p-4"
            onClick={() => navigate(pge.path)}
          >
            {t(`nav.${pge.path}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
