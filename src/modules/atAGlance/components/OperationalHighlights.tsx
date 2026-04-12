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
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import CounterAnimation from "../../common/components/animations/CounterAnimation";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import useInView from "../../common/hooks/useInView";

const DONUT_RADIUS = 45;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

const CircularStat = ({
  value,
  percentage,
  label,
  sublabel,
}: {
  value: {
    number: string;
    prefix?: string;
    suffix?: string;
  };
  percentage: number;
  label: string;
  sublabel: string;
}) => {
  const { ref, inView } = useInView<SVGSVGElement>();
  const dashLength = (percentage / 100) * DONUT_CIRCUMFERENCE;
  const gap = DONUT_CIRCUMFERENCE - dashLength;
  return (
    <div className="flex items-center gap-5">
      <div className="flex-1 lg:flex-auto">
        <PopupAnimation>
          <p className="font-bold text-white text-md leading-tight">{label}</p>
        </PopupAnimation>
        <PopupAnimation>
          <p className="text-fm-gray-200 text-sm">{sublabel}</p>
        </PopupAnimation>
      </div>
      <div className="relative w-50 h-50 shrink-0">
        <svg ref={ref} viewBox="0 0 120 120" className="w-full h-full">
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
            strokeDasharray={
              inView ? `${dashLength} ${gap}` : `0 ${DONUT_CIRCUMFERENCE}`
            }
            strokeDashoffset={DONUT_CIRCUMFERENCE * 0.25}
            style={{ transition: "stroke-dasharray 1s ease-in-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[38px] font-bold text-fm-green">
            <CounterAnimation
              end={Number(value.number)}
              prefix={value.prefix}
              suffix={value.suffix}
            />
          </span>
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
          <div className="w-fit overflow-y-hidden">
            <SlideTopAnimation level="50" className="mb-8">
              <h2 className="text-3xl font-bold mb-8 text-white">
                {t("operationalHighlights.title")}
              </h2>
            </SlideTopAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
            {/* Plants */}
            <div className="flex flex-col gap-2 h-full lg:border-e border-fm-yellow pe-4 lg:pe-6">
              <div className="flex gap-2 items-start">
                <PopupAnimation>
                  <img
                    src={NoOfPlantsIcon}
                    alt=""
                    className="w-18 h-18 object-contain"
                  />
                </PopupAnimation>
                <span className="text-7xl font-bold text-white">
                  <CounterAnimation
                    end={Number(t("operationalHighlights.plants.value"))}
                  />
                </span>
              </div>
              <SlideTopAnimation level="50">
                <span className="text-lg font-medium text-white">
                  {t("operationalHighlights.plants.label")}
                </span>
              </SlideTopAnimation>
            </div>

            {/* Al Manar description */}
            <div className="flex items-start lg:col-span-1 h-full lg:border-e border-fm-yellow lg:px-12">
              <p className="text-sm text-fm-gray-100 leading-relaxed">
                <SlideTopAnimation level="50" className="mb-0">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("operationalHighlights.alManarDescription"),
                    }}
                  />
                </SlideTopAnimation>
                <span className="text-fm-yellow font-bold text-lg">
                  <CounterAnimation
                    end={Number(
                      t("operationalHighlights.alManarHighlight.value"),
                    )}
                    suffix={` ${t("operationalHighlights.alManarHighlight.suffix")}`}
                    className="my-0 py-0 leading-0"
                  />
                </span>
                <SlideTopAnimation level="50" className="mt-0 pt-0">
                  {t("operationalHighlights.alManarSuffix")}
                </SlideTopAnimation>
              </p>
            </div>

            {/* Production capacity */}
            <div className="flex items-center lg:col-span-1 h-full lg:border-e border-fm-yellow lg:px-12">
              <p className="text-sm text-fm-gray-100 leading-relaxed">
                <SlideTopAnimation level="50" className="mb-0">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "operationalHighlights.productionCapacityDescription",
                      ),
                    }}
                  />
                </SlideTopAnimation>
                <span className="text-fm-yellow text-lg font-bold">
                  <CounterAnimation
                    end={Number(
                      t("operationalHighlights.productionCapacityValue.value"),
                    )}
                    suffix={t(
                      "operationalHighlights.productionCapacityValue.suffix",
                    )}
                  />
                </span>
              </p>
            </div>

            {/* Kenan stake */}
            <div className="flex items-center lg:col-span-1 h-full lg:border-e border-fm-yellow lg:px-12">
              <p className="text-sm text-fm-gray-100 leading-relaxed">
                <SlideTopAnimation>
                  {t("operationalHighlights.kenanStakeDescription")}
                </SlideTopAnimation>
                <span className="text-fm-yellow font-bold">
                  <CounterAnimation
                    end={Number(
                      t("operationalHighlights.kenanStakeValue.value"),
                    )}
                    suffix={t("operationalHighlights.kenanStakeValue.suffix")}
                  />
                </span>
                <SlideTopAnimation>
                  {t("operationalHighlights.kenanStakeSuffix")}
                </SlideTopAnimation>
              </p>
            </div>

            {/* Mills */}
            <div className="flex flex-col gap-2 lg:px-8">
              <div className="flex gap-2 items-start">
                <div className="w-20 h-20 relative">
                  <PopupAnimation className="w-20 h-20">
                    <img
                      src={NoOfMillsIcon}
                      alt=""
                      className="w-20 h-20 object-contain"
                    />
                  </PopupAnimation>
                </div>
                <span className="text-7xl font-bold text-white">
                  <CounterAnimation
                    end={Number(t("operationalHighlights.mills.value"))}
                  />
                </span>
              </div>
              <SlideTopAnimation level="50">
                <span className="text-lg font-medium text-white">
                  {t("operationalHighlights.mills.label")}
                </span>
              </SlideTopAnimation>
            </div>
          </div>
        </div>

        {/* Capacities */}
        <div className="px-4 md:px-16 py-10">
          <SlideTopAnimation>
            <h2 className="text-3xl font-bold mb-8 text-white">
              {t("operationalHighlights.capacities.title")}
            </h2>
          </SlideTopAnimation>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {capacityItems.map(({ key, icon }) => (
              <div
                key={key}
                className="flex flex-col lg:border-e last-of-type:border-0 border-fm-yellow lg:px-12 first-of-type:px-0"
              >
                <PopupAnimation className="w-fit h-20">
                  <img
                    src={icon}
                    alt=""
                    className="w-fit h-20 object-contain"
                  />
                </PopupAnimation>
                <SlideTopAnimation>
                  <p className="text-md font-semibold text-fm-gray-100 leading-snug max-w-50">
                    {t(`operationalHighlights.capacities.${key}.label`)}
                  </p>
                </SlideTopAnimation>
                <p className="text-lg font-bold text-fm-yellow">
                  <CounterAnimation
                    end={Number(
                      t(`operationalHighlights.capacities.${key}.value`),
                    )}
                    decimal="3"
                  />
                </p>
                <SlideTopAnimation>
                  <p
                    className="text-md text-fm-gray-100"
                    dangerouslySetInnerHTML={{
                      __html: t(`operationalHighlights.capacities.${key}.unit`),
                    }}
                  ></p>
                </SlideTopAnimation>
              </div>
            ))}
          </div>
        </div>

        {/* Market Share + Customers */}
        <div className="px-4 md:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Market Share */}
            <div>
              <SlideTopAnimation>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("operationalHighlights.marketShare.title")}
                </h3>
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p className="text-sm text-fm-gray-100 mb-4">
                  {t("operationalHighlights.marketShare.description")}
                </p>
              </SlideTopAnimation>
              <p className="text-7xl font-bold text-fm-yellow">
                <CounterAnimation
                  end={Number(
                    t("operationalHighlights.marketShare.value.number"),
                  )}
                  suffix={t("operationalHighlights.marketShare.value.suffix")}
                />
              </p>
            </div>

            {/* Customers */}
            <div>
              <SlideTopAnimation>
                <h3 className="text-xl font-bold text-white mb-1">
                  {t("operationalHighlights.customers.title")}
                </h3>
              </SlideTopAnimation>
              <SlideTopAnimation>
                <p className="text-sm text-fm-gray-100 mb-4">
                  {t("operationalHighlights.customers.subtitle")}
                </p>
              </SlideTopAnimation>
              <p className="text-7xl font-bold text-fm-yellow">
                <CounterAnimation
                  end={Number(
                    t("operationalHighlights.customers.value.number"),
                  )}
                  prefix={t("operationalHighlights.customers.value.prefix")}
                />
              </p>
              <SlideTopAnimation>
                <p className="text-xl text-white font-medium mt-1">
                  {t("operationalHighlights.customers.label")}
                </p>
              </SlideTopAnimation>
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
              value={{
                number: t(
                  "operationalHighlights.productSales.flourSales.value.number",
                ),
                suffix: t(
                  "operationalHighlights.productSales.flourSales.value.suffix",
                ),
              }}
              percentage={65}
              label={t("operationalHighlights.productSales.flourSales.label")}
              sublabel={t(
                "operationalHighlights.productSales.flourSales.sublabel",
              )}
            />
            <CircularStat
              value={{
                number: t(
                  "operationalHighlights.productSales.numberOfProducts.value.number",
                ),
                prefix: t(
                  "operationalHighlights.productSales.numberOfProducts.value.prefix",
                ),
              }}
              percentage={90}
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
