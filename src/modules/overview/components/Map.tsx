import { useState, useEffect, useRef, useContext } from "react";
import MapVector from "../../../assets/vectors/maps/map.svg";
import PlantVector from "../../../assets/vectors/maps/plant.svg";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import PopupAnimation from "../../common/components/animations/PopupAnimation";

const SVG_WIDTH = 1011;
const SVG_HEIGHT = 937;
const CHART_RADIUS = 60;
const CHART_CIRCUMFERENCE = 2 * Math.PI * CHART_RADIUS;

interface PlantConfig {
  id: string;
  cx: number;
  cy: number;
  hasMilling: boolean;
  hasFeed: boolean;
  hasDurum: boolean;
}

const plantConfigs: PlantConfig[] = [
  {
    id: "tabuk",
    cx: 312.61,
    cy: 462.196,
    hasMilling: true,
    hasFeed: false,
    hasDurum: false,
  },
  {
    id: "alQassim",
    cx: 504.932,
    cy: 520.921,
    hasMilling: true,
    hasFeed: true,
    hasDurum: false,
  },
  {
    id: "alAhsa",
    cx: 685.466,
    cy: 586.94,
    hasMilling: true,
    hasFeed: false,
    hasDurum: false,
  },
  {
    id: "jeddah",
    cx: 413.45,
    cy: 646.941,
    hasMilling: true,
    hasFeed: true,
    hasDurum: true,
  },
  {
    id: "alManar",
    cx: 439.948,
    cy: 688.765,
    hasMilling: false,
    hasFeed: true,
    hasDurum: false,
  },
];

const regionColors = {
  westernSouthern: "#F7E8CF",
  central: "#FCB44A",
  eastern: "#A5A8AA",
  northern: "#1F6D64",
} as const;

const regionValues = {
  westernSouthern: 47,
  central: 34,
  eastern: 9,
  northern: 10,
} as const;

type RegionKey = keyof typeof regionColors;

const RevenueContributionChart = () => {
  const { t } = useTranslation("overview");
  let cumulativeLength = 0;

  const regionKeys = Object.keys(regionColors) as RegionKey[];

  return (
    <div className="w-full max-w-130">
      <div className="flex items-center flex-col md:flex-row gap-8 md:gap-4">
        <div className="relative shrink-0 h-44 w-44">
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

              cumulativeLength += dashLength;

              return (
                <circle
                  key={key}
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

        <ul className="space-y-1.5 text-xs text-white">
          {regionKeys.map((key) => (
            <li key={key} className="flex items-center gap-2">
              <span
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                style={{ backgroundColor: regionColors[key] }}
              />
              <span className="min-w-11 lg:min-w-13">
                {regionValues[key].toString().padStart(2, "0")}%
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
        </ul>
      </div>
    </div>
  );
};

const Map = () => {
  const { t } = useTranslation("overview");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % plantConfigs.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleHover = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  const activePlant = plantConfigs[activeIndex];

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full bg-fm-green py-16 lg:min-h-250"
    >
      <div className="relative mx-auto flex max-w-352.5 flex-col-reverse gap-8 px-4 sm:px-6 lg:flex-row">
        {/* Sidebar */}
        <div className="flex-1 max-w-130 shrink-0 text-white">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-full max-w-70 animation-slide-top-50 active"
              key={`item-${activePlant.id}`}
            >
              <div className="flex text-center items-center flex-col max-w-70 w-full rounded-lg p-2 px-4 mb-24 min-h-65 transition-all duration-500 bg-linear-180 from-fm-gray-200/30 to-fm-yellow-100/0">
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 h-full relative">
          <PopupAnimation>
            <div className="relative w-full">
              <img src={MapVector} alt="Map" className="w-full h-auto" />
              {/* Overlay markers */}
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
        className={`flex justify-center px-2 sm:px-0 lg:absolute  ${isRtl ? "lg:left-auto lg:right-6 xl:right-16" : "bottom-0 lg:bottom-22 left-16 lg:left-22"}`}
      >
        <RevenueContributionChart />
      </div>
    </div>
  );
};

export default Map;
