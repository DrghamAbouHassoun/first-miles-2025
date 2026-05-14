import { useEffect } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import SustainabilityReviewHeader from "../assets/images/headers/sustainability-review.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import MainButton from "../modules/common/components/buttons/MainButton";
import Approach from "../modules/sustainability/Approach";
import Strategy from "../modules/sustainability/Strategy";
import Topics from "../modules/sustainability/Topics";
import Nature from "../modules/sustainability/Nature";
import Social from "../modules/sustainability/Social";
import { useTabNavigation } from "../modules/common/hooks/useTabNavigation";

type SustainabilityTab = "approach" | "strategy" | "topics" | "nature" | "social";

const SUSTAINABILITY_TABS: SustainabilityTab[] = [
  "approach",
  "strategy",
  "topics",
  "nature",
  "social",
];

const SustainabilityReviewPage = () => {
  const { t } = useTranslation("sustainability-review");
  const { activeTab, registerPageTabs, setActiveTab } = useTabNavigation();

  useEffect(() => {
    registerPageTabs(SUSTAINABILITY_TABS, "approach");
  }, [registerPageTabs]);

  const tabs: { key: SustainabilityTab; label: string }[] = [
    { key: "approach", label: t("tabs.approach") },
    { key: "strategy", label: t("tabs.strategy") },
    { key: "topics", label: t("tabs.topics") },
    { key: "nature", label: t("tabs.nature") },
    { key: "social", label: t("tabs.social") },
  ];

  return (
    <div className="min-h-screen">
      <MainHeader
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={SustainabilityReviewHeader}
      />
      <div
        className={`flex flex-wrap w-full gap-4 justify-center items-center bg-fm-green p-6 flex-row border-b border-fm-green/20`}
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
      <div className="mt-16">
        {activeTab === "approach" && <Approach />}
        {activeTab === "strategy" && <Strategy />}
        {activeTab === "topics" && <Topics />}
        {activeTab === "nature" && <Nature />}
        {activeTab === "social" && <Social />}
      </div>
    </div>
  );
};

export default SustainabilityReviewPage;
