import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import ChairmanImage from "../../../assets/images/leadership-people/new-chairman.png";
import LeadershipHeader from "./LeadershipHeader";
import SlideTopAnimation from "../../common/components/animations/SlideTopAnimation";
import GroupOfSpikes from "./GroupOfSpikes";

const ChairmanTab = () => {
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (translations as any)[lang]?.leadership?.chairman;

  if (!data) return null;

  const sections: { heading: string; paragraphs: string[] }[] =
    data.sections ?? [];
  const midpoint = Math.ceil(sections.length / 2);
  const firstHalf = sections.slice(0, midpoint);
  const secondHalf = sections.slice(midpoint);

  return (
    <div className="w-full pt-52">
      <Container>
        <LeadershipHeader
          imageUrl={ChairmanImage}
          imageScale={2.9}
          imageTranslateX={28}
          imageTranslateY={-23}
          title={data.name}
          subtitle={data.title}
          quotation={data.quote}
          isCEOorChairman
        />
      </Container>
      <div className="pt-16">
        <Container>
          <div className="py-6">
            {/* Tagline */}
            <SlideTopAnimation>
              <h2 className="text-fm-yellow font-bold text-lg md:text-2xl leading-snug mb-10 whitespace-pre-line">
                {data.tagline}
              </h2>
            </SlideTopAnimation>

            {/* Opening bold paragraph */}
            <SlideTopAnimation>
              <p className="font-bold text-base leading-relaxed mb-6 max-w-4xl">
                {data.opening}
              </p>
            </SlideTopAnimation>

            {/* First half of sections */}
            <div className="max-w-4xl space-y-4">
              {firstHalf.map(
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
                        <p
                          className="text-sm leading-relaxed last:mb-0 pb-3"
                          dangerouslySetInnerHTML={{ __html: p }}
                        ></p>
                      </SlideTopAnimation>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Second half of sections with wheat decoration */}
      <div className="relative bg-white overflow-hidden">
        <Container className=" z-10">
          <div className=" max-w-4xl space-y-3 mb-3 z-10">
            {secondHalf.map(
              (
                section: { heading: string; paragraphs: string[] },
                i: number,
              ) => (
                <div key={i}>
                  <SlideTopAnimation key={i}>
                    <h3 className="font-bold text-base mb-3">
                      {section.heading}
                    </h3>
                  </SlideTopAnimation>
                  {section.paragraphs.map((p: string, j: number) => (
                    <SlideTopAnimation key={j}>
                      <p
                        className="text-sm leading-relaxed pb-3 last:mb-0"
                        dangerouslySetInnerHTML={{ __html: p }}
                      ></p>
                    </SlideTopAnimation>
                  ))}
                </div>
              ),
            )}
          </div>
        </Container>
        <div
          className={`absolute bottom-0 z-0 ${isRtl ? "left-8" : "right-8"} pointer-events-none opacity-80`}
        >
          <GroupOfSpikes />
        </div>
      </div>
      <div className="w-full bg-fm-green h-16"></div>
    </div>
  );
};

export default ChairmanTab;
