import { useState, useEffect, useRef, useContext } from "react";
import Container from "../../common/components/Container/Container";
import InvestmentSpike from "../../common/components/Vectors/InvestmentSpike";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";

interface LeafFinancials {
  labels: string[];
  values: string[];
  cashBalance: string;
}

interface LeafData {
  title: string;
  bullets: string[];
  financials?: LeafFinancials;
}

// Visual rotation order: top-left → top-right → bottom-left → bottom-right
const LEAF_ORDER = [0, 2, 1, 3];
const AUTO_INTERVAL = 4500;

const InvestmentCase = () => {
  const { t } = useTranslation("overview");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";

  const [stepIndex, setStepIndex] = useState(0);
  const [hoveredLeaf, setHoveredLeaf] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leaves: LeafData[] =
    (translations as any)[lang]?.overview?.investmentCaseContent?.leaves ?? [];

  const activeItem = hoveredLeaf !== null ? hoveredLeaf : LEAF_ORDER[stepIndex];
  const currentLeaf = leaves[activeItem] ?? leaves[0];

  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % LEAF_ORDER.length);
    }, AUTO_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const handleLeafHover = (leafIndex: number) => {
    setHoveredLeaf(leafIndex);
    setIsHovering(true);
  };

  const handleLeafLeave = () => {
    setHoveredLeaf((prev) => {
      if (prev !== null) {
        const idx = LEAF_ORDER.indexOf(prev);
        if (idx !== -1) setStepIndex(idx);
      }
      return null;
    });
    setIsHovering(false);
  };

  return (
    <div className="min-h-screen">
      <div className="py-20 bg-fm-yellow-100">
        <Container>
          <div>
            <SlideTopAnimation>
              <h2 className="text-fm-yellow mb-4 font-bold text-lg max-w-160">
                {t("investmentCaseContent.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="max-w-160 mb-4">
                {t("investmentCaseContent.description")}
              </p>
            </SlideTopAnimation>
          </div>
        </Container>
      </div>

      <div className="w-full min-h-screen bg-fm-green relative z-20">
        <Container
          className={`flex items-center flex-col lg:flex-row gap-8 pt-8 pb-16 lg:min-h-200 z-30`}
        >
          {/* Spike with transparent hover overlay */}
          <div className="lg:flex-1 relative max-w-125 lg:max-w-none z-10">
            <PopupAnimation>
              <InvestmentSpike
                className="w-full h-full object-contain"
                activeItem={activeItem}
                handleLeafHover={handleLeafHover}
                handleLeafLeave={handleLeafLeave}
              />
            </PopupAnimation>
          </div>

          {/* Content panel */}
          <div className="flex-1 flex items-start py-8">
            {currentLeaf && (
              <div
                className="text-white w-full transition-all duration-500 p-4 rounded-2xl bg-linear-90 from-fm-yellow/20 border border-fm-yellow animation-slide-top-50 active"
                dir={isRtl ? "rtl" : "ltr"}
                key={currentLeaf.title}
              >
                <h3 className="text-fm-yellow font-bold text-2xl mb-6 leading-tight">
                  {currentLeaf.title}
                </h3>

                <ul className="space-y-4">
                  {currentLeaf.bullets.map((bullet, i) => (
                    <>
                      {i === 1 && currentLeaf.financials ? (
                        <>
                          <div className="mt-8">
                            <div className="flex gap-6 flex-wrap mb-4">
                              {currentLeaf.financials.labels.map((label, i) => (
                                <div key={i} className="text-center min-w-12">
                                  <p className="text-xs mb-1">{label}</p>
                                  <p className="text-fm-yellow font-bold text-lg">
                                    {currentLeaf.financials!.values[i]}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <div>
                              <p className="text-xs mb-1">
                                {isRtl ? "الرصيد النقدي" : "Cash balance"}
                              </p>
                              <p className="text-fm-yellow font-bold text-lg">
                                {currentLeaf.financials.cashBalance}
                              </p>
                            </div>
                          </div>
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed"
                          >
                            <span className="text-fm-yellow mt-0.5 shrink-0">
                              •
                            </span>
                            <span
                              dangerouslySetInnerHTML={{ __html: bullet }}
                            />
                          </li>
                        </>
                      ) : (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                        >
                          <span className="text-fm-yellow mt-0.5 shrink-0">
                            •
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
        <div className="flex justify-end w-full h-auto absolute bottom-0 right-0 -z-10">
          <GroupOfSpikes />
        </div>
      </div>
    </div>
  );
};

export default InvestmentCase;
