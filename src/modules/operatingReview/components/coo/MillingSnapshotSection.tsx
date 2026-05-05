import { useTranslation } from "../../../common/hooks/useTranslation";
import { useLocale } from "../../../common/hooks/useLocale";
import Container from "../../../common/components/Container/Container";
import useInView from "../../../common/hooks/useInView";
import SlideTopAnimation from "../../../common/components/animations/SlideTopAnimation";

const SNAP_RADIUS = 45;
const SNAP_CIRCUMFERENCE = 2 * Math.PI * SNAP_RADIUS;
const SNAP_CENTER = 60;
const SNAP_LABEL_R = 44;

const snapshotSegments = [
  { key: "superior", value: 16, color: "#fcb44a" },
  { key: "bakery", value: 78, color: "#162f29" },
  { key: "brown", value: 6, color: "#9a9ea0" },
];

function getLabelPosition(midAngleDeg: number) {
  const rad = (midAngleDeg - 90) * (Math.PI / 180);
  return {
    x: SNAP_CENTER + SNAP_LABEL_R * Math.cos(rad),
    y: SNAP_CENTER + SNAP_LABEL_R * Math.sin(rad),
  };
}

const MillingSnapshotSection = () => {
  const { t, tRaw } = useTranslation("operating-review");
  const { lang } = useLocale();
  const isRtl = lang === "ar";
  const { ref, inView } = useInView<SVGSVGElement>();

  const capacityBullets = tRaw<string[]>("cooContent.snapshot.capacity.bullets") ?? [];
  const dailyBullets = tRaw<string[]>("cooContent.snapshot.daily.bullets") ?? [];
  const performanceBullets = tRaw<string[]>("cooContent.snapshot.performance.bullets") ?? [];

  let cumulative = 0;
  const segmentsWithAngles = snapshotSegments.map((seg) => {
    const arcDeg = (seg.value / 100) * 360;
    const midAngle = cumulative + arcDeg / 2;
    const dashLength = (seg.value / 100) * SNAP_CIRCUMFERENCE;
    const gap = SNAP_CIRCUMFERENCE - dashLength;
    const offset = -(cumulative / 360) * SNAP_CIRCUMFERENCE;
    cumulative += arcDeg;
    return { ...seg, dashLength, gap, offset, midAngle };
  });

  return (
    <section className="bg-fm-yellow-200 py-12" dir={isRtl ? "rtl" : "ltr"}>
      <Container>
        <SlideTopAnimation>
          <h2 className="text-fm-yellow font-bold text-xl mb-8">
            {t("cooContent.snapshot.title")}
          </h2>
        </SlideTopAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {/* Capacity and network */}
          <div className="flex flex-col gap-4">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-green text-base">
                {t("cooContent.snapshot.capacity.title")}
              </h3>
            </SlideTopAnimation>
            <div className="w-full h-0.5 bg-linear-to-r from-fm-yellow to-fm-yellow/0" />
            <ul className="space-y-3 text-sm text-fm-green">
              {capacityBullets.map((bullet, i) => (
                <SlideTopAnimation key={i}>
                  <li className="flex gap-2">
                    <span className="mt-1 shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                </SlideTopAnimation>
              ))}
            </ul>
          </div>

          {/* Daily production capacities */}
          <div className="flex flex-col gap-4">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-green">
                {t("cooContent.snapshot.daily.title")}
              </h3>
            </SlideTopAnimation>
            <div className="w-full h-0.5 bg-linear-to-r from-fm-yellow to-fm-yellow/0" />
            <ul className="space-y-3 text-sm text-fm-green">
              {dailyBullets.map((bullet, i) => (
                <SlideTopAnimation key={i}>
                  <li className="flex gap-2">
                    <span className="mt-1 shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                </SlideTopAnimation>
              ))}
            </ul>
          </div>

          {/* Performance and utilization */}
          <div className="flex flex-col gap-4">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-green text-base">
                {t("cooContent.snapshot.performance.title")}
              </h3>
            </SlideTopAnimation>
            <div className="w-full h-0.5 bg-linear-to-r from-fm-yellow to-fm-yellow/0" />
            <ul className="space-y-3 text-sm text-fm-green">
              {performanceBullets.map((bullet, i) => (
                <SlideTopAnimation key={i}>
                  <li className="flex gap-2">
                    <span className="mt-1 shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                </SlideTopAnimation>
              ))}
            </ul>
          </div>

          {/* Flour product mix chart */}
          <div className="flex flex-col gap-4">
            <SlideTopAnimation>
              <h3 className="font-bold text-fm-green text-base">
                {t("cooContent.snapshot.chart.title")}
              </h3>
            </SlideTopAnimation>
            <div className="w-full h-0.5 bg-linear-to-r from-fm-yellow to-fm-yellow/0" />
            <div className="flex flex-col items-center gap-4">
              {/* Donut chart */}
              <div className="w-64 h-64 relative">
                <svg
                  ref={ref}
                  viewBox="-8 -8 136 136"
                  className="w-full h-full"
                >
                  {segmentsWithAngles.map((seg, i) => {
                    const { x, y } = getLabelPosition(seg.midAngle);
                    return (
                      <g key={seg.key}>
                        <circle
                          cx={SNAP_CENTER}
                          cy={SNAP_CENTER}
                          r={SNAP_RADIUS}
                          fill="none"
                          stroke={seg.color}
                          strokeWidth="16"
                          strokeDashoffset={seg.offset}
                          transform={`rotate(-90 ${SNAP_CENTER} ${SNAP_CENTER})`}
                          style={{
                            strokeDasharray: inView
                              ? `${seg.dashLength} ${seg.gap}`
                              : `0 ${SNAP_CIRCUMFERENCE}`,
                            transition: `stroke-dasharray 0.8s ease-out ${i * 0.15}s`,
                          }}
                        />
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize="9"
                          fontWeight="bold"
                          fill="white"
                          style={{ pointerEvents: "none" }}
                        >
                          {seg.value}%
                        </text>
                      </g>
                    );
                  })}
                  {/* Center label */}
                  <text
                    x={SNAP_CENTER}
                    y={SNAP_CENTER}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="9"
                    fontWeight="600"
                    fill="#162f29"
                  >
                    {t("cooContent.snapshot.chart.byVolume")}
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <ul className="flex flex-col gap-2 text-xs text-fm-green w-full">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 shrink-0 bg-fm-yellow" />
                  <span>{t("cooContent.snapshot.chart.superior")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 shrink-0 bg-fm-green" />
                  <span>{t("cooContent.snapshot.chart.bakery")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 shrink-0 bg-fm-gray-200" />
                  <span>{t("cooContent.snapshot.chart.brown")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MillingSnapshotSection;
