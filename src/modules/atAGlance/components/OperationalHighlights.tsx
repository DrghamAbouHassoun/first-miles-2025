import { useContext } from "react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";

import NoOfPlantsIcon from "../../../assets/icons/at-a-glance/no-of-planets.svg";
import NoOfMillsIcon from "../../../assets/icons/at-a-glance/no-of-miles.svg";
import SilosIcon from "../../../assets/icons/at-a-glance/silos-total-storage.svg";
import WheatMillingIcon from "../../../assets/icons/at-a-glance/daily-wheat-milling.svg";
import FeedProductionIcon from "../../../assets/icons/at-a-glance/daily-feed-production-capacity.svg";
import DurumMillingIcon from "../../../assets/icons/at-a-glance/daily-durum-milling-design-capacity.svg";
import Container from "../../common/components/Container/Container";

const DONUT_RADIUS = 45;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

const CircularStat = ({
  value,
  percentage,
  label,
  sublabel,
}: {
  value: string;
  percentage: number;
  label: string;
  sublabel: string;
}) => {
  const dashLength = (percentage / 100) * DONUT_CIRCUMFERENCE;
  const gap = DONUT_CIRCUMFERENCE - dashLength;
  return (
    <div className="flex items-center gap-5">
      <div className="flex-1 lg:flex-auto">
        <p className="font-bold text-white text-md leading-tight">{label}</p>
        <p className="text-fm-gray-200 text-sm">{sublabel}</p>
      </div>
      <div className="relative w-50 h-50 shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <circle
            cx="60"
            cy="60"
            r={DONUT_RADIUS}
            fill="#fff"
            stroke="#e0e2e3"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={DONUT_RADIUS}
            fill="none"
            stroke="#fcb44a"
            strokeWidth="10"
            strokeDasharray={`${dashLength} ${gap}`}
            strokeDashoffset={DONUT_CIRCUMFERENCE * 0.25}
            transform="rotate(0 60 60)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[38px] font-bold text-fm-green">{value}</span>
        </div>
      </div>
    </div>
  );
};

const capacityItems = [
  { key: "silosStorage", icon: SilosIcon },
  { key: "dailyWheatMilling", icon: WheatMillingIcon },
  { key: "dailyFeedProduction", icon: FeedProductionIcon },
  { key: "dailyDurumMilling", icon: DurumMillingIcon },
];

const OperationalHighlights = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  return (
    <section
      className="bg-fm-green text-white mt-16"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <Container>
        {/* Operational Highlights */}
        <div className="px-4 md:px-16 pt-12 pb-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {t("operationalHighlights.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
            {/* Plants */}
            <div className="flex flex-col gap-2 h-full lg:border-e border-fm-yellow pe-4 lg:pe-6">
              <div className="flex gap-2 items-start">
                <img
                  src={NoOfPlantsIcon}
                  alt=""
                  className="w-18 h-18 object-contain"
                />
                <span className="text-7xl font-bold text-white">
                  {t("operationalHighlights.plants.value")}
                </span>
              </div>
              <span className="text-lg font-medium text-white">
                {t("operationalHighlights.plants.label")}
              </span>
            </div>

            {/* Al Manar description */}
            <div className="flex items-start lg:col-span-1 h-full lg:border-e border-fm-yellow lg:px-12">
              <p className="text-sm text-fm-gray-100 leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("operationalHighlights.alManarDescription"),
                  }}
                />{" "}<br />
                <span className="text-fm-yellow font-bold text-lg">
                  {t("operationalHighlights.alManarHighlight")}
                </span>{" "}<br />
                {t("operationalHighlights.alManarSuffix")}
              </p>
            </div>

            {/* Production capacity */}
            <div className="flex items-center lg:col-span-1 h-full lg:border-e border-fm-yellow lg:px-12">
              <p className="text-sm text-fm-gray-100 leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "operationalHighlights.productionCapacityDescription",
                    ),
                  }}
                />{" "}<br />
                <span className="text-fm-yellow text-lg font-bold">
                  {t("operationalHighlights.productionCapacityValue")}
                </span>
              </p>
            </div>

            {/* Kenan stake */}
            <div className="flex items-center lg:col-span-1 h-full lg:border-e border-fm-yellow lg:px-12">
              <p className="text-sm text-fm-gray-100 leading-relaxed">
                {t("operationalHighlights.kenanStakeDescription")} <br />
                <span className="text-fm-yellow font-bold">
                  {t("operationalHighlights.kenanStakeValue")}
                </span>{" "}
                <br />
                {t("operationalHighlights.kenanStakeSuffix")}
              </p>
            </div>

            {/* Mills */}
            <div className="flex flex-col gap-2 lg:px-8">
              <div className="flex gap-2 items-start">
                <img
                  src={NoOfMillsIcon}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
                <span className="text-7xl font-bold text-white">
                  {t("operationalHighlights.mills.value")}
                </span>
              </div>
              <span className="text-lg font-medium text-white">
                {t("operationalHighlights.mills.label")}
              </span>
            </div>
          </div>
        </div>

        {/* Capacities */}
        <div className="px-4 md:px-16 py-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {t("operationalHighlights.capacities.title")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {capacityItems.map(({ key, icon }) => (
              <div key={key} className="flex flex-col lg:border-e last-of-type:border-0 border-fm-yellow lg:px-12 first-of-type:px-0">
                <img src={icon} alt="" className="w-fit h-20 object-contain" />
                <p className="text-md font-semibold text-fm-gray-100 leading-snug max-w-50">
                  {t(`operationalHighlights.capacities.${key}.label`)}
                </p>
                <p className="text-lg font-bold text-fm-yellow">
                  {t(`operationalHighlights.capacities.${key}.value`)}
                </p>
                <p className="text-md text-fm-gray-100">
                  {t(`operationalHighlights.capacities.${key}.unit`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Share + Customers */}
        <div className="px-4 md:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Market Share */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("operationalHighlights.marketShare.title")}
              </h3>
              <p className="text-sm text-fm-gray-100 mb-4">
                {t("operationalHighlights.marketShare.description")}
              </p>
              <p className="text-7xl font-bold text-fm-yellow">
                {t("operationalHighlights.marketShare.value")}
              </p>
            </div>

            {/* Customers */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {t("operationalHighlights.customers.title")}
              </h3>
              <p className="text-sm text-fm-gray-100 mb-4">
                {t("operationalHighlights.customers.subtitle")}
              </p>
              <p className="text-7xl font-bold text-fm-yellow">
                {t("operationalHighlights.customers.value")}
              </p>
              <p className="text-xl text-white font-medium mt-1">
                {t("operationalHighlights.customers.label")}
              </p>
            </div>
          </div>
        </div>

        {/* Product & Sales Overview */}
        <div className="px-4 md:px-16 py-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {t("operationalHighlights.productSales.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <CircularStat
              value={t("operationalHighlights.productSales.flourSales.value")}
              percentage={90}
              label={t("operationalHighlights.productSales.flourSales.label")}
              sublabel={t(
                "operationalHighlights.productSales.flourSales.sublabel",
              )}
            />
            <CircularStat
              value={t(
                "operationalHighlights.productSales.numberOfProducts.value",
              )}
              percentage={60}
              label={t(
                "operationalHighlights.productSales.numberOfProducts.label",
              )}
              sublabel={t(
                "operationalHighlights.productSales.numberOfProducts.sublabel",
              )}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OperationalHighlights;
