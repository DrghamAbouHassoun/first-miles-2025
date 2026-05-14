import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import FSBg from "../assets/images/headers/finiancial-statement.jpg";
import Container from "../modules/common/components/Container/Container";
import { useEffect } from "react";
import FiniancialPositionTable from "../modules/financial-statement/components/FiniancialPositionTable";
import ProfitOrLossTable from "../modules/financial-statement/components/ProfitOrLossTable";
import EquityTable from "../modules/financial-statement/components/EquityTable";
import CashFlowTable from "../modules/financial-statement/components/CashFlowTable";
import { useTabNavigation } from "../modules/common/hooks/useTabNavigation";
import { useLocale } from "../modules/common/hooks/useLocale";
import SpikeArrow from "../assets/vectors/coo/spike.svg";

const tabs = [
  {
    id: "financial-position",
    title: "tables.0.title",
  },
  {
    id: "profit-or-loss",
    title: "tables.1.title",
  },
  {
    id: "changes-in-equity",
    title: "tables.2.title",
  },
  {
    id: "cash-flows",
    title: "tables.3.title",
  },
];

const FINANCIAL_TAB_IDS = tabs.map((t) => t.id);

const FinancialStatementsPage = () => {
  const { t } = useTranslation("financial-statements");
  const { activeTab, registerPageTabs, setActiveTab } = useTabNavigation();
  const { lang } = useLocale();

  useEffect(() => {
    registerPageTabs(FINANCIAL_TAB_IDS, "financial-position");
  }, [registerPageTabs]);

  return (
    <div className="min-h-screen w-full">
      <MainHeader title={t("title")} subtitle={t("subtitle")} image={FSBg} />
      <section className="py-16">
        <Container>
          <div className="w-full lg:max-w-337.5 flex flex-col lg:flex-row gap-16 lg:gap-0">
            <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible lg:w-82 shrink-0 mb-6 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className="shrink-0 lg:shrink text-start cursor-pointer px-4 lg:px-0 lg:w-full py-3 lg:py-4 lg:pe-6"
                >
                  <span
                    className={`font-bold text-sm lg:text-base leading-tight transition-colors ${
                      activeTab === item.id
                        ? "text-fm-green"
                        : "text-fm-gray-400 hover:text-fm-green"
                    }`}
                  >
                    {t(item.title)}
                  </span>
                  <div
                    className={`overflow-hidden w-full pt-1.5 transition-all duration-300 ${
                      activeTab === item.id
                        ? "max-h-6 opacity-100"
                        : "max-h-0 opacity-0"
                    } ${lang === "ar" ? "rotate-y-180" : ""}`}
                  >
                    <img
                      src={SpikeArrow}
                      alt=""
                      className="w-full h-3 object-cover object-right"
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="w-full lg:max-w-[calc(100%-320px)] px-4">
              {activeTab === "financial-position" && (
                <FiniancialPositionTable />
              )}
              {activeTab === "profit-or-loss" && <ProfitOrLossTable />}
              {activeTab === "changes-in-equity" && <EquityTable />}
              {activeTab === "cash-flows" && <CashFlowTable />}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FinancialStatementsPage;
