import { useContext } from "react";
import { LangContext } from "../../common/contexts/LangProvider";
import Container from "../../common/components/Container/Container";
import CFOImage from "../../../assets/images/leadership-people/cfo.png";
import SpikeYellow from "../../../assets/icons/spike-yellow.svg";
import LeadershipHeader from "./LeadershipHeader";

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
          imageScale={1.4}
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
            <h2 className="text-fm-yellow font-bold text-3xl md:text-4xl leading-snug mb-10 whitespace-pre-line">
              {data.tagline}
            </h2>

            {/* Opening bold paragraph */}
            <p className="font-bold text-base leading-relaxed mb-10 max-w-4xl">
              {data.opening}
            </p>

            {/* Sections */}
            <div className="max-w-4xl space-y-8">
              {sections.map(
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

        {/* Wheat decoration */}
        <div
          className={`absolute bottom-0 ${isRtl ? "left-4" : "right-4"} pointer-events-none opacity-80`}
          style={{ width: "160px" }}
        >
          <img src={SpikeYellow} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default CFOTab;
