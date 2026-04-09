import Container from "../../../common/components/Container/Container";
import { useTranslation } from "../../../common/hooks/useTranslation";

// Background Images
import Pillar1Bg from "../../../../assets/images/kpis/pillar-1.jpg";
import Pillar2Bg from "../../../../assets/images/kpis/pillar-2.jpg";
import Pillar3Bg from "../../../../assets/images/kpis/pillar-3.jpg";
import Pillar4Bg from "../../../../assets/images/kpis/pillar-4.jpg";
import { useEffect, useRef, useState } from "react";
import KpiPrint from "../prints/KpiPrint";
import SlideTopAnimation from "../../../common/components/animations/SlideTopAnimation";
import GroupOfSpikes from "../../../leadership/components/GroupOfSpikes";

const PILLAR_ORDER = [0, 1, 2, 3];
const AUTO_INTERVAL = 4500;

const StrategyKPIsTab = () => {
  const { t } = useTranslation("strategic-review");
  const [activePillar, setActivePillar] = useState<number | null>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeItem =
    activePillar !== null ? activePillar : PILLAR_ORDER[stepIndex];

  const handlePillarHover = (pillarIndex: number) => {
    setActivePillar(pillarIndex);
    setIsHovering(true);
  };

  const handlePillarLeave = () => {
    setActivePillar((prev) => {
      if (prev !== null) {
        const idx = PILLAR_ORDER.indexOf(prev);
        if (idx !== -1) setStepIndex(idx);
      }
      return null;
    });
    setIsHovering(false);
  };

  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % PILLAR_ORDER.length);
    }, AUTO_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  return (
    <div>
      <div className="bg-fm-yellow-100 py-24">
        <Container>
          <SlideTopAnimation>
            <h2 className="text-fm-yellow mb-4 font-bold text-2xl max-w-120">
              {t("strategyAndKPIsContent.title")}
            </h2>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="mb-4 font-semibold">
              {t("strategyAndKPIsContent.description")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <h3 className="text-fm-yellow mb-2 font-bold text-2xl max-w-120">
              {t("strategyAndKPIsContent.subtitle")}
            </h3>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="mb-4 font-semibold">
              {t("strategyAndKPIsContent.p1")}
            </p>
          </SlideTopAnimation>
          <SlideTopAnimation>
            <p className="mb-4 font-semibold">
              {t("strategyAndKPIsContent.p2")}
            </p>
          </SlideTopAnimation>
        </Container>
      </div>
      <div className="relative w-full">
        <div className="sticky top-0 left-0 h-screen w-full -z-10 bg-fm-green" style={{ marginBottom: "-100vh" }}>
          <img
            src={Pillar1Bg}
            alt="Pillar 1"
            className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-500 ${activeItem === 0 ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={Pillar2Bg}
            alt="Pillar 2"
            className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-500 ${activeItem === 1 ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={Pillar3Bg}
            alt="Pillar 3"
            className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-500 ${activeItem === 2 ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={Pillar4Bg}
            alt="Pillar 4"
            className={`absolute top-0 left-0 h-full w-full object-cover transition-all duration-500 ${activeItem === 3 ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <Container>
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-4 z-20 pt-24">
            <div className="flex-1">
              {activeItem === 0 && <Pillar1Content />}
              {activeItem === 1 && <Pillar2Content />}
              {activeItem === 2 && <Pillar3Content />}
              {activeItem === 3 && <Pillar4Content />}
            </div>
            <div className="flex-1 ">
              <div className="w-full max-w-140 h-auto">
                <KpiPrint
                  className="w-full h-full object-contain"
                  activePillar={activeItem}
                  handlePillarHover={handlePillarHover}
                  handlePillarLeave={handlePillarLeave}
                />
              </div>
            </div>
          </div>
        </Container>
      <div className="flex justify-end absolute w-full h-auto bottom-0 right-0 z-10">
        <GroupOfSpikes />
      </div>
      </div>
    </div>
  );
};

type AchievementProps = {
  prefix?: string;
  highlight?: string;
  suffix?: string;
  large?: string;
};

const Achievement = ({
  prefix,
  highlight,
  suffix,
  large,
}: AchievementProps) => (
  <div className="py-2">
    <p className=" leading-relaxed">
      {prefix && <span>{prefix} </span>}
      {highlight && <span className=" font-bold">{highlight} </span>}
      {suffix && !large && <span>{suffix}</span>}
    </p>
    {large && (
      <p className="text-3xl mt-1">
        {large}
        {suffix && (
          <span className="text-4xl font-normal text-white ms-2">{suffix}</span>
        )}
      </p>
    )}
  </div>
);

const PillarContent = ({
  pillar,
  achievementCount,
}: {
  pillar: string;
  achievementCount: number;
}) => {
  const { t } = useTranslation("strategic-review");
  const p = `strategyAndKPIsContent.${pillar}`;
  return (
    <div className="lg:p-8 text-white">
      <SlideTopAnimation>
        <p className="pb-4 font-semibold border-b border-fm-yellow">
          {t(`${p}.description`)}
        </p>
      </SlideTopAnimation>
      <SlideTopAnimation>
        <h4 className="py-4 text-lg text-fm-yellow font-bold">
          {t(`strategyAndKPIsContent.target`)}
        </h4>
      </SlideTopAnimation>
      <SlideTopAnimation>
        <p className="pb-6 border-b border-fm-yellow">{t(`${p}.target`)}</p>
      </SlideTopAnimation>
      <SlideTopAnimation>
        <h4 className="py-4 text-lg text-fm-yellow font-bold">
          {t(`strategyAndKPIsContent.successMetricsAndKPIs`)}
        </h4>
      </SlideTopAnimation>
      <ul className="mb-6 mx-4 list-disc list-outside space-y-1">
        {[0, 1, 2, 3].map((i) => {
          const kpi = t(`${p}.kpis.${i}`);
          return kpi !== `${p}.kpis.${i}` ? (
            <li key={i} className="text-sm">
              {kpi}
            </li>
          ) : null;
        })}
      </ul>
      <div className="h-[.5px] bg-fm-yellow" />
      <h4 className="py-4 text-lg text-fm-yellow font-bold">
        {t(`strategyAndKPIsContent.achievements2025`)}
      </h4>
      <div className="grid grid-cols-1 gap-3">
        {Array.from({ length: achievementCount }, (_, i) => (
          <Achievement
            key={i}
            prefix={
              t(`${p}.achievements.${i}.prefix`) !==
              `${p}.achievements.${i}.prefix`
                ? t(`${p}.achievements.${i}.prefix`)
                : undefined
            }
            highlight={
              t(`${p}.achievements.${i}.highlight`) !==
              `${p}.achievements.${i}.highlight`
                ? t(`${p}.achievements.${i}.highlight`)
                : undefined
            }
            suffix={
              t(`${p}.achievements.${i}.suffix`) !==
              `${p}.achievements.${i}.suffix`
                ? t(`${p}.achievements.${i}.suffix`)
                : undefined
            }
            large={
              t(`${p}.achievements.${i}.large`) !==
              `${p}.achievements.${i}.large`
                ? t(`${p}.achievements.${i}.large`)
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

const Pillar1Content = () => (
  <PillarContent pillar="pillar1" achievementCount={5} />
);
const Pillar2Content = () => (
  <PillarContent pillar="pillar2" achievementCount={3} />
);
const Pillar3Content = () => (
  <PillarContent pillar="pillar3" achievementCount={2} />
);
const Pillar4Content = () => (
  <PillarContent pillar="pillar4" achievementCount={3} />
);

export default StrategyKPIsTab;
