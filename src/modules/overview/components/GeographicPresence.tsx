import { useContext } from "react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import Map from "./Map";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import CounterAnimation from "../../common/components/animations/CounterAnimation";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";

const MARKET_KEYS = [
  "uae",
  "jordan",
  "qatar",
  "iraq",
  "kuwait",
  // "djibouti",
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
      <Container className="pb-16">
        {/* Text block with dashed yellow border */}
        <div className="py-20 pb-10 px-4">
          <SlideTopAnimation level="50">
            <h2 className="text-3xl font-bold mb-8 text-fm-green">
              {t("tabs.geographicPresence")}
            </h2>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <h2 className="text-xl font-bold text-fm-yellow mb-4">
              {t("geographicPresenceContent.title")}
            </h2>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="font-bold text-fm-gray-400 text-sm mb-4">
              {t("geographicPresenceContent.boldParagraph")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="text-fm-gray-400 text-sm mb-3">
              {t("geographicPresenceContent.p1")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="text-fm-gray-400 text-sm mb-3">
              {t("geographicPresenceContent.p2")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="text-fm-gray-400 text-sm mb-3">
              {t("geographicPresenceContent.p3")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="text-fm-gray-400 text-sm">
              {t("geographicPresenceContent.p4")}
            </p>
          </SlideTopAnimation>
        </div>

        {/* Export Markets and Volumes */}
        <div className="bg-fm-yellow-100 rounded-lg p-6">
          <SlideTopAnimation>
            <h3 className="text-lg font-bold text-fm-yellow mb-6">
              {t("geographicPresenceContent.exportMarketsTitle")}
            </h3>
          </SlideTopAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKET_KEYS.map((key: MarketKey) => {
              const market = marketsData[key];
              return (
                <div
                  key={key}
                  className=" border border-fm-yellow rounded-lg p-4 py-6 flex justify-between items-center transition-all duration-700 hover:bg-fm-yellow/20"
                >
                  <PopupAnimation>
                    <p className="text-fm-yellow font-bold text-base">
                      {market.name}
                    </p>
                  </PopupAnimation>
                  <p className="text-fm-gray-400 font-bold text-xl leading-tight">
                    <CounterAnimation
                      end={parseInt(market.tons.value)}
                      suffix={market.tons.suffix}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Map />
      <div className="flex justify-end absolute w-full h-auto bottom-0 right-0 z-10">
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default GeographicPresence;
