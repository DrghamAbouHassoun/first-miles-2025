import { useContext } from "react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";

const MARKET_KEYS = [
  "uae",
  "jordan",
  "qatar",
  "iraq",
  "kuwait",
  "djibouti",
  "egypt",
  "syria",
] as const;

type MarketKey = (typeof MARKET_KEYS)[number];

const GeographicPresence = () => {
  const { t } = useTranslation("overview");
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";

  const overviewLocale = translations[lang as "en" | "ar"].overview;
  const marketsData = overviewLocale.geographicPresenceContent.markets;

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <Container>
        {/* Text block with dashed yellow border */}
        <div className="py-20 pb-10 px-4">
          <h2 className="text-xl font-bold text-fm-yellow mb-4">
            {t("geographicPresenceContent.title")}
          </h2>
          <p className="font-bold text-fm-gray-400 text-sm mb-4">
            {t("geographicPresenceContent.boldParagraph")}
          </p>
          <p className="text-fm-gray-400 text-sm mb-3">
            {t("geographicPresenceContent.p1")}
          </p>
          <p className="text-fm-gray-400 text-sm mb-3">
            {t("geographicPresenceContent.p2")}
          </p>
          <p className="text-fm-gray-400 text-sm mb-3">
            {t("geographicPresenceContent.p3")}
          </p>
          <p className="text-fm-gray-400 text-sm">
            {t("geographicPresenceContent.p4")}
          </p>
        </div>

        {/* Export Markets and Volumes */}
        <div className="bg-fm-yellow-100 rounded-lg p-6">
          <h3 className="text-lg font-bold text-fm-yellow mb-6">
            {t("geographicPresenceContent.exportMarketsTitle")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKET_KEYS.map((key: MarketKey) => {
              const market = marketsData[key];
              return (
                <div
                  key={key}
                  className=" border border-fm-yellow rounded-lg p-4"
                >
                  <p className="text-fm-yellow font-bold text-base mb-2">
                    {market.name}
                  </p>
                  <p className="text-fm-gray-400 font-bold text-xl leading-tight">
                    {market.tons}
                  </p>
                  <p className="text-fm-gray-400 font-bold text-xl leading-tight mb-3">
                    {market.sar}
                  </p>
                  <ul className="space-y-1">
                    {market.notes.map((note, i) => (
                      <li key={i} className="text-fm-gray-300 text-xs flex gap-1.5">
                        <span className="mt-0.5 shrink-0">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GeographicPresence;
