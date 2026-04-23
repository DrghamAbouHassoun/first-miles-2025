import { useState } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import OperatingReviewHeader from "../assets/images/headers/operating-review.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import MainButton from "../modules/common/components/buttons/MainButton";
import FirstMillsBrandTab from "../modules/operatingReview/components/FirstMillsBrandTab";
import AloulaBrandTab from "../modules/operatingReview/components/AloulaBrandTab";
import NaffaaBrandTab from "../modules/operatingReview/components/NaffaaBrandTab";

type OperatingReviewTab = "firstMillsBrand" | "aloulaBrand" | "naffaaBrand";

const OperatingReviewPage = () => {
  const { t } = useTranslation("operating-review");
  const [activeTab, setActiveTab] = useState<OperatingReviewTab>("firstMillsBrand");

  const tabs: { key: OperatingReviewTab; label: string }[] = [
    { key: "firstMillsBrand", label: t("tabs.firstMillsBrand") },
    { key: "aloulaBrand", label: t("tabs.aloulaBrand") },
    { key: "naffaaBrand", label: t("tabs.naffaaBrand") },
  ];

  return (
    <div className="min-h-screen">
      <MainHeader
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        image={OperatingReviewHeader}
      />
      <div className="flex flex-wrap w-full gap-4 justify-center items-center bg-fm-green p-6 border-b border-fm-green/20">
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
        {activeTab === "firstMillsBrand" && <FirstMillsBrandTab />}
        {activeTab === "aloulaBrand" && <AloulaBrandTab />}
        {activeTab === "naffaaBrand" && <NaffaaBrandTab />}
      </div>
    </div>
  );
};

export default OperatingReviewPage;
