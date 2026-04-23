import { formatNumber, isValidNumber } from "../../../utils";
import { useTranslation } from "../../common/hooks/useTranslation";
import { consolidatedCashFlowStatement as tableDataEn } from "../data/en";
import { consolidatedCashFlowStatementArabic as tableDataAr } from "../data/ar";
import { useLocale } from "../../common/hooks/useLocale";

const HIGHLIGHTED_ROW = 2;

const CashFlowTable = () => {
  const { t } = useTranslation("financial-statements");
  const { lang } = useLocale();
  return (
    <div className="w-full overflow-hidden">
      <h4 className="text-base mb-2">{t("prefix")}</h4>
      <h3 className="text-3xl font-bold">{t("tables.3.title")}</h3>
      <p className="text-fm-yellow my-2">{t("date2")}</p>
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: t("note") }} />
      <div className="w-full max-w-full overflow-y-auto pb-6 mt-4">
        <table className="w-auto min-w-120">
          <thead className="border-b-2 border-fm-yellow">
            <tr>
              {(lang === "ar" ? tableDataAr : tableDataEn).headings.map(
                (item, index) => (
                  <th
                    key={item || `heading-${index}`}
                    className="p-1 text-end min-w-42"
                  >
                    {item || ""}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {(lang === "ar" ? tableDataAr : tableDataEn).rows.map(
              (row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-black/50">
                  {row.cells.map((item, colIndex) => (
                    <td
                      key={`${item}-${rowIndex}-${colIndex}`}
                      className={`p-1 ${row.bold && "font-bold"} ${colIndex > 0 && "text-end"} ${colIndex === HIGHLIGHTED_ROW && "bg-fm-yellow-100"}`}
                    >
                      {isValidNumber(item) ? (
                        Number(item) < 0 ? (
                          `(${formatNumber(Math.abs(item as number))})`
                        ) : (
                          formatNumber(item as number)
                        )
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{ __html: item || "" }}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      <p className="text-sm pb-8 pt-4">{t("finalNote")}</p>
    </div>
  );
};
export default CashFlowTable;
