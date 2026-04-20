import { useContext } from "react";
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
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";
import TimelineGalleryItem from "./TimelineGalleryItem";

const TIMELINE_ITEMS = [
  { key: "january", hasStat: false, image: JanuaryImage, offsetX: -15 },
  { key: "february", hasStat: false, image: undefined, offsetX: -5 },
  { key: "april", hasStat: true, image: undefined, offsetX: 8 },
  { key: "may", hasStat: false, image: undefined, offsetX: 18 },
  { key: "july", hasStat: false, image: undefined, offsetX: 10 },
  { key: "august", hasStat: false, image: undefined, offsetX: 0 },
  { key: "september", hasStat: false, image: SeptemberImage, offsetX: -10 },
  { key: "december", hasStat: false, image: undefined, offsetX: -5 },
] as const;

const YearInReview = () => {
  const { t } = useTranslation("overview");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

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

      {/* Parallax stack gallery */}
      <div className="relative w-full">
        <div
          className="sticky top-0 h-screen w-full -z-10 overflow-hidden"
          style={{ marginBottom: "-100vh" }}
        >
          <div className="relative h-full w-full">
            <img
              src={YearInReviewBg}
              alt={SITE_NAME}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        <section
          dir={isRtl ? "rtl" : "ltr"}
          className="relative py-32 overflow-hidden -mb-px"
        >
          {/* Gallery track items scroll over the fixed viewport background */}
          <div className="relative z-10 w-full">
            {TIMELINE_ITEMS.map(({ key, hasStat, image, offsetX }) => (
              <TimelineGalleryItem
                key={key}
                image={image}
                imageAlt={t(`yearInReviewContent.slider.items.${key}.month`)}
                offsetX={offsetX}
                isRtl={isRtl}
              >
                {/* Month label + divider */}
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

                {/* Card content */}
                <div className="flex flex-col max-w-150">
                  <SlideTopAnimation>
                    <h3 className="text-white font-bold text-lg leading-snug mb-4">
                      {t(`yearInReviewContent.slider.items.${key}.title`)}
                    </h3>
                  </SlideTopAnimation>
                  <SlideTopAnimation>
                    <p
                      className="text-white text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: t(
                          `yearInReviewContent.slider.items.${key}.desc`,
                        ),
                      }}
                    />
                  </SlideTopAnimation>

                  {t(`yearInReviewContent.slider.items.${key}.title2`) !==
                    `yearInReviewContent.slider.items.${key}.title2` && (
                    <SlideTopAnimation>
                      <h3 className="text-white font-bold text-lg leading-snug mt-4 mb-4">
                        {t(`yearInReviewContent.slider.items.${key}.title2`)}
                      </h3>
                    </SlideTopAnimation>
                  )}
                  {t(`yearInReviewContent.slider.items.${key}.desc2`) !==
                    `yearInReviewContent.slider.items.${key}.desc2` && (
                    <SlideTopAnimation>
                      <p
                        className="text-white text-base leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: t(
                            `yearInReviewContent.slider.items.${key}.desc2`,
                          ),
                        }}
                      />
                    </SlideTopAnimation>
                  )}

                  {hasStat && (
                    <div className="mt-4">
                      <p className="text-5xl font-bold text-white">
                        <CounterAnimation
                          end={Number(
                            t(
                              `yearInReviewContent.slider.items.${key}.stat.value`,
                            ),
                          )}
                          suffix={lang === "en" ? t(
                            `yearInReviewContent.slider.items.${key}.stat.suffix`,
                          ) : ""}
                          prefix={lang === "ar" ? t(
                            `yearInReviewContent.slider.items.${key}.stat.suffix`,
                          ) : ""}
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
                </div>
              </TimelineGalleryItem>
            ))}
          </div>

          <div className="flex justify-end w-full h-auto absolute bottom-0 right-0 z-0 pointer-events-none">
            <GroupOfSpikes />
          </div>
        </section>
      </div>
    </div>
  );
};

export default YearInReview;
