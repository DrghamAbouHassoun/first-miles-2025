import { useState } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import LeadershipHeader from "../assets/images/headers/leadership.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import MainButton from "../modules/common/components/buttons/MainButton";
import ChairmanTab from "../modules/leadership/components/ChairmanTab";
import CEOTab from "../modules/leadership/components/CEOTab";
import CFOTab from "../modules/leadership/components/CFOTab";

type LeadershipTab = "chairman" | "ceo" | "cfo";

const LeadershipPage = () => {
  const { t } = useTranslation("leadership");
  const { lang } = useLocale();
  const [activeTab, setActiveTab] = useState<LeadershipTab>("chairman");

  const tabs: { key: LeadershipTab; label: string }[] = [
    { key: "chairman", label: t("tabs.chairman") },
    { key: "ceo", label: t("tabs.ceo") },
    { key: "cfo", label: t("tabs.cfo") },
  ];

  return (
    <div className="min-h-screen">
      <MainHeader
        image={LeadershipHeader}
        title={t("hero.title")}
        subtitle=""
      />
      <div
        className={`flex flex-wrap w-full gap-4 justify-center items-center bg-fm-green p-6 ${lang === "ar" ? "flex-row-reverse" : "flex-row"} border-b border-fm-green/20`}
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
        {activeTab === "chairman" && <ChairmanTab />}
        {activeTab === "ceo" && <CEOTab />}
        {activeTab === "cfo" && <CFOTab />}
      </div>
    </div>
  );
};

export default LeadershipPage;
