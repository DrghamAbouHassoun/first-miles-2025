import MainHeader from "../modules/common/components/MainHeader/MainHeader";
import { useTranslation } from "../modules/common/hooks/useTranslation";
import FSBg from "../assets/images/headers/finiancial-statement.jpg";
import Container from "../modules/common/components/Container/Container";
import { useState } from "react";
import FiniancialPositionTable from "../modules/financial-statement/components/FiniancialPositionTable";
import ProfitOrLossTable from "../modules/financial-statement/components/ProfitOrLossTable";
import EquityTable from "../modules/financial-statement/components/EquityTable";
import CashFlowTable from "../modules/financial-statement/components/CashFlowTable";

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

const FinancialStatementsPage = () => {
  const { t } = useTranslation("financial-statements");
  const [currantTable, setCurrantTable] = useState("financial-position");

  return (
    <div className="min-h-screen w-full">
      <MainHeader title={t("title")} subtitle={t("subtitle")} image={FSBg} />
      <section className="py-16">
        <Container>
          <div className="w-full lg:max-w-337.5 flex flex-col lg:flex-row gap-16 lg:gap-0">
            <div className="flex-1 w-full min-w-80 max-w-80 relative">
              <div className="flex flex-col sticky top-4">
                {tabs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`w-full bg-fm-green p-2 block text-start font-bold border-b border-b-white last-of-type:border-b-0 hover:bg-fm-green/80 transition-all duration-700 ${currantTable === item.id ? "text-fm-yellow" : "text-white"}`}
                    onClick={() => setCurrantTable(item.id)}
                  >
                    {t(item.title)}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full lg:max-w-[calc(100%-320px)] px-4">
              {currantTable === "financial-position" && (
                <FiniancialPositionTable />
              )}
              {currantTable === "profit-or-loss" && <ProfitOrLossTable />}
              {currantTable === "changes-in-equity" && <EquityTable />}
              {currantTable === "cash-flows" && <CashFlowTable />}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FinancialStatementsPage;
