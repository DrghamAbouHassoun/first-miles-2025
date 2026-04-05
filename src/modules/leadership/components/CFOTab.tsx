import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import CFOImage from "../../../assets/images/leadership-people/cfo.png";
import LeadershipHeader from "./LeadershipHeader";
import GroupOfSpikes from "./GroupOfSpikes";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";

const CFOTab = () => {
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (translations as any)[lang]?.leadership?.cfo;

  if (!data) return null;

  const sections: { heading: string; paragraphs: string[] }[] =
    data.sections ?? [];

  return (
    <div className="pt-64">
      <Container>
        <LeadershipHeader
          imageUrl={CFOImage}
          imageScale={1.6}
          imageTranslateX={27}
          imageTranslateY={-50}
          title={data.name}
          subtitle={data.title}
          quotation={data.quote}
        />
      </Container>

      <div className="relative bg-fm-yellow-100 overflow-hidden">
        <Container>
          <div className="py-16">
            {/* Tagline */}
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-3xl md:text-4xl leading-snug mb-10 whitespace-pre-line">
                {data.tagline}
              </h2>
            </SlideTopAnimation>

            {/* Opening bold paragraph */}
            <SlideTopAnimation>
              <p className="font-bold text-base leading-relaxed mb-10 max-w-4xl">
                {data.opening}
              </p>
            </SlideTopAnimation>

            {/* Sections */}
            <div className="max-w-4xl space-y-8">
              {sections.map(
                (
                  section: { heading: string; paragraphs: string[] },
                  i: number,
                ) => (
                  <div key={i}>
                    <SlideTopAnimation>
                      <h3 className="font-bold text-base mb-3">
                        {section.heading}
                      </h3>
                    </SlideTopAnimation>
                    {section.paragraphs.map((p: string, j: number) => (
                      <SlideTopAnimation key={j}>
                        <p className="text-sm leading-relaxed mb-3 last:mb-0">
                          {p}
                        </p>
                      </SlideTopAnimation>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </Container>

        <div
          className={`absolute bottom-0 z-0 ${isRtl ? "left-8" : "right-8"} pointer-events-none opacity-80`}
        >
          <GroupOfSpikes />
        </div>
      </div>
    </div>
  );
};

export default CFOTab;
