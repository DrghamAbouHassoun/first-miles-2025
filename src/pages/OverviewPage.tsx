import { useState } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import OverviewHeaderImage from "../assets/images/headers/overview.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import YearInReview from "../modules/overview/components/YearInReview";
import GeographicPresence from "../modules/overview/components/GeographicPresence";
import InvestmentCase from "../modules/overview/components/InvestmentCase";
import StakeholderEngagement from "../modules/overview/components/StakeholderEngagement";
import ThemeOfTheYear from "../modules/overview/components/ThemeOfTheYear";
import MainButton from "../modules/common/components/buttons/MainButton";
import AtAGlanceTab from "../modules/overview/components/AtAGlanceTab";

type OverviewSubPage =
  | "atAGlance"
  | "themeOfTheYear"
  | "yearInReview"
  | "geographicPresence"
  | "investmentCase"
  | "stakeholderEngagement";

const OverviewPage = () => {
  const { t } = useTranslation("overview");
  const [subPage, setSubPage] = useState<OverviewSubPage>("themeOfTheYear");

  const tabs: { key: OverviewSubPage; label: string }[] = [
    { key: "themeOfTheYear", label: t("tabs.themeOfTheYear") },
    { key: "atAGlance", label: t("tabs.atAGlance") },
    { key: "yearInReview", label: t("tabs.yearInReview") },
    { key: "geographicPresence", label: t("tabs.geographicPresence") },
    { key: "investmentCase", label: t("tabs.investmentCase") },
    { key: "stakeholderEngagement", label: t("tabs.stakeholderEngagement") },
  ];

  return (
    <div className="min-h-screen">
      <MainHeader
        image={OverviewHeaderImage}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <div
        className={`flex flex-wrap w-full gap-4 justify-center items-center bg-fm-green p-6 border-b border-fm-green/20`}
      >
        {tabs.map((tab) => (
          <MainButton
            key={tab.key}
            onClick={() => setSubPage(tab.key)}
            isActive={subPage === tab.key}
            className="w-full md:w-auto"
          >
            {tab.label}
          </MainButton>
        ))}
      </div>
      <div>
        {subPage === "themeOfTheYear" && <ThemeOfTheYear />}
        {subPage === "atAGlance" && <AtAGlanceTab />}
        {subPage === "yearInReview" && <YearInReview />}
        {subPage === "geographicPresence" && <GeographicPresence />}
        {subPage === "investmentCase" && <InvestmentCase />}
        {subPage === "stakeholderEngagement" && <StakeholderEngagement />}
      </div>
    </div>
  );
};

export default OverviewPage;
