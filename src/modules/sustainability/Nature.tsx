import Container from "../common/components/Container/Container";
import SlideTopAnimation from "../common/components/animations/SlideTopAnimation";
import FadeInAnimation from "../common/components/animations/FadeInAnimation";
import PopupAnimation from "../common/components/animations/PopupAnimation";
import { useTranslation } from "../common/hooks/useTranslation";
import RawMaterialIcon from "../../assets/icons/sustainability/nature/raw-material.svg";
import DistributionIcon from "../../assets/icons/sustainability/nature/distribution.svg";
import ProductionIcon from "../../assets/icons/sustainability/nature/production.svg";
import UsageIcon from "../../assets/icons/sustainability/nature/usage.svg";
import EndOfLifeIcon from "../../assets/icons/sustainability/nature/end-of-life.svg";

import SpikeArrow from "../../assets/vectors/coo/spike.svg";
import { useLocale } from "../common/hooks/useLocale";
import useInView from "../common/hooks/useInView";

const LIFECYCLE_ICONS = [
  RawMaterialIcon,
  DistributionIcon,
  ProductionIcon,
  UsageIcon,
  EndOfLifeIcon,
];

interface Division {
  title: string;
  desc: string;
}

const SectionHeader = ({
  title,
  maxWidth,
}: {
  title: string;
  maxWidth: string;
}) => {
  const { lang } = useLocale();
  const { ref, inView } = useInView<HTMLDivElement>({ triggerOnce: false });
  return (
    <div className="w-fit relative">
      <h3 className="text-fm-green font-bold text-lg w-fit">{title}</h3>
      <div ref={ref} className={`overflow-hidden w-full pt-1 max-w-${maxWidth} ${lang === "ar" ? "rotate-y-180" : ""}`}>
        <img
          src={SpikeArrow}
          alt="First Mills"
          className={`w-auto h-3 object-cover object-right animation-slide-right-100 ${inView && "active"}`}
        />
      </div>
    </div>
  );
};

const Nature = () => {
  const { t, tRaw } = useTranslation("sustainability-review");
  const { lang } = useLocale();

  const lifecycleDivisions =
    tRaw<Division[]>("protectingNature.wastManagement.ourProduct.divsions") ??
    [];

  return (
    <div>
      {/* Opening */}
      <section className="py-16">
        <Container>
          <div className="max-w-220">
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-2xl mb-6">
                {t("protectingNature.opening.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p
                className="font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.opening.desc"),
                }}
              />
            </SlideTopAnimation>
          </div>
        </Container>
      </section>

      {/* All content sections */}
      <section className="pb-16">
        <Container>
          {/* Climate Change and Energy Management */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={lang === "ar" ? "60" : "100"}
                title={t("protectingNature.climateChange.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="mt-4">
              <h3 className="font-bold mb-2">
                {t("protectingNature.climateChange.t1")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p1"),
                }}
              />
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p2"),
                }}
              />
              <p
                className="text-fm-yellow font-bold mb-2"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.y1"),
                }}
              />
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p3"),
                }}
              />
              <h3 className="font-bold mb-2">
                {t("protectingNature.climateChange.t2")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p4"),
                }}
              />
              <p
                className="text-fm-yellow font-bold mb-2"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.y2"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p5"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p6"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.climateChange.p7"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* Powering Efficiency — full dark-green block */}
          <FadeInAnimation className="bg-fm-green text-white rounded-lg px-8 py-8 mb-8">
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-2xl mb-4">
                {t("protectingNature.poweringEfficiency.title")}
              </h2>
            </SlideTopAnimation>
            <SlideTopAnimation>
              <p
                className="mb-8 font-semibold"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.poweringEfficiency.subtitle"),
                }}
              />
            </SlideTopAnimation>
            <div className="">
              <SlideTopAnimation className="mb-3">
                <h3 className="font-bold mb-3 text-fm-yellow">
                  {t("protectingNature.poweringEfficiency.division1.title")}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "protectingNature.poweringEfficiency.division1.desc",
                    ),
                  }}
                />
              </SlideTopAnimation>
              <SlideTopAnimation>
                <h3 className="font-bold mb-3 text-fm-yellow">
                  {t("protectingNature.poweringEfficiency.division2.title")}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t(
                      "protectingNature.poweringEfficiency.division2.desc",
                    ),
                  }}
                />
              </SlideTopAnimation>
            </div>
          </FadeInAnimation>

          {/* Sustainable Packaging */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={lang === "ar" ? "40" : "60"}
                title={t("protectingNature.sustainablePackaging.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="py-8">
              <p
                className="mb-6 font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainablePackaging.desc"),
                }}
              />
              <p
                className="font-bold mb-3"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainablePackaging.sutitle"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainablePackaging.p1"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainablePackaging.p2"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* Waste Management */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={lang === "ar" ? "70" : "120"}
                title={t("protectingNature.wastManagement.title")}
              />
            </SlideTopAnimation>
            <div className="py-8">
              <FadeInAnimation>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("protectingNature.wastManagement.desc"),
                  }}
                />
                <h3 className="font-bold text-lg mb-3">
                  {t("protectingNature.wastManagement.ourProduct.title")}
                </h3>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: t("protectingNature.wastManagement.ourProduct.desc"),
                  }}
                />
              </FadeInAnimation>

              {/* Lifecycle icon grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {lifecycleDivisions.map((div, i) => (
                  <PopupAnimation
                    key={i}
                    style={{ animationDelay: `${i * 100}ms`, transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex flex-col border-gradient rounded-lg p-5 gap-3 h-full">
                      <div className="flex gap-2">
                        <img
                          src={LIFECYCLE_ICONS[i]}
                          alt=""
                          className="w-12 h-12"
                        />
                        <h4 className="font-bold text-lg text-fm-yellow">
                          {div.title}
                        </h4>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: div.desc }}
                      />
                    </div>
                  </PopupAnimation>
                ))}
              </div>

              <FadeInAnimation>
                <h3 className="font-bold text-fm-yellow mb-3">
                  {t("protectingNature.wastManagement.minimizeWaste.title")}
                </h3>
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: t("protectingNature.wastManagement.minimizeWaste.p1"),
                  }}
                />
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: t("protectingNature.wastManagement.minimizeWaste.p2"),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("protectingNature.wastManagement.minimizeWaste.p3"),
                  }}
                />
              </FadeInAnimation>
            </div>
          </div>

          {/* Water Management */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={lang === "ar" ? "30" : "60"}
                title={t("protectingNature.waterManagement.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="py-8">
              <p
                className="mb-4 font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.waterManagement.desc"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.waterManagement.p1"),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.waterManagement.p2"),
                }}
              />
            </FadeInAnimation>
          </div>

          {/* Sustainable Agriculture */}
          <div className="mb-8 max-w-220">
            <SlideTopAnimation>
              <SectionHeader
                maxWidth={lang === "ar" ? "40" : "60"}
                title={t("protectingNature.sustainableAgriculture.title")}
              />
            </SlideTopAnimation>
            <FadeInAnimation className="py-8">
              <p
                className="mb-2 font-bold"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainableAgriculture.desc"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainableAgriculture.p1"),
                }}
              />
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainableAgriculture.p2"),
                }}
              />
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{
                  __html: t("protectingNature.sustainableAgriculture.p3"),
                }}
              />
              <a
                href={t("protectingNature.sustainableAgriculture.link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fm-yellow underline break-all"
              >
                {t("protectingNature.sustainableAgriculture.link")}
              </a>
            </FadeInAnimation>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Nature;
