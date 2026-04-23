import { formatNumber, isValidNumber } from "../../../utils";
import { useTranslation } from "../../common/hooks/useTranslation";
import { consolidatedIncomeStatementOfProfitAndLoss as tableData } from "../data/en";

const HIGHLIGHTED_ROW = 2;

const ProfitOrLossTable = () => {
  const { t } = useTranslation("financial-statements");
  return (
    <div>
      <h4 className="text-base mb-2">{t("prefix")}</h4>
      <h3 className="text-3xl font-bold">{t("tables.1.title")}</h3>
      <p className="text-fm-yellow my-2">{t("date2")}</p>
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: t("note") }} />
      <div className="w-full overflow-y-auto pb-16 mt-4">
        <table className="w-full">
          <thead className="border-b-2 border-fm-yellow">
            <tr>
              {tableData.headings.map((item, index) => (
                <th key={item || `heading-${index}`} className="p-1 text-end">
                  {item || ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-black/50">
                {row.cells.map((item, colIndex) => (
                  <td
                    key={`${item}-${rowIndex}-${colIndex}`}
                    className={`p-1 ${row.bold && "font-bold"} ${colIndex > 0 && "text-end"} ${colIndex === HIGHLIGHTED_ROW && "bg-fm-yellow-100"}`}
                  >
                    {isValidNumber(item) ? (
                      formatNumber(item as number)
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: item || "" }} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm pb-8">{t("finalNote")}</p>
    </div>
  );
};

export default ProfitOrLossTable;
