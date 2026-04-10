import { useState } from "react";
import MainHeader from "../modules/common/components/MainHeader/MainHeader"
import OverviewHeaderImage from "../assets/images/headers/overview.jpg";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import { useLocale } from "../modules/common/hooks/useLocale";
import YearInReview from "../modules/overview/components/YearInReview";
import GeographicPresence from "../modules/overview/components/GeographicPresence";
import InvestmentCase from "../modules/overview/components/InvestmentCase";
import StakeholderEngagement from "../modules/overview/components/StakeholderEngagement";
import ThemeOfTheYear from "../modules/overview/components/ThemeOfTheYear";
import MainButton from "../modules/common/components/buttons/MainButton";
import FinancialHighlights from "../modules/atAGlance/components/FinancialHighlights";
import OperationalHighlights from "../modules/atAGlance/components/OperationalHighlights";
import AwardsCertifications from "../modules/atAGlance/components/AwardsCertifications";
import Container from "../modules/common/components/Container/Container";
import SlideTopAnimation from "../modules/common/components/animations/SlideTopAnimation";

type OverviewSubPage = "atAGlance" | "themeOfTheYear" | "yearInReview" | "geographicPresence" | "investmentCase" | "stakeholderEngagement";

const OverviewPage = () => {
  const { t } = useTranslation("overview");
  const { t: tAtAGlance } = useTranslation("at-a-glance");
  const { lang } = useLocale();
  const [subPage, setSubPage] = useState<OverviewSubPage>("atAGlance");

  const tabs: { key: OverviewSubPage; label: string }[] = [
    { key: "atAGlance", label: t("tabs.atAGlance") },
    { key: "themeOfTheYear", label: t("tabs.themeOfTheYear") },
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
      <div className={`flex flex-wrap w-full gap-4 justify-center items-center bg-fm-green p-6 ${lang === "ar" ? "flex-row-reverse" : "flex-row"} border-b border-fm-green/20`}>
        {tabs.map((tab) => (
          <MainButton
            key={tab.key}
            onClick={() => setSubPage(tab.key)}
            className={`w-full md:w-auto ${
              subPage === tab.key
                ? "to-fm-yellow"
                : ""
            }`}
          >
            {tab.label}
          </MainButton>
        ))}
      </div>
      <div>
        {subPage === "atAGlance" && (
          <>
            <Container className="text-fm-green font-bold">
              <SlideTopAnimation level="50">
                <p className="max-w-165 py-24">{tAtAGlance("intro.text")}</p>
              </SlideTopAnimation>
              <FinancialHighlights />
            </Container>
            <OperationalHighlights />
            <AwardsCertifications />
          </>
        )}
        {subPage === "themeOfTheYear" && <ThemeOfTheYear />}
        {subPage === "yearInReview" && <YearInReview />}
        {subPage === "geographicPresence" && <GeographicPresence />}
        {subPage === "investmentCase" && <InvestmentCase />}
        {subPage === "stakeholderEngagement" && <StakeholderEngagement />}
      </div>
    </div>
  );
};

export default OverviewPage;
