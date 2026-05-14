import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useLocale } from "../../hooks/useLocale";
import { useContext, useEffect, useState } from "react";
import { RouterContext } from "../../contexts/RouterProvider";
import { pages } from "../../../../router/Router";
import { useTabNavigation } from "../../hooks/useTabNavigation";

const NavigatorButtons = () => {
  const { lang } = useLocale();
  const { currentRoute, navigate } = useContext(RouterContext);
  const { tabs, activeTab, setActiveTab } = useTabNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (currentRoute !== "Home" && currentRoute !== "") {
      setIsVisible(window.scrollY > 100);
    }
  }

  const handleNavigateTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleNavigateNextPage = () => {
    if (tabs.length > 0) {
      const currentTabIndex = tabs.indexOf(activeTab);
      if (currentTabIndex !== -1 && currentTabIndex < tabs.length - 1) {
        window.scrollTo({ top: 0 });
        setActiveTab(tabs[currentTabIndex + 1]);
        return;
      }
    }
    const currentIndex = pages.findIndex((pge) => pge.path === currentRoute);
    if (currentIndex !== -1) {
      const nextPage = pages[currentIndex + 1];
      if (nextPage) {
        window.scrollTo({ top: 0 });
        navigate(nextPage.path);
      }
    }
  }

  const handleNavigatePreviousPage = () => {
    if (tabs.length > 0) {
      const currentTabIndex = tabs.indexOf(activeTab);
      if (currentTabIndex > 0) {
        window.scrollTo({ top: 0 });
        setActiveTab(tabs[currentTabIndex - 1]);
        return;
      }
    }
    const currentIndex = pages.findIndex((pge) => pge.path === currentRoute);
    if (currentIndex !== -1) {
      const previousPage = pages[currentIndex - 1];
      if (previousPage) {
        window.scrollTo({ top: 0 });
        navigate(previousPage.path);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [currentRoute])

  return (
    <div
      className={`fixed bottom-4 lg:bottom-8 ${lang === "ar" ? "left-4 lg:left-8" : "right-4 lg:right-8"} z-40 flex flex-col ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-500`}
    >
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center rounded-full text-fm-yellow bg-fm-yellow-100 border-2 border-fm-yellow transition-all duration-500 hover:scale-110"
          onClick={handleNavigateTop}
        >
          <ArrowUp size={24} />
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center rounded-full text-fm-yellow bg-fm-yellow-100 border-2 border-fm-yellow transition-all duration-500 hover:scale-110"
          onClick={handleNavigatePreviousPage}
        >
          {lang === "ar" ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
        </button>
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center rounded-full text-fm-yellow bg-fm-yellow-100 border-2 border-fm-yellow transition-all duration-500 hover:scale-110"
          onClick={handleNavigateNextPage}
        >
          {lang === "ar" ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
        </button>
      </div>
    </div>
  );
};

export default NavigatorButtons;
