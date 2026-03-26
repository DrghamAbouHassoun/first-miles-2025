import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import ChairmanImage from "../../../assets/images/leadership-people/chairman.png";
import LeadershipHeader from "./LeadershipHeader";
import GroupOfSpikes from "../../../assets/vectors/group-of-spikes.svg";

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
        />
      </Container>
      <div className="pt-16">
        <Container>
          <div className="py-6">
            {/* Tagline */}
            <h2 className="text-fm-yellow font-bold text-lg md:text-2xl leading-snug mb-10 whitespace-pre-line">
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
        <Container className="">
          <div className=" max-w-4xl space-y-8 mb-6">
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
          <img src={GroupOfSpikes} alt="" className="w-full h-auto opacity-30 xl:opacity-100" />
        </div>
      </div>
      <div className="w-full bg-fm-green h-16"></div>
    </div>
  );
};

export default ChairmanTab;
