import { useState, useContext } from "react";
import MapVector from "../../../assets/vectors/maps/map.svg";
import MapVectorAr from "../../../assets/vectors/maps/map-ar.svg";
import PlantVector from "../../../assets/vectors/maps/plant.svg";
import CountryVector from "../../../assets/vectors/maps/country.svg";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import CounterAnimation from "../../common/components/animations/CounterAnimation";
import Container from "../../common/components/Container/Container";

const SVG_WIDTH = 1011;
const SVG_HEIGHT = 937;
const CHART_RADIUS = 60;
const CHART_CIRCUMFERENCE = 2 * Math.PI * CHART_RADIUS;

const regionColors = {
  westernSouthern: "#F7E8CF",
  central: "#FCB44A",
  eastern: "#A5A8AA",
  northern: "#1F6D64",
} as const;

interface PlantConfig {
  id: string;
  cx: number;
  cy: number;
  hasMilling: boolean;
  hasFeed: boolean;
  hasDurum: boolean;
  color: string;
}

const plantConfigs: PlantConfig[] = [
  {
    id: "tabuk",
    cx: 312.61,
    cy: 462.196,
    hasMilling: true,
    hasFeed: false,
    hasDurum: false,
    color: regionColors.northern,
  },
  {
    id: "alQassim",
    cx: 504.932,
    cy: 520.921,
    hasMilling: true,
    hasFeed: true,
    hasDurum: false,
    color: regionColors.central,
  },
  {
    id: "alAhsa",
    cx: 685.466,
    cy: 586.94,
    hasMilling: true,
    hasFeed: false,
    hasDurum: false,
    color: regionColors.eastern,
  },
  {
    id: "jeddah",
    cx: 413.45,
    cy: 646.941,
    hasMilling: true,
    hasFeed: true,
    hasDurum: true,
    color: regionColors.westernSouthern,
  },
  {
    id: "alManar",
    cx: 439.948,
    cy: 688.765,
    hasMilling: false,
    hasFeed: true,
    hasDurum: false,
    color: regionColors.westernSouthern,
  },
];

interface CountrItem {
  id: CountriesType;
  cx: number;
  cy: number;
}

const countryConfigs: CountrItem[] = [
  {
    id: "uae",
    cx: 788.5,
    cy: 545,
  },
  {
    id: "jordan",
    cx: 320,
    cy: 370,
  },
  {
    id: "qatar",
    cx: 710,
    cy: 522,
  },
  {
    id: "iraq",
    cx: 492,
    cy: 298,
  },
  {
    id: "kuwait",
    cx: 600,
    cy: 410,
  },
  {
    id: "egypt",
    cx: 100,
    cy: 502,
  },
  {
    id: "syria",
    cx: 368,
    cy: 263,
  },
];

const regionValues = {
  westernSouthern: 46,
  central: 32,
  eastern: 11,
  northern: 11,
} as const;

const chartLegends = [
  {
    key: "jaddah",
    title: {
      en: "Jeddah Plant and Al Manar Feed Plant",
      ar: "مصنع جدة ومصنع المنار للأعلاف",
    },
    color: regionColors.westernSouthern,
  },
  {
    key: "alQassim",
    title: {
      en: "Al Qassim Plant",
      ar: "مصنع القصيم",
    },
    color: regionColors.central,
  },
  {
    key: "alAhsa",
    title: {
      en: "Al Ahsa Plant",
      ar: "مصنع الأحساء",
    },
    color: regionColors.eastern,
  },
  {
    key: "tabuk",
    title: {
      en: "Tabuk Plant",
      ar: "مصنع تبوك",
    },
    color: regionColors.northern,
  },
];

type RegionKey = keyof typeof regionColors;

