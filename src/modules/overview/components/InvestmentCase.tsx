import { useState, useEffect, useRef, useContext } from "react";
import Container from "../../common/components/Container/Container";
import InvestmentSpike from "../../common/components/Vectors/InvestmentSpike";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";

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
const AUTO_INTERVAL = 7500;

const InvestmentCase = () => {
  const { t } = useTranslation("overview");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";

  const [stepIndex, setStepIndex] = useState(0);
  const [hoveredLeaf, setHoveredLeaf] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leaves: LeafData[] =
    (translations as any)[lang]?.overview?.investmentCaseContent?.leaves ?? [];

  const activeItem = hoveredLeaf !== null ? hoveredLeaf : LEAF_ORDER[stepIndex];
  const currentLeaf = leaves[activeItem] ?? leaves[0];

  useEffect(() => {
    if (hoveredLeaf !== null) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % LEAF_ORDER.length);
    }, AUTO_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hoveredLeaf]);

  const handleLeafHover = (leafIndex: number) => {
    setHoveredLeaf(leafIndex);
  };

  const handleLeafLeave = () => {
    setHoveredLeaf(null);
  };

  return (
    <div className="min-h-screen">
      <div className="py-20 bg-fm-yellow-100">
        <Container>
          <div>
            <h2 className="text-fm-yellow mb-4 font-bold text-lg max-w-160">
              {t("investmentCaseContent.title")}
            </h2>
            <p className="max-w-160 mb-4">
              {t("investmentCaseContent.description")}
            </p>
          </div>
        </Container>
      </div>

      <div className="w-full min-h-screen bg-fm-green">
        <Container
          className={`flex items-center flex-col lg:flex-row gap-8 py-16 `}
        >
          {/* Spike with transparent hover overlay */}
          <div className="lg:flex-1 relative max-w-125 lg:max-w-none">
            <InvestmentSpike className="w-full h-full object-contain" activeItem={activeItem} />

            {/* Invisible overlay divs to detect per-leaf hover */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top-left leaf (index 0) */}
              <div
                className="absolute cursor-pointer pointer-events-auto"
                style={{ top: 0, left: 0, width: "50%", height: "56%" }}
                onMouseEnter={() => handleLeafHover(0)}
                onMouseLeave={handleLeafLeave}
              />
              {/* Bottom-left leaf (index 1) */}
              <div
                className="absolute cursor-pointer pointer-events-auto"
                style={{ bottom: 0, left: 0, width: "50%", height: "62%" }}
                onMouseEnter={() => handleLeafHover(1)}
                onMouseLeave={handleLeafLeave}
              />
              {/* Top-right leaf (index 2) */}
              <div
                className="absolute cursor-pointer pointer-events-auto"
                style={{ top: 0, right: 0, width: "50%", height: "56%" }}
                onMouseEnter={() => handleLeafHover(2)}
                onMouseLeave={handleLeafLeave}
              />
              {/* Bottom-right leaf (index 3) */}
              <div
                className="absolute cursor-pointer pointer-events-auto"
                style={{ bottom: 0, right: 0, width: "50%", height: "62%" }}
                onMouseEnter={() => handleLeafHover(3)}
                onMouseLeave={handleLeafLeave}
              />
            </div>
          </div>

          {/* Content panel */}
          <div className="flex-1 flex items-start py-8">
            {currentLeaf && (
              <div
                className="text-white w-full transition-all duration-500 p-4 rounded-2xl bg-linear-90 from-fm-yellow/20 border border-fm-yellow"
                dir={isRtl ? "rtl" : "ltr"}
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
                                  <p className="text-xs mb-1">
                                    {label}
                                  </p>
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
      </div>
    </div>
  );
};

export default InvestmentCase;
