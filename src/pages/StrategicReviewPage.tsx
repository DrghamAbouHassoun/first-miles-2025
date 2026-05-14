import { useEffect } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import StrategicReviewHeader from "../assets/images/headers/strategic-review.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import MainButton from "../modules/common/components/buttons/MainButton";
import BusinessModelTab from "../modules/strategic-review/components/tabs/BusinessModelTab";
import StrategyKPIsTab from "../modules/strategic-review/components/tabs/StrategyKPIsTab";
import SaudiVision2030Tab from "../modules/strategic-review/components/tabs/SaudiVision2030Tab";
import TechnologyInnovationTab from "../modules/strategic-review/components/tabs/TechnologyInnovationTab";
import { useTabNavigation } from "../modules/common/hooks/useTabNavigation";

type StrategicReviewSubPage =
  | "businessModel"
  | "strategyKPIs"
  | "saudiVision2030"
  | "technologyInnovation";

const STRATEGIC_REVIEW_TABS: StrategicReviewSubPage[] = [
  "businessModel",
  "strategyKPIs",
  "saudiVision2030",
  "technologyInnovation",
];

const StrategicReviewPage = () => {
  const { t } = useTranslation("strategic-review");
  const { activeTab, registerPageTabs, setActiveTab } = useTabNavigation();

  useEffect(() => {
    registerPageTabs(STRATEGIC_REVIEW_TABS, "businessModel");
  }, [registerPageTabs]);

  const tabs: { key: StrategicReviewSubPage; label: string }[] = [
    { key: "businessModel", label: t("tabs.businessModel") },
    { key: "strategyKPIs", label: t("tabs.strategyKPIs") },
    { key: "saudiVision2030", label: t("tabs.saudiVision2030") },
    { key: "technologyInnovation", label: t("tabs.technologyInnovation") },
  ];

  return (
    <div className="min-h-screen">
      <MainHeader
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={StrategicReviewHeader}
      />
      <div
        className={`flex flex-wrap w-full gap-4 justify-center items-center bg-fm-green p-6  border-b border-fm-green/20`}
      >
        {tabs.map((tab) => (
          <MainButton
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            isActive={activeTab === tab.key}
            className="w-full md:w-auto"
          >
            {tab.label}
          </MainButton>
        ))}
      </div>
      <div>
        {activeTab === "businessModel" && <BusinessModelTab />}
        {activeTab === "strategyKPIs" && <StrategyKPIsTab />}
        {activeTab === "saudiVision2030" && <SaudiVision2030Tab />}
        {activeTab === "technologyInnovation" && <TechnologyInnovationTab />}
      </div>
    </div>
  );
};

export default StrategicReviewPage;
