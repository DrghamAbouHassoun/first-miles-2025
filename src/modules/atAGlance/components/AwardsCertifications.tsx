import { useEffect, useRef, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "../../common/hooks/useTranslation";
import { LangContext } from "../../common/contexts/LangProvider";

import GFSIImg from "../../../assets/images/awards/GFSI.png";
import BestInductionImg from "../../../assets/images/awards/best-induction-program-silver-category.png";
import BestRecruitmentImg from "../../../assets/images/awards/best-recruitment-strategy-silver-category.png";
import MeiraImg from "../../../assets/images/awards/meira.png";
import IaommEAImg from "../../../assets/images/awards/iaommea.png";
import IaomImg from "../../../assets/images/awards/iaom.png";
import SaudiAgricultureImg from "../../../assets/images/awards/saudi-agriculture.png";
import BgImage from "../../../assets/images/backgrounds/awards-bg.jpg";
import PopupAnimation from "../../common/components/animations/PopupAnimation";
import GroupOfSpikes from "../../leadership/components/GroupOfSpikes";

const AWARDS = [
  { image: GFSIImg, key: "gfsi" },
  { image: BestInductionImg, key: "bestInduction" },
  { image: BestRecruitmentImg, key: "bestRecruitment" },
  { image: MeiraImg, key: "meira" },
  { image: IaommEAImg, key: "iaommea" },
  { image: IaomImg, key: "iaom" },
  { image: SaudiAgricultureImg, key: "saudiAgriculture" },
] as const;

// Each slide transition requires ~80vh of scroll; section = transitions * 80 + 100 (viewport)
const SECTION_HEIGHT_VH = (AWARDS.length - 1) * 80 + 100;

const AwardsCertifications = () => {
  const { t } = useTranslation("at-a-glance");
  const { lang } = useContext(LangContext);
  const isRtl = lang === "ar";

  const sectionRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    direction: isRtl ? "rtl" : "ltr",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  // Reinitialize Embla when language direction changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ direction: isRtl ? "rtl" : "ltr" });
    }
  }, [lang, emblaApi]);

  // Drive Embla carousel from vertical page scroll
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
    <section
      ref={sectionRef}
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="sticky top-0 h-screen min-h-150 overflow-hidden">
        <div className="flex justify-end absolute w-full h-auto bottom-0 z-10">
          <GroupOfSpikes />
        </div>
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${BgImage})` }}
        />
        <div className="absolute inset-0 bg-linear-180 from-fm-green to-fm-green/0" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-32 py-12 ">
          {/* Section title */}
          <h2 className="text-3xl font-bold text-white mb-10">
            {t("awards.title")} {lang === "en" ? <span className="text-fm-yellow">&</span> : ""}{" "}
            <span className="text-fm-yellow">{t("awards.certifications")}</span>
          </h2>

          {/* Embla carousel */}
          <div ref={emblaRef} className="overflow-visible">
            <div className="flex">
              {AWARDS.map(({ image, key }) => (
                <PopupAnimation
                  key={key}
                  className="shrink-0 w-[80vw] sm:w-[42vw] md:w-[30vw] lg:w-[22vw] me-8 last:me-0"
                >
                  <div
                    key={key}
                    className="bg-fm-green/80 rounded-xl p-4  pe-8 last:border-0 w-full h-full "
                  >
                    <div className="h-46 flex items-center justify-center mb-5">
                      <img
                        src={image}
                        alt={t(`awards.items.${key}.title`)}
                        className="max-h-full object-contain"
                      />
                    </div>
                    <div className="px-2">
                      <h3 className="text-fm-yellow font-bold text-md leading-snug mb-3">
                        {t(`awards.items.${key}.title`)}
                      </h3>
                      <p className="text-fm-gray-100 text-sm leading-relaxed">
                        {t(`awards.items.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                </PopupAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCertifications;
