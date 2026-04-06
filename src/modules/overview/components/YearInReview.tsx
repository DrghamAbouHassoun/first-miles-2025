import { useEffect, useRef, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YearInReviewBg from "../../../assets/images/backgrounds/year-in-review.jpg";
import { SITE_NAME } from "../../../config/constants";
import Container from "../../common/components/Container/Container";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";
import VerticalSpikeShort from "../../../assets/icons/vertical-spike-short.svg";
import JanuaryImage from "../../../assets/images/year-in-review-monthes/january.jpg";
import SeptemberImage from "../../../assets/images/year-in-review-monthes/september.png";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import SlideAsideAnimation from "../../common/components/animations/SlideAsideAnimation";
import CounterAnimation from "../../common/components/animations/CounterAnimation";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";

const TIMELINE_ITEMS = [
  { key: "january", hasStat: false, image: JanuaryImage },
  { key: "february", hasStat: false, image: undefined },
  { key: "april", hasStat: true, image: undefined },
  { key: "may", hasStat: false, image: undefined },
  { key: "july", hasStat: false, image: undefined },
  { key: "august", hasStat: false, image: undefined },
  { key: "september", hasStat: false, image: SeptemberImage },
  { key: "october", hasStat: false, image: undefined },
  { key: "november", hasStat: false, image: undefined },
  { key: "december", hasStat: false, image: undefined },
] as const;

const SECTION_HEIGHT_VH = (TIMELINE_ITEMS.length - 1) * 80 + 100;

const YearInReview = () => {
  const { t } = useTranslation("overview");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  const sectionRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    direction: isRtl ? "rtl" : "ltr",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ direction: isRtl ? "rtl" : "ltr" });
    }
  }, [lang, emblaApi]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !emblaApi) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolledIn = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolledIn / scrollable));

      const container = emblaApi.containerNode();
      const viewport = container.parentElement as HTMLElement;
      const maxTranslate = container.scrollWidth - viewport.clientWidth;
      const translateX = isRtl
        ? progress * maxTranslate
        : -progress * maxTranslate;
      container.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [emblaApi, isRtl]);

  return (
    <div>
      {/* Intro text */}
      <div className="bg-fm-yellow-100">
        <Container>
          <div className="py-16">
            <SlideTopAnimation>
              <h3 className="text-fm-yellow mb-4 font-bold text-lg max-w-90">
                {t("yearInReviewContent.yearOfProgress.title")}
              </h3>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="max-w-160 mb-4">
                {t("yearInReviewContent.yearOfProgress.p1")}
              </p>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p className="max-w-160">
                {t("yearInReviewContent.yearOfProgress.p2")}
              </p>
            </SlideTopAnimation>
          </div>
        </Container>
      </div>
      {/* Scroll-driven slider */}
      <section
        ref={sectionRef}
        style={{ height: `${SECTION_HEIGHT_VH}vh` }}
        dir={isRtl ? "rtl" : "ltr"}
        className="-mb-px"
      >
        <div className="sticky top-0 h-screen overflow-hidden -mb-px">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={YearInReviewBg}
              alt={SITE_NAME}
              className="w-full h-screen object-cover object-bottom"
            />
          </div>
          <div className="absolute inset-0" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-32 py-50">
            {/* Embla carousel */}
            <div ref={emblaRef} className="overflow-visible z-20">
              <div className="flex">
                {TIMELINE_ITEMS.map(({ key, hasStat, image }) => (
                  <div
                    key={key}
                    className="shrink-0 w-[80vw] sm:w-[44vw] md:w-[32vw] lg:w-[22vw] me-2 last:me-0 flex flex-col"
                  >
                    {/* Month label + divider — outside card */}
                    <div className="w-fit mb-4 max-w-45">
                      <SlideTopAnimation>
                        <h4 className="text-fm-yellow font-bold text-4xl mb-2 w-fit">
                          {t(`yearInReviewContent.slider.items.${key}.month`)}
                        </h4>
                      </SlideTopAnimation>
                      <div className="w-full overflow-y-hidden">
                        <SlideAsideAnimation
                          level="50"
                          side={lang === "ar" ? "left" : "right"}
                        >
                          <img
                            src={VerticalSpikeShort}
                            alt={SITE_NAME}
                            className="w-60 h-auto"
                          />
                        </SlideAsideAnimation>
                      </div>
                    </div>

                    {/* Card */}
                    <div className=" flex flex-col flex-1 max-w-70">
                      <SlideTopAnimation>
                        <h3 className="text-white font-bold text-lg leading-snug mb-4">
                          {t(`yearInReviewContent.slider.items.${key}.title`)}
                        </h3>
                      </SlideTopAnimation>
                      <SlideTopAnimation>
                        <p className="text-white text-base leading-relaxed">
                          {t(`yearInReviewContent.slider.items.${key}.desc`)}
                        </p>
                      </SlideTopAnimation>

                      {hasStat && (
                        <div className="mt-4">
                          <p className="text-5xl font-bold text-white">
                            <CounterAnimation
                              end={Number(
                                t(
                                  `yearInReviewContent.slider.items.${key}.stat.value`,
                                ),
                              )}
                              suffix={t(
                                `yearInReviewContent.slider.items.${key}.stat.suffix`,
                              )}
                            />
                          </p>
                          <SlideTopAnimation>
                            <p className="text-fm-gray-100 text-xs mt-1">
                              {t(
                                `yearInReviewContent.slider.items.${key}.statLabel`,
                              )}
                            </p>
                          </SlideTopAnimation>
                        </div>
                      )}

                      {/* Placeholder image */}
                      {image && (
                        <div className="mt-5 h-46 overflow-hidden flex items-center justify-center">
                          <PopupAnimation>
                            <img
                              src={image}
                              alt={t(
                                `yearInReviewContent.slider.items.${key}.month`,
                              )}
                              className="w-full h-full object-cover"
                            />
                          </PopupAnimation>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end w-full h-auto bottom-0 right-0 z-10 bg-fm-green">
        <GroupOfSpikes />
      </div>
    </div>
  );
};

export default YearInReview;