const RevenueContributionChart = () => {
  const { t } = useTranslation("overview");
  const { lang } = useContext(LangContext);
  let cumulativeLength = 0;

  const regionKeys = Object.keys(regionColors) as RegionKey[];

  return (
    <div className="flex items-center gap-4">
      <div className="w-full max-w-200">
        <div className="flex items-center flex-col md:flex-row gap-8 md:gap-4">
          <div className="relative shrink-0 h-72 w-72">
            <svg
              viewBox="0 0 140 140"
              className="h-full w-full drop-shadow-[0_12px_12px_rgba(0,0,0,0.55)]"
              aria-hidden="true"
            >
              <circle
                cx="70"
                cy="70"
                r={CHART_RADIUS}
                fill="none"
                stroke="#335148"
                strokeWidth="16"
                opacity="0.3"
              />
              {regionKeys.map((key) => {
                const value = regionValues[key];
                const dashLength = (value / 100) * CHART_CIRCUMFERENCE;
                const dashGap = CHART_CIRCUMFERENCE - dashLength;
                const dashOffset = -cumulativeLength;

                const startAngle =
                  (cumulativeLength / CHART_CIRCUMFERENCE) * 360 - 92;
                const midAngleRad =
                  ((startAngle + (value / 100) * 180) * Math.PI) / 180;
                const lx = 70 + CHART_RADIUS * Math.cos(midAngleRad);
                const ly = 70 + CHART_RADIUS * Math.sin(midAngleRad);

                cumulativeLength += dashLength;

                return (
                  <g key={key}>
                    <circle
                      cx="70"
                      cy="70"
                      r={CHART_RADIUS}
                      fill="none"
                      stroke={regionColors[key]}
                      strokeWidth="16"
                      strokeDasharray={`${dashLength} ${dashGap}`}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="butt"
                      transform="rotate(-92 70 70)"
                    />
                    <text
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="7.5"
                      fontWeight="normal"
                      fill={value === 46 ? "black" : "white"}
                      // stroke="#1a3a30"
                      strokeWidth="0.4"
                      paintOrder="stroke"
                    >
                      {lang === "ar" ? `%${value}` : `${value}%`}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <span className="text-xs leading-tight text-fm-yellow">
                {t("map.chart.line1")}
              </span>
              <span className="text-xs leading-tight text-fm-yellow">
                {t("map.chart.line2")}
              </span>
              <span className="mt-1 text-xs leading-tight text-white">
                {t("map.chart.line3")}
              </span>
              <span className="text-xs leading-tight text-white">
                {t("map.chart.line4")}
              </span>
              <span className="mt-2 text-xs leading-none text-white">
                {t("map.chart.year")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-70">
            {chartLegends.map(({ key, title, color }) => (
              <div key={key}>
                <div className="flex items-center gap-2">
                  <div
                    className="h-4 w-4 min-w-4 block rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <div
                    className="h-4 w-px"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-medium text-white">
                    {lang === "ar" ? title.ar : title.en}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* <ul className="space-y-1.5 text-xs text-white">
          {regionKeys.map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                style={{ backgroundColor: regionColors[key] }}
              />
              <span className="min-w-11 lg:min-w-13">
                {lang === "ar" ? "%" : ""}{regionValues[key].toString().padStart(2, "0")}{lang === "eng" ? "%" : ""}
              </span>
              <span
                className="h-3.5 w-px shrink-0 lg:h-5"
                style={{ backgroundColor: regionColors[key] }}
              />
              <span className="leading-tight text-white/95">
                {t(`map.regions.${key}`)}
              </span>
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </div>
  );
};

type CountriesType =
  | "egypt"
  | "iraq"
  | "jordan"
  | "kuwait"
  | "qatar"
  | "syria"
  | "uae";

const Map = () => {
  const { t } = useTranslation("overview");
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeCountryIndex, setActiveCountryIndex] =
    useState<CountriesType>("uae");

  const overviewLocale = translations[lang as "en" | "ar"].overview;
  const marketsData = overviewLocale.geographicPresenceContent.markets;

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleCountryHover = (id: CountriesType) => {
    setActiveCountryIndex(id);
  };

  const activePlant = plantConfigs[activeIndex];

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full bg-fm-green py-16 lg:min-h-250"
    >
      <Container>
        <div className="flex items-center flex-row-reverse gap-4 py-8">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-full bg-fm-yellow flex justify-center items-center p-1">
              <img
                src={PlantVector}
                alt=""
                className="w-5 h-5 object-contain"
              />
            </div>
            <span>{t("map.mapKeys.plants")}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <img
              src={CountryVector}
              alt=""
              className="w-8 h-8 object-contain"
            />
            <span>{t("map.mapKeys.exportMarkets")}</span>
          </div>
        </div>
      </Container>
      <div className="relative mx-auto flex max-w-352.5 flex-col-reverse gap-8 px-4 sm:px-6 lg:flex-row lg:pb-16">
        {/* Sidebar */}
        <div className="flex-1 max-w-130 shrink-0 text-white">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            {/* Country panel */}
            <div className="min-h-30 w-full flex justify-center items-center">
              <div
                key={`country-${activeCountryIndex}`}
                className="w-full max-w-70 animation-slide-top-50 active bg-fm-yellow-100 p-4 rounded-xl"
              >
                <p className="text-fm-yellow font-bold text-base">
                  {marketsData[activeCountryIndex].name}
                </p>
                <p className="text-fm-gray-400 font-bold text-xl leading-tight">
                  <CounterAnimation
                    end={parseInt(marketsData[activeCountryIndex].tons.value)}
                    suffix={marketsData[activeCountryIndex].tons.suffix}
                  />
                </p>
              </div>
            </div>
            {/* Plant panel */}
            <div className="min-h-120 w-full flex justify-center items-start">
              <div
                className="w-full max-w-70 animation-slide-top-50 active relative"
                key={`item-${activePlant.id}`}
              >
                <div
                  className={`w-6 h-6 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 `}
                  style={{ backgroundColor: activePlant.color }}
                />
                <div className="flex text-center items-center flex-col max-w-70 w-full rounded-lg p-2 px-4 min-h-65 transition-all duration-500 bg-linear-180 from-fm-gray-200/30 to-fm-yellow-100/0">
                  <h3 className="text-fm-yellow font-bold text-lg mb-5 border-b-2 border-fm-gray-100 pb-2 text-center">
                    {t(`map.plants.${activePlant.id}.name`)}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex flex-col">
                      <span className="text-md tracking-wide mb-0.5">
                        {t("map.labels.silosStorage")}
                      </span>
                      <span className="text-white font-semibold">
                        {t(`map.plants.${activePlant.id}.silosStorage`)}
                      </span>
                    </li>
                    {activePlant.hasMilling && (
                      <li className="flex flex-col">
                        <span className="tracking-wide mb-0.5">
                          {t("map.labels.millingCapacity")}
                        </span>
                        <span className="text-white font-semibold">
                          {t(`map.plants.${activePlant.id}.millingCapacity`)}
                        </span>
                      </li>
                    )}
                    {activePlant.hasFeed && (
                      <li className="flex flex-col">
                        <span className="tracking-wide mb-0.5">
                          {t("map.labels.feedCapacity")}
                        </span>
                        <span className="text-white font-semibold">
                          {t(`map.plants.${activePlant.id}.feedCapacity`)}
                        </span>
                      </li>
                    )}
                    {activePlant.hasDurum && (
                      <li className="flex flex-col">
                        <span className="tracking-wide mb-0.5">
                          {t("map.labels.durumCapacity")}
                        </span>
                        <span className="text-white font-semibold">
                          {t(`map.plants.${activePlant.id}.durumCapacity`)}
                        </span>
                      </li>
                    )}
                    {t(`map.plants.${activePlant.id}.note`) !==
                      `map.plants.${activePlant.id}.note` && (
                      <li className="flex flex-col">
                        <span className="text-white text-sm">
                          {t(`map.plants.${activePlant.id}.note`)}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 h-full relative">
          <PopupAnimation>
            <div className="relative w-full">
              <img
                src={lang === "ar" ? MapVectorAr : MapVector}
                alt="Map"
                className="w-full h-auto"
              />
              {/* Overlay markers */}
              {countryConfigs.map((country) => {
                const left = (country.cx / SVG_WIDTH) * 100;
                const top = (country.cy / SVG_HEIGHT) * 100;
                const isActive = country.id === activeCountryIndex;

                return (
                  <div
                    key={country.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    onMouseEnter={() => handleCountryHover(country.id)}
                  >
                    {/* Pulsing rings */}
                    {isActive && (
                      <>
                        <span
                          className="absolute w-8 h-8 inset-0 rounded-full bg-white opacity-75"
                          style={{
                            animation:
                              "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                          }}
                        />
                        <span
                          className="absolute w-8 h-8 inset-0 rounded-full bg-white opacity-50"
                          style={{
                            animation:
                              "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                            animationDelay: "0.4s",
                          }}
                        />
                      </>
                    )}
                    {/* Dot */}
                    <span className="relative flex justify-center items-center rounded-full transition-all duration-300 w-8 h-8">
                      <img
                        src={CountryVector}
                        alt="Country"
                        className="w-5 h-5"
                      />
                    </span>
                  </div>
                );
              })}
              {plantConfigs.map((plant, index) => {
                const left = (plant.cx / SVG_WIDTH) * 100;
                const top = (plant.cy / SVG_HEIGHT) * 100;
                const isActive = index === activeIndex;

                return (
                  <div
                    key={plant.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    onMouseEnter={() => handleHover(index)}
                  >
                    {/* Pulsing rings */}
                    {isActive && (
                      <>
                        <span
                          className="absolute w-8 h-8 inset-0 rounded-full bg-fm-yellow opacity-75"
                          style={{
                            animation:
                              "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                          }}
                        />
                        <span
                          className="absolute w-8 h-8 inset-0 rounded-full bg-fm-yellow opacity-50"
                          style={{
                            animation:
                              "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                            animationDelay: "0.4s",
                          }}
                        />
                      </>
                    )}
                    {/* Dot */}
                    <span className="relative flex justify-center items-center rounded-full transition-all duration-300 w-8 h-8 bg-fm-yellow">
                      <img src={PlantVector} alt="Plant" className="w-5 h-5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </PopupAnimation>
        </div>
      </div>
      <div
        className={`flex justify-center px-2 sm:px-0 lg:absolute pt-8 lg:pt-0  ${isRtl ? "lg:left-auto lg:right-2/7 bottom-14" : "-bottom-10 lg:bottom-2 left-12 lg:left-1/4"}`}
      >
        <RevenueContributionChart />
      </div>
    </div>
  );
};

export default Map;
