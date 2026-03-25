import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import CEOImage from "../../../assets/images/leadership-people/ceo.png";
import GroupOfSpikes from "../../../assets/vectors/group-of-spikes.svg";
import LeadershipHeader from "./LeadershipHeader";

const CEOTab = () => {
  const { lang, translations } = useContext(LangContext);
  const isRtl = lang === "ar";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (translations as any)[lang]?.leadership?.ceo;

  if (!data) return null;

  const sections: { heading: string; paragraphs: string[] }[] =
    data.sections ?? [];
  const midpoint = Math.ceil(sections.length / 2);
  const firstHalf = sections.slice(0, midpoint);
  const secondHalf = sections.slice(midpoint);

  return (
    <div className="pt-44">
      <Container>
        <LeadershipHeader
          imageUrl={CEOImage}
          imageWidth={250}
          imageScale={1.4}
          imageTranslateX={33.5}
          imageTranslateY={-44}
          title={data.name}
          subtitle={data.title}
          quotation={data.quote}
        />
      </Container>

      <div className="mt-12">
        <Container>
          <div className="py-12">
            {/* Tagline */}
            <h2 className="text-fm-yellow font-bold text-xl md:text-2xl leading-snug mb-6 whitespace-pre-line">
              {data.tagline}
            </h2>

            {/* Opening bold paragraph */}
            <p className="font-bold text-base leading-relaxed mb-6 max-w-4xl">
              {data.opening}
            </p>

            {/* First half of sections */}
            <div className="max-w-4xl space-y-6">
              {firstHalf.map(
                (
                  section: { heading: string; paragraphs: string[] },
                  i: number,
                ) => (
                  <div key={i}>
                    <h3 className="font-bold text-base mb-3">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((p: string, j: number) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed mb-3 last:mb-0"
                      >
                        {p}
                      </p>
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
        <Container>
          <div className="max-w-4xl space-y-6 mb-6">
            {secondHalf.map(
              (
                section: { heading: string; paragraphs: string[] },
                i: number,
              ) => (
                <div key={i}>
                  <h3 className="font-bold text-base mb-3">
                    {section.heading}
                  </h3>
                  {section.paragraphs.map((p: string, j: number) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed mb-3 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ),
            )}
          </div>
        </Container>

        {/* Wheat decoration */}
        <div
          className={`absolute bottom-0 ${isRtl ? "left-8" : "right-8"} pointer-events-none opacity-80`}
          style={{ width: "160px" }}
        >
          <img src={GroupOfSpikes} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-full bg-fm-green h-16"></div>
    </div>
  );
};

export default CEOTab;
