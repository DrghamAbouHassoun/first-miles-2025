import Container from "../../../common/components/Container/Container";
import { useLocale } from "../../../common/hooks/useLocale";
import { useTranslation } from "../../../common/hooks/useTranslation";
import { tableDataEn, tableDataAr } from "../../data/coo-tables";

const HIGHLIGHTED_CELL_INDEX = 5;

const ProductRevnewSection = () => {
  const { t } = useTranslation("operating-review");
  const { lang } = useLocale();

  return (
    <section className="py-16">
      <Container>
        <h3 className="text-3xl font-bold text-fm-yellow">
          {t("cooContent.productRevenue.title")}
        </h3>
        <div className="flex flex-col gap-4 py-8 max-w-220">
          {(lang === "ar" ? tableDataAr : tableDataEn).map(
            (singleTable, tableIndex) => (
              <div key={tableIndex} className="overflow-x-auto">
                <table className="w-full min-w-150 text-sm">
                  <thead className=" bg-linear-to-r from-fm-yellow to-fm-yellow/0">
                    <tr>
                      {singleTable.headings.map((h, hIndex) => (
                        <th
                          key={h}
                          className={`p-1.5 ${hIndex === 0 ? "text-start" : "text-end"}`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {singleTable.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-b-2 border-fm-yellow"
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`p-1.5 ${cellIndex === 0 ? "text-start" : "text-end"} ${cellIndex === HIGHLIGHTED_CELL_INDEX && "bg-fm-yellow-100 font-bold"}`}
                            dangerouslySetInnerHTML={{ __html: cell }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          )}
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">{t("cooContent.productRevenue.customers.title")}</h4>
          <h5 className="text-lg font-bold mb-4">{t("cooContent.productRevenue.customers.subtitle")}</h5>
          <ul className="list-disc mx-4">
            <li
              dangerouslySetInnerHTML={{
                __html: t("cooContent.productRevenue.customers.list.0"),
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: t("cooContent.productRevenue.customers.list.1"),
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: t("cooContent.productRevenue.customers.list.2"),
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: t("cooContent.productRevenue.customers.list.3"),
              }}
            ></li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ProductRevnewSection;
